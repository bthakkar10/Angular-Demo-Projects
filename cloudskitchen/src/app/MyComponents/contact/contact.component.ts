import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{
  myForm:  | any;
  constructor(private fb: FormBuilder) {}
  ngOnInit() : void {
    this.myForm =  this.fb.group({
      name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')]],
      Message:['', Validators.required],
      Description : ''
    });
  }
  onSubmit() {
    Swal.fire('Message Sent Successfully!! ', 'We will respond back to you shortly!!', 'success')
    this.myForm.reset();
  }
}
