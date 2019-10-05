const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array){
  let obj = array.find(function(obj){ return obj["result"] === "W"})
  if (obj === undefined){
    return undefined;
  }else{
    return obj["year"];
  }
}
 

