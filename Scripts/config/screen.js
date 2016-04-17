var config;
(function (config) {
    var Screen = (function () {
        function Screen() {
        }
        Screen.WIDTH = window.innerWidth;
        Screen.HEIGHT = window.innerHeight;
        Screen.RATIO = window.innerWidth / window.innerHeight;
        return Screen;
    }());
    config.Screen = Screen;
    // Scene Constants
    var Scene = (function () {
        function Scene() {
        }
        Scene.MENU = 0;
        Scene.INSTRUCTION1 = 1;
        Scene.PLAY1 = 2;
        Scene.INSTRUCTION2 = 3;
        Scene.PLAY2 = 4;
        Scene.INSTRUCTION3 = 5;
        Scene.PLAY3 = 6;
        Scene.EXIT = 7;
        Scene.OVER = 8;
        return Scene;
    }());
    config.Scene = Scene;
})(config || (config = {}));

//# sourceMappingURL=screen.js.map
