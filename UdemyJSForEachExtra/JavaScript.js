//myForEach(arr, func)

var nums = [45, 65, 77, 34]

myForEach(nums, function (num) {
    console.log(num);
});

//function myForEach(arr, func) {
//    func()
//}

function myForEach(arr, func) {
    //loop through array
    for (var i = 0; i < arr.length; i++) {
        //call func for each item in array
        func();
    }
    
}

//with a named function

var colors = ["red", "orange", "yellow", "green"];
myForEach(colors, alert)

function myForEach(arr, func) {
    //loop through array
    for (var i = 0; i < arr.length; i++) {
        //call func for each item in array
        func(arr[1]);
    }
}
myForEach(colors, alert)

//now with an anonymous function
myForEach(colors, function () {
    alert("HI!")
}

myForEach(colors, function (color) {
        console.log(color);
    }

Array.prototype.myForEach = function (func) {
    for (var i = 0; i < this.length; i++) {
        func(this[i]);
    }
        }

var friends = ["charlie", "dave", "maddie", "kate"];

friends.myForEach(alert)

friends.myForEach(function (name) {
    console.log("I love " + name);
})