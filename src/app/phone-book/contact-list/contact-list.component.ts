import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';
import { ContactData } from '../../services/user-data.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contactsList: ContactData[] = [];
  searchText = '';

  constructor(private userDataService: UserDataService) { }

  ngOnInit(): void {
    this.contactsList = this.userDataService.getContactData();
  }

}
