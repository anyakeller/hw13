
/* notes 'n stuff
//send diagnostic output to console
//(Ctrl-Shift-J in Chromium & Firefox to reveal console)
console.log("AYO");

var i = "hello";
var j = 20;


//assign an anonymous fxn to a var
var f = function(x) {
    var j=30;
    return j+x;
};


//(define fact (lambda (n) ...)
var fact = function(n) {
    var prod=1;
    for ( ; n > 1 ; n--){
    prod = prod * n;
    }
    return prod;
};


//(define fact (lambda (n) ...)
var factR = function(n) {
    if ( n<=1 ) {
    return 1;
    }
    else {
    return n * factR(n-1);
    }
};


//add list item 
var addItem = function(text) {
    var list = document.getElementById("thelist");
    var newitem = document.createElement("li");
    newitem.innerHTML = text;
    list.appendChild(newitem);
};


//remove specified item from list
var removeItem = function(n) {
    var listitems = document.getElementsByTagName('li');
    listitems[n].remove();
};


var red = function() {
    var items = document.getElementsByTagName("li");
    for(var i = 0; i < items.length; i++) {
    items[i].classList.add('red');
    }
};


//instantiate an object
var o = { 'name' : 'Thluffy',
      age : 15,
      items : [10, 20, 30, 40],
      morestuff : {a : 1, b : 'ayo'},
      func : function(x) {
          return x+30;
      }
    };
    */

//current number
var currnum = 8;
var l = document.getElementById('thelist');
var li = l.getElementsByTagName("li");

//add item
var addItem = function() {
    var list = document.getElementById("thelist");
    var newitem = document.createElement("li");
    newitem.innerHTML = "item " + currnum;
    currnum = currnum + 1;
    list.appendChild(newitem);

    newitem.addEventListener('mouseover',listHead);
    newitem.addEventListener('mouseout',returnHead);
};

//remove item
var removeItem = function() {
    var listitems = document.getElementsByTagName("li");
    this.remove();
};

//change head to list element when mouseover
var listHead = function(e) {
    console.log(this);
    document.getElementById("h").innerHTML = this.innerHTML;
};

//change head back to Hello World! when mouseout
var returnHead = function(e) {
    console.log(this);
    document.getElementById("h").innerHTML = "Hello World!";
};

b.addEventListener('click',addItem);

//add event listeners to elements of list
for(var i = 0; i<li.length; i++) {
    li[i].addEventListener('mouseover',listHead);
    li[i].addEventListener('mouseout',returnHead);
    li[i].addEventListener('click',removeItem);
}
