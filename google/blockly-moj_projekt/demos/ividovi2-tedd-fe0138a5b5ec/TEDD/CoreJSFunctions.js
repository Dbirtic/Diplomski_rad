/*function toXml() {
	alert("To XML function");
  var output = document.getElementById('content_xml');
  //var xml = Blockly.Xml.workspaceToDom(content_blocks);
  //output.value = Blockly.Xml.domToPrettyText(xml);
  
  //alert(xml);
  //output.focus();
  //output.select();
  
  download(output.value, 'test.xml', 'xml');
  //saveTextAsFile(output.value, 'test.xml', 'xml');
  
  //writeTextFile('testNew.xml', output.value)
}*/

/*tempSaveCode(codeArg)
{
	alert('My JS file');
	codeTemp = codeArg;
	alert(codeTemp);
}*/

/*function toJS() {
  alert("To JS file");
  //var workspace;
  //var textXML = document.getElementById('content_xml').value;
  //var xml = Blockly.Xml.textToDom(textXML);
  //Blockly.Xml.domToWorkspace(xml, workspace);
  //var code = Blockly.Generator.workspaceToCode(workspace);
  
  //var output = document.getElementById('content_javascript');
  
  download(codeTemp, 'test.js', 'js');
}*/

function fromXml() {
  var input = document.getElementById('content_xml');
  var xml = Blockly.Xml.textToDom(input.value);
  Blockly.Xml.domToWorkspace(xml, workspace);
}

function testFunction(textValue) {
	//alert('Poziv');
	document.getElementById('content_xml').value = textValue;
}



// Function to download data to a file
function download(data, filename, type) {
	alert('download()');
    var file = new Blob([data], {type: type});
	//alert(file);
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0); 
    }
}


function saveTextAsFile(data, fileNameToSaveAs, type)
{
	alert('saveTextAsFile()');
    //var textToWrite = document.getElementById("inputTextToSave").value;
	//textToWrite = 'Test';
    var textFileAsBlob = new Blob([data], {type: type});
    //var fileNameToSaveAs = document.getElementById("inputFileNameToSaveAs").value;
	//var fileNameToSaveAs = 'testSave.xml';
      var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    if (window.webkitURL != null)
    {
        // Chrome allows the link to be clicked
        // without actually adding it to the DOM.
        downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    }
    else
    {
        // Firefox requires the link to be added to the DOM
        // before it can be clicked.
        downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
        downloadLink.onclick = destroyClickedElement;
        downloadLink.style.display = "none";
        document.body.appendChild(downloadLink);
    }

    downloadLink.click();
}


function saveXML(){
  if ('Blob' in window) {
    var fileName = prompt('Please enter file name to save', 'Untitled.xml');
    if (fileName) {
      var textToWrite = document.getElementById('content_xml').value.replace(/\n/g, '\r\n');
      var textFileAsBlob = new Blob([textToWrite], { type: 'xml' });

      if ('msSaveOrOpenBlob' in navigator) {
        navigator.msSaveOrOpenBlob(textFileAsBlob, fileName);
      } else {
        var downloadLink = document.createElement('a');
        downloadLink.download = fileName;
        downloadLink.innerHTML = 'Download File';
        if ('webkitURL' in window) {
          // Chrome allows the link to be clicked without actually adding it to the DOM.
          downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
        } else {
          // Firefox requires the link to be added to the DOM before it can be clicked.
          downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
          downloadLink.onclick = destroyClickedElement;
          downloadLink.style.display = 'none';
          document.body.appendChild(downloadLink);
        }

        downloadLink.click();
      }
    }
  } else {
    alert('Your browser does not support the HTML5 Blob.');
  }
};

function destroyClickedElement(event) {
  document.body.removeChild(event.target);
}
  

