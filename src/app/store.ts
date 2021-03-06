/**
 * Created by dcadenas on 02-03-2017.
 */
import {BehaviorSubject} from "rxjs/BehaviorSubject"
import {Injectable} from "@angular/core"
import 'rxjs/Rx'

export interface Note {
    color : string
    title : string
    value : string
    id?: string | number
    createAt? : string
    updateAt? : string
    userId? : string
}

export interface State {
    notes : Array<Note>,
    user : User
}

export interface User{
    id? : string
}

const defaultState : State = {
    notes : [],
    user : {}

}
const _store = new BehaviorSubject<State>(defaultState);

@Injectable()
export class Store {
    private store = _store;
    changes = this.store.asObservable()
        .distinctUntilChanged();

    setState(state : State){
        this.store.next(state);
    }

    getState() : State {
        return this.store.value;
    }

    purge(){
        this.store.next(defaultState);
    }
}
