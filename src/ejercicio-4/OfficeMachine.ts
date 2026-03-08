export interface MachinePrint {
  print(doc: string): void;
}

export interface MachineScan {
  scan(doc: string): string;
}

export interface MachineFax {
  fax(doc: string): void;
}

export class BasicPrinter implements MachinePrint {
  print(doc: string): void {
    console.log("Printing: ", doc);
  }
}

export function sendToPrint(m: MachinePrint, doc: string): void {
  m.print(doc);
}