export interface Shape {
  calculateArea(): number;
}

export class Circle implements Shape {
  constructor(public radius: number) {}

  calculateArea(): number { return Math.PI * this.radius * this.radius; }
}

export class Rectangle implements Shape {
  constructor(public width: number, public height: number) {}

  calculateArea(): number { return this.width * this.height; }
}

export class Triangle implements Shape {
  constructor(public base: number, public height: number) {}

  calculateArea(): number { return (this.base * this.height) / 2; }
}

export class AreaCalculator {
  area(shape: Shape): number {
    return shape.calculateArea();
  }
}