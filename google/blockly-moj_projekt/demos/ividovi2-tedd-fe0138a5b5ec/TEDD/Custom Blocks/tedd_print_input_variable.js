Blockly.Blocks['tedd_print_input_variable'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("Print the value of the input variable");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};