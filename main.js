
let eduTitle = document.getElementById("EducationTitle");
let prTitle = document.getElementById("ProjectTitle");
let educontent = document.getElementById("Education");
let prcontent  = document.getElementById("Projects");
const change = (event) => {
    console.log(event);
    if (event.target.id== 'EducationTitle'){
        event.target.classList.add("currentred");
        prTitle.classList.remove("currentyellow");
        educontent.style.display = "block";
        prcontent.style.display = "none";

    }else if(event.target.id == 'ProjectTitle'){
        event.target.classList.add("currentyellow");
        eduTitle.classList.remove("currentred");
        educontent.style.display = "none";
        prcontent.style.display = "block";
    }
}