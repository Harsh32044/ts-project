// interface TakePhoto {
//     cameraMode: string,
//     filter: string,
//     burstMode: number
// }

// interface Story {
//     createStory(): void
// }

// class Instagram implements TakePhoto {
    
//     constructor(
//         public cameraMode: string,
//         public filter: string,
//         public burstMode: number
//     ) {}
// }

// class YouTube implements TakePhoto, Story {

//     constructor(
//        public cameraMode: string,
//        public filter: string,
//        public burstMode: number 
//     ) {}

//     createStory(): void {
//         console.log("Story Created!")
//     }
// }