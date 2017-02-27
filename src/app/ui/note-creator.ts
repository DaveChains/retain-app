/**
 * Created by davidchains on 2/26/17.
 */
import {
    Component,
    Output,
    EventEmitter

} from '@angular/core';

@Component({
    selector : 'note-creator',
    styles : [`
    .note-creator {
      padding: 20px;
      background-color: white;
      border-radius: 3px;
    }
    .title {
      font-weight: bold;
      color: rgba(0,0,0,0.8);
    }
    .full {
      height: 100px;
    }
    `],
    template : `
    <div class="note-creator shadow-2">
      <form class="row" (submit)="onCreateNote()">
        <input
          type="text"
          [(ngModel)]="newNote.title"
          name="newNoteTitle"
          placeholder="Title"
          class="col-xs-10 title"
          *ngIf="fullForm"
        >
        <input
          type="text"
          (focus)="toggle(true)" 
          [(ngModel)]="newNote.value"
          name="newNoteValue"
          placeholder="Take a note..."
          class="col-xs-10"
        >
        <div class="actions col-xs-12 row between-xs" *ngIf="fullForm">
          <button
            type="submit"
            class="btn-light"
           >
            Done
          </button>
        </div>
      </form>
      <!--<pre> {{newNote}} </pre>-->
    </div>
    `
})
export class NoteCreator{
    @Output() createNote = new EventEmitter();

    fullForm : boolean = false;


    toggle(value : boolean){
        this.fullForm = value;
    }
    onCreateNote(){
        const {title, value} = this.newNote;
        if(title && value){
            this.createNote.next({title, value});

        }
        this.reset();
        this.toggle(false)
    }

    reset(){
        this.newNote = {
            title : '',
            value : ''
        }
    }

    newNote = {
        title : '',
        value : ''
    }
}