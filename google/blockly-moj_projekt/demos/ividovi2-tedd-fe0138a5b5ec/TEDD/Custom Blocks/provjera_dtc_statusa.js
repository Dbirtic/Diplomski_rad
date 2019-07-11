Blockly.Blocks['provjera_dtc_statusa'] = {
  init: function() {
	this.appendDummyInput()
        .appendField("Provjera DTC statusa");
    this.appendValueInput("dtc")
        .setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)
        .appendField("DTC");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};