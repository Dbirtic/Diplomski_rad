Blockly.Blocks['tedd_header_list'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("LIST");
    this.appendValueInput("entry_name")
        .setCheck("String")
        .appendField("name");
    this.appendValueInput("list_value")
        .setCheck(null)
        .appendField("value");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};