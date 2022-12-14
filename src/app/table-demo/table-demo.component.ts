import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable, of } from 'rxjs';
import { User } from '../models/user';
import { Users } from '../store/actions/userdata-actions';
import { UserDataState } from '../store/state/userdata-state';

@Component({
  selector: 'app-table-demo',
  templateUrl: './table-demo.component.html',
  styleUrls: ['./table-demo.component.css']
})
export class TableDemoComponent implements OnInit {

  displayedColumns: string[] = [
		'firstName',
		'lastName',
		'phone',
		'state',
		'zip',
		'country'
	]

  tableTypeAheadControl = new FormControl(null)

  users$: Observable<User[]> = this.store.select(UserDataState.allUsers)

  constructor(private store: Store, private router: Router) { 
    this.store.dispatch(new Users.Get())   // <= this guy could happen when your site load for performance reasons. see app.component


    // this.tableTypeAheadControl.valueChanges.subscribe(
    //   (newValue) => {
    //     this.store.dispatch(new Users.UserFilter(newValue))
    //   }
    // )
  }

  ngOnInit(): void {
  }

  go(): void {
    this.router.navigate(['forms'])
  }

}
