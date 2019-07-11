Blockly.JavaScript['tedd_helloworld'] = function(block) {
  var dropdown_choose = block.getFieldValue('choose');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  //var code = dropdown_choose;
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