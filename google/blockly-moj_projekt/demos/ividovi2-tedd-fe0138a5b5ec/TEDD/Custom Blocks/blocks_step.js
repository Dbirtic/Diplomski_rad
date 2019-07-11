Blockly.Blocks['klema_15'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Klema 15");
    this.appendValueInput("step")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("STEP");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['startanje_ploce'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Startanje ploče");
    this.appendValueInput("state")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("state");
    this.appendValueInput("step")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("STEP");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['provjera_dtc_statusa'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Provjera DTC statusa");
    this.appendValueInput("dtc")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("DTC");
    this.appendValueInput("step")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("STEP");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['dodavanje_conditiona'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Dodavanje conditiona");
    this.appendValueInput("host")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("host");
    this.appendValueInput("condition")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("condition");
    this.appendValueInput("step")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("STEP");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['provjera_conditiona'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Provjera conditiona");
    this.appendValueInput("host")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("host");
    this.appendValueInput("condition")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("condition");
    this.appendValueInput("timeout")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("timeout");
    this.appendValueInput("step")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("STEP");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['klema_30'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Klema 30");
    this.appendValueInput("step")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("STEP");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['stanje_ploce'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Stanje ploče");
    this.appendValueInput("state")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("state");
    this.appendValueInput("step")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("STEP");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};