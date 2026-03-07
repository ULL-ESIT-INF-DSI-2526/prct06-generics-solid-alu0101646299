import { describe, test, expect } from 'vitest';
import { Circle, Rectangle, Triangle, AreaCalculator } from '../src/ejercicio-3/AreaCalculator';

describe('AreaCalculator', () => {
  const calculator = new AreaCalculator();
  const circulo = new Circle(5);
  const rectangulo = new Rectangle(10, 2);
  const triangulo = new Triangle(10, 5);

  test('area(circulo)', () => {
    expect(calculator.area(circulo)).toBeCloseTo(78.5398);
  });

  test('area(rectangulo)', () => {
    expect(calculator.area(rectangulo)).toBe(20);
  });

  test('area(triangulo)', () => {
    expect(calculator.area(triangulo)).toBe(25);
  });
});