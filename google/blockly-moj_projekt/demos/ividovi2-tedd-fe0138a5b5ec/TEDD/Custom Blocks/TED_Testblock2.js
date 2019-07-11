Blockly.Blocks['tedd_test2'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("Ovo je blok koji ispisuje tekst:")
        .appendField(new Blockly.FieldTextInput("Test"), "inputText");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};