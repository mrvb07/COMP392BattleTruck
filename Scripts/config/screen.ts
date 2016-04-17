module config {
    export class Screen {
        static WIDTH:number = window.innerWidth;
        static HEIGHT:number = window.innerHeight;
        static RATIO:number = window.innerWidth / window.innerHeight;
    }
    
    // Scene Constants
    export class Scene {
        public static MENU: number = 0;
        public static INSTRUCTION1: number = 1;
        public static PLAY1: number = 2;
        public static INSTRUCTION2: number = 3;
        public static PLAY2: number = 4;
        public static INSTRUCTION3: number = 5;
        public static PLAY3: number = 6;
        public static EXIT: number = 7;
        public static OVER: number = 8;
    }
    
}