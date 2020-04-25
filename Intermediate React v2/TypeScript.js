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


