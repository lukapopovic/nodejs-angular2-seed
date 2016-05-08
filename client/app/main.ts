/// <reference path="../../node_modules/angular2/typings/browser.d.ts" />

import 'zone.js';
import 'reflect-metadata';
import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from './app.component';

bootstrap(AppComponent, [])
    .then(success => console.log('Bootstrap Success!'))
    .catch(error => console.error(error));
