import { Injectable } from "@angular/core"
import { Action, Selector, State, StateContext } from "@ngxs/store"
import { UserDataService } from "src/app/services/user-data.service"
import { User } from "../../models/user"
import { Users } from "../actions/userdata-actions"
import { map, tap } from "rxjs/operators"


export class UserData {
    users!: User[]
    userFilter!: string
}

@State<UserData>({
    name: 'userdata',
    defaults: {
        users: [],
        userFilter: ''
    }
})
@Injectable()
export class UserDataState {
    constructor(private userDataService: UserDataService) {}

    @Selector()
	static allUsers(state: UserData) {
        // if (!!state.userFilter) {
        //     return state.users.filter(c => c.firstName.includes(state.userFilter))
        // }
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

    // @Action(Users.UserFilter)
    // filterUsers(ctx: StateContext<UserData>, { payload }: Users.UserFilter) {
    //     const state = ctx.getState()
    //     ctx.patchState({
    //         userFilter: payload
    //     })
    // }

    // @Action(Users.Create)
    // createUsers(ctx: StateContext<UserData>, { payload, isWebsocket }: Users.Create) {
    //     const state = ctx.getState()
    //     if (isWebsocket) {
	// 		let latest: User[] = []
	// 		const index = state.users.findIndex(
	// 			(item) => item.firstName === payload.firstName
	// 		)
	// 		if (index < 0) {
	// 			latest.push(payload)
	// 		}
	// 		if (latest.length > 0) {
	// 			ctx.patchState({
	// 				users: state.users.concat(latest),
	// 			})
	// 		}
    //         return state.users
	// 	} else {
	// 		return this.userDataService.createUser(payload).pipe(
	// 			tap((returnData) => {
	// 				const latest = state.users.concat(returnData)
	// 				ctx.setState({ ...state, users: latest })
	// 			})
	// 		)
	// 	}
    // }
}