const example1: string[] = ['Hello World'];

const example2: (number | boolean)[][] = [[1, 2, true], [14, false]];

const example3: boolean[][] = [ [true, false] ] ;  


//enums
//names.enum.ts
export enum Names {
    mine,
    moms
}

//name.enum.ts
export enum Age {
    dylan = 30,
    mother = 21
}

//index.ts
import { Age } from './age.enum';
import { Names } from './name.enum';

function totalAge(age1: Age, age2: Age) {
    return age1 + age2;
}





//functions
import { Person } from './person.model';

function add(val1: number, val2: number) {
    return val1 + val2;
}

add(1, ''); //error, string is not assignable







export class Person {
    firstName: string;
    middleName: string;
    lastName: string;
    
    constructor(data?: any) {
        this.firstName = data.firstName || 'Dylan';
        this.lastName = data.lastName || 'Israel';
        this.middleName = data.middleName;    
    }
}
                
import { Person } from './person.model';

function add(val1: number, val2: number) {
    return val1 + val2;
}

add(1, 10);

function sayHello(person: Person) {
    return `Say Hello to My Little Friend, ${person.firstName}!`    
}

sayHello(new Person({firstName: 'Dylan'}));
