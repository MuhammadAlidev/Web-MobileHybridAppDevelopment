
function inpVal(num)
{
    var inp = document.getElementById("userInp");
    inp.value += num;
}
function clearInp()
{
    var inp = document.getElementById("userInp");
    inp.value = "";
}

function result()
{
    var inp = document.getElementById("userInp");
    inp.value = eval(inp.value);
}
