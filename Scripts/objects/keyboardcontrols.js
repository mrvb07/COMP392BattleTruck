var objects;
(function (objects) {
    // KeyboardControls Class +++++++++++++++
    //Author’s name:        Vishal Guleria (300813391), Vinay Bhardwaj (300825097) and Jagpreet Jattana
    //Date last Modified    April 8,2016
    //Program description   Group Project - Battle Truck
    //Revision History      Part 2
    var KeyboardControls = (function () {
        // CONSTRUCTOR ++++++++++++++++++++++++++    
        function KeyboardControls() {
            this.enabled = false;
            document.addEventListener('keydown', this.onKeyDown.bind(this), false);
            document.addEventListener('keyup', this.onKeyUp.bind(this), false);
        }
        // PUBLIC METHODS
        KeyboardControls.prototype.onKeyDown = function (event) {
            switch (event.keyCode) {
                case 38: /*up arrow*/
                case 87:
                    this.moveForward = true;
                    break;
                case 37: /*left arrow*/
                case 65:
                    this.moveLeft = true;
                    break;
                case 40: /*down arrow*/
                case 83:
                    this.moveBackward = true;
                    break;
                case 39: /*right arrow*/
                case 68:
                    this.moveRight = true;
                    break;
                case 32:
                    this.jump = true;
                    break;
                case 81:
                    this.paused = (this.paused) ? false : true;
                    break;
            }
        };
        KeyboardControls.prototype.onKeyUp = function (event) {
            switch (event.keyCode) {
                case 38: /*up arrow*/
                case 87:
                    this.moveForward = false;
                    break;
                case 37: /*left arrow*/
                case 65:
                    this.moveLeft = false;
                    break;
                case 40: /*down arrow*/
                case 83:
                    this.moveBackward = false;
                    break;
                case 39: /*right arrow*/
                case 68:
                    this.moveRight = false;
                    break;
                case 32:
                    this.jump = false;
                    break;
            }
        };
        return KeyboardControls;
    }());
    objects.KeyboardControls = KeyboardControls;
})(objects || (objects = {}));

//# sourceMappingURL=keyboardcontrols.js.map
