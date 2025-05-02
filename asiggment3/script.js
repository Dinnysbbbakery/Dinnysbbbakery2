const close =document.querySelector(".ready");
const box =document.querySelector(".rules")

close.addEventListener('click', deletebox);

function deletebox(){
    box.style.display="none";
}

const item1 = document.querySelector("#end-gun");
console.log(item1);

let dragItem1 = null;

item1.addEventListener("dragstart", startDragItem1);

function startDragItem1() {
    console.log("item 1 is dragged");
    dragItem1 = item1;
}

const position3 = document.querySelector(".position3");
console.log(position3);

const dropEndGun = document.querySelector("#drop-end-gun");
console.log(dropEndGun);

dropEndGun.addEventListener("dragover", endDragItem1);

function endDragItem1(event) {
  event.preventDefault();
}

dropEndGun.addEventListener("drop", handleDropEndGun);

function handleDropEndGun()
{
    if(dragItem1)
        {
            const src = dragItem1.src;
            console.log(src);
            dropEndGun.src = src;
        }
}

const item5 = document.querySelector("#middle-gun");
console.log(item5);

let dragItem5=null;

item5.addEventListener("dragstart", startDragItem5);

function startDragItem5(){
    console.log("item5 is dragged");
    dragItem5 = item5;
}

const position2=document.querySelector(".position2");
console.log(position2);

const dropMiddleGun=document.querySelector("#drop-middle-gun");
console.log(dropMiddleGun);

dropMiddleGun.addEventListener("dragover", endDragItem5);

function endDragItem5(event){
    event.preventDefault();
}

dropMiddleGun.addEventListener("drop", handleDropMiddleGun);

function handleDropMiddleGun(){
    if(dragItem5){
        const src=dragItem5.src;
        console.log(src);
        dropMiddleGun.src=src;
    }
}

const item2 = document.querySelector("#start-gun");
console.log(item2);

let dragItem2=null;

item2.addEventListener("dragstart", startDragItem2);

function startDragItem2(){
    console.log("item2 is dragged");
    dragItem2 = item2;
}

const position1=document.querySelector(".position1");
console.log(position1);

const dropStartGun=document.querySelector("#drop-start-gun");
console.log(dropStartGun);

dropStartGun.addEventListener("dragover", endDragItem2);

function endDragItem2(event){
    event.preventDefault();
}

dropStartGun.addEventListener("drop", handleDropStartGun);

function handleDropStartGun(){
    if(dragItem2){
        const src=dragItem2.src;
        console.log(src);
        dropStartGun.src=src;
    }
}

const finish=document.querySelector(".finish");

finish.addEventListener("click", merge);

function merge(){
     dropEndGun.style.translate= "-80px";
     dropStartGun.style.translate= "98px";
}



