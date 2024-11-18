const A1 = [1,2,3] , A2 = [4,5,6];  ///input :3///
const mergeAr = A1.concat(A2); 
console.log(mergeAr);

//

const Af2 = [10,20,30,40,50];   ///input :3///
const MoreThirty = Af2.filter((value)=>value >= 30)
console.log(MoreThirty);

//


const Af3 = [5,6,7,2,4];
//console.log(Af3);
let numin= 2 ;
Af3.splice(numin,1)
console.log(Af3);

//

let rom = {
    "I":1,
    "V":5,
    "X":10,
    "L":50,
    "C":100,
    "D":500,
    "M":1000
};
let inputro = "XIV" ///input :3///

const romin = inputro.toUpperCase();
let resaultin = 0 , pre = 0;

for (let i = romin.length-1; i >= 0; i--) {
    const char = rom[romin[i]];
    //console.log(char)
    if (char < pre) {
        resaultin = resaultin - char 
    }
    else if (char >= pre)
    {
        resaultin = resaultin + char
    }
    else{}

    pre = char ;
}
console.log(resaultin);

//

let Af5=[1,2,1,4,5,2,3,4,1,4];

let sortAf=Af5.toSorted();
let prenum = 0;
let rearr =[];
for (let i = 0; i < sortAf.length; i++) {
    currnum=sortAf[i];

    if (currnum != prenum) {
        rearr.push(currnum);
    }
    else{}

    prenum=currnum;
}
console.log(rearr);

//

let Af6=[1,2,3,4,5];
let afrotate=[];

let n = 3 ;  ///input :3//

for (let i = 0; i < Af6.length; i++) {

    let j = (i + n) % Af6.length;  //กันลืม // for หาตำแหน่งที่ต้องถูกย้าย
    // console.log(j);
    // afrotate.push(Af6[i])
    afrotate[j] = Af6[i];   //ตำแหน่งหลังย้าย = ตัวเดิมที่ตน.i
    
}

console.log(afrotate);