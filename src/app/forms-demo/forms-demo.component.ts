import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forms-demo',
  templateUrl: './forms-demo.component.html',
  styleUrls: ['./forms-demo.component.css']
})
export class FormsDemoComponent implements OnInit {

  userConfigurationForm!: FormGroup
  
  constructor(private formBuilder: FormBuilder, private router: Router) { 
    this.setupForm()
  }

  setupForm() {
    this.userConfigurationForm = this.formBuilder.group({
      firstName: new FormControl(),
      lastName: new FormControl(),
      phone: new FormControl(),
      state: new FormControl(),
      zip: new FormControl(),
      country: new FormControl()
    })
  }

  ngOnInit(): void {
  }

  go(): void {
    this.router.navigate(['tables'])
  }

}
