///<reference path="../typings/tsd.d.ts" />

/**
 * Created by martinmajewski on 21.08.15.
 */
import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
    selector : 'app'
})
@View({
    template : "<p>Hello World!</p>"
})
class Socially {
}

bootstrap(Socially);