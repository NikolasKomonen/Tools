function converToJavaMultilineString(stringText, lineSeparator) {
  var stringBuilder = "\"";
  
  var i;
  for(i = 0; i < stringText.length; i++) {
    var c = stringText[i];
    if(c == "\r" || c == "\n") { //replace old line separator with new one
      if(c == "\r") {
        i++; //skip the '\n' after
      }
      stringBuilder+=lineSeparator;
      stringBuilder+="\" +\n\""; // Won't work on windows
    }
    else if(c == "\"" || c == "'") {
      stringBuilder+="\\" + c;
    }
    else {
      stringBuilder+=c; 
    }
    
  }
  stringBuilder+="\";";
  
  element = document.getElementById('myOutputText');
  element.innerHTML = stringBuilder;

}