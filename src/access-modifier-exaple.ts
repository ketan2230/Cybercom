class Information2 {  
    public Age: number;  
    private Name: string;  
    protected Cantact: number;
    constructor(age: number, name: string, no : number){  
    this.Age = age;  
    this.Name = name; 
    this.Cantact=no; 
    }  
    public display() {  
    return (`Age: ${this.Age}, my name: ${this.Name}, Cantact :${this.Cantact}`);  
    }  
    }  
      
    let Ketan: Information2 = new Information2(12, "Ketan", 8488824036);  
    console.log(Ketan.display());  