Blockly.Blocks['tedd_header_string'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("STRING");
    this.appendValueInput("entry_name")
        .setCheck("String")
        .appendField("name");
    this.appendValueInput("string_value")
        .setCheck("String")
        .appendField("value");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};