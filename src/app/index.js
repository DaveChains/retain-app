/**
 * Created by davidchains on 2/26/17.
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var services = require("./services");
var app_1 = require("./app");
exports.App = app_1.App;
var mapValuesToArray = function (obj) { return Object.keys(obj).map(function (key) { return obj[key]; }); };
exports.providers = mapValuesToArray(services).slice();
