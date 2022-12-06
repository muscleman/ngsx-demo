import { Injectable } from "@angular/core"
import { Selector, State } from "@ngxs/store"
import { User } from "../../models/user"


// export class Configuration {
//     userConfigurationForm?: {
//         model: {
//             user: User
//         }
//     }
// }

// @State<Configuration>({
//     name: 'user',
//     defaults: {
//         userConfigurationForm: {
//             model: {
//                 user: new User()
//             }
//         }
//     }
// })
// @Injectable()
// export class UserConfigurationState {

// }

@State({
    name: 'user',
    defaults: {
        model: {},
        dirty: false,
        status: '',
        errors: {}
    }
})
@Injectable()
export class UserConfigurationState {

}