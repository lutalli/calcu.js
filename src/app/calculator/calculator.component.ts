import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  private selectedOper: string = "";
  private operMapping:  { [key: string]: (x: any, y: any) => any } = {
    "plus":     function(x: any, y: any) { return x + y },
    "minus":    function(x: any, y: any) { return x - y },
    "multiply": function(x: any, y: any) { return x * y },
    "divide":   function(x: any, y: any) { return x / y }
  }

  @ViewChild("inputBoxA") inputBoxA?: ElementRef;
  @ViewChild("inputBoxB") inputBoxB?: ElementRef;
  @ViewChild("outputDisplayContent") outputDisplayContent?: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  private getResultDisplay(): string {
    let op = this.operMapping[this.selectedOper];
    if (op == undefined) {
        return "ERROR";
    }
    let inputA: string = "";
    let inputB: string = "";
    if (this.inputBoxA && this.inputBoxB) {
      inputA = this.inputBoxA.nativeElement.value;
      inputB = this.inputBoxB.nativeElement.value;
    }
    if (/^ *$/.test(inputA) || /^ *$/.test(inputB)) {
        return "ERROR";
    }
    let result: any = op(Number(inputA), Number(inputB));
    return isNaN(result) ? "ERROR" : "" + result;
  }

  public changeSelectedOper(oper: string): void {
    this.selectedOper = oper;
  }

  public calc(): void {
    if (this.outputDisplayContent) {
      this.outputDisplayContent.nativeElement.innerText = this.getResultDisplay();
    }
  }
}
