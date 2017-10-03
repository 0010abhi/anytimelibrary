import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {
  currentPanel;
  constructor() { }

  ngOnInit() {
  }

  setCurrentPanel(panelName: string): void{
    this.currentPanel = panelName;
  }
}
