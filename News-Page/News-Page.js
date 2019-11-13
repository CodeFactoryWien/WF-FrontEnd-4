newslist.forEach(news => {

    let hook = document.getElementById("hook")
    hook.innerHTML+=
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
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Course start: ${news.startdate}</li>
                            <li class="list-group-item">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</li>
                        </ul>
                    </div>
                    <a href="#!" class="btn btn-primary">Go somewhere</a>
                </div>
                <div class="rightbox">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">${news.price}</li>
                    </ul>
                </div>
            </div>
            <div class="card-footer">
                2 days ago
            </div>
        </div>
    </div>
    `

    let pricehook = document.querySelectorAll("ul.list-group list-group-flush");
    pricehook.innerHTML+=
    `
    <li class="list-group-item">Course start: ${news.rabattprice}</li>
    `
});
