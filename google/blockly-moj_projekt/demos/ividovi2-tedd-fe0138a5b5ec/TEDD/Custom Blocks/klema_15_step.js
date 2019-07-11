Blockly.Blocks['klema_15'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Klema 15");
    this.appendValueInput("step")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("STEP");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};