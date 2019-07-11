#------------------------------------

# -*- coding: utf-8 -*-
####################################################
#
# Created by eIMI
# email: Ivan.Mijic@rt-rk.com
#
####################################################

# Standard module import
import time, os

# Optional modules loaded from Utils folder
import Utils.API_EDR as EDR

import __main__ as main

####################
# TC Header 
####################
tc_header = {
    'ptc_id':  [1455105],
    'domain': "Life Cycle Service",
    'build': "System",
    'data_set': "PLATFORM",
    'cluster': ['CL01', 'CL02','CL02p5'],
    'board': ['A', 'B', 'C', 'D'],
    'host': ['SSH', 'SRH', 'APH'],
    'document': "ITS",
    'deadline'  : 5000
}

def CheckTestPointValue(CANoe, variable, value, host):
    counter = 0
    while ((CANoe.GetValueOfSysvar(variable, CANoe.XCPns[host]) != value) and (counter < 20)):
        time.sleep(0.1)
        counter += 1

    if counter == 20:
        return False
    else:
        return True

def ALM_Test_case_1118758():
    
    aph_xcp_data1 = ['CtApLight.PpEcuComRequestsLight.DeRequestsECURun']
    conditions = ['LCSM: Knockout timeout expired' ,'LCSM: Shutdown OS done!']

    te_obj.monitor.add_condition("APH", conditions)

    if not te_obj.CANoe.EnableXCPdata(aph_xcp_data1, 'APH'):
        te_obj.log.info( 'STEP 1.1: Enable APH XCP testpoints.', result= False)

    if(te_obj.CANoe != None and not te_obj.CANoe.isMeasurementRunning()):
        te_obj.CANoe.StartMeasurement(4)
    if te_obj.CANoe.WaitUntilState(4) != True:
        te_obj.log.info( 'STEP 1.2: zFAS reaches NormalOperation state.', result= False)
        return False    

    if not te_obj.CANoe.SetTestPoint(aph_xcp_data1[0].replace('.', '_'), 1, 'APH'):
        te_obj.log.info( 'STEP 1.3: TP CtApLight.PpEcuComRequestsLight.DeRequestsECURun unsucessfully set to 1', result= False)
        if te_obj.monitor.runtime_violation:
            return 1
        return None
    te_obj.CANoe.DisableFR()
    time.sleep(10)
    
    if not te_obj.monitor.check_condition("APH", conditions[0], 1200):
        te_obj.log.info( 'STEP 1.4: LCSM: Knockout timeout expired', result= False)
        return False
    if not te_obj.monitor.check_condition("APH", conditions[1], 20):
        te_obj.log.info( 'STEP 1.5: Board did not go into shutdown', result= False)
        return False

    return True
    
def Execution():
    
    aph_xcp_data2 = ['CtCdLCSM.PpPdLCSMRead.DeEcuKnockout_Critical.DeData.Knockout_Ctr', 'CtApLight.PpEcuComRequestsLight.DeRequestsECURun']

    if not te_obj.CANoe.EnableXCPdata(aph_xcp_data2, 'APH'):
        te_obj.log.info( 'STEP 1: Enable APH XCP testpoints.', result= False)

    if not te_obj.CANoe.isMeasurementRunning():
        te_obj.CANoe.StartMeasurement()

    if te_obj.CANoe.WaitUntilState(4) != True:
        te_obj.log.info( 'STEP 1: KL_30 is on.', result= False)
        return False
    te_obj.log.info( 'STEP 1: KL_30 is on.', result= True)

    if not te_obj.CANoe.SetTestPoint(aph_xcp_data2[0].replace('.', '_'), 0, 'APH'):
        te_obj.log.info( 'STEP 2: CtCdLCSM.PpPdLCSMRead.DeEcuKnockout_Critical.DeData.Knockout_Ctr initial value set to 0', result= False)
        if te_obj.monitor.runtime_violation:
            return 1
        return None

    if not te_obj.CANoe.SetTestPoint(aph_xcp_data2[1].replace('.', '_'), 0, 'APH'):
        te_obj.log.info( 'STEP 2: CtApLight.PpEcuComRequestsLight.DeRequestsECURun initial value set to 0', result= False)
        if te_obj.monitor.runtime_violation:
            return 1
        return None

    if not CheckTestPointValue(te_obj.CANoe, aph_xcp_data2[0].replace('.', '_'), 0, 'APH'):
        te_obj.log.info( 'STEP 2: CtCdLCSM.PpPdLCSMRead.DeEcuKnockout_Critical.DeData.Knockout_Ctr is set to 0', result= False)
        return False

    if not CheckTestPointValue(te_obj.CANoe, aph_xcp_data2[1].replace('.', '_'), 0, 'APH'):
        te_obj.log.info( 'STEP 2: CtApLight.PpEcuComRequestsLight.DeRequestsECURun is set to 0', result= False)
        return False
    te_obj.log.info( 'STEP 2: Initial values are 0', result= True)

    if not te_obj.CANoe.SetTestPoint(aph_xcp_data2[0].replace('.', '_'), 249, 'APH'):
        te_obj.log.info( 'STEP 3: TP CtCdLCSM.PpPdLCSMRead.DeEcuKnockout_Critical.DeData.Knockout_Ctr set to 249', result= False)
        if te_obj.monitor.runtime_violation:
            return 1
        return None
    te_obj.log.info( 'STEP 3: TP CtCdLCSM.PpPdLCSMRead.DeEcuKnockout_Critical.DeData.Knockout_Ctr set to 249', result= True)
    
    if not ALM_Test_case_1118758():
        te_obj.log.info( 'STEP 4: Execute Test case ALM_Test_case_1118758.', result= False)
        return False

    te_obj.log.info( 'STEP 4: Execute Test case ALM_Test_case_1118758.', result= True)

    if not CheckTestPointValue(te_obj.CANoe, aph_xcp_data2[0].replace('.', '_'), 250, 'APH'):
        te_obj.log.info( 'STEP 5: TP CtCdLCSM.PpPdLCSMRead.DeEcuKnockout_Critical.DeData.Knockout_Ctr is incremented by 1 and has value 250', result= False)
        return False
    te_obj.log.info( 'STEP 5: TP CtCdLCSM.PpPdLCSMRead.DeEcuKnockout_Critical.DeData.Knockout_Ctr is incremented by 1 and has value 250', result= True)

    if not ALM_Test_case_1118758():
        te_obj.log.info( 'STEP 6: Repeat STEP 4.', result= False)
        return False
    te_obj.log.info( 'STEP 6: Repeat STEP 4.', result= True)

    if not CheckTestPointValue(te_obj.CANoe, aph_xcp_data2[0].replace('.', '_'), 250, 'APH'):
        te_obj.log.info( 'STEP 7: CtCdLCSM_PpPdLCSMRead_DeEcuKnockout_Critical_DeData_Knockout_Ctr has value 250 and is frozen at that value', result= False)
        return False
    te_obj.log.info( 'STEP 7: CtCdLCSM_PpPdLCSMRead_DeEcuKnockout_Critical_DeData_Knockout_Ctr has value 250 and is frozen at that value', result= True)

    return True

def main(results):
    verdict = Execution()
    results[tc_header['ptc_id'][0]]['result'] = verdict
    results[tc_header['ptc_id'][0]]['err_id'] = 0
    return results