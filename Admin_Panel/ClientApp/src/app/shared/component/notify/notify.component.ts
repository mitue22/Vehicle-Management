import { Component, OnInit, Input } from '@angular/core';

@Component({
  standalone:false,
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.css']
})
export class NotifyComponent implements OnInit {
@Input() messgError: string
@Input() messgSuccess: string
  constructor() { }

  ngOnInit() {
  }

}
