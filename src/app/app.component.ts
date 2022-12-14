import { Component, OnInit } from '@angular/core';
import { StateContext, Store } from '@ngxs/store';
import { ConnectWebSocket, SendWebSocketMessage } from '@ngxs/websocket-plugin';
import { Users } from './store/actions/userdata-actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ngsx-demo';

  constructor(private store: Store) {}
  ngOnInit(): void {
    // this.store.dispatch(new ConnectWebSocket())
  }
  
  loadUsers(): void {
    this.store.dispatch(new Users.Get())
  }

  go(): void {
    this.sendMessage("client", "have a wonderful day!")
  }

  sendMessage(from: string, message: string) {
    const event = new SendWebSocketMessage({
      type: 'message',
      from,
      message
    });

    this.store.dispatch(event);
  }
}
