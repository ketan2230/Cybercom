//Interface

interface Information {
    Name?: string;
    Age?: number;
  }
  
  function createSquare(Info: Information): { Name: string; Age: number } {
    let newInfo = { Name: "Ketan", Age: 22 };
    if (Info.Name) {
      newInfo.Name = Info.Name;
    }
    if (Info.Age) {
      newInfo.Age = Info.Age;
    }
    return newInfo;
  }
 

  //Class

  class Information {
    Name1: string;
    Age1: number;

    constructor(Name: string, Age: number) {
      this.Name1 = Name;
      this.Age1 = Age;
    }
    Info();
  
    Info() {
      return "Hello, " + this.Name1 + this.Age1;
    }

    newInfo1=new Information("Ketan",22);
    

  }
  
