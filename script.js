var a;

function show_hide() {
    if(a == 1) {
        document.getElementById("metamask").style.display="none";
        return a=0;
    }else{
        document.getElementById("metamask").style.display="block";
        return a=1;
    }
}


var b;

function hide_show() {
    if(b == 1) {
        document.getElementById("coinbase").style.display="none";
        return b=0;
    }else{
        document.getElementById("coinbase").style.display="block";
        return b=1;
    }
}

var c;

function hide_or_show() {
    if(c == 1) {
        document.getElementById("wallet").style.display="none";
        return c=0;
    }else{
        document.getElementById("wallet").style.display="block";
        return c=1;
    }
}


var d;

function show_or_hide() {
    if(d == 1) {
        document.getElementById("trust").style.display="none";
        return d=0;
    }else{
        document.getElementById("trust").style.display="block";
        return d=1;
    }
}
