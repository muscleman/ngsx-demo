import { User } from "src/app/models/user"

export namespace Users {
	export class Get {
		static readonly type = '[UserData] Get'
	}

    export class Create {
        static readonly type = '[UserData] Create'
        constructor(payload: User) {}
    }

    export class UserFilter {
        static readonly type = '[UserData] UserFilter'
        constructor(payload: string) {}
    }
}