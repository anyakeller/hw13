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
    //console.log(this);
    document.getElementById("h").innerHTML = this.innerHTML;
};

//change head back to Hello World! when mouseout
var returnHead = function(e) {
    //console.log(this);
    document.getElementById("h").innerHTML = "Hello World!";
};

b.addEventListener('click',addItem);

//add event listeners to elements of list
for(var i = 0; i<li.length; i++) {
    li[i].addEventListener('mouseover',listHead);
    li[i].addEventListener('mouseout',returnHead);
    li[i].addEventListener('click',removeItem);
};

var fibby = 1;
var prefibby = 0;
var addFib = function() {
    var list = document.getElementById("fiblist");
    var newitem = document.createElement("li");
    newitem.innerHTML = fibby;
    var temp = fibby;
    fibby = fibby + prefibby;
    prefibby = temp;
    list.appendChild(newitem);

    newitem.addEventListener('mouseover',listHead);
    newitem.addEventListener('mouseout',returnHead);
};

fib.addEventListener('click',addFib);

var fact = function(n){
    var ans = 1;
    while(n != 0){
	ans = ans * n;
	n = n-1;
    };
    return ans;
};

var esum = 0;
var retE = function(n) {
    esum = esum + (1.0 / fact(n));
    return esum;
};

var addE = function() {
    var list = document.getElementById("elist");
    var newitem = document.createElement("li");
    newitem.innerHTML = retE(list.getElementsByTagName("li").length);
    list.appendChild(newitem);

    newitem.addEventListener('mouseover',listHead);
    newitem.addEventListener('mouseout',returnHead);
};

eh.addEventListener('click',addE);
