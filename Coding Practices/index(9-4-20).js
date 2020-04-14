//index=0 & length=1

// var cities = ["Atlanta", "Baltimore", "Chicago", "Denver", "Los Angeles", "Seattle"];

// alert(cities[2])

// var name="Umar"
// var num = 03333660070
// var schol= true
// var rollno = 445
// var fname = "M Aslam"


// var diffDT = ["Umar" ,03333660070 , true]

// alert(diffDT[2])

//Array (All Methods)


//5 

// var mixedArray = [123, "Arsalan", "Developer", true];
// alert(mixedArray[1]) // Arsalan

//6

// var name;
// name = "Umar"
// alert(name)

// var fruits=[]; //will it makes an array or not

// // Array fruits has already been declared.This is how you assign values to
// // it.

// fruits[0]="Mango"
// fruits[1] = "Peach";
// fruits[2] = "Banana";

// alert(fruits)


// // Now, if you refer to fruits[0], you'll get "Mango". If you refer to fruits[2], you'll get
// // "Banana".But if you refer fruits[4], fruits[5] you'll get undefined.
// alert(fruits[0]) // Mango
// alert(fruits[1]) // Peach
// alert(fruits[6]) // undefiend






// 7

// Adding and removing elements
// Removing, inserting, and extracting elements


// push      = Add an element to end of an array
// pop       = Removes last element of an array
// unshift   = Add an element to start of an array
// shift     = Removes first element of an array
// splice    = Add/Remove array elements at/from any position
// slice     = copy an array
// indexOf   = find index or position of a specific element

//8

// /** push **/
// Using the keyword, push, you can add one or more elements to the end of an array
// var fruits = ["Mango", "Peach", "Banana"];
// document.write("<h4>Push</h4>");
// document.write("Fruits:" + fruits );

// fruits.push("Apple");
// document.write("<br>Fruits: " + fruits);

// fruits.push("Water Melon", "Grapes", "Melon");
// document.write("<br>Fruits: " + fruits);

// fruits.push("Grapes");
// document.write("<br>Fruits: " + fruits);
// document.write("<br>Total fruits " + fruits.length);


//9

// /** an alternate way to push in an array **/
// var fruits = ["Apple", "Orange"]; //0,1 === 2


// document.write("<br>Fruits: " + fruits+"<br />");
// document.write(fruits.length)

// fruits[fruits.length] = "Mango";  //2
// fruits[fruits.length] = "Banana"; //3
// document.write("<br>Fruits: " + fruits);





//10

// /** pop **/
// Use the pop method to remove an element from the end of the array.
// var fruits = ["Mango", "Peach", "Banana", "Apple", "Grapes", "Melon"];
// document.write("<br><h4>pop</h4>");
// document.write("<br>Fruits: " + fruits);

// fruits.pop();
// document.write("<br>Fruits: " + fruits);

// fruits.pop();
// fruits.pop();
// document.write("<br>Fruits: " + fruits);





//11


// /** unshift **/
// Using the keyword, unshift, you can add one or more elements to the beginning of an array
// var fruits = ["Mango", "Peach", "Banana"];
// document.write("<br><h4>unshift</h4>");
// document.write("<br>Fruits: " + fruits);

// fruits.unshift("Apple");
// document.write("<br>Fruits: " + fruits);

// fruits.unshift("Water Melon", "Grapes", "Melon");
// document.write("<br>Fruits: " + fruits);

// fruits.unshift("Grapes");
// document.write("<br>Fruits: " + fruits);
// document.write("<br>Total fruits " + fruits.length);




//12



// /** shift **/
// Use the shift method to remove an element from the beginning of an array.
// var fruits = ["Mango", "Peach", "Banana", "Apple", "Grapes", "Melon"];
// document.write("<br><h4>shift</h4>");
// document.write("<br>Fruits: " + fruits);

// fruits.shift();
// document.write("<br>Fruits: " + fruits);

// fruits.shift();
// fruits.shift();
// document.write("<br>Fruits: " + fruits);
// console.log(fruits);



//13





// /** splice **/
// The splice method to insert and remove one or more elements anywhere in an array
// /*
//     fruits.splice(index, noOfElementsToRemove, elementsToAdd);
// 
// var fruits = ["Mango", "Grapes", "Peach", "Banana","Papaya"];
// document.write("<h4>splice</h4>");
// document.write("Fruits: " + fruits + "<br />");

// fruits.splice(2 , 2);


// document.write("Remove Fruit(s): " + fruits + "<br />");

// var fruits = ["Mango", "Grapes", "Peach", "Banana"];
// document.write("Fruit(s): " + fruits + "<br>") ;

// fruits.splice(2, 0, "Apple");

// document.write("<br>Add Fruit(s): " + fruits);

// var fruits = ["Mango", "Grapes", "Peach", "Banana"];
// document.write("<br>Fruit(s): " + fruits);
// fruits.splice(2, 0, "Apple", "Orange", "Melon");
// document.write("<br>Add Multiple Fruits: " + fruits);

// var fruits = ["Mango", "Grapes", "Peach", "Banana"];
// document.write("<br>Fruits: " + fruits + "<br />");
// fruits.splice(2, 1, "Apple");
// document.write("<br>Add & Remove Fruit(s): " + fruits);





//14




// /** slice **/
// The slice method to copy one or more consecutive elements in any position and put
// them into a new array
// /*
//  fruits.slice(startIndex, endIndex+1);
// //  */
// var fruits = ["Mango", "Grapes", "Peach", "Banana", "Orange"];
// document.write("<br><h4>slice</h4>");
// document.write("<br>Fruits: " + fruits);

// var copyFruits = fruits.slice(2, 3);
// document.write("<br>Copy Fruit(s): " + copyFruits);




//15


// /** indexOf **/
// var fruits = ["orange", "banana", "apple"];

// alert(fruits.indexOf("banana"));    // 1
// alert(fruits.indexOf("apple"));     // 2
// alert(fruits.indexOf("peach"));     // -1


