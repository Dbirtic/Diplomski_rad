//block definition
//light switch block - turn color on or off

Blockly.Blocks['lightswitch'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Turn")
          .appendField(new Blockly.FieldDropdown([["red","R"]]), "lightcolor")
          .appendField(new Blockly.FieldDropdown([["on","ON"], ["off","OFF"]]), "switch");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(330);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

//generator stub

Blockly.JavaScript['lightswitch'] = function(block) {
    var dropdown_lightcolor = block.getFieldValue('lightcolor');
    var dropdown_switch = block.getFieldValue('switch');
    var code;
    if (dropdown_switch==="on"){
        code = "document.getElementById('circle').style.backgroundColor='#b00';"
    }
    if(dropdown_switch==="off"){
        code = "document.getElementById('circle').style.backgroundColor='#fff';"
    }
    return code;
};