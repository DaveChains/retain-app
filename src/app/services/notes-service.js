"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by dcadenas on 28-02-2017.
 */
var core_1 = require("@angular/core");
var NoteService = (function () {
    function NoteService(api) {
        this.api = api;
        this.path = '/notes';
    }
    NoteService.prototype.createNote = function (note) {
        return this.api.post(this.path, note);
    };
    NoteService.prototype.getNotes = function () {
        return this.api.get(this.path);
    };
    NoteService.prototype.completeNote = function (note) {
        return this.api.delete(this.path + "/" + note.id);
    };
    return NoteService;
}());
NoteService = __decorate([
    core_1.Injectable()
], NoteService);
exports.NoteService = NoteService;
