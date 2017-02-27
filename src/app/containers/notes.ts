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
         <note-creator></note-creator>
      </div>
      <div class="notes col-xs-8">
        <div class="row between-xs">
          <note-card
            class="col-xs-4"
            [note]="note"
            *ngFor="let note of notes; let i = index"
            (checked)="onNoteChecked(i)"
          >
          </note-card>
        </div>
      </div>
    </div>
`

})
export class NotesContainer {

    onNoteChecked(i : number){
        this.notes.splice(i, 1);
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
