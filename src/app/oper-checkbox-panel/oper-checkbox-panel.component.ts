import { Component, OnInit, QueryList, ViewChildren, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-oper-checkbox-panel',
  templateUrl: './oper-checkbox-panel.component.html',
  styleUrls: ['./oper-checkbox-panel.component.css']
})
export class OperCheckboxPanelComponent implements OnInit {
  
  @ViewChildren("operCheckbox") operCheckboxes?: QueryList<ElementRef>;
  @Output() operChangeEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  public selectOperCheckbox(oper: string): void {
    this.operChangeEvent.emit(oper);
    this.operCheckboxes?.forEach((child: ElementRef<any>, index: number, array: ElementRef<any>[]) => {
      let el = child.nativeElement;
      if (el.id == `${oper}-checkbox`) {
        el.classList.add("selected-oper-checkbox");
      } else if (el.classList.contains("selected-oper-checkbox")) {
        el.classList.remove("selected-oper-checkbox");
      }
    })
  }
}
