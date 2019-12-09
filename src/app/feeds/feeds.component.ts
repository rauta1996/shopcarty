import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.scss']
})
export class FeedsComponent implements OnInit {
  @Output() messageToEmit = new EventEmitter<boolean>();
  feedsArray = [
    { isSaved: false, id: 1, heading: 'My 2019 in DEV - Check your stats!', name: 'bibhu', hastags: ['java', 'python', 'ruby', 'express'], likecount: 1 },
    { isSaved: false, id: 2, heading: 'Your year in DEV - Check your stats!', name: 'sujit', hastags: ['java', 'python', 'ruby', 'express'], likecount: 1 },
    { isSaved: false, id: 3, heading: '📢 Practical Data Science : How to find YOUR Best 🔥 Customers ✅', name: 'manoj', hastags: ['java', 'python', 'ruby', 'express'], likecount: 1 },
    { isSaved: false, id: 4, heading: 'A Simple Terminal Website with CSS and Typewriter.js', name: 'bibhu', hastags: ['java', 'python', 'ruby', 'express'], likecount: 1 },
    { isSaved: false, id: 5, heading: 'The Factory Pattern - Design Patterns meet the Frontend', name: 'bibhu', hastags: ['java', 'python', 'ruby', 'express'], likecount: 1 },
    { isSaved: false, id: 6, heading: 'Intro to RSpec in Rails (part 2): Improving Tests with `let` and `context`', name: 'bibhu', hastags: ['java', 'python', 'ruby', 'express'], likecount: 1 },
    { isSaved: false, id: 7, heading: 'The Magic Freelance Rate Formula', name: 'bibhu', hastags: ['java', 'python', 'ruby', 'express'], likecount: 1 },
    { isSaved: false, id: 8, heading: 'VS Code Shortcuts for code newbies [mac/windows][GIF]', name: 'bibhu', hastags: ['java', 'python', 'ruby', 'express'], likecount: 1 },
    { isSaved: false, id: 9, heading: 'Percentages in CSS: youre using them wrong', name: 'bibhu', hastags: ['java', 'python', 'ruby', 'express'], likecount: 1 },
  ]

  constructor() { }

  ngOnInit() {
  }

  like(id) {
    console.log(id)
    for (let i = 0; i < this.feedsArray.length; i++) {
      if (id === this.feedsArray[i].id) {
        this.feedsArray[i].likecount = this.feedsArray[i].likecount + 1;
      }

    }
  }
  navigate() {
    this.messageToEmit.emit(false)
  }

}
