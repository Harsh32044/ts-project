class TakePhoto {
    cameraMode;
    filter;
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
}
const harshSriv = new TakePhoto("Normal", "No filter");
class Instagram extends TakePhoto {
}
