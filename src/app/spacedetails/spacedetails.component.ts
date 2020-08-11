import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'spacedetails',
  templateUrl: './spacedetails.component.html',
  styleUrls: ['./spacedetails.component.scss']
})
export class SpacedetailsComponent implements OnInit {

  // @ViewChild('main-comment') m1:ElementRef;
  
  constructor(private elementRef:ElementRef) {}


  ngOnInit() {
  }

  showCommentBox() {

    //show comment box
    document.getElementById('main-comment').style.display = "block";
    document.getElementById('bug-desc').style.display = "none";
  }

  showBug() {
     var inputValue = (<HTMLInputElement>document.getElementById('bug-desc-box')).value;

    document.getElementById('main-comment').style.display = "none";
    document.getElementById('bug-desc').innerHTML = inputValue;
    document.getElementById('bug-desc').style.display = "block";
  }

}
