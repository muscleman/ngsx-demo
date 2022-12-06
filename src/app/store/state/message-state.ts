import { Injectable } from "@angular/core";
import { Action, State, StateContext } from "@ngxs/store";
import { Message } from "src/app/models/message";
import { Messages } from "../actions/message-actions";

  
  @State<Message[]>({
    name: 'messages',
    defaults: []
  })
  @Injectable()
  export class MessagesState {
    @Action(Messages.AddMessage)
    addMessage(ctx: StateContext<Message[]>, { from, message }: Messages.AddMessage) {
      const state = ctx.getState();
      // omit `type` property that server socket sends
      ctx.setState([...state, { from, message }]);
    }
  }