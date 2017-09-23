const typeOfSequence = function(num1, num2, num3) {
if (num1+num3)/2===num2) {
return "This is an arithmetic sequence!!!";
} else if ( Math.sqrt (num1*num3) ===num2){
return "This is a geometric sequence!!!";
}
else{
        return "This sequence is neither arithmetic nor geometric!!!";
}
}


const noValue = function (){
return "This is a function, that doesn't have any sense :D";
}



const noReturn= function (a,p) {
const percent = (a*p)/100;
}

const Fullname = function (firstname,lastname) {
return firstname + " "+lastname;
}

const stringLength= function (string1, string2, string3) {
  if (string1.length>string2.length && string1.length>string3.length) {
    return string1;
  }
  else if (string2.length>string1.length && string2.length>string3.length) {
    return string2;
  }
  else if (string3.length>string1.length && string3.length>string2.length) {
    return string3;
  }
  else if (string1.length===string2.length && string1.length===string3.length) {
    return "all strings are equal";
  }
  else if (string1.length===string2.length && string1.length>string3.length) {
    return string1;
  }
  else if (string1.length===string2.length && string1.length<string3.length) {
    return string3;
  }
  else if (string1.length===string3.length && string1.length>string3.length) {
    return string1;
  }
  else if (string1.length===string3.length && string1.length<string3.length) {
    return string3;
  }
  else if (string2.length===string3.length && string2.length>string3.length) {
    return string2;
  }
  else if (string2.length===string3.length && string2.length<string3.length) {
    return string3;
  }

}


const Baxtiar = function (num1,num2) {
if (num1===num2) {
return 0;
}
if else (num1>num2) {
return 1;
}
else {
return -1;
}
}

const firstTruethy= function (a,b,c) {
const arshaluys = a || b || c;
return arshaluys;
}
