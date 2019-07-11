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

Blockly.Blocks['tedd_test2'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("Ovo je blok koji ispisuje tekst:")
        .appendField(new Blockly.FieldTextInput("Test"), "inputText");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

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