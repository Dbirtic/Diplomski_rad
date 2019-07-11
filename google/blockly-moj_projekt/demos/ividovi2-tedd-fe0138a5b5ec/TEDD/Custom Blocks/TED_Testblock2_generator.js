Blockly.JavaScript['tedd_test2'] = function(block) {
  var text_inputtext = block.getFieldValue('inputText');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '//Ovo je nas novi blok\nalert("' + text_inputtext + '");\n';
  return code;
};