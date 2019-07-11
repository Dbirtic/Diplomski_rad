# -*- coding: utf-8 -*-
####################################################
#
# Created by eNOS
# email: nikola.ostojic@rt-rk.com
#
# Required inputs for test to be executed:
#       - USB Switch
#
####################################################

# Standard module import
from time import sleep
# Loading Global variables must be loaded from Utils.Globals module
# Optional modules loaded from Utils folder
from Utils.zFAS_flash_extended import FlashSW_Test

##############
# TC Header
##############
tc_header = {
    'ptc_id'    : [1135218],
    'domain'    : "SW Update",
    'type'      : "A",
    'build'     : "System",
    'data_set'  : "DB_ALL",
    'cluster'   : ['CL-01', 'CL-02','CL-02p5'],
    'board'     : ["B","C","D"],
    'host'      : ["APH"],
    'document'  : "ITS",
    'tag'       : []
}
    
path = 'D:\zFAS-Jenkins\workspace\zFAS-PFT.RegressionTest\PIE-X288-I2.5.2-P33.0\PDX_Flash_B'
        
def PreservingCodingData():
    
    flash = FlashSW_Test(te_obj)
    
    finalResult = False

    if (te_obj.CANoe.SendDiagRequestWriteInitialIdentification()):
        sleep(2)
        if (te_obj.CANoe.SendDiagRequestGetSecurityAccess()):
            sleep(2)
            if (te_obj.CANoe.SendDiagRequestDiagnosticSession("extended")):
                sleep(2)
                if (te_obj.CANoe.SendDiagRequestWriteCodingData()):
                    te_obj.log.info('STEP 1: All values are successfully written', result=True)
                    sleep(2)
                    firstResult = te_obj.CANoe.SendDiagRequestReadCodingData()
                    if firstResult:
                        te_obj.log.info('STEP 2: Read values are the same as written', result=True)
    
                        (res, status, _) = flash.DoFlashing(path, 'PIE')
                        if res:
                            te_obj.log.info('STEP 3: System is successfully flashed', result=True)
                            finalResult = te_obj.CANoe.SendDiagRequestReadCodingData()
                            if finalResult:
                                te_obj.log.info('STEP 4,5: Data are the same', result=True)
                                return True
                            else:
                                te_obj.log.info('STEP 4,5', result=False)
                                return False
                                
                        else:
                            te_obj.log.info('STEP 3: Flashing fails', result=False)
                            return False
                        
                    else:
                        te_obj.log.info('STEP 2', result=False)
                        return False

    te_obj.log.info('STEP 1: Writting fails', result=False)
    return False

def main(results):
    return_result = PreservingCodingData()
    results[tc_header['ptc_id'][0]]['result'] = return_result
    if return_result:
        results[tc_header['ptc_id'][0]]['err_id'] = 0
    else:
        results[tc_header['ptc_id'][0]]['err_id'] = 0
    
    return results