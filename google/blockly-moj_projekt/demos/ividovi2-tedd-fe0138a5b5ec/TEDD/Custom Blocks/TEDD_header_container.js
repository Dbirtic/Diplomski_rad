Blockly.Blocks['tedd_header_container'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Header");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};