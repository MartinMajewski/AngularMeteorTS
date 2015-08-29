///<reference path="../typings/tsd.d.ts" />
///<reference path="../model/Creature/Player/Player.ts"/>

/**
 * Created by martinmajewski on 21.08.15.
 */
import {Component, View, bootstrap} from 'angular2/angular2';
import {Player} from '../model/Creature/Player/Player';

@Component({
    selector : 'app'
})
@View({
    templateUrl: "client/views/main.ng.html"
})
class Socially {

    player:  Player;

    constructor() {

        this.player = new Player("Martin", "Majewski", 100);
        console.log("Player " + this.player.getFullName() + " created!");
    }
}

bootstrap(Socially);