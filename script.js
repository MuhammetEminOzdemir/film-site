const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
            const widthRatio=Math.floor(window.innerWidth/300);
            let clickCounter = 0;
            const numMovies = movieLists[i].querySelectorAll("img").length;
            arrow.addEventListener("click", function () {
                        clickCounter++;
                        if (numMovies - (4 + clickCounter) + (4 - widthRatio) >= 0) {
                                    movieLists[i].style.transform = `translateX(${movieLists[i].computedStyleMap().get("transform")[0].x.value - 300}px)`
                        }
                        else {
                                    movieLists[i].style.transform = "translateX(0)"
                                    clickCounter = 0;
                        }
            });
});


// dark mode

const toggleBall = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".container,.navbar,.sidebar,.sidebar i,.toggle,.toggle-ball,.movie-list-item select,.movie-list-title")

toggleBall.addEventListener("click", function(){
            items.forEach(item => {
                        item.classList.toggle("active");
            });
});

