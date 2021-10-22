import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserDataService } from '../../services/user-data.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  contactForm = new FormGroup({
    firstName: new FormControl(null, Validators.required),
    sureName: new FormControl(null, Validators.required),
    phone: new FormControl(null, Validators.required)
  });

  constructor(private userDataService: UserDataService) { }

  ngOnInit(): void { }

  onSubmit() {
    this.userDataService.addContact(this.contactForm.value);
  }

  resetForm() {
    this.contactForm.reset();
  }

}
