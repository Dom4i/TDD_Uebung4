// StringCalculator.js
function StringCalculator() {}
StringCalculator.prototype.add = function(map) {
  console.log(map); //debugging

  var x = 0;
  var y = 0;
  var foundShip = false;

  console.log(map.length); //debugging

  if(map.length === 0) {
    return "Spaceship lost forever.";
  }
  else {
    for (var i = map.length; i >= 0 ; i--) { //durchläuft die gesamte map von ganz hinten bis vorne.
      if(map[i] === "X") {
        foundShip = true; //y Koordinate des Schiffs gefunden (Spalte gefunden)
        console.log(x, y); //debugging
      }
      if(foundShip === false) {
        if (map[i] === "\n") {
          y++;
        }
      }
      else {
        if (map[i] === ".") {
          x++; 
          console.log(x, y); //debugging
        }
        else if (map[i] === "\n") { //x Koordinate des Schiffs gefunden (Zeile gefunden)
          return [x,y]; 
        }
      }
    }
    if (foundShip === true) 
      return [x,y];
    else
      return "Spaceship lost forever.";
  }
};