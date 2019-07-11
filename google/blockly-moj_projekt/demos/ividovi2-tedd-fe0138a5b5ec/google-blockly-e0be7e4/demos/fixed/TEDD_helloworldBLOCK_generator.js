Blockly.JavaScript['tedd_helloworld'] = function(block) {
  var dropdown_choose = block.getFieldValue('choose');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  if(dropdown_choose == drazen)
	  var code = 'Hello Dražen!;\n';
  else if(dropdown_choose == pavao)
	  var code = 'Hello Pavao!;\n';
  else
	  var code = 'Hello Marko!;\n';
  return code;
};