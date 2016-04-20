//File name:            Play1
//Author’s name:        Vishal Guleria (300813391), Vinay Bhardwaj (300825097) and Jagpreet Jattana
//Date last Modified    April 8,2016
//Program description   Group Project - Battle Truck
//Revision History      Final

/**
 * The Scenes module is a namespace to reference all scene objects
 * 
 * @module scenes
 */

module scenes {
    /**
     * The Play class is where the main action occurs for the game
     * 
     * @class Play
     * @param havePointerLock {boolean}
     */
    export class Play3 extends scenes.Scene {
        private havePointerLock: boolean;
        private element: any;

        private blocker: HTMLElement;
        private instructions: HTMLElement;

        private spotLight: SpotLight;
        private spotLight2: SpotLight;
        private spotLight3: PointLight;
        private spotLight4: SpotLight;
        private spotLight5: SpotLight;
        private spotLight6: SpotLight;
        private spotLight7: SpotLight;
        private spotLight8: SpotLight;
        private spotLight9: SpotLight;
        private spotLight10: SpotLight;
        private spotLight11: SpotLight;

        private groundGeometry: CubeGeometry;
        private groundPhysicsMaterial: Physijs.Material;
        private groundMaterial: PhongMaterial;
        private ground: Physijs.Mesh;
        private ground1: Physijs.Mesh;
        private groundTexture: Texture;
        private groundTextureNormal: Texture;
        private groundGeometry1: CubeGeometry;

        private box: Physijs.Mesh;
        private boxGeometry: CubeGeometry;
        private boxMat: Physijs.Material;
        private boxMatPh: PhongMaterial;
        private boxTexture: Texture;
        private boxTextureNormal: Texture;

        private groundGeometry2: CubeGeometry;
        private ground2: Physijs.Mesh;
        private groundGeometry3: CubeGeometry;
        private ground3: Physijs.Mesh;
        private groundGeometry4: CubeGeometry;
        private ground4: Physijs.Mesh;
        private groundGeometry5: CubeGeometry;
        private ground5: Physijs.Mesh;
        private groundGeometry6: CubeGeometry;
        private ground6: Physijs.Mesh;
        private groundGeometry7: CubeGeometry;
        private ground7: Physijs.Mesh;
        private groundGeometry8: CubeGeometry;
        private ground8: Physijs.Mesh;

        private coinGeometry: Geometry;
        private coinMaterial: Physijs.Material;

        private coins: Physijs.ConcaveMesh[];
        private stones: Physijs.ConcaveMesh[];
        private cointCount: number = 4;
        private stoneCount: number = 4;

        private randomMin: number = 10;
        private randomMax: number = 20;
        private randomMin2: number = 10;
        private randomMax2: number = 20;
        private switchAttack: number = 0;
        private emplty: Object3D;

        private bridgeMaterial: PhongMaterial;
        private bridgePhysicsMaterial: Physijs.Material;
        private bridgeTexture: Texture;
        private bridgeTextureNormal: Texture;

        private mineMaterial: PhongMaterial
        private minePhysicsMaterial: Physijs.Material;
        private mineTexture: Texture;
        private mineTextureNormal: Texture;

        private bridge1Geometry: CubeGeometry;
        private bridge2Geometry: CubeGeometry;
        private bridge3Geometry: CubeGeometry;
        private bridge4Geometry: CubeGeometry;
        private bridge5Geometry: CubeGeometry;
        private bridge6Geometry: CubeGeometry;
        private bridge7Geometry: CubeGeometry;
        private bridge8Geometry: CubeGeometry;
        private bridge9Geometry: CubeGeometry;
        private bridge10Geometry: CubeGeometry;
        private bridge11Geometry: CubeGeometry;
        private bridge12Geometry: CubeGeometry;
        private bridge13Geometry: CubeGeometry;

        private bridge1: Physijs.Mesh;
        private bridge2: Physijs.Mesh;
        private bridge3: Physijs.Mesh;
        private bridge4: Physijs.Mesh;
        private bridge5: Physijs.Mesh;
        private bridge6: Physijs.Mesh;
        private bridge7: Physijs.Mesh;
        private bridge8: Physijs.Mesh;
        private bridge9: Physijs.Mesh;
        private bridge10: Physijs.Mesh;
        private bridge11: Physijs.Mesh;
        private bridge12: Physijs.Mesh;
        private bridge13: Physijs.Mesh;
        private bridge14: Physijs.Mesh;
        private bridge15: Physijs.Mesh;

        private frontMaterial: PhongMaterial;

        private glassTexture: Texture;
        private bodyTexture: Texture;
        private frontTexture: Texture;
        private lLightTexture: Texture;
        private rLightTexture: Texture;
        private breakLightTexture: Texture;
        private frontTextureNormal: Texture;

        private playerGeometry1: CubeGeometry;

        private playersGeometry: SphereGeometry;

        private playerGeometrya: CubeGeometry;
        private playerGeometryb: CubeGeometry;

        private playerGeometryc: CubeGeometry;
        private playerGeometryd: CubeGeometry;
        private playerGeometrye: CubeGeometry;

        private playerMaterial: Physijs.Material;
        private playerMaterial1: Physijs.Material;
        private playerMateriala: Physijs.Material;
        private playerMaterialb: Physijs.Material;
        private playerMaterialc: Physijs.Material;
        private playerMateriald: Physijs.Material;
        private playerMateriale: Physijs.Material;


        private player1: Physijs.Mesh;
        private playera: Physijs.Mesh;
        private playerb: Physijs.Mesh;
        private playerbb: Physijs.Mesh;
        private playerc: Physijs.Mesh;
        private playerd: Physijs.Mesh;
        private playere: Physijs.Mesh;
        private playerf: Physijs.Mesh;

        private sphereGeometry: SphereGeometry;
        private sphereMaterial: Physijs.Material;
        private sphere: Physijs.Mesh;

        private keyboardControls: objects.KeyboardControls;
        private mouseControls: objects.MouseControls;
        private isGrounded: boolean;


        private deathPlaneGeometry: CubeGeometry;
        private deathPlaneMaterial: Physijs.Material;
        private deathPlane: Physijs.Mesh;

        private velocity: Vector3;
        private prevTime: number;
        private clock: Clock;

        private stage: createjs.Stage;
        private scoreLabel: createjs.Text;
        private livesLabel: createjs.Text;

        /**
         * @constructor
         */
        constructor() {
            super();

            this._initialize();
            this.start();
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++

        /**
         * Sets up the initial canvas for the play scene
         * 
         * @method setupCanvas
         * @return void
         */
        private _setupCanvas(): void {
            canvas.setAttribute("width", config.Screen.WIDTH.toString());
            canvas.setAttribute("height", (config.Screen.HEIGHT * 0.1).toString());
            canvas.style.backgroundColor = "#000000";
            canvas.style.opacity = "0.5";
            canvas.style.position = "absolute";
        }

        /**
         * The initialize method sets up key objects to be used in the scene
         * 
         * @method _initialize
         * @returns void
         */
        private _initialize(): void {

            // Create to HTMLElements
            this.blocker = document.getElementById("blocker");
            this.instructions = document.getElementById("instructions");
            this.blocker.style.display = "block";

            // setup canvas for menu scene
            this._setupCanvas();

            this.prevTime = 0;
            this.stage = new createjs.Stage(canvas);
            this.velocity = new Vector3(0, 0, 0);

            // setup a THREE.JS Clock object
            this.clock = new Clock();

            // Instantiate Game Controls
            this.keyboardControls = new objects.KeyboardControls();
            this.mouseControls = new objects.MouseControls();
        }
        /**
         * This method sets up the scoreboard for the scene
         * 
         * @method setupScoreboard
         * @returns void
         */
        private setupScoreboard(): void {
            // Add Lives Label
            this.livesLabel = new createjs.Text(
                "LIVES: " + livesValue,
                "40px Algerian",
                "#ffffff"
            );
            this.livesLabel.x = config.Screen.WIDTH * 0.1;
            this.livesLabel.y = (config.Screen.HEIGHT * 0.15) * 0.20;
            this.stage.addChild(this.livesLabel);
            console.log("Added Lives Label to stage");

            // Add Score Label
            this.scoreLabel = new createjs.Text(
                "SCORE: " + scoreValue,
                "40px Algerian",
                "#ffffff"
            );
            this.scoreLabel.x = config.Screen.WIDTH * 0.8;
            this.scoreLabel.y = (config.Screen.HEIGHT * 0.15) * 0.20;
            this.stage.addChild(this.scoreLabel);
            console.log("Added Score Label to stage");
        }

        /**
         * Add a spotLight to the scene
         * 
         * @method addSpotLight
         * @return void
         */
        private addSpotLight(): void {
            // Spot Light
            // Spot Light
            this.spotLight = new SpotLight(0xffffff);
            // spotLight.position.set(0, 40, 0);
            this.spotLight.position.set(150, 170, -70);
            this.spotLight.castShadow = true;
            this.spotLight.intensity = 2;
            // spotLight.lookAt(new Vector3(0, 0, 0));
            this.spotLight.lookAt(new Vector3(150, 0, -70));
            this.spotLight.shadowCameraNear = 2;
            this.spotLight.shadowCameraFar = 200;
            this.spotLight.shadowCameraLeft = -5;
            this.spotLight.shadowCameraRight = 5;
            this.spotLight.shadowCameraTop = 5;
            this.spotLight.shadowCameraBottom = -5;
            this.spotLight.shadowMapWidth = 2048;
            this.spotLight.shadowMapHeight = 2048;
            this.spotLight.shadowDarkness = 0.5;
            this.spotLight.name = "Spot Light";
            this.add(this.spotLight);
            // spotLight2=new SpotLight(0xffffff);
            // spotLight2 = spotLight;
            this.spotLight2 = new SpotLight(0xffffff);
            this.spotLight2.position.set(400, 170, -190);
            this.spotLight2.lookAt(new Vector3(300, 0, -190));
            // spotLight2.position.set(150, 170, -70);
            this.spotLight2.castShadow = true;
            this.spotLight2.intensity = 2;
            this.spotLight2.shadowCameraNear = 2;
            this.spotLight2.shadowCameraFar = 200;
            this.spotLight2.shadowCameraLeft = -5;
            this.spotLight2.shadowCameraRight = 5;
            this.spotLight2.shadowCameraTop = 5;
            this.spotLight2.shadowCameraBottom = -5;
            this.spotLight2.shadowMapWidth = 2048;
            this.spotLight2.shadowMapHeight = 2048;
            this.spotLight2.shadowDarkness = 0.5;
            this.spotLight2.name = "Spot Light";
            this.add(this.spotLight2);


            this.spotLight3 = new PointLight(0xffffff);
            this.spotLight3.position.set(0, 15, 0);
            //this.spotLight3.rotation.set(0, 0, 0);
            this.spotLight3.castShadow = true;
            this.spotLight3.intensity = 1;
            this.spotLight3.shadowCameraNear = 2;
            this.spotLight3.shadowCameraFar = 200;
            this.spotLight3.shadowCameraLeft = -5;
            this.spotLight3.shadowCameraRight = 5;
            this.spotLight3.shadowCameraTop = 5;
            this.spotLight3.shadowCameraBottom = -5;
            this.spotLight3.shadowMapWidth = 2048;
            this.spotLight3.shadowMapHeight = 2048;
            this.spotLight3.shadowDarkness = 0.5;
            this.spotLight3.name = "Spot Light";

            


        }

        /**
         * Add a ground plane to the scene
         * 
         * @method addGround
         * @return void
         */





        /**
         * Adds the player controller to the scene
         * 
         * @method addPlayer
         * @return void
         */
        private addPlayer(): void {

            // Truck Body Object
            this.bodyTexture = new THREE.TextureLoader().load('../../Assets/images/Body.jpg');
            this.bodyTexture.wrapS = THREE.RepeatWrapping;
            this.bodyTexture.wrapT = THREE.RepeatWrapping;
            this.bodyTexture.repeat.set(2, 2);

            // Bruck bonnut Object
            this.frontTexture = new THREE.TextureLoader().load('../../Assets/images/Front.jpg');
            this.frontTexture.wrapS = THREE.RepeatWrapping;
            this.frontTexture.wrapT = THREE.RepeatWrapping;
            this.frontTexture.repeat.set(1, 1);

            this.frontTextureNormal = new THREE.TextureLoader().load('../../Assets/images/FrontNormal.png');
            this.frontTextureNormal.wrapS = THREE.RepeatWrapping;
            this.frontTextureNormal.wrapT = THREE.RepeatWrapping;
            this.frontTextureNormal.repeat.set(1, 1);

            this.frontMaterial = new PhongMaterial();
            this.frontMaterial.map = this.frontTexture;
            this.frontMaterial.bumpMap = this.frontTextureNormal;
            this.frontMaterial.bumpScale = 0.2;

            // Truck Windshield Object
            this.glassTexture = new THREE.TextureLoader().load('../../Assets/images/Glass.jpg');
            this.glassTexture.wrapS = THREE.RepeatWrapping;
            this.glassTexture.wrapT = THREE.RepeatWrapping;
            this.glassTexture.repeat.set(1, 1);

            // Left headlight Object
            this.lLightTexture = new THREE.TextureLoader().load('../../Assets/images/leftLight.png');
            this.lLightTexture.wrapS = THREE.RepeatWrapping;
            this.lLightTexture.wrapT = THREE.RepeatWrapping;
            this.lLightTexture.repeat.set(1, 1);

            // Right Headlight Object
            this.rLightTexture = new THREE.TextureLoader().load('../../Assets/images/rightLight.png');
            this.rLightTexture.wrapS = THREE.RepeatWrapping;
            this.rLightTexture.wrapT = THREE.RepeatWrapping;
            this.rLightTexture.repeat.set(1, 1);

            // Brak Lights Object
            this.breakLightTexture = new THREE.TextureLoader().load('../../Assets/images/breakLight.png');
            this.breakLightTexture.wrapS = THREE.RepeatWrapping;
            this.breakLightTexture.wrapT = THREE.RepeatWrapping;
            this.breakLightTexture.repeat.set(1, 1);

            // Universal Tire Object
            // this.playersGeometry = new SphereGeometry(0.5,20, 20);
            // this.playerMaterial = Physijs.createMaterial(new PhongMaterial({ color: 0x000000 }), 0.4, 0);
            // this.player = new Physijs.SphereMesh(this.playersGeometry, this.playerMaterial, 1);
            // this.player.position.set(0, 0, -70);
            // this.player.rotation.set(0, 3.14159, 0);
            // this.player.receiveShadow = true;
            // this.player.castShadow = true;
            // this.player.name = "Player";

            // Truck Body Object
            this.playerGeometry1 = new BoxGeometry(5, 5, 5);
            this.playerMaterial1 = Physijs.createMaterial(this.frontMaterial, 0.4, 0);
            this.player1 = new Physijs.BoxMesh(this.playerGeometry1, this.playerMaterial1, 1);
            this.player1.position.set(0, 7, 10);
            this.player1.rotation.set(0, 0, 0);
            this.player1.receiveShadow = true;
            this.player1.castShadow = true;
            this.player1.name = "Player2";
            //this.player.add(this.player1);
            this.player1.add(this.spotLight3);

            // Truck Bonet Object
            this.playerGeometrya = new BoxGeometry(5, 3, 3);
            this.playerMateriala = Physijs.createMaterial(new PhongMaterial({ map: this.frontTexture }), 0.4, 0);
            this.playera = new Physijs.ConvexMesh(this.playerGeometrya, this.playerMateriala, 1);
            this.playera.position.set(0, -1, -4);
            this.playera.receiveShadow = true;
            this.playera.castShadow = true;
            this.playera.name = "Player2";
            this.player1.add(this.playera);

            // Truck Windshield Object
            this.playerGeometryb = new BoxGeometry(4, 2, 0.01);
            this.playerMaterialb = Physijs.createMaterial(new PhongMaterial({ map: this.glassTexture }), 0.4, 0);

            this.playerb = new Physijs.BoxMesh(this.playerGeometryb, this.playerMaterialb, 1);
            this.playerb.position.set(0, 1.5, -2.5);
            this.playerb.receiveShadow = true;
            this.playerb.castShadow = true;
            this.playerb.name = "Playerb";
            this.player1.add(this.playerb);
            console.log("Added Player1 to Scene");

            this.playerbb = new Physijs.BoxMesh(this.playerGeometryb, this.playerMaterialb, 1);
            this.playerbb.position.set(0, 1.3, 2.5);
            this.playerbb.receiveShadow = true;
            this.playerbb.castShadow = true;
            this.playerbb.name = "Playerb";
            this.player1.add(this.playerbb);
            console.log("Added Player1 to Scene");


            // Truck Headlight Object
            this.playerGeometryc = new BoxGeometry(1, .5, 0.01);
            this.playerMaterialc = Physijs.createMaterial(new PhongMaterial({ map: this.lLightTexture }), 0.4, 0);
            this.playerMateriald = Physijs.createMaterial(new PhongMaterial({ map: this.rLightTexture }), 0.4, 0);
            this.playerc = new Physijs.BoxMesh(this.playerGeometryc, this.playerMaterialc, 1);
            this.playerc.position.set(1.5, -1.5, -5.5);
            this.playerc.receiveShadow = true;
            this.playerc.castShadow = true;
            this.playerc.name = "Player2";

            this.player1.add(this.playerc);
            // this.playerc.add(this.spotLight3);
            console.log("Added Player1 to Scene");

            this.playerd = new Physijs.BoxMesh(this.playerGeometryc, this.playerMateriald, 1);
            this.playerd.position.set(-1.5, -1.5, -5.5);
            this.playerd.receiveShadow = true;
            this.playerd.castShadow = true;
            this.playerd.name = "Player2";
            this.player1.add(this.playerd);
            console.log("Added Player1 to Scene");

            // Truck Break lights Object
            this.playerGeometrye = new BoxGeometry(1, 0.5, 0.01);
            this.playerMateriale = Physijs.createMaterial(new PhongMaterial({ map: this.breakLightTexture }), 0.4, 0);

            this.playere = new Physijs.BoxMesh(this.playerGeometrye, this.playerMateriale, 1);
            this.playere.position.set(-1.5, -1.5, 2.5);
            this.playere.receiveShadow = true;
            this.playere.castShadow = true;
            this.playere.name = "Player2";
            this.player1.add(this.playere);
            console.log("Added Player1 to Scene");

            this.playerf = new Physijs.BoxMesh(this.playerGeometrye, this.playerMateriale, 1);
            this.playerf.position.set(1.5, -1.5, 2.5);
            this.playerf.receiveShadow = true;
            this.playerf.castShadow = true;
            this.playerf.name = "Player2";
            this.player1.add(this.playerf);
            console.log("Added Player1 to Scene");

            this.add(this.player1);


        }

        /**
         * Add the death plane to the scene
         * 
         * @method addDeathPlane
         * @return void
         */
        private addDeathPlane(): void {
            this.deathPlaneGeometry = new BoxGeometry(500, 1, 500);
            this.deathPlaneMaterial = Physijs.createMaterial(new MeshBasicMaterial({ color: 0xff0000 }), 0.4, 0.6);
            // make deathPlane invisible during play - comment out next two lines during debugging
            this.deathPlaneMaterial.transparent = true;
            this.deathPlaneMaterial.opacity = 0;

            this.deathPlane = new Physijs.BoxMesh(this.deathPlaneGeometry, this.deathPlaneMaterial, 0);
            this.deathPlane.position.set(200, -10, -80);
            this.deathPlane.name = "DeathPlane";
            this.add(this.deathPlane);
        }



        /**
         * Event Handler method for any pointerLockChange events
         * 
         * @method pointerLockChange
         * @return void
         */
        pointerLockChange(event): void {
            if (document.pointerLockElement === this.element) {
                // enable our mouse and keyboard controls
                this.keyboardControls.enabled = true;
                this.mouseControls.enabled = true;
                this.blocker.style.display = 'none';
            } else {
                if (livesValue <= 0) {
                    this.blocker.style.display = 'none';
                    document.removeEventListener('pointerlockchange', this.pointerLockChange.bind(this), false);
                    document.removeEventListener('mozpointerlockchange', this.pointerLockChange.bind(this), false);
                    document.removeEventListener('webkitpointerlockchange', this.pointerLockChange.bind(this), false);
                    document.removeEventListener('pointerlockerror', this.pointerLockError.bind(this), false);
                    document.removeEventListener('mozpointerlockerror', this.pointerLockError.bind(this), false);
                    document.removeEventListener('webkitpointerlockerror', this.pointerLockError.bind(this), false);
                } else {
                    this.blocker.style.display = '-webkit-box';
                    this.blocker.style.display = '-moz-box';
                    this.blocker.style.display = 'box';
                    this.instructions.style.display = '';
                }
                // disable our mouse and keyboard controls
                this.keyboardControls.enabled = false;
                this.mouseControls.enabled = false;
                console.log("PointerLock disabled");
            }
        }

        /**
         * Event handler for PointerLockError
         * 
         * @method pointerLockError
         * @return void
         */
        private pointerLockError(event): void {
            this.instructions.style.display = '';
            console.log("PointerLock Error Detected!!");
        }

        // Check Controls Function

        /**
         * This method updates the player's position based on user input
         * 
         * @method checkControls
         * @return void
         */
        private checkControls(): void {
            if (this.keyboardControls.enabled) {
                this.velocity = new Vector3();

                var time: number = performance.now();
                var delta: number = (time - this.prevTime) / 1000;


                var direction = new Vector3(0, 0, 0);
                if (this.keyboardControls.moveForward) {
                    this.velocity.z -= 800.0 * delta;
                }
                if (this.keyboardControls.moveLeft) {
                    this.velocity.x -= 400.0 * delta;
                }
                if (this.keyboardControls.moveBackward) {
                    this.velocity.z += 800.0 * delta;
                }
                if (this.keyboardControls.moveRight) {
                    this.velocity.x += 400.0 * delta;
                }

                if (this.isGrounded) {
                    if (this.keyboardControls.jump) {
                        this.velocity.y += 4000.0 * delta;
                        if (this.player1.position.y > 4) {
                            this.isGrounded = false;
                        }
                    }
                }

                this.player1.setDamping(0.7, 0.1);
                // Changing player's rotation
                this.player1.setAngularVelocity(new Vector3(0, this.mouseControls.yaw, 0));
                direction.addVectors(direction, this.velocity);
                direction.applyQuaternion(this.player1.quaternion);
                if (Math.abs(this.player1.getLinearVelocity().x) < 20 && Math.abs(this.player1.getLinearVelocity().y) < 10) {
                    this.player1.applyCentralForce(direction);
                }

                this.cameraLook();

                // isGrounded ends

                //reset Pitch and Yaw
                this.mouseControls.pitch = 0;
                this.mouseControls.yaw = 0;

                this.prevTime = time;
            } // Controls Enabled ends
            else {
                this.player1.setAngularVelocity(new Vector3(0, 0, 0));
            }
        }


        private addBridge(): void {
            // Ground Object

        }

        private addGround(): void {
            this.groundTexture = new THREE.TextureLoader().load('../../Assets/images/road.jpg');
            this.groundTexture.wrapS = THREE.RepeatWrapping;
            this.groundTexture.wrapT = THREE.RepeatWrapping;
            this.groundTexture.repeat.set(8, 8);

            this.groundTextureNormal = new THREE.TextureLoader().load('../../Assets/images/road.jpg');
            this.groundTextureNormal.wrapS = THREE.RepeatWrapping;
            this.groundTextureNormal.wrapT = THREE.RepeatWrapping;
            this.groundTextureNormal.repeat.set(8, 8);

            this.groundMaterial = new PhongMaterial();
            this.groundMaterial.map = this.groundTexture;
            this.groundMaterial.bumpMap = this.groundTextureNormal;
            this.groundMaterial.bumpScale = 0.2;

            this.groundGeometry = new BoxGeometry(32, 1, 100);
            this.groundPhysicsMaterial = Physijs.createMaterial(this.groundMaterial, 0, 0);
            this.ground = new Physijs.ConvexMesh(this.groundGeometry, this.groundPhysicsMaterial, 0);
            this.ground.receiveShadow = true;
            this.ground.name = "Ground";
            this.add(this.ground);
            console.log("Added Burnt Ground to scene");

            this.groundGeometry1 = new BoxGeometry(32, 1, 100);
            this.ground1 = new Physijs.ConvexMesh(this.groundGeometry1, this.groundPhysicsMaterial, 0);
            this.ground1.receiveShadow = true;
            this.ground1.name = "Ground";
            this.ground1.position.set(0, 0, -115);
            this.add(this.ground1);

            this.groundGeometry2 = new BoxGeometry(100, 1, 32);
            this.ground2 = new Physijs.ConvexMesh(this.groundGeometry2, this.groundPhysicsMaterial, 0);
            this.ground2.receiveShadow = true;
            this.ground2.name = "Ground";
            this.ground2.position.set(80, 0, -149);
            this.add(this.ground2);

            this.groundGeometry3 = new BoxGeometry(32, 1, 100);
            this.ground3 = new Physijs.ConvexMesh(this.groundGeometry3, this.groundPhysicsMaterial, 0);
            this.ground3.receiveShadow = true;
            this.ground3.name = "Ground";
            this.ground3.position.set(158, 0, -115);
            this.add(this.ground3);

            this.groundGeometry4 = new BoxGeometry(100, 1, 32);
            this.ground4 = new Physijs.ConvexMesh(this.groundGeometry4, this.groundPhysicsMaterial, 0);
            this.ground4.receiveShadow = true;
            this.ground4.name = "Ground";
            this.ground4.position.set(238, 0, -81);
            this.add(this.ground4);

            this.groundGeometry5 = new BoxGeometry(32, 1, 100);
            this.ground5 = new Physijs.ConvexMesh(this.groundGeometry5, this.groundPhysicsMaterial, 0);
            this.ground5.receiveShadow = true;
            this.ground5.name = "Ground";
            this.ground5.position.set(272, 0, -161);
            this.add(this.ground5);

            this.groundGeometry6 = new BoxGeometry(100, 1, 32);
            this.ground6 = new Physijs.ConvexMesh(this.groundGeometry6, this.groundPhysicsMaterial, 0);
            this.ground6.receiveShadow = true;
            this.ground6.name = "Ground";
            this.ground6.position.set(353, 0, -195);
            this.add(this.ground6);

            this.groundGeometry7 = new BoxGeometry(32, 1, 100);
            this.ground7 = new Physijs.ConvexMesh(this.groundGeometry7, this.groundPhysicsMaterial, 0);
            this.ground7.receiveShadow = true;
            this.ground7.name = "Ground";
            this.ground7.position.set(377, 0, -104);
            this.add(this.ground7);

            this.groundGeometry8 = new BoxGeometry(32, 1, 32);
            this.ground8 = new Physijs.ConvexMesh(this.groundGeometry8, this.groundPhysicsMaterial, 0);
            this.ground8.receiveShadow = true;
            this.ground8.name = "Finish";
            this.ground8.position.set(377, 0, -33);
            this.add(this.ground8);
            console.log("Added Ground to scene");
        }

        // Add the Coin to the scene
        private addCoinMesh(minX: number, maxX: number, minY: number, maxY: number): void {

            this.coins = new Array<Physijs.ConvexMesh>(); // Instantiate a convex mesh array


            this.boxTexture = new THREE.TextureLoader().load('../../Assets/images/box.jpg');
            this.boxTexture.wrapS = THREE.RepeatWrapping;
            this.boxTexture.wrapT = THREE.RepeatWrapping;
            this.boxTexture.repeat.set(1, 1);

            this.boxTextureNormal = new THREE.TextureLoader().load('../../Assets/images/box.jpg');
            this.boxTextureNormal.wrapS = THREE.RepeatWrapping;
            this.boxTextureNormal.wrapT = THREE.RepeatWrapping;
            this.boxTextureNormal.repeat.set(1, 1);

            this.boxMatPh = new PhongMaterial();
            this.boxMatPh.map = this.boxTexture;
            this.boxMatPh.bumpMap = this.boxTextureNormal;
            this.boxMatPh.bumpScale = 0.2;
            this.boxMat = Physijs.createMaterial(this.boxMatPh, 0, 0);

            this.boxGeometry = new BoxGeometry(4, 4, 4);

            for (var count: number = 0; count < this.cointCount; count++) {
                // coins[count] = new Physijs.ConvexMesh(geometry, coinMaterial, 0.5);
                this.coins[count] = new Physijs.ConvexMesh(this.boxGeometry, this.boxMat, 0);
                this.coins[count].receiveShadow = true;
                this.coins[count].castShadow = true;
                this.coins[count].name = "Coin";

                this.setCoinPosition(this.coins[count], minX, maxX, minY, maxY);
            }
            //  });

            console.log("Added Coin Mesh to Scene");
        }

        // Set Coin Position
        private setCoinPosition(coin: Physijs.ConvexMesh, minX: number, maxX: number, minY: number, maxY: number): void {


            var randomPointX: number = Math.floor(Math.random() * (maxX - minX) + 1) + minX;
            var randomPointZ: number = Math.floor(Math.random() * (maxY - minY) + 1) + minY;
            var randomPointy: number = Math.floor(Math.random() * 30) + 30;
            coin.position.set(randomPointX, 2, randomPointZ);
            this.add(coin);

        }

        // Add the Stone to the scene
        private addStoneMesh(): void {

            this.stones = new Array<Physijs.ConvexMesh>();  // Instantiate a convex mesh array

            var stoneLoader = new THREE.JSONLoader().load("../../Assets/imported/missile.json", function (geometry: THREE.Geometry) {
                var phongMaterial = new PhongMaterial({ color: 0x736F6E });
                phongMaterial.emissive = new THREE.Color(0x736F6E);
                this.stones = new Array<Physijs.ConvexMesh>();
                var stoneMaterial = Physijs.createMaterial((phongMaterial), 0.4, 0.6);

                for (var count: number = 1; count < 7; count++) {
                    console.log("Testing");
                    this.stones[count] = new Physijs.ConvexMesh(geometry, stoneMaterial);
                    this.stones[count].receiveShadow = true;
                    this.stones[count].castShadow = true;
                    this.stones[count].name = "Stone";

                    play3.setStonePosition(this.stones[1]);
                }
            });

            console.log("Added Stone Mesh to Scene");
        }

        // Set Stone Position
        private setStonePosition(stone: Physijs.ConvexMesh): void {

            var randomPointZ: number = Math.floor(Math.random() * (this.randomMax - this.randomMin) + 1) - this.randomMin;
            var randomPointX: number = Math.floor(Math.random() * 20) - 10;

            var randomPointy: number = Math.floor(Math.random() * 60) + 30;

            if (this.switchAttack == 0) {
                stone.position.set(this.randomMax2, randomPointy, this.randomMin2);
                this.switchAttack = 1;
            }
            else {
                stone.position.set(this.randomMax, randomPointy, this.randomMin);
                this.switchAttack = 0;
            }
            this.add(stone);
        }

        private setMinMaX(): void {
            this.randomMin = this.player1.position.getComponent(2);
            this.randomMax = this.player1.position.getComponent(0);
            this.randomMin2 = this.emplty.position.getComponent(2);
            this.randomMax2 = this.emplty.position.getComponent(0);

        }
        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++

        /**
         * The start method is the main method for the scene class
         * 
         * @method start
         * @return void
         */
        public start(): void {
            createjs.Sound.stop();
            // setup the class context to use within events
            var self = this;


            // Set Up Scoreboard
            this.setupScoreboard();

            //check to see if pointerlock is supported
            this.havePointerLock = 'pointerLockElement' in document ||
                'mozPointerLockElement' in document ||
                'webkitPointerLockElement' in document;

            // Check to see if we have pointerLock
            if (this.havePointerLock) {
                this.element = document.body;

                this.instructions.addEventListener('click', () => {

                    // Ask the user for pointer lock
                    console.log("Requesting PointerLock");

                    this.element.requestPointerLock = this.element.requestPointerLock ||
                        this.element.mozRequestPointerLock ||
                        this.element.webkitRequestPointerLock;

                    this.element.requestPointerLock();
                });

                document.addEventListener('pointerlockchange', this.pointerLockChange.bind(this), false);
                document.addEventListener('mozpointerlockchange', this.pointerLockChange.bind(this), false);
                document.addEventListener('webkitpointerlockchange', this.pointerLockChange.bind(this), false);
                document.addEventListener('pointerlockerror', this.pointerLockError.bind(this), false);
                document.addEventListener('mozpointerlockerror', this.pointerLockError.bind(this), false);
                document.addEventListener('webkitpointerlockerror', this.pointerLockError.bind(this), false);
            }

            // Scene changes for Physijs
            this.name = "Play Scene";
            this.fog = new THREE.Fog(0xffffff, 0, 750);
            this.setGravity(new THREE.Vector3(0, -10, 0));

            // Add Spot Light to the scene
            this.addSpotLight();

            // Ground Object
            this.addGround();
            // Add custom coin imported from Blender
            this.addCoinMesh(14, -14, 50, -50);
            this.addCoinMesh(14, -14, -68, -163);
            this.addCoinMesh(32, 128, -132, -163);
            this.addCoinMesh(144, 172, -68, -163);
            this.addCoinMesh(191, 287, -68, -95);
            this.addCoinMesh(258, 280, -113, -209);
            this.addCoinMesh(298, 390, -183, -209);
            this.addCoinMesh(373, 390, -58, -151);


            this.addStoneMesh();

            // Add player controller
            this.addPlayer();

            // Add custom coin imported from Blender
            //this.addCoinMesh();

            // Add death plane to the scene
            this.addDeathPlane();

            //Add bridge parts
            // this.addBridge();

            this.ground.addEventListener('collision', function (eventObject) {

                if (eventObject.name === "Stone") {

                    this.remove(eventObject);
                    this.setStonePosition(eventObject);

                }
            }.bind(self));

            this.ground1.addEventListener('collision', function (eventObject) {

                if (eventObject.name === "Stone") {

                    this.remove(eventObject);
                    this.setStonePosition(eventObject);

                }
            }.bind(self));

            this.ground2.addEventListener('collision', function (eventObject) {

                if (eventObject.name === "Stone") {

                    this.remove(eventObject);
                    this.setStonePosition(eventObject);

                }
            }.bind(self));

            this.ground3.addEventListener('collision', function (eventObject) {

                if (eventObject.name === "Stone") {

                    this.remove(eventObject);
                    this.setStonePosition(eventObject);

                }
            }.bind(self));

            this.ground4.addEventListener('collision', function (eventObject) {

                if (eventObject.name === "Stone") {

                    this.remove(eventObject);
                    this.setStonePosition(eventObject);

                }
            }.bind(self));

            this.ground5.addEventListener('collision', function (eventObject) {

                if (eventObject.name === "Stone") {

                    this.remove(eventObject);
                    this.setStonePosition(eventObject);

                }
            }.bind(self));

            this.ground6.addEventListener('collision', function (eventObject) {

                if (eventObject.name === "Stone") {

                    this.remove(eventObject);
                    this.setStonePosition(eventObject);

                }
            }.bind(self));

            this.ground7.addEventListener('collision', function (eventObject) {

                if (eventObject.name === "Stone") {

                    this.remove(eventObject);
                    this.setStonePosition(eventObject);

                }
            }.bind(self));

            this.deathPlane.addEventListener('collision', function (eventObject) {

                if (eventObject.name === "Stone") {

                    this.remove(eventObject);
                    this.setStonePosition(eventObject);

                }
            }.bind(self));

            // Collision Check with player
            this.player1.addEventListener('collision', function (eventObject) {



                if (eventObject.name === "Ground") {

                    self.isGrounded = true;
                    createjs.Sound.play("land");
                }


                if (eventObject.name === "Coin") {
                    createjs.Sound.play("box");
                    scoreValue += 500;
                    self.scoreLabel.text = "SCORE: " + scoreValue;
                    self.livesLabel.text = "LIVES: " + livesValue;
                    self.remove(eventObject);
                    // Exit Pointer Lock
                    // document.exitPointerLock();
                    // self.children = []; // an attempt to clean up
                    // self.player1.remove(camera);

                    // // Play the Game Over Scene
                    // currentScene = config.Scene.INSTRUCTION3;
                    // changeScene();
                }

                if (eventObject.name === "DeathPlane") {

                    console.log(eventObject.name);
                    createjs.Sound.play("Mine");
                    livesValue--;
                    if (livesValue <= 0) {
                        // Exit Pointer Lock
                        document.exitPointerLock();
                        self.children = []; // an attempt to clean up
                        self.player1.remove(camera);

                        // Play the Game Over Scene
                        currentScene = config.Scene.OVER;
                        changeScene();
                    } else {
                        // otherwise reset my player and update Lives
                        self.livesLabel.text = "LIVES: " + livesValue;
                        self.remove(self.player1);
                        self.player1.position.set(0, 7, 10);
                        self.player1.rotation.set(0, 0, 0);
                        self.add(self.player1);
                    }

                }

                if (eventObject.name === "Stone") {
                    console.log(eventObject.name);
                    createjs.Sound.play("Mine");
                    livesValue--;
                    if (livesValue <= 0) {
                        // Exit Pointer Lock
                        document.exitPointerLock();
                        self.children = []; // an attempt to clean up
                        self.player1.remove(camera);

                        // Play the Game Over Scene
                        currentScene = config.Scene.OVER;
                        changeScene();
                    } else {
                        // otherwise reset my player and update Lives
                        self.livesLabel.text = "LIVES: " + livesValue;
                        self.remove(self.player1);
                        self.player1.position.set(0, 7, 10);
                        self.player1.rotation.set(0, 0, 0);
                        self.add(self.player1);
                    }

                }

                if (eventObject.name === "Finish") {
                    currentScene = config.Scene.EXIT;
                    changeScene();
                }


            }.bind(self));


            camera.rotation.set(-0.45, 0, 0);
            //camera.position.set(155, 150, 250);
            camera.position.set(0, 15, 20);

            this.player1.add(camera);

            this.emplty = new Object3D();
            this.emplty.name = "asda";
            this.player1.add(this.emplty);
            this.emplty.position.set(0, 0, -25);


        }

        /**
         * Camera Look function
         * 
         * @method cameraLook
         * @return void
         */
        private cameraLook(): void {
            var zenith: number = THREE.Math.degToRad(-20);
            var nadir: number = THREE.Math.degToRad(-20);

            var cameraPitch: number = camera.rotation.x + this.mouseControls.pitch;

            // Constrain the Camera Pitch
            // camera.rotation.x = THREE.Math.clamp(cameraPitch, nadir, zenith);
        }

        /**
         * @method update
         * @returns void
         */
        public update(): void {

            this.spotLight3.lookAt(new Vector3(this.emplty.position.getComponent(0), this.emplty.position.getComponent(1), this.emplty.position.getComponent(2)));
            this.checkControls();

            this.stage.update();
            this.setMinMaX();
            if (!this.keyboardControls.paused) {
                this.simulate();
            }
        }

        /**
         * Responds to screen resizes
         * 
         * @method resize
         * @return void
         */
        public resize(): void {
            canvas.style.width = "100%";
            this.livesLabel.x = config.Screen.WIDTH * 0.1;
            this.livesLabel.y = (config.Screen.HEIGHT * 0.15) * 0.20;
            this.scoreLabel.x = config.Screen.WIDTH * 0.8;
            this.scoreLabel.y = (config.Screen.HEIGHT * 0.15) * 0.20;
            this.stage.update();
        }
    }
}
