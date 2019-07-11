Blockly.Python['import'] = function(block) {
  var dropdown_import_value = block.getFieldValue('import_value');
  // TODO: Assemble Python into code variable.
  
  
   if(dropdown_import_value == 'import_time')
	  code = 'import time';
  else if(dropdown_import_value == 'import_os')
	  code = 'import os';
  else if(dropdown_import_value == 'import_Utils.API_EDR')
	  code = 'import_Utils.API_EDR as EDR';
  else if(dropdown_import_value == 'import__main__')
	  ode = 'import __main__ as main';
  
  
  return code;
  
};