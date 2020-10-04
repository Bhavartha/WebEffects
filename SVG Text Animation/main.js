const namesvg = document.querySelector("#namesvg")
const paths = namesvg.querySelectorAll("path")
const animTime = 0.3

paths.forEach((element,index) => {
    let len = element.getTotalLength();
    let delay = (index+1)*animTime + "s"
    // console.log(len);
    element.style.strokeDasharray = len + 'px'
    element.style.strokeDashoffset = len + 'px'
    element.style.animation = `anim 2s ease forwards ${delay}`
});

let delay = (paths.length+5)*animTime
namesvg.style.animation = `fill 3s ease forwards ${delay}s`