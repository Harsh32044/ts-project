abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ){}

    abstract getPhotoDetails() : string

    getReelTime() : number {
        //complex calc
        return 8
    }
    getSepia(): void {
        console.log("Sepia")
    }
}
//Abstract classes cannot have objects created directly, only frm their child classes, we can create objects
//Abstract methods cannot have implementation in their abstract class, only in the child classes. But they can be used
//to force a method definition to all the child classes. For ex, getPhotoDetails() will always return string value. So,
// in all child classes of Takephoto, it is mandatory to write implementation of this abstract method which returns string.
//Abstract methods only appear in abstract classes, but non abstract methods can also appear in abstract classes

class Instagram extends TakePhoto {
    constructor(
        cameraMode: string,
        filter: string,
        public burst: number
    ) {
        super(cameraMode, filter)
    }
    getPhotoDetails() {
       return `${this.cameraMode} ${this.filter}`
    }

    getReelTime(): number {
        return 99
    }
}
const harshSriv = new Instagram("Normal", "No filter",7)
harshSriv.getSepia()
harshSriv.getReelTime()


/*Abstract classes and interfaces are both used to define contracts or blueprints for classes, but they differ in their 
implementation details and usage scenarios.

Here are some differences between abstract classes and interfaces in TypeScript:

1. Implementation: An abstract class can provide an implementation for some or all of its methods, while an interface 
cannot provide any implementation.

2. Instantiation: An abstract class cannot be instantiated directly, but an interface cannot be instantiated at all.

3. Inheritance: A class can inherit from only one abstract class, but it can implement multiple interfaces.

4. Access Modifiers: Abstract classes can have access modifiers on their properties and methods, while interfaces 
do not have access modifiers.

5. Abstract Properties: Abstract classes can have abstract properties, which an inheriting class must provide a 
value for, while interfaces cannot have properties with default values or that require a value from the implementing class.

6. Method Signature: An interface defines only the method signature, whereas an abstract class can define both the 
method signature and the implementation.

7. Implementation Enforcement: Classes must implement all the methods of an interface they implement, while they 
can choose which methods to override in an abstract class.

In summary, abstract classes are used when we want to provide a partial implementation of a class and when we want to 
enforce the implementation of some methods and properties in the inheriting class. On the other hand, interfaces are 
used to define contracts that classes must follow and are best suited when multiple classes need to follow the 
same contract.
*/ 