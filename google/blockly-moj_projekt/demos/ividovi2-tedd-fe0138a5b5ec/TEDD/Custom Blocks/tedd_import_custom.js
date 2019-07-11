Blockly.Blocks['import_custom'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("import")
        .appendField(new Blockly.FieldTextInput("custom_import"), "import_value");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};