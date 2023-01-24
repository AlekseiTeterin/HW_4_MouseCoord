let mouseMove = document.querySelector("body");
let xy = document.querySelector("#xy");
let x = document.querySelector("#x");
let y = document.querySelector("#y");

mouseMove.addEventListener("mousemove", (e) => {
    console.log(e);
    x.innerText = e.pageX;
    y.innerText = e.pageY;

    if (e.pageX > (document.body.clientWidth / 2)) {
        xy.style.left = (e.pageX - 170) + 'px';
    }
    else {
        xy.style.left = e.pageX + 'px';
    }

    if (e.pageY <= (document.body.clientHeight / 2)) {
        xy.style.top = (e.pageY + 100) + 'px';
    }
    else {
        xy.style.top = e.pageY + 'px';
    }
});
