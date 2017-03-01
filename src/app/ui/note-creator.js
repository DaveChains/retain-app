"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by davidchains on 2/26/17.
 */
var core_1 = require("@angular/core");
var NoteCreator = (function () {
    function NoteCreator() {
        this.createNote = new core_1.EventEmitter();
        this.colors = ['#b19cd9', '#ff9691', '#77dd77', '#aec6cf', '#f49ac2', 'white'];
        this.fullForm = false;
        this.newNote = {
            title: '',
            value: '',
            color: 'white'
        };
    }
    NoteCreator.prototype.onColorSelect = function (color) {
        this.newNote.color = color;
    };
    NoteCreator.prototype.toggle = function (value) {
        this.fullForm = value;
    };
    NoteCreator.prototype.onCreateNote = function () {
        var _a = this.newNote, title = _a.title, value = _a.value, color = _a.color;
        if (title && value) {
            this.createNote.next({ title: title, value: value, color: color });
        }
        this.reset();
        this.toggle(false);
    };
    NoteCreator.prototype.reset = function () {
        this.newNote = {
            title: '',
            value: '',
            color: 'white'
        };
    };
    return NoteCreator;
}());
__decorate([
    core_1.Output()
], NoteCreator.prototype, "createNote", void 0);
NoteCreator = __decorate([
    core_1.Component({
        selector: 'note-creator',
        styles: ["\n    .note-creator {\n      padding: 20px;\n      background-color: white;\n      border-radius: 3px;\n    }\n    .title {\n      font-weight: bold;\n      color: rgba(0,0,0,0.8);\n    }\n    .full {\n      height: 100px;\n    }\n    "],
        template: "\n    <div class=\"note-creator shadow-2\" [ngStyle]=\"{'background-color' : newNote.color}\">\n      <form class=\"row\" (submit)=\"onCreateNote()\">\n        <input\n          type=\"text\"\n          [(ngModel)]=\"newNote.title\"\n          name=\"newNoteTitle\"\n          placeholder=\"Title\"\n          class=\"col-xs-10 title\"\n          *ngIf=\"fullForm\"\n        >\n        <input\n          type=\"text\"\n          (focus)=\"toggle(true)\" \n          [(ngModel)]=\"newNote.value\"\n          name=\"newNoteValue\"\n          placeholder=\"Take a note...\"\n          class=\"col-xs-10\"\n        >\n        <div class=\"actions col-xs-12 row between-xs\" *ngIf=\"fullForm\">\n          <div class=\"col-xs-3\">\n            <color-picker\n                [colors]=\"colors\"\n                (selected)=\"onColorSelect($event)\"\n            ></color-picker>\n          </div>\n          <button\n            type=\"submit\"\n            class=\"btn-light\"\n           >\n            Done\n          </button>\n        </div>\n      </form>\n      <!--<pre> {{newNote}} </pre>-->\n    </div>\n    "
    })
], NoteCreator);
exports.NoteCreator = NoteCreator;
