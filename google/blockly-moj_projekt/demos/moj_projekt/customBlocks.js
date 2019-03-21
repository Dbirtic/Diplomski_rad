//customBlocks

Blockly.Blocks['test_block'] = {
    init: function() {
      this.appendValueInput("Test")
          .setCheck(null)
          .appendField("test_block")
          .appendField(new Blockly.FieldNumber(10), "NAME");
      this.appendStatementInput("NAME")
          .setCheck(null);
      this.setColour(60);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};

Blockly.JavaScript['test_block'] = function(block) {
    var number_name = block.getFieldValue('NAME');
    var value_test = Blockly.JavaScript.valueToCode(block, 'Test', Blockly.JavaScript.ORDER_ATOMIC);
    var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
    // TODO: Assemble JavaScript into code variable.

    return code = '//prints out "hey ho! lets go!"\nfor (var i = 0; i < 5; i++) {\nalert("Hey ho! Lets go!");\n}\nif (i == 5) {alert("It is over.");}\n';
};

Blockly.Python['test_block'] = function(block) {
    var number_name = block.getFieldValue('NAME');
    var value_test = Blockly.JavaScript.valueToCode(block, 'Test', Blockly.JavaScript.ORDER_ATOMIC);
    var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
    // TODO: Assemble JavaScript into code variable.

    return code = '#prints out "hey ho! lets go!"\nfor i in range (0, 5): \n\tprint "Hey ho! Lets go!"\n\nif (i == 4): \n\tprint "It is over."\n';
};

Blockly.Blocks['test_block2'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Test blok 2");
      this.setOutput(true, null);
      this.setColour(0);
   this.setTooltip("ovo je samo test block da vidim kako će biti iztestiran ovaj blok jer je every day mans on the blockkk#2%$#");
   this.setHelpUrl("");
    }
};
  
Blockly.JavaScript['test_block2'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'function myFunction2() { alert("I am an alert box!"); }\n';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

  Blockly.Python['test_block2'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'def myFunction2():  print "I am an alert box!"\n';
    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['input_block'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Funkcija s unosom");
      this.appendValueInput("broj")
          .setCheck("Number")
          .appendField("zeljeni broj");
      this.appendValueInput("i")
          .setCheck("Number")
          .appendField("var i");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

Blockly.JavaScript['input_block'] = function(block) {
    var value_broj = Blockly.JavaScript.valueToCode(block, 'broj', Blockly.JavaScript.ORDER_ATOMIC);
    var value_i = Blockly.JavaScript.valueToCode(block, 'i', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'var i = '+value_i+';\nfor(i; i < '+value_broj +';i++ ){window.alert("This is for loop. This is your number: ' + value_broj + ' and this is your second number: '+value_i+' .");}\n';
    return code;
};

Blockly.Python['input_block'] = function(block) {
    var value_broj = Blockly.Python.valueToCode(block, 'broj', Blockly.Python.ORDER_ATOMIC);
    var value_i = Blockly.JavaScript.valueToCode(block, 'i', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'for '+value_i+' in range of(0,'+value_broj+'):\n print "This is ",'+ value_i +'" iteration of your chosen ' + value_broj + ' number of iterations."\n';

    return code;
};




// novi blok kojeg cu namjeniti pokusavanju (samo) parsiranja python koda
Blockly.Blocks['citac_pythona'] = {
    init: function() {
      this.appendDummyInput()
          .setAlign(Blockly.ALIGN_CENTRE)
          .appendField("Citam");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(195);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};

//generator stub tog bloka
Blockly.JavaScript['citac_pythona'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'window.alert("Hello mi lord");';

    var funk;
    var text2;

    const input = document.querySelector('input[type="file"]');
    input.addEventListener('change', function(e){
        const reader = new FileReader();

        // dok citac cita
        reader.onload = function(event) {
            var text = reader.result;
            var allLines = text.split("\n|,"); // odvoji razmake, tabove i nove linije
            // Reading line by line
            allLines.forEach((line) => {
                //console.log(line);
                code = line + '\n';
                console.log(code);
                if(line === "def ispis():" || line === "x = 10" || line === "print")
                    funk = line + "\n";
            });
            text2 = allLines;
        };

        reader.onerror = (event) => {
            alert(event.target.error.name);
        };

        reader.readAsText(input.files[0]);
        //return code;
    }, false);
    console.log(text2);
    console.log(code);
    window.alert("nani the f...?");
    window.alert(text2);
    window.alert(funk);
    //console.log("funk: \n");
    //console.log(funk);
    //code = this;

    return code;
};

Blockly.Python['citac_pythona'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'print "Hello mi lord"';

    var funk;
    var text2;

    const input = document.querySelector('input[type="file"]');
    input.addEventListener('change', function(e){
        const reader = new FileReader();
        //reader.readAsText(input.files[0]);

        // dok citac cita
        reader.onload = function(event) {
            var text = reader.result;
            var allLines = text.split("\n|,"); // odvoji razmake, tabove i nove linije
            // Reading line by line
            allLines.forEach((line) => {
                //console.log(line);
                code = line + '\n';
                //console.log(code);
                if(line === "def ispis():" || line === "x = 10" || line === "print")
                    funk = line + "\n";
            });
        }.bind(this);

        reader.onerror = (event) => {
            alert(event.target.error.name);
        };

        reader.readAsText(input.files[0]);
        //return code;
    }, false);

    //console.log(code);
    console.log("funk: \n");
    console.log(funk);
    
    return code;
};