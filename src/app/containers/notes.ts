/**
 * Created by davidchains on 2/26/17.
 */

import {Component, style} from '@angular/core'
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
            *ngFor="let note of notes; let i = index"
            (checked)="onNoteChecked($event, i)"
          >
          </note-card>
        </div>
      </div>
    </div>
`

})
export class NotesContainer {

    onNoteChecked(note, i){
        this.notes.splice(i, 1);
    }

    onCreateNote(note){
        this.notes.push(note);
    }

    notes = [
        {
            title:'this is a note',
            value: 'eat some foot',
            color: 'lightblue'
        },
        {
            title:'this is a note',
            value: 'eat some foot',
            color: 'red'
        },
        {
            title:'this is a note',
            value: 'eat some foot',
            color: 'yellow'
        }
    ]
};
