Blockly.Blocks['import'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["import time","import_time"], ["import os","import_os"], ["import Utils.API_EDR as EDR","import_Utils.API_EDR"], ["import __main__ as main","import__main__"]]), "import_value");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};