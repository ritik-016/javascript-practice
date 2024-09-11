function createCard(title, cName, views, monthsOld, duration, thumbnail){
    let viewstr
    if(views<1000000){
        viewstr = views/1000 + "K";
    }
    else if(views>1000000){
        viewstr = views/1000000 + "M";
    }
    else{
        viewstr = views/1000 + "K";
    }

    
    let html = `<div class="card">
            <div class="image">
            <img src="${thumbnail}" alt="">
            <div class="capsule">${duration}</div>
        </div>
            <div class="text">
                <h2>${title}</h2>
                <p>${cName} . ${viewstr} views . ${monthsOld} months ago</p>
            </div>
        </div>`


document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}


createCard("JavaScript Exercise 13 - Solution & Shoutouts | Sigma Web Development Course - Tutorial #77", "CodeWithHarry", 700000, 7, "24:12", "https://i.ytimg.com/vi/gRLdHSabW3o/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB21Dwm3c7yoXYuR2rb5vPT7YxK1A")