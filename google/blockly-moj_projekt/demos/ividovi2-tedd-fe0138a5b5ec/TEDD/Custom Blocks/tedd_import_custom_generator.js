Blockly.Python['import_custom'] = function(block) {
  var text_import_value = block.getFieldValue('import_value');
  // TODO: Assemble Python into code variable.
  var code = 'import ' + text_import_value;
  return code;
};