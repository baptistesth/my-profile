var xAxisperspective = 0;
var yAxisperspective = 0;

const the_animation = document.querySelectorAll('.hidden')

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        }
            else {
                entry.target.classList.remove('show')
            }
        
    })
},
{ 
    threshold: 0.5
});
for (let i = 0; i < the_animation.length; i++) {
    const elements = the_animation[i];
    observer.observe(elements);
} 

const imageHover=()=>{   
    let Elements = document.getElementsByClassName("card");
    for(let i = 0; i < Elements.length; i++){
        Elements[i].animate({transform: "rotateY(0deg) rotateX(0deg)"}, {duration: 200, iterations: 1, fill: "both"})
        const coordinates = Elements[i].getBoundingClientRect();
        Elements[i].addEventListener("mousemove", (e) =>{
            let xPos = e.clientX;
            let yPos = e.clientY;
            let image_width = coordinates.right-coordinates.left;
            let image_height = coordinates.bottom-coordinates.top;
            xAxisperspective = -((xPos-(coordinates.left+(image_width/2)))/image_width);
            yAxisperspective = -((yPos-(coordinates.top+(image_height/2)))/image_height);
            Elements[i].animate({transform: `rotateY(${20*xAxisperspective}deg) rotateX(${20*yAxisperspective}deg)`}, {duration: 10, iterations: 1, fill: "forwards"})
        });
    }
};

const imageLeaves=()=>{
    let Elements = document.getElementsByClassName("card")
    for(let i = 0; i < Elements.length; i++){
        Elements[i].animate({transform: "rotateY(0deg) rotateX(0deg)"}, {duration: 150, iterations: 1, fill: "both"});
    }
};


