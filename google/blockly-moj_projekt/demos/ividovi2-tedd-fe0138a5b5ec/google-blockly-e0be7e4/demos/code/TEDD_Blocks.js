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

Blockly.Blocks['tedd_tcttemplate_blank'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("TCT Template");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['import'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["import time","import_time"], ["import os","import_os"], ["import Utils.API_EDR as EDR","import_Utils.API_EDR"], ["import __main__ as main","import__main__"]]), "import_value");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['import_custom'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("import")
        .appendField(new Blockly.FieldTextInput("custom_import"), "import_value");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['klema_15'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox("TRUE"), "positive_check")
        .appendField("Klema 15");
    this.appendValueInput("errorID")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("errorID");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['start_board'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Start board");
    this.appendValueInput("state")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("state");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['check_dtc_status'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox("TRUE"), "positive_check")
        .appendField("Check DTC status");
    this.appendValueInput("dtc")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("DTC");
    this.appendValueInput("errorID")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("errorID");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['add_condition'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Add condition");
    this.appendValueInput("host")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("host");
    this.appendValueInput("condition")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("condition");
    this.appendValueInput("errorID")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("errorID");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['check_condition'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox("TRUE"), "positive_check")
        .appendField("Check condition");
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
    this.appendValueInput("errorID")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("errorID");
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
    this.appendValueInput("errorID")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("errorID");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['check_board_status'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox("TRUE"), "positive_check")
        .appendField("Check board status");
    this.appendValueInput("state")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("state");
    this.appendValueInput("errorID")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("errorID");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};



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



//MUTATORS - Test

Blockly.Blocks['tedd_header'] = {
  /**
   * Block for creating a list with any number of elements of any type.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.LISTS_CREATE_WITH_HELPURL);
    this.setColour(Blockly.Blocks.lists.HUE);
    this.itemCount_ = 3;
    this.updateShape_();
    //this.setOutput(true, 'Array');
	this.setPreviousStatement(true, null);
	this.setNextStatement(true, null);
    this.setMutator(new Blockly.Mutator(['tedd_header_item']));
    this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_TOOLTIP);
  },
  /**
   * Create XML to represent list inputs.
   * @return {!Element} XML storage element.
   * @this Blockly.Block
   */
  mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('items', this.itemCount_);
    return container;
  },
  /**
   * Parse XML to restore the list inputs.
   * @param {!Element} xmlElement XML storage element.
   * @this Blockly.Block
   */
  domToMutation: function(xmlElement) {
    this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10);
    this.updateShape_();
  },
  /**
   * Populate the mutator's dialog with this block's components.
   * @param {!Blockly.Workspace} workspace Mutator's workspace.
   * @return {!Blockly.Block} Root block in mutator.
   * @this Blockly.Block
   */
  decompose: function(workspace) {
    var containerBlock = workspace.newBlock('tedd_header_container');
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;
    for (var i = 0; i < this.itemCount_; i++) {
      var itemBlock = workspace.newBlock('tedd_header_item');
      itemBlock.initSvg();
      connection.connect(itemBlock.previousConnection);
      connection = itemBlock.nextConnection;
    }
    return containerBlock;
  },
  /**
   * Reconfigure this block based on the mutator dialog's components.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this Blockly.Block
   */
  compose: function(containerBlock) {
    var itemBlock = containerBlock.getInputTargetBlock('STACK');
    // Count number of inputs.
    var connections = [];
    while (itemBlock) {
      connections.push(itemBlock.valueConnection_);
      itemBlock = itemBlock.nextConnection &&
          itemBlock.nextConnection.targetBlock();
    }
    // Disconnect any children that don't belong.
    for (var i = 0; i < this.itemCount_; i++) {
      var connection = this.getInput('ADD' + i).connection.targetConnection;
      if (connection && connections.indexOf(connection) == -1) {
        connection.disconnect();
      }
    }
    this.itemCount_ = connections.length;
    this.updateShape_();
    // Reconnect any child blocks.
    for (var i = 0; i < this.itemCount_; i++) {
      Blockly.Mutator.reconnect(connections[i], this, 'ADD' + i);
    }
  },
  /**
   * Store pointers to any connected child blocks.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this Blockly.Block
   */
  saveConnections: function(containerBlock) {
    var itemBlock = containerBlock.getInputTargetBlock('STACK');
    var i = 0;
    while (itemBlock) {
      var input = this.getInput('ADD' + i);
      itemBlock.valueConnection_ = input && input.connection.targetConnection;
      i++;
      itemBlock = itemBlock.nextConnection &&
          itemBlock.nextConnection.targetBlock();
    }
  },
  /**
   * Modify this block to have the correct number of inputs.
   * @private
   * @this Blockly.Block
   */
  updateShape_: function() {
    if (this.itemCount_ && this.getInput('EMPTY')) {
      this.removeInput('EMPTY');
    } else if (!this.itemCount_ && !this.getInput('EMPTY')) {
      this.appendDummyInput('EMPTY')
          .appendField("Header");
        
    }
    // Add new inputs.
    for (var i = 0; i < this.itemCount_; i++) {
      if (!this.getInput('ADD' + i)) {
        var input = this.appendValueInput('ADD' + i);
        if (i == 0) {
          input.appendField("Header");
        }
      }
    }
    // Remove deleted inputs.
    while (this.getInput('ADD' + i)) {
      this.removeInput('ADD' + i);
      i++;
    }
  }
};

Blockly.Blocks['tedd_header_container'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Header");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.appendStatementInput('STACK');
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['tedd_header_item'] = {
  /**
   * Mutator block for adding items.
   * @this Blockly.Block
   */
  init: function() {
    this.setColour(Blockly.Blocks.lists.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.LISTS_CREATE_WITH_ITEM_TITLE);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_ITEM_TOOLTIP);
    this.contextMenu = false;
  }
};


Blockly.Blocks['tedd_header_new_item'] = {
  init: function() {
    this.appendValueInput("entry_name")
        .setCheck("String")
        .appendField("name");
    this.appendValueInput("entry_value")
        .setCheck(null)
        .appendField("value");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['flashdataset'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox("TRUE"), "positive_check")
        .appendField("Flash Dataset");
    this.appendValueInput("DS_name")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("DS_name");
    this.appendValueInput("errorID")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("errorID");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['checkerrorehm'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox("TRUE"), "positive_check")
        .appendField("Check Error EHM");
    this.appendValueInput("error_id")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("error_id");
    this.appendValueInput("errorID")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("errorID");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['triggererror'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox("TRUE"), "positive_check")
        .appendField("Trigger Error");
    this.appendValueInput("host")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("host");
    this.appendValueInput("error_id")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("error_id");
    this.appendValueInput("errorID")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("errorID");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};