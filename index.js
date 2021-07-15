const lastNames = ["Mason","Marcora","Rico","Neves","Ivanov"];
console.log(lastNames)

lastNames.push("Unachukwu");
console.log(lastNames)

for (let i = 0; i < lastNames.length; i++){
    console.log(lastNames.sort());
    if(i===0)break;
}

const sortedLastNames = ["Ivanovic", "Marcora","Mason","Neves","Rico","Unachukwu"]

for (let i = 0; i < sortedLastNames.length; i++){
    console.log(sortedLastNames.indexOf("Unachukwu"));            
}

for (let i = 0; i < sortedLastNames.length; i++){   
    console.log(sortedLastNames[i].toUpperCase())         
}


