

window.onload = function () {
    added();
    closed();
    checked();
};




function closed() {
    let close = document.getElementsByClassName("close");

    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            let div = this.parentElement;
            div.style.display = "none";

        }
    }
}


function checked() {
    let list = document.querySelector('ul');
    list.addEventListener('click', function (ev) {
        if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('checked');
        }
    }, false);
}
function added() {
    let myNodelist = document.getElementsByTagName("li");
    let boxy = document.getElementById("box-id");
    let todo = document.getElementById("to-do");
    for (i = 0; i < myNodelist.length; i++) {
      
        let span = document.createElement("SPAN");
        let txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        myNodelist[i].appendChild(span);
    }
}
function addnew() {
    let close = document.getElementsByClassName("close");

    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }

    let li = document.createElement("li");
    let inputs = document.getElementById("new").value;
    let t = document.createTextNode(inputs);
    li.appendChild(t);
    if (inputs === '') {
        alert("You need to put something on your list");
    } else {
        document.getElementById("list").appendChild(li);
    }
    
    document.getElementById("new").value = "";
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }

}

const username = localStorage.getItem('username') || '';
const nameInput = document.querySelector('#name');

nameInput.value = username;

nameInput.addEventListener('change', (e) => {
    localStorage.setItem('username', e.target.value);
})






















