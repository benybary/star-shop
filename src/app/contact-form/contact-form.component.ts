import { Component, OnInit } from '@angular/core';
import {FormMessage} from '../form-message'

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  message = new FormMessage ('Your name', 
  'your@email.com', 'This is just to say, I`ve eaten the plums that you were keeping in the ice-box.')
  
  submitted = false;

  onSubmit() { this.submitted = true; }
  
  constructor() { }

  ngOnInit() {
  }

  get diagnostic() { return JSON.stringify(this.message); }
}
