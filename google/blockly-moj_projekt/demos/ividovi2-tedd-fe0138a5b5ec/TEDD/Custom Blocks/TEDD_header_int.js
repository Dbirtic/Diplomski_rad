Blockly.Blocks['tedd_header_int'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("INT");
    this.appendValueInput("entry_name")
        .setCheck("String")
        .appendField("name");
    this.appendValueInput("int_value")
        .setCheck("Number")
        .appendField("value");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};