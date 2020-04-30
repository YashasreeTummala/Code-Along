let button = document.getElementById("theBoxes");
button.addEventListener("click",myFunction);
var i = 1;
var oldVal =  0;
function myFunction()
{
    let n = document.getElementById("number").value;
    n = parseInt(oldVal) + parseInt(n);
    for( ; i<=n; i++)
    {
        var box = document.createElement('div');
        box.classList.add('myDiv'); //class with myDiv holds all properties
        document.getElementById('box').appendChild(box);
        box.innerHTML = i;

        oldVal = document.getElementById('box').lastElementChild.innerHTML;

    }
}