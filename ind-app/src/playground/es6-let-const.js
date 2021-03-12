//VAR
/* console.log('VAR');
var nameVar = 'Iurii';
console.log('variable nameVar is: ', nameVar);
var nameVar = 'Mike';
console.log('variable nameVar is: ', nameVar);
nameVar = 'John';
console.log('variable nameVar is: ', nameVar); */

//LET
/* console.log('LET');
let nameLet = 'Iurii';
console.log('variable nameLet is: ', nameLet);
let nameLet = 'Mike';
console.log('variable nameLet is: ', nameLet); */

//CONST
/* console.log('CONST');
const nameConst = 'Iurii';
console.log('variable nameConst is: ', nameConst);
nameConst = 'Frank';
console.log('variable nameConst is: ', nameConst);
const nameConst = 'Mike'; */

//FUNCTION SCOPING
let functionLet = () => {
  let justName = 'Mike';
  return justName;
};
console.log(functionLet());
//console.log(justName); // justName is not defined

//BLOCK SCOPING
{
  let variable = 'some text';
}
console.log(variable); //variable is not defined
