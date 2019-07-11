# -*- coding: utf-8 -*-
####################################################
#
# Created by eNNI
# email: nemanja.nikic@rt-rk.com
# 
# Required inputs for test to be executed:
#       - serial connection (UART)
#
####################################################

# Standard module import
import os, sys, threading, time

# Optional modules loaded from Utils folder
import Utils.API_PMT as PMT

####################
# TC Header 
####################
tc_header = {
    'ptc_id':  [1806238],
    'domain': "OS",
    'build': "System",
    'cluster': ['CL-01','CL-02','CL-02p5'],
    'board': ['C','D'],
    'host': ['SRH'],
    'document': "STS",
}
#------------------------------------
# Test case code here...
#------------------------------------
    
def Measurements():
    sched80_file = os.path.abspath(os.path.join(    te_obj.globals['project_path'],
                                                '0200_Platform',
                                                'branches',
                                                te_obj.globals['branch'],
                                                '0230_Tools',
                                                'internal',
                                                'scheduling_toolset',
                                                'task_scheduling_tool',
                                                'out_SRH',
                                                'Sched_Parameters_80ms.xml'
                                                ))

    sched80_file = open(sched80_file,'r').readlines()
    counter = 0
    flag = False
    result_flag = True
    
    for line in sched80_file:
        if "<NAME>Slot" in line:
            if counter > 1:
                result_flag = False
                te_obj.log.info( 'Step 2: Every time slot does not have only one TASK_STATE_FOREGROUND state', result= False)
                break
            flag = True
            counter = 0   
        if flag and "<STATE>TASK_STATE_FOREGROUND</STATE>" in line:
            counter +=1
    if result_flag == True:
        te_obj.log.info( 'Step 2: Every time slot has only one TASK_STATE_FOREGROUND state', result= True)
    return (result_flag)     


def main(results):
    return_result = Measurements()
    if type(return_result) is list:
        results[tc_header['ptc_id'][0]]['err_id'] = return_result[0]
        results[tc_header['ptc_id'][0]]['result'] = return_result[1]
    else:
        results[tc_header['ptc_id'][0]]['err_id'] = 0
        results[tc_header['ptc_id'][0]]['result'] = return_result
    return results
#------------------------------------
