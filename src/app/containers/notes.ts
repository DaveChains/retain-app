/**
 * Created by davidchains on 2/26/17.
 */

import {Component, Injectable} from '@angular/core';
import {NoteService} from '../services';

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
export class NotesContainer {
    notes = [
    //     {
    //     title:'this is a note',
    //     value: 'eat some foot',
    //     color: 'lightblue'
    // },
    //     {
    //         title:'this is a note',
    //         value: 'eat some foot',
    //         color: 'red'
    //     },
    //     {
    //         title:'this is a note',
    //         value: 'eat some foot',
    //         color: 'yellow'
    //     }
        ];

    constructor(private noteService : NoteService){
        this.noteService.getNotes()
            .subscribe(resp => this.notes = resp.data);
    }

    onNoteChecked(note){
        this.noteService.completeNote(note)
            .subscribe(note => {
                const i = this.notes.findIndex(localNote => localNote.id === note.id);
                this.notes.splice(i, 1);
        })
    }

    onCreateNote(note){
        this.noteService.createNote(note)
            .subscribe(note => this.notes.push(note));
    }
}
