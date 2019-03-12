//test_block

Blockly.Blocks['test_block2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Test blok 2");
    this.setColour(0);
 this.setTooltip("ovo je samo test block da vidim kako će biti iztestiran ovaj blok jer je every day mans on the blockkk#2%$#");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['test_block2'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};