import { User } from "src/app/models/user"

export namespace Messages {
	export class AddMessage {
		static readonly type = '[Chat] Add message'
        constructor(public from: string, public message: string) {}
	}
}