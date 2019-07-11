Blockly.JavaScript['tedd_testvariableinput'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  //var code = '...;\n';
  var code = 'Ovaj tekst je unesen od strane korisnika: ' + value_name + '!!';
  return code;
};