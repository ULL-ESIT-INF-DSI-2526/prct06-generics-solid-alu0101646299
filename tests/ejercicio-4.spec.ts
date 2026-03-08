import { describe, test, expect, vi, afterEach } from 'vitest';
import { BasicPrinter, sendToPrint } from '../src/ejercicio-4/OfficeMachine';

describe('BasicPrinter', () => {
  const myPrinter: BasicPrinter = new BasicPrinter;
  const myDoc: string = "This is my doc";

  afterEach(() => {
    vi.restoreAllMocks();
  });

  test('sendToPrint(myPrinter, myDoc);', () => {
    const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {});
    sendToPrint(myPrinter, myDoc);
    expect(consoleSpy).toHaveBeenCalledWith("Printing: ", myDoc);
  });
});