class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ){}
}

const harshSriv = new TakePhoto("Normal", "No filter")
class Instagram extends TakePhoto {

}