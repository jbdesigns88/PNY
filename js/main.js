(() => {

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
    const prev = document.querySelector(".previous");
    const next = document.querySelector(".next");
    const info = document.querySelector(".info");
    const employee = document.querySelector(".employee");
    const title = document.querySelector(".title");
    const image = document.querySelector(".user-image");

    document.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight") {
            changeToNextSlide()
        }
        if (e.key === "ArrowLeft") {
            changeToPreviousSlide()
        }

    })


    prev.addEventListener("click", (e) => {
        e.preventDefault();
        changeToPreviousSlide();
    })

    next.addEventListener("click", (e) => {
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
        info.innerText = team[current].info
    }

    function changeEmployee() {
        employee.innerText = team[current].name
    }

    function changeTitle() {
        title.innerText = team[current].title
    }

    function changeImage() {
        image.src = team[current].image
    }

    update();




})();