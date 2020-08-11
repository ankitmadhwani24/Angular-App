import { Component, OnInit, ElementRef, Renderer, ViewChild, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'space-tickets',
  templateUrl: './space-tickets.component.html',
  styleUrls: ['./space-tickets.component.scss']
})
export class SpaceTicketsComponent implements OnInit {

  @ViewChild('projectlist') d1:ElementRef;
  
  constructor(private elementRef:ElementRef, private cdRef:ChangeDetectorRef) {}
  projects;


  ngOnInit() {

    var projectArray = '[{"projectSummary": "Server setup testing","assign": "Tester","status": "New"},{"projectSummary": "Server setup integration","assign": "Developer","status": "Test Failed"}]';
    this.projects = JSON.parse(projectArray)
  }

  appendTicket() {
    // console.log(this.projects);
    this.d1.nativeElement.insertAdjacentHTML('beforeend', '<tr id="dynamic-summary"><td></td><td><input style=" padding: 9px 10px;width: 70%; margin-right: 15px;border: none;   " id="summary" type="text" #summary placeholder="Enter ticket summary"><button  (click)="pushSummary(summary.value)" class="btn add-btn" style="color:#fff;padding: 7px 35px;font-size: 16px;font-weight: 700; border-radius: 0; background-color:rgba(82, 198, 193, 0.6)">Add</button></td><td></td><td></td></tr>');
   
    this.cdRef.detectChanges();
    this.elementRef.nativeElement.querySelector('button').addEventListener('click', () => {
        var inputValue = (<HTMLInputElement>document.getElementById('summary')).value;

        // console.log(inputValue);
        var summaryObject = {}
    
       summaryObject['projectSummary'] = inputValue
       summaryObject['assign'] = ''
       summaryObject['status'] = 'New'

       //console.log(summaryObject)
       this.projects.push(summaryObject)
       //console.log(this)

      var summaryInput = document.getElementById('dynamic-summary');

       summaryInput.parentNode.removeChild(summaryInput);
        
    });
  }

  pushSummary(Space: string) {
     
    //console.log(Space)
    // alert(0)
  }
}
