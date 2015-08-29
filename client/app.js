///<reference path="../typings/tsd.d.ts" />
///<reference path="../model/Creature/Player/Player.ts"/>
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'angular2/angular2', '../model/Creature/Player/Player'], function (require, exports, angular2_1, Player_1) {
    var Socially = (function () {
        function Socially() {
            this.player = new Player_1.Player("Martin", "Majewski", 100);
            console.log("Player " + this.player.getFullName() + " created!");
        }
        Socially = __decorate([
            angular2_1.Component({
                selector: 'app'
            }),
            angular2_1.View({
                templateUrl: "client/views/main.ng.html"
            }), 
            __metadata('design:paramtypes', [])
        ], Socially);
        return Socially;
    })();
    angular2_1.bootstrap(Socially);
});
//# sourceMappingURL=app.js.map