var katzDeli = [];

function takeANumber(katzDeliLine,name) {
  let positionInLine = katzDeliLine.length+1;
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${positionInLine} in line.`;
}

function nowServing(line) {
  if(line.length===0) {
    return `There is nobody waiting to be served!`;
  } else if(line.length>1) {
    let servingPerson = line.shift();
    return `Currently serving ${servingPerson}.`;
  }
}

function currentLine(line) {
  let peopleInLine = `The line is currently: `;
  if(line.length===0) {
    return `The line is currently empty.`;
  } else if(line.length>1) {
    for(let i=0; i<line.length; i++) {
      if(i!==line.length-1) {
        peopleInLine+=`${i+1}. ${line[i]}, `;
      } else if(i===line.length-1) {
        peopleInLine+=`${i+1}. ${line[i]}`;
      }
    }
    return peopleInLine;
  }
}