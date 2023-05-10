class Instagram {
    cameraMode;
    filter;
    burstMode;
    constructor(cameraMode, filter, burstMode) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burstMode = burstMode;
    }
}
class YouTube {
    cameraMode;
    filter;
    burstMode;
    constructor(cameraMode, filter, burstMode) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burstMode = burstMode;
    }
    createStory() {
        console.log("Story Created!");
    }
}
