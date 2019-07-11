Blockly.Blocks['startanje_ploce'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Startanje ploče");
    this.appendValueInput("state")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("state");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};