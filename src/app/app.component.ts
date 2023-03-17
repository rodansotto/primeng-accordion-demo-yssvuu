import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

interface Tab {
  name: string;
  index: number;
  disabled: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [MessageService],
})
export class AppComponent {
  activeState: boolean[] = [true, false, false];

  tabs: Tab[];
  selectedTab: number;
  doneTabs = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ];

  aa_q1_options: any[];
  aa_q1_value: string;
  aa_q1no1_values: any[] = [];
  aa_q1yes1_values: any[] = [];
  aa_q1yes2_value: string;
  aa_q1yes3_options: any[];
  aa_q1yes3_value: string;

  no_yes_options: any[];

  constructor(private messageService: MessageService) {
    this.tabs = [
      { name: 'Tracking', index: 0, disabled: false },
      { name: 'Electrical Defects', index: 1, disabled: false },
      { name: 'Details', index: 2, disabled: false },
      { name: 'Process Info', index: 3, disabled: false },
      { name: 'Tools', index: 4, disabled: false },
      { name: 'Abnormality Analysis', index: 5, disabled: false },
      { name: 'Root Causes', index: 6, disabled: false },
      { name: 'Containment', index: 7, disabled: false },
      { name: 'Permanent Countermeasures', index: 8, disabled: false },
      { name: 'Re-Open Comments', index: 9, disabled: false },
      { name: 'Close Comments', index: 10, disabled: false },
    ];
    this.selectedTab = 5;

    this.aa_q1_options = [{label: 'No (Work related problem)', value: 'no'}, {label: 'Yes (Troubleshooting related problem)', value: 'yes'}];

    this.no_yes_options = [{label: 'No', value: 'no'}, {label: 'Yes', value:'yes'}];

    this.aa_q1yes3_options = [
        {label: 'Troubleshooting error by T/M', value: '1'}, 
        {label: 'Troubleshooting error by troubleshooter', value:'2'},
        {label: 'Miscommunication between T/M and troubleshooter', value:'3'}
    ];
  }

  onTabClose(event) {
    this.messageService.add({
      severity: 'info',
      summary: 'Tab Closed',
      detail: 'Index: ' + event.index,
    });
  }

  onTabOpen(event) {
    this.messageService.add({
      severity: 'info',
      summary: 'Tab Expanded',
      detail: 'Index: ' + event.index,
    });
  }

  toggle(index: number) {
    this.activeState[index] = !this.activeState[index];
  }

  previousTab(): void {
    this.selectedTab--;
  }

  nextTab(): void {
    this.doneTabs[this.selectedTab] = true;
    if (this.selectedTab < 10) {
        this.selectedTab++;
        this.tabs[this.selectedTab].disabled = false;
    }
  }
}
