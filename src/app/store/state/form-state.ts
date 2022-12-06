import { Injectable } from "@angular/core"
import { State } from "@ngxs/store"
import { User } from "../../models/user"


export class Configuration {
    userConfigurationForm?: {
        model?: {
            user: User
        }
    }
}

@State<Configuration>({
    name: 'user',
    defaults: {
        userConfigurationForm: {
            model: undefined
        }
    }
})
@Injectable()
export class UserConfigurationState {

}