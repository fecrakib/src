class Car{
    private make:string;
    private model:string;
     
    constructor(make:string,model:string){
        this.make=make;
        this.model=model;

    }
    public getMake():string{
        return this.make;
    }
    public getModel():string{
        return this.model;
    }
    public displayDetails():void{
        console.log(`Car:${this.make} and ${this.model}`)
    }
}
let myCar=new Car("Tesla","Model-Ro9");
console.log(myCar.getMake());
myCar.displayDetails();