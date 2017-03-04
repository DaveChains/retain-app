/**
 * Created by dcadenas on 01-03-2017.
 */
import {RouterModule} from '@angular/router'
import {ModuleWithProviders} from '@angular/core'
import {Main, NotesContainer} from './containers'
import {About} from "./containers/about";
import {AuthService} from "./services/auth";
import {Auth} from "./containers/Auth";
export {AuthService} from './services';


export const routes : ModuleWithProviders = RouterModule.forRoot([
    {
        path : '',
        component : Main,
        canActivate:[AuthService],
        children : [
            {
                path : '',
                component : NotesContainer
            },
            {
                path : 'about',
                component : About
            }
        ]
    },
    {
        path:'auth',
        component: Auth
    },
    {
        path :'**',
        redirectTo :'',
    }
])
