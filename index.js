//

const A1 = [1,2,3] , A2 = [4,5,6];  ///input :3///

function mergeArray(ar1,ar2){
    const mergeAr = ar1.concat(ar2); 
    return mergeAr
}

console.log(mergeArray(A1,A2));

//

const Af2 = [10,20,30,40,50];   ///input :3///
function Morenum(Arrf2){
    const MoreThirty = Arrf2.filter((value)=>value >= 30)
    return MoreThirty
}

console.log(Morenum(Af2));

//


const Af3 = [5,6,7,2,4];
//console.log(Af3);

let numin= 2 ;  //input 

function removeValue(ArrayF3,indexmove){
    ArrayF3.splice(indexmove,1)
    return Af3 ;
}

console.log(removeValue(Af3,numin));

//
let inputro = "XIV" ///input :3///

function romantoint (){
            
        let rom = {
        "I":1,
        "V":5,
        "X":10,
        "L":50,
        "C":100,
        "D":500,
        "M":1000
        };

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
        return resaultin
    }

console.log(romantoint(inputro));

//

let Af5=[1,2,1,4,5,2,3,4,1,4];

function duplisort (ArrayF5){
    let sortAf=ArrayF5.toSorted();
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
    return rearr;
}
console.log(duplisort(Af5));

//

let Af6=[1,2,3,4,5];

let n = 3 ;  ///input :3//

function rotatearr(arrf6,n){
    let afrotate=[];

    for (let i = 0; i < arrf6.length; i++) {

        let j = (i + n) % arrf6.length;  //กันลืม // for หาตำแหน่งที่ต้องถูกย้าย
        // console.log(j);
        // afrotate.push(arrf6[i])
        afrotate[j] = arrf6[i];   //ตำแหน่งหลังย้าย = ตัวเดิมที่ตน.i
        
    }
    return afrotate
}

console.log(rotatearr(Af6,n));