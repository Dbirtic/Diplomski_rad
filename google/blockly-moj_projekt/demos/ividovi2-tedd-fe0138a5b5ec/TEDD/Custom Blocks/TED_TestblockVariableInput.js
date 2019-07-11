Blockly.Blocks['tedd_testvariableinput'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Novi blok za ispis");
    this.appendValueInput("NAME")
        .setCheck("String");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};