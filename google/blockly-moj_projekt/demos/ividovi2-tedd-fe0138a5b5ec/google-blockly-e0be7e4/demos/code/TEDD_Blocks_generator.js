Blockly.JavaScript['tedd_helloworld'] = function(block) {
  var dropdown_choose = block.getFieldValue('choose');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = dropdown_choose;
  var a = 1;
  
  if(dropdown_choose == 'drazen')
	  code = '//[TAG_000] Ovo je komentar za pozdrav Draženu!\nalert("Hello Dražen!");\n';
  else if(dropdown_choose == 'pavao')
	  code = '//[TAG_001] Ovo je komentar za pozdrav Pavlu!\nalert("Hello Pavao!");\n';
  else
	  code = '//[TAG_002] Ovo je komentar za pozdrav Marku!\nalert("Hello Marko!");\n';
  return code;
};

Blockly.JavaScript['tedd_test2'] = function(block) {
  var text_inputtext = block.getFieldValue('inputText');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '//Ovo je nas novi blok\nalert("' + text_inputtext + '");\n';
  return code;
};

Blockly.JavaScript['tedd_testvariableinput'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  //var code = '...;\n';
  var code = 'Ovaj tekst je unesen od strane korisnika: ' + value_name + '!!';
  return code;
};

Blockly.JavaScript['tedd_print_input_variable'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
   
  var code = 'alert("Vrijednost varijable je:" + ' + value_name + ');';
  return code;
}; 
 
 
 
Blockly.Python['tedd_tcttemplate_blank'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = '# -*- coding: utf-8 -*-\n\
####################################################\n\
#\n\
# Created by eMHA\n\
# email: marko.halak@rt-rk.com\n\
# \n\
# Required inputs for test to be executed:\n\
#       - set of PMT output files\n\
#\n\
####################################################\n\
\n\
# Standard module import\n\
\n\
# Loading Global variables must be loaded from Utils.Globals module\n\
\n\
# Optional modules loaded from Utils folder\n\
\n\
##############\n\
# TC Header\n\
##############\n\
\n\
# Examples on how to write parameters in tc_header fields are in projectRelated.py in GUI folder\n\
\n\
tc_header = {\n\
    &#39;ptc_id&#39;    : [],\n\
    &#39;domain&#39;    : &#34;&#34;,\n\
    &#39;type&#39;      : &#34;&#34;,\n\
    &#39;build&#39;     : &#34;&#34;,\n\
    &#39;data_set&#39;  : [&#34;&#34;],\n\
    &#39;cluster&#39;   : [],\n\
    &#39;board&#39;     : [],\n\
    &#39;host&#39;      : [],\n\
    &#39;document&#39;  : &#34;&#34;,\n\
    &#39;tag&#39;       : [],\n\
    &#39;xcp_tp&#39;    : [],\n\
    &#39;download&#39;  : [],\n\
    &#39;deadline&#39;  : 10\n\
}\n\
\n\
#------------------------------------\n\
# Put Test case code here...\n\
#------------------------------------\n\
\n\
def main(results):\n\
\n\
    return results\n\
#------------------------------------';

  return code;
};



Blockly.Python['import'] = function(block) {
  var dropdown_import_value = block.getFieldValue('import_value');
  // TODO: Assemble Python into code variable.
  
  
   if(dropdown_import_value == 'import_time')
	  code = 'import time\n';
  else if(dropdown_import_value == 'import_os')
	  code = 'import os\n';
  else if(dropdown_import_value == 'import_Utils.API_EDR')
	  code = 'import_Utils.API_EDR as EDR\n';
  else if(dropdown_import_value == 'import__main__')
	  code = 'import __main__ as main\n';
  
  
  return code;
  
};


Blockly.Python['import_custom'] = function(block) {
  var text_import_value = block.getFieldValue('import_value');
  // TODO: Assemble Python into code variable.
  var code = 'import ' + text_import_value + '\n';
  return code;
};


