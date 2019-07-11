Blockly.Blocks['provjera_conditiona'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Provjera conditiona");
    this.appendValueInput("host")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("host");
    this.appendValueInput("condition")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("condition");
    this.appendValueInput("timeout")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("timeout");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};