Blockly.JavaScript['tedd_print_input_variable'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
   
  var code = 'alert("Vrijednost varijable je:" + ' + value_name + ');';
  return code;
};