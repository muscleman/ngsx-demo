import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs/internal/Subscription';
import { User } from '../models/user';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-table-before',
  templateUrl: './table-before.component.html',
  styleUrls: ['./table-before.component.css']
})
export class TableBeforeComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription()

  displayedColumns: string[] = [
		'firstName',
		'lastName',
		'phone',
		'state',
		'zip',
		'country'
	]

  dataSource: MatTableDataSource<User> = new MatTableDataSource<User>([])

  constructor(private userDataService: UserDataService) { }

  
  ngOnInit(): void {
    this.subscription.add(
      this.userDataService.getUserData().subscribe(data => {
        this.dataSource.data = data
      })
    )
  }
  
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe()
    }
  }
}
