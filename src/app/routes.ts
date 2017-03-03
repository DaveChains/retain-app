/**
 * Created by dcadenas on 01-03-2017.
 */
import {RouterModule} from '@angular/router'
import {ModuleWithProviders} from '@angular/core'
import {Main, NotesContainer} from './containers'
import {About} from "./containers/about";

export const routes : ModuleWithProviders = RouterModule.forRoot([
    {
        path : '',
        component : Main,
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
        path :'**',
        redirectTo :'',
    }
])
