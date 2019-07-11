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

//Print value of input variable
Blockly.JavaScript['tedd_print_input_variable'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';= '...;\n';
  //var code = 'Vrijednost input varijable je: ' + value_name + '!!';
  return code;
};