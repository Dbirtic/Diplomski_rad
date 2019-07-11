Blockly.Blocks['stanje_ploce'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Stanje ploče");
    this.appendValueInput("state")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("state");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};