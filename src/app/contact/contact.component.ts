import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  mailto: string;
  subject: string;
  message: string;
  constructor() {
    this.mailto = `leutrim.kosumi@hotmail.com?subject=&body=`;
   }

  ngOnInit(): void {
  }

  sendMail() {
    this.subject = (<HTMLInputElement>document.querySelector('.subject')).value;
    this.message = (<HTMLInputElement>document.querySelector('.message')).value;
    this.mailto = `leutrim.kosumi@hotmail.com?subject=${this.subject}&body=${this.message}`;
  }

}
