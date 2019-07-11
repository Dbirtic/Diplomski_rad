Blockly.Blocks['dodavanje_conditiona'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Dodavanje conditiona");
    this.appendValueInput("host")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("host");
    this.appendValueInput("condition")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("condition");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};