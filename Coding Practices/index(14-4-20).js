
// /** multidimensional array **/


// var multi = [[], [] ,[] ];
// alert(multi.length); //3


// var multi = [[1, 2, true , "text"], [3, 4,"my array"], [5, 6]];
// alert(multi.length);    // 3

// alert(multi[0]);        // 1,2
// alert(multi[1]);        // 3,4
// alert(multi[2]);        // 5,6

// alert(multi[0].length); // 4

// alert(multi[0][0]); // 1

// alert(multi[0][3]); // text
// alert(multi[1][2]); // myarray
// alert(multi[1][1]); // 4
// alert(multi[2][0]); // 5
// alert(multi[2][1]); // 6





//17


var pets = ['dog', 'cat' , 'bird' , 'lizard', 'fish' ,'gerbil', 'snake'];
console.log(pets)
// pets.shift('cat');
// console.log(pets);
// pets.unshift('deer', 'snake','monkey');
// console.log(pets)
// pets.splice(2 , 1) // startingindex, numberofElementToRemove, ""


var removePets = pets.splice(2, 1) // startingindex, numberofElementToRemove, ""
console.log(pets)
console.log(removePets);


var lastElement = pets.push("abc"); 
console.log(pets);
console.log(lastElement)


// var copyPets = pets.slice(2);
// console.log(copyPets)
// pets.push('cat')
// console.log(pets);

