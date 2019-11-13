
// Generate Cards
var counter = 0

newslist.forEach(news => {

    let hook = document.getElementById("hook")
    hook.innerHTML +=
        `
    <div class="col-lg-10">
        <div class="card">
            <div class="card-header">
                ${news.name}
            </div>
            <div class="box">
                <img class="card-img" src="./img/java.jpg" alt="Card image">
                <div class="middlebox">
                    <div class="card-body">
                        <ul class="list-group list-group-flush info">
                            <li class="list-group-item">Course start: ${news.startdate}</li>
                            <li class="list-group-item">Seats left: ${news.seats-news.seatstaken} from ${news.seats}</li>
                            <li class="list-group-item">${news.shorttext}</li>
                            <li style="display:none" class="list-group-item">${news.longtext}</li>
                        </ul>
                    </div>
                </div>
                <div class="rightbox">
                    <ul class="list-group list-group-flush price">
                        <li class="list-group-item">Price: ${news.price}€</li>
                    </ul>
                    <button class="btn btn-primary button">Go somewhere</button>
                </div>
            </div>
            <div class="card-footer">
                2 days ago
            </div>
        </div>
    </div>
    `



    
    // Info

    let infohook = document.querySelectorAll("ul.list-group.list-group-flush.info");
    

    if (news.seats === news.seatstaken) {
        infohook[counter].children[1].innerText = "Booked up"
    }

    // Discount

    let pricehook = document.querySelectorAll("ul.list-group.list-group-flush.price");

    if (news.hasOwnProperty("rabattprice")) {

        let obj = document.createElement("li");
        obj.classList.add("list-group-item");
        obj.innerText = "Newprice: "+news.rabattprice+"€";

        pricehook[counter].firstElementChild.style.textDecoration = "line-through";
        pricehook[counter].appendChild(obj);
    }

    // Button Event Toggle

    let button = document.querySelectorAll("button.btn.btn-primary.button");
    button[counter].addEventListener("click", function(){
        readMore(event)});

    counter++;

});

    function readMore(event) {
        let texttoggle = event.srcElement.parentElement.parentElement.children[1].querySelector("ul").children;
        $(texttoggle[2]).toggle("slow");
        $(texttoggle[3]).toggle("slow");
}