"use strict";
let space = '';
for (let i = 0; i < 5; i++){
    space+='-';
}
console.log(space);
let space1 = '';
for (let i = 1; i <= 9; i++){
    space1+=i;
}
console.log(space1);
let space2 = '';
for (let i = 9; i >= 1; i--){
    space2+=i;
}
console.log(space2);
let space3 ='-';
for (let i = 1; i <= 9; i++){
    space3 = space3 + i + '-';
}
console.log(space3);
