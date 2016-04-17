var objects;
(function (objects) {
    // MouseControls Class +++++++++++++++
    //Author’s name:        Vishal Guleria (300813391), Vinay Bhardwaj (300825097) and Jagpreet Jattana
    //Date last Modified    April 8,2016
    //Program description   Group Project - Battle Truck
    //Revision History      Part 2
    var MouseControls = (function () {
        // CONSTRUCTOR +++++++++++++++++++++++
        function MouseControls() {
            this.enabled = false;
            this.sensitivity = 0.1;
            this.yaw = 0;
            this.pitch = 0;
            document.addEventListener('mousemove', this.OnMouseMove.bind(this), false);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        MouseControls.prototype.OnMouseMove = function (event) {
            this.yaw = -event.movementX * this.sensitivity;
            this.pitch = -event.movementY * this.sensitivity * 0.1;
        };
        return MouseControls;
    }());
    objects.MouseControls = MouseControls;
})(objects || (objects = {}));

//# sourceMappingURL=mousecontrols.js.map
