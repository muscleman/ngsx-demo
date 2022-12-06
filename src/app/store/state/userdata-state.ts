import { Injectable } from "@angular/core"
import { Action, Selector, State, StateContext } from "@ngxs/store"
import { UserDataService } from "src/app/services/user-data.service"
import { User } from "../../models/user"
import { Users } from "../actions/userdata-actions"
import { map } from "rxjs/operators"


export class UserData {
    users!: User[]
}

@State<UserData>({
    name: 'userdata',
    defaults: {
        users: []
    }
})
@Injectable()
export class UserDataState {
    constructor(private userDataService: UserDataService) {}

    @Selector()
	static allUsers(state: UserData) {
        return state.users
    }

    @Action(Users.Get)
	getDataFromState(ctx: StateContext<UserData>): Users.Get {
		const state = ctx.getState()
        return this.userDataService.getUserData().pipe(
            map((returnData) => {
                ctx.setState({
                    ...state,
                    users: returnData,
                })
                return returnData
            })
        )
	}

}