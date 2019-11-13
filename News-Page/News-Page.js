
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
                            <li class="list-group-item">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</li>
                        </ul>
                    </div>
                </div>
                <div class="rightbox">
                    <ul class="list-group list-group-flush price">
                        <li class="list-group-item">Price: ${news.price}€</li>
                    </ul>
                    <a href="#!" class="btn btn-primary button">Go somewhere</a>
                </div>
            </div>
            <div class="card-footer">
                2 days ago
            </div>
        </div>
    </div>
    `



    // Discount
    let pricehook = document.querySelectorAll("ul.list-group.list-group-flush.price");
    let infohook = document.querySelectorAll("ul.list-group.list-group-flush.info");
    

    if (news.seats === news.seatstaken) {
        infohook[counter].children[1].innerText = "Booked up"
    }

    if (news.hasOwnProperty("rabattprice")) {

        let obj = document.createElement("li");
        obj.classList.add("list-group-item");
        obj.innerText = "Newprice: "+news.rabattprice+"€";

        pricehook[counter].firstElementChild.style.textDecoration = "line-through";
        pricehook[counter].appendChild(obj);
    }

    counter++;

});