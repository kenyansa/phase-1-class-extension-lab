// Your code here
//Polygon: "before each" hook for "has a Polygon class"; has a Triangle class; checks for valid triangle; 

class Polygon {
  constructor(sides) {
    this.sides = sides;
  }

  get countSides() {
    return this.sides.length;
  }

  get perimeter() {
    return this.sides.reduce(function (acc, current) {
      return acc + current;
    });
  }
}
// checks for valid triangle; has a perimeter getter inherited from Polygon:
class Triangle extends Polygon {
  get isValid() {
    if (this.sides[0] + this.sides[1] < this.sides[2]) {
      return false;
    } else if (this.sides[2] + this.sides[1] < this.sides[0]) {
      return false;
    } else if (this.sides[2] + this.sides[0] < this.sides[1]) {
      return false;
    } else {
      return true;
    }
  }
}

//Square:has a Square class; Square has a perimeter getter inherited from Polygon; checks for valid square:
class Square extends Polygon {
  get isValid() {
    if (
      ((this.sides[0] === this.sides[1]) === this.sides[2]) ===
      this.sides[3]
    ) {
      return true;
    } else {
      return false;
    }
  }
 //Square: calculates the area:
  get area() {
    return this.side[0] * this.side[0];
  }
}
