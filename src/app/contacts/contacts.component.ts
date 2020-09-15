import { Component, OnInit } from '@angular/core';
import { Contact } from './Contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contacts: Contact[];
  constructor() { 
    
  }

  ngOnInit() {
    this.contacts = this.getSampleContacts();
  }

  getSampleContacts():Contact[] {
    let contacts = [
    new Contact("Dawid", "Suryś", "dsurys"),
    new Contact("Piotr", "Szłapa", "pszlapa"),
    new Contact("Tomasz", "Grabowski", "graba"),
    new Contact("Marta", "Okoń", "mokon")]
    return contacts;
  }

}
