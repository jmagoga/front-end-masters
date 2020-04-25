//scrimba

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







//return types

function add(val1: number, val2: number): number { //apos os arguments, diz o que vai retornar. garante que não retorna algo diferente de um 'number', aqui por exemplo
    return val1 + val2;
}

function voidExample(): void {
    add(1,2);
}

function neverExample(): never {
    throw Error;
}



//type
//usar interfaces e classes. isso aqui ta ficando velho
type person = {firstName: string};

const example3: person = {firstName: 'Dollan'}; //tem que ter as coisas q tem dentro de um 'person'

example3.firstName = 'Dylan';





//interfaces
export interface Person {
    firstName: string;
    middleName: string;
    lastName: string;
}

import { Person } from './person.interface';

const example1: Person = {firstName: 'Dollan', middleName: 'Dollan', lastName: 'Dollan'};

example1.firstName = 'Dylan';
example1.middleName = 'Coding God';
example1.lastName = 'Israel';








//optional
export class Person {
    firstName: string;
    middle: string;
    lastName: string;
    
    constructor(data?: any) {  //usa-se o '?'
        
    }
}

                
                
                
                
                
                
                
                
                
                
                
 //front end masters https://frontendmasters.com/courses/intermediate-react-v2/typescript-configuration-for-react/
 npm install -D typescript
 //start typescript project
 npx tsc --init //ai configura os arquivos no tsconfig
 //adicioanr tipagem no React
 npm install -D @types/react @types/react-dom @types/reach__router
  
 
                
                
                
 
