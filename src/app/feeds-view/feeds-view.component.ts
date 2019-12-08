import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-feeds-view',
  templateUrl: './feeds-view.component.html',
  styleUrls: ['./feeds-view.component.scss']
})
export class FeedsViewComponent implements OnInit {
  @Output() FeedsView = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }
  navigate() {
    this.FeedsView.emit(true);
  }
}
