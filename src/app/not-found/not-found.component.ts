import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  errMessage!: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.errMessage = this.activatedRoute.snapshot.data['message'];
  }

}
