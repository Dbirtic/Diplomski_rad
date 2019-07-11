Blockly.Blocks['tedd_helloworld'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("TEDD Hello World")
        .appendField(new Blockly.FieldDropdown([["Dražen","drazen"], ["Pavao","pavao"], ["Marko","marko"]]), "choose");
    this.setColour(135);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};