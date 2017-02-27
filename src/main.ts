import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {App} from './app';
import {Main, NotesContainer} from './app/containers';
import {AppBar} from './app/ui';
import {NoteCard} from './app/ui';
import {NoteCreator} from "./app/ui/note-creator";


@NgModule({
    declarations:[
        App,
        Main,
        AppBar,
        NoteCard,
        NotesContainer,
        NoteCreator
    ],
    imports:[BrowserModule, FormsModule],
    bootstrap: [App]
})
export class AppModule{};

platformBrowserDynamic().bootstrapModule(AppModule);