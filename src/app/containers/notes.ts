/**
 * Created by davidchains on 2/26/17.
 */

import {Component, Injectable, OnDestroy} from '@angular/core';
import {NoteService} from '../services';
import {Store} from '../store';

@Component({
    selector: 'nortes-container',
    styles: [`
    .notes {
    padding-top: 50px;
    }
    .creator {
    margin-bottom: 40px; 
    }`],
    template:`
    <div class="row center-xs notes">
      <div class="col-xs-6 creator">
         <note-creator (createNote)="onCreateNote($event)"></note-creator>
      </div>
      <div class="notes col-xs-8">
        <div class="row between-xs">
          <note-card
            class="col-xs-4"
            [note]="note"
            *ngFor="let note of notes"
            (checked)="onNoteChecked(note)"
          >
          </note-card>
        </div>
      </div>
    </div>
`

})
@Injectable()
export class NotesContainer implements OnDestroy{
    notes = [];

    constructor(
        private noteService : NoteService,
        private store : Store
    ){
        this.noteService.getNotes()
            .subscribe();

        this.store.changes
            .map(data => data.notes)
            .subscribe(notes => this.notes = notes)
    }

    ngOnDestroy(){
        console.log("Destroy");
    }

    onNoteChecked(note){
        this.noteService.completeNote(note)
            .subscribe();
    }

    onCreateNote(note){
        this.noteService.createNote(note)
            .subscribe();
    }
}
