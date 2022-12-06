import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forms-demo',
  templateUrl: './forms-demo.component.html',
  styleUrls: ['./forms-demo.component.css']
})
export class FormsDemoComponent implements OnInit {

  userConfigurationForm = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    phone: new FormControl(),
    state: new FormControl(),
    zip: new FormControl(),
    country: new FormControl()
  })

  constructor() { 
  }

  ngOnInit(): void {
  }

}
