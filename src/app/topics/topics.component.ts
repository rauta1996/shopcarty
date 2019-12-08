import { Component, OnInit } from '@angular/core';
import { summaryForJitFileName } from '@angular/compiler/src/aot/util';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.scss']
})
export class TopicsComponent implements OnInit {
  isFollow = false;

  topicsArray = [
    { id: '1', name: 'javascript', follow: false },
    { id: '2', name: 'java', follow: false },
    { id: '3', name: 'webdev', follow: false },
    { id: '4', name: 'python', follow: false },
    { id: '5', name: 'discuss', follow: false },
    { id: '6', name: 'career', follow: false },
    { id: '7', name: 'tutorial', follow: false },
    { id: '8', name: 'css', follow: false },
    { id: '9', name: 'node', follow: false },
    { id: '10', name: 'express', follow: false },
    { id: '11', name: 'angular', follow: false },
    { id: '12', name: 'react', follow: false },
  ]

  constructor() { }

  ngOnInit() {
  }

  onTopicsClicks(id) {
    for (let i = 0; i < this.topicsArray.length; i++) {
      if (id === this.topicsArray[i].id) {
        this.topicsArray[i].follow = !this.topicsArray[i].follow
        console.log(this.topicsArray[i])
      }
    }
  }
}


