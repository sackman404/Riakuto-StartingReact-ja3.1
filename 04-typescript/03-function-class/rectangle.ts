class Rectangle {
  readonly name = 'rectangle';
  sideA: number;
  sideB: number;

  constructor(sideA: number, sideB: number) {
    this.sideA = sideA;
    this.sideB = sideB;
  }

  getArea = (): number => this.sideA * this.sideB;
}

const rect = new Rectangle(10, 20);
console.log(rect.getArea());

class Square extends Rectangle{
  readonly name = 'Square';
  side: number;

  constructor(side: number){
    super(side, side);
  }
}
