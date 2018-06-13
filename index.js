var customer = 1;

function takeANumber(katzDeliLine) {
  katzDeliLine.push(customer);
  return `You are number ${customer++}.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var customer = katzDeliLine.shift();
    return `Currently serving ${customer}.`;
  }
  else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine) {
  var message = "";
  
  // If line is empty
  if (katzDeliLine.length === 0) {
    message = "The line is currently empty.";
  } else {
    var line = "";
    for (var i=0; i < katzDeliLine.length; i++) {
      line = line + `${i+1}. ${katzDeliLine[i]}`;
      
      // Add commas to all except last customer
      if (i < katzDeliLine.length-1) {
        line = line + ", ";
      }
    }
    message = `The line is currently: ${line}`;
  }
  
  return message;
}