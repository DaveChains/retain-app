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
var NoteCard = (function () {
    function NoteCard() {
        this.note = {};
        this.checked = new core_1.EventEmitter();
        this.showChek = false;
    }
    NoteCard.prototype.toggleCheck = function () {
        this.showChek = !this.showChek;
    };
    NoteCard.prototype.onChecked = function () {
        this.checked.next(this.note);
    };
    return NoteCard;
}());
__decorate([
    core_1.Input()
], NoteCard.prototype, "note", void 0);
__decorate([
    core_1.Output()
], NoteCard.prototype, "checked", void 0);
NoteCard = __decorate([
    core_1.Component({
        selector: 'note-card',
        styles: ["\n        .note-card {\n        padding: 15px;\n        border-radius: 2px;\n        width: 100%;\n        position: relative;\n    }\n    .title {\n        font-size: 1.2rem;\n        font-weight: bold;\n        text-align: left;\n        color: rgba(0,0,0,0.8);\n    }\n    .value {\n        text-align: left;\n        font-size: 1.4rem;\n        font-weight: 200;\n    }\n    .icon {\n        position: absolute;\n        color: black;\n        border: 1px solid lightgrey;\n        background-color: white;\n        font-size: 30px;\n        top: -10px;\n        left: -10px;\n        width: 40px;\n        height: 40px;\n        border-radius: 100%;\n        cursor: pointer; \n    }"
        ],
        template: "\n    <div \n        class=\"note-card row shadow-1\"  \n        [ngStyle]=\"{'background-color': note.color }\"\n        (mouseleave)=\"toggleCheck()\"\n        (mouseenter)=\"toggleCheck()\" \n        >\n        <div \n        class=\"icon\"\n        *ngIf=\"showChek\"\n        (click)=\"onChecked()\"\n        >\n            <i class=\"material-icons\">check</i>\n        </div>\n        <div class=\"col-xs-12 title\">\n            {{ note.title }}\n        </div>\n        <div class=\"col-xs-12 value\">\n            {{ note.value }}\n        </div>\n    </div>\n    "
    })
], NoteCard);
exports.NoteCard = NoteCard;
