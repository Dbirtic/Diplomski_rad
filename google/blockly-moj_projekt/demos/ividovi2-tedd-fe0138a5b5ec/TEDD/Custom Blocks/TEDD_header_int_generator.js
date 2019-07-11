Blockly.Python['tedd_header_int'] = function(block) {
  var value_entry_name = Blockly.Python.valueToCode(block, 'entry_name', Blockly.Python.ORDER_ATOMIC);
  var value_int_value = Blockly.Python.valueToCode(block, 'int_value', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};