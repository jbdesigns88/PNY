


$(function(){

    const team = [{
        image: "./images/image-tanya.jpg",
        info: '“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ” ',
        name: "Tanya Sinclair ",
        title: "UX Engineer"
    },

    {
        image: "./images/image-john.jpg",
        info: '“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.  ” ',
        name: "John Tarkpor",
        title: "Junior Front-end Developer"
    },

];

let current = 0;
const prev = $(".previous");
const next = $(".next");
const info = $(".info");
const employee = $(".employee");
const title = $(".title");
const image = $(".user-image");

console.dir(prev)

$(document).keydown((e)=>{
    let key = e.which || e.keyCode;
    if (e.which === 39) {
        changeToNextSlide()
    }
    if (e.which === 37) {
        changeToPreviousSlide()
    }
}) 


prev.click( (e) => {
    e.preventDefault();
 
    changeToPreviousSlide();
   
})

next.click( (e) => {

    e.preventDefault();
    changeToNextSlide();


})

function changeToNextSlide() {
    increment();
    update();
}

function changeToPreviousSlide() {
    decrement()
    update();
}

function reset() {
    current = 0;
}

function increment() {
    if (current === team.length - 1) {
        reset();
        return;
    }
    current++
}

function decrement() {
    if (current === 0) {
        current = team.length - 1;
        return;
    }
    current--;
}

function update() {
    changeInfo()
    changeEmployee()
    changeTitle()
    changeImage()
}

function changeInfo() {
    info.text(team[current].info)
}

function changeEmployee() {
    employee.text(team[current].name)
}

function changeTitle() {
    title.text(team[current].title)
}

function changeImage() {
    image.attr("src",team[current].image);
}

update();
  
  }); 