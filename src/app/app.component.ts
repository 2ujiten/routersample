import { Component, ElementRef, Input, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router, elementRef:ElementRef){
    this.router.navigate([elementRef.nativeElement.getAttribute('currroute')]);    
  }
}