//KLEMA 15 s if-om i logovima
Blockly.Python['klema_15'] = function(block) {
  var checkbox_positive_check = block.getFieldValue('positive_check') == 'TRUE';
  var value_errorid = Blockly.Python.valueToCode(block, 'errorID', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  gStep = gStep + 1;
  
  var code_ = checkbox_positive_check ? '' : 'not ';
  
  var code = 'if ' + code_ + 'Utils.utilities.Util_Functions(0).auto_func_KL15_reset(te_obj, 0):\n\
\tte_obj.log.info(\'STEP ' + gStep + ': KL15 performed sucessfully\', result = False)\n\
\treturn ' + value_errorid + '\n\
te_obj.log.info(\'STEP ' + gStep + ': KL15 performed sucessfully\', result = True)\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

//' + value_step + ' = ' + value_step + ' + 1
Blockly.Python['start_board'] = function(block) {
  var value_state = Blockly.Python.valueToCode(block, 'state', Blockly.Python.ORDER_ATOMIC);
  var value_errorid = Blockly.Python.valueToCode(block, 'errorID', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  //gStep = gStep + 1;
  var code = 'if(te_obj.CANoe != None and not te_obj.CANoe.isMeasurementRunning()):\n\
\tte_obj.CANoe.StartMeasurement(' + value_state + ')\n\
te_obj.CANoe.WaitUntilState(' + value_state + ')\n';


//te_obj.log.info(\'STEP  ' + gStep + ': Opis stepa za startanje ploce\', result = True)\n';

  return code;
};

Blockly.Python['check_dtc_status'] = function(block) {
  var checkbox_positive_check = block.getFieldValue('positive_check') == 'TRUE';
  var value_dtc = Blockly.Python.valueToCode(block, 'dtc', Blockly.Python.ORDER_ATOMIC);
  var value_errorid = Blockly.Python.valueToCode(block, 'errorID', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  gStep = gStep + 1;
  
  var code_ = checkbox_positive_check ? '' : 'not ';
  
  var code = 'if ' + code_ + 'Utils.API_Diagnostic.GetDTCStatus(' + value_dtc + ')\n\
\tte_obj.log.info(\'STEP  ' + gStep + ': DTC \' + ' + value_dtc + ' + \' is active\', result = False)\n\
\treturn ' + value_errorid + '\n\
te_obj.log.info(\'STEP  ' + gStep + ': DTC \' + ' + value_dtc + ' + \' is active\', result = True)\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

Blockly.Python['add_condition'] = function(block) {
  var value_host = Blockly.Python.valueToCode(block, 'host', Blockly.Python.ORDER_ATOMIC);
  var value_condition = Blockly.Python.valueToCode(block, 'condition', Blockly.Python.ORDER_ATOMIC);
  var value_errorid = Blockly.Python.valueToCode(block, 'errorID', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'te_obj.monitor.add_condition(' + value_host + ', ' + value_condition + ')\n';
  return code;
};

Blockly.Python['check_condition'] = function(block) {
  var checkbox_positive_check = block.getFieldValue('positive_check') == 'TRUE';
  var value_host = Blockly.Python.valueToCode(block, 'host', Blockly.Python.ORDER_ATOMIC);
  var value_condition = Blockly.Python.valueToCode(block, 'condition', Blockly.Python.ORDER_ATOMIC);
  var value_timeout = Blockly.Python.valueToCode(block, 'timeout', Blockly.Python.ORDER_ATOMIC);
  var value_errorid = Blockly.Python.valueToCode(block, 'errorID', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  gStep = gStep + 1;
  
  var code_ = checkbox_positive_check ? '' : 'not ';
  
  var code = 'if ' + code_ + 'te_obj.monitor.check_condition(' + value_host + ', ' + value_condition + ', ' + value_timeout + ')\n\
\tte_obj.log.info(\'STEP ' + gStep + ': String \' + ' + value_condition + ' + \' detected on \' + ' + value_host + ' + \' UART\', result = False)\n\
\treturn ' + value_errorid + '\n\
te_obj.log.info(\'STEP ' + gStep + ': String \' + ' + value_condition + ' + \' detected on \' + ' + value_host + ' + \' UART\', result = True)\n';
  return code;
};

Blockly.Python['klema_30'] = function(block) {
  var value_step = Blockly.Python.valueToCode(block, 'step', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'te_obj.CANoe.DisableKL30()\n\
time.sleep(2)\n\
te_obj.CANoe.EnableKL30()\n';
  return code;
};

//Stanje ploce s if-ovima i logovima
Blockly.Python['check_board_status'] = function(block) {
  var checkbox_positive_check = block.getFieldValue('positive_check') == 'TRUE';
  var value_state = Blockly.Python.valueToCode(block, 'state', Blockly.Python.ORDER_ATOMIC);
  var value_errorid = Blockly.Python.valueToCode(block, 'errorID', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  gStep = gStep + 1;
  
  var code_ = checkbox_positive_check ? '' : 'not ';
  
  var code = 'if ' + code_ + 'te_obj.CANoe.WaitUntilState(' + value_state + '):\n\
\tte_obj.log.info(\'STEP ' + gStep + ': zFAS reaches ' + value_state + ' (NormalOperation) state.\', result = False)\n\
\treturn ' + value_errorid + '\n\
te_obj.log.info(\'STEP ' + gStep + ': zFAS reaches ' + value_state + ' (NormalOperation) state.\', result = True)\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};





//MUTATORS - TEST
Blockly.Python['tedd_header'] = function(block) {
  // Create a list with any number of elements of any type.
  var elements = new Array(block.itemCount_);
  for (var i = 0; i < block.itemCount_; i++) {
    elements[i] = Blockly.Python.valueToCode(block, 'ADD' + i,
        Blockly.Python.ORDER_NONE) || 'None';
  }
  var code = '##############\n\
# TC Header\n\
##############\n\
tc_header = {\n' + elements.join(',\n') + '}';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//HEADER INT
Blockly.Python['tedd_header_int'] = function(block) {
  var value_entry_name = Blockly.Python.valueToCode(block, 'entry_name', Blockly.Python.ORDER_ATOMIC);
  var value_int_value = Blockly.Python.valueToCode(block, 'int_value', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = ''+ value_entry_name + '\t:\t' + value_int_value + ',\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['tedd_header_string'] = function(block) {
  var value_entry_name = Blockly.Python.valueToCode(block, 'entry_name', Blockly.Python.ORDER_ATOMIC);
  var value_string_value = Blockly.Python.valueToCode(block, 'string_value', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = ''+ value_entry_name + '\t:\t' + value_string_value + ',\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['tedd_header_list'] = function(block) {
  var value_entry_name = Blockly.Python.valueToCode(block, 'entry_name', Blockly.Python.ORDER_ATOMIC);
  var value_list_value = Blockly.Python.valueToCode(block, 'list_value', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable. 
  
  var code = ''+ value_entry_name + '\t:\t' + value_list_value + ',\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['tedd_header_new_item'] = function(block) {
  var value_entry_name = Blockly.Python.valueToCode(block, 'entry_name', Blockly.Python.ORDER_ATOMIC);
  var value_entry_value = Blockly.Python.valueToCode(block, 'entry_value', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_entry_name + '\t:\t' + value_entry_value;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['flashdataset'] = function(block) {
  var checkbox_positive_check = block.getFieldValue('positive_check') == 'TRUE';
  var value_ds_name = Blockly.Python.valueToCode(block, 'DS_name', Blockly.Python.ORDER_ATOMIC);
  var value_errorid = Blockly.Python.valueToCode(block, 'errorID', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  //var code = '...\n';
  
  var code_ = checkbox_positive_check ? '' : 'not ';
  
  var code = 'if ' + code_ + 'te_obj.flash_data_set(tc_header[\'build\'], data_set=' + value_ds_name +'):\n\
\tte_obj.log.info("INFO: Flashing DB_ALL dataset failed", result=False)\n\
\treturn ' + value_errorid + '\n\
te_obj.log.info("INFO: Flashing DB_ALL dataset passed", result=True)\n';

  return code;
};

Blockly.Python['checkerrorehm'] = function(block) {
  var checkbox_positive_check = block.getFieldValue('positive_check') == 'TRUE';
  var value_error_id = Blockly.Python.valueToCode(block, 'error_id', Blockly.Python.ORDER_ATOMIC);
  var value_errorid = Blockly.Python.valueToCode(block, 'errorID', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  
  var code_ = checkbox_positive_check ? '' : 'not ';
  
  var code = 'if ' + code_ + 'te_obj.CANoe.IsErrorSavedEHM(' + value_error_id +'):\n\
\tte_obj.log.info(\'INFO: Error ' + value_error_id +' detected in EHM Messwerte\', result = False)\n\
\treturn ' + value_errorid + '\n\
te_obj.log.info(\'INFO: Error ' + value_error_id + ' not detected in EHM Messwerte\', result = True)\n';
  
  return code;
};

Blockly.Python['triggererror'] = function(block) {
  var checkbox_positive_check = block.getFieldValue('positive_check') == 'TRUE';
  var value_host = Blockly.Python.valueToCode(block, 'host', Blockly.Python.ORDER_ATOMIC);
  var value_error_id = Blockly.Python.valueToCode(block, 'error_id', Blockly.Python.ORDER_ATOMIC);
  var value_errorid = Blockly.Python.valueToCode(block, 'errorID', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  
  var code_ = checkbox_positive_check ? '' : 'not ';
  
  var code = 'if ' + code_ + 'RTE.Trigger(' + value_host + ', ' + value_error_id +'):\n\
\tte_obj.log.info(\'INFO: Trigger of error ' + value_errorid + ' on ' + value_host + ' not sucessfull\', result = False)\n\
\treturn ' + value_errorid + '\n\
te_obj.log.info(\'INFO: Trigger of error ' + value_errorid + ' on ' + value_host + ' sucessfull\', result = True)\n';

  return code;
};