
let sliderdata = [
    {
        image: "./images/image_01.png",
        title: "Lorem ipsum dolor sit amet",
        content: "Quisque nec nisl. Nam scelerisque cursus dolor. Integer vel sapien quis risus egestas suscipit.",
        tabname: "Lorem"
    },
    {
        image: "./images/image_02.png",
        title: "Curabitur quis velit quis tortor",
        content: "Vivamus vulputate felis. Etiam luctus. Quisque facilisis suscipit elit. Curabitur eleifend congue leo..",
        tabname: "Curabitur"
    },
    {
        image: "./images/image_03.png",
        title: "Quisque at ante sit amet erat",
        content: "Maecenas nisl ante, mollis et, tincidunt vitae, feugiat sit amet, mi. Vestibulum urna.",
        tabname: "Maecenas"
    },
    {
        image: "./images/image_04.png",
        title: "Mauris vestibulum felis eget tortor",
        content: "Sed pretium, neque hendrerit rhoncus accumsan, nibh tellus pharetra neque, quis rutrum elit justo vitae sapien.",
        tabname: "Mauris"
    },
    {
        image: "./images/image_05.png",
        title: "Vestibulum auctor odio eget ante",
        content: "Aliquam erat arcu, euismod et, dignissim in, interdum ac, est. Mauris congue felis at nisi. Donec felis.",
        tabname: "Vestibulum"
    },
    {
        image: "./images/image_06.png",
        title: "Duis vitae velit sed dui",
        content: "Proin vulputate justo et quam. Cras nisl eros, elementum eu, iaculis vitae, viverra ut, ligula.",
        tabname: "Duis"
    },
]

let boxcollection = document.querySelector(".slider");
let tabs = document.querySelector(".tabs");
for (const iterator of sliderdata) {
    let box = document.createElement("div");
    box.className = "item";
    box.onclick = nextSlide;
    let image = document.createElement("img");
    image.src = iterator.image;
    image.alt = "FOTO";
    box.append(image)
    let imgtitle = document.createElement("a");
    imgtitle.innerHTML = iterator.title;
    imgtitle.href = "#";

    box.append(imgtitle)

    let imgcontent = document.createElement("p");
    imgcontent.innerHTML = iterator.content;    
    box.append(imgcontent);
    boxcollection.append(box);  
    let tab = document.createElement("div");
    tab.innerHTML = iterator.tabname;    
    tab.className = "tab"
    tab.id = `0${sliderdata.indexOf(iterator)}`
    tab.onclick = function(){
        showTabcontent(this.id)         
    }
    tabs.append(tab)
}


let slideIndex = 1;
showSlides(slideIndex);
function nextSlide() {
    showSlides(slideIndex += 1);
}


function previousSlide() {
    showSlides(slideIndex -= 1);
}


function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {

    let slides = document.getElementsByClassName("item");
    

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (let slide of slides) {
        slide.style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}

function showTabcontent(i){
    let tabcontent  = sliderdata[+i]
    let tabimg = document.querySelector(".content img");
    tabimg.src = tabcontent.image;
    let tabp = document.querySelector(".content p");
    tabp.innerHTML = tabcontent.content;
    let tabh2 = document.querySelector(".content h2");
    tabh2.innerHTML = tabcontent.title;
   let tab = document.getElementById(i);  
   console.dir(tab, "this")
   
   let tabs = document.querySelectorAll(".tab")
    for (const iterator of tabs) {
        iterator.style.backgroundColor = "#dfcc75c5"
        iterator.style.border = "1px solid #231d0584"
}
     tab.style.backgroundColor = "#dfcc75"
     tab.style.borderBottom = "1px solid #dfcc75";
}
showTabcontent("00");
