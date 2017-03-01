"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by dcadenas on 27-02-2017.
 */
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/Rx");
require("rxjs/add/observable/throw");
var ApiService = (function () {
    function ApiService(http) {
        this.http = http;
        this.api_url = 'http://localhost:3500';
        this.headers = new http_1.Headers({
            'Content-Type': 'application/json',
            Accept: 'application/json'
        });
    }
    ApiService.prototype.getJson = function (resp) {
        return resp.json();
    };
    ApiService.prototype.checkForError = function (resp) {
        if (resp.status >= 200 && resp.status > 300) {
            return resp;
        }
        else {
            var error = new Error(resp.statusText);
            error['response'] = resp;
            console.error(error);
            throw error;
        }
    };
    ApiService.prototype.get = function (path) {
        return this.http.get("" + this.api_url + path, this.headers)
            .map(this.checkForError)
            .catch(function (err) { return Observable_1.Observable.throw(err); })
            .map(this.getJson);
    };
    ApiService.prototype.post = function (path, body) {
        return this.http.post("" + this.api_url + path, JSON.stringify(body), { headers: this.headers }).map(this.checkForError)
            .catch(function (err) { return Observable_1.Observable.throw(err); })
            .map(this.getJson);
    };
    ApiService.prototype.delete = function (path) {
        return this.http.delete("" + this.api_url + path, this.headers)
            .map(this.checkForError)
            .catch(function (err) { return Observable_1.Observable.throw(err); })
            .map(this.getJson);
    };
    return ApiService;
}());
ApiService = __decorate([
    core_1.Injectable()
], ApiService);
exports.ApiService = ApiService;
