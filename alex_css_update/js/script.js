objs = [];
homearr = [];
newsarr = [];
var counter = 0



const x = LANG_COURSE_DATA;
const l = HOME_CONTENT;
const n = newslist;


class Home {

    constructor(img, name) {
        this.img = img;
        this.name = name;
    }
    display() {
        return `
                <div class="row" id="home-row">
                    <div class="col-12">
                    <img src="${this.img}">
                    </div>
                </div>
                `
    }
}


class News {

    constructor(name, startdate, seats, seatstaken,shorttext,longtext,price) {
        this.name = name;
        this.startdate = startdate;
        this.seats = seats;
        this.seatstaken = seatstaken;
        this.shorttext = shorttext;
        this.longtext = longtext;
        this.price = price;

    }
    display() {
        return `
            <div class="col-lg-10">
            <div class="card">
                <div class="card-header">
                    ${this.name}
                </div>
                <div class="box">
                    <img class="card-img" src="./img/java.jpg" alt="Card image">
                    <div class="middlebox">
                        <div class="card-body">
                            <ul class="list-group list-group-flush info">
                                <li class="list-group-item">Course start: ${this.startdate}</li>
                                <li class="list-group-item">Seats left: ${this.seats-this.seatstaken} from ${this.seats}</li>
                                <li class="list-group-item">${this.shorttext}</li>
                                <li style="display:none" class="list-group-item">${this.longtext}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="rightbox">
                        <ul class="list-group list-group-flush price">
                            <li class="list-group-item">Price: ${this.price}€</li>
                        </ul>
                        <a href="#!" id="button${n[i].id}" class="btn btn-primary button">Go somewhere</a>
                    </div>
                </div>
                <div class="card-footer">
                    2 days ago
                </div>
            </div>
        </div>
        `




    }
}


class Courses {

    constructor(img, name, blurb, technologies, text, videoUrls, courseSpaceInfo, teachers, news, offers, testimonials) {
        this.img = img,
            this.name = name;
        this.blurb = blurb;
        this.technologies = technologies;
        this.text = text;
        this.videoUrls = videoUrls;
        this.courseSpaceInfo = courseSpaceInfo;
        this.teachers = teachers;
        this.news = news;
        this.offers = offers;
        this.testimonials = testimonials;

    }
    display() {
        return `


            <div class="course-bg container-fluid p-0">
            <div class=title>${this.name}<img src="img/${this.img}.png" id="${this.img}"></div>
            <div class=subtitle>
                ${this.technologies.join(" ++ ")}</div>
            <div class=content-with-sidebar>


                <div class="content_no_sidebar">
                    <h2>About the course</h2>
                    <div class=text>${this.text}</div>
        
                    <div class=vidbox>
                        ${this.videoUrls.map(url => `
                        <iframe width="560" height="315" src="${url}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>` ).join("\n") }
                    </div>
        
                    <h2>Course facilities</h2>
                    <div class=text>${this.courseSpaceInfo}</div>
                </div>
        
                <aside>
                    <div class=sidebar-content>
                        <a href=http://codefactory.wien>
                            <div class="sidebox signup-banner">
                                Sign up now at codefactory.wien!
                            </div>
                        </a>
                        <div class="sidebox newsbox">
                            <div class=box-title>
                                News
                            </div>
                             ${ this.news.map(o => `
                            <div class=news-item>
                                <div>${o.date}</div>
                                <div>${o.text}</div>
                               </div>` ).join("\n") }
                        </div>
                        <div class="sidebox teachersbox">
                            <div class=box-title>
                                Instructors
                            </div>
                            ${ this.teachers.map(o => `
                            <div class=teachers-item>
                                <div>${o.name}</div>
                                <img src="img/${o.img}.jpg">
                                <div>${o.text}</div>
                            </div>` ).join("\n") }
                        </div>
                    </div>
                </aside>
            </div>
        
            <div class=fullwidth-content>
                <div class=sub-headline>
                    offers you can't refuse..!
                </div>
                <div class=offers-box>
                    ${ this.offers.map(o => `
                    <div class=offers-item>
                        <div>${o.name}</div>
                        <div>${o.price} EUR</div>
                        <div>${o.hours} hours</div>
                        <div>${o.text}</div>
                        <a href=http://codefactory.wien>
                            <div class="sidebox signup-banner">
                                Sign up now at codefactory.wien!
                            </div>
                        </a>
                    </div>` ).join(" ") }
                </div>
                <div class=sub-headline>
                    What our students say
                </div>
                <div class=testo-box>
                    ${ this.testimonials.map(o => `
                    <div class=testo-item>
                        <div>${o.name}</div>
                        <q>${o.text}</q>
                    </div>` ).join("\n") }
                </div>
            </div>
        </div>
                `
    }
}

// objs.push(new Home(landing.img));





window.onload = function () {

    for (i in l) {

        homearr.push(new Home(l[i].img, l[i].name));


        $("#nav").prepend(`<li class="nav-item"><a href="#tab-${l[i].id}" class="nav-link active" role="tab" data-toggle="tab">${l[i].name}</a></li>`);

        $("#TabContent").append(`<div class="tab-pane fade show active" id="tab-${l[i].id}" role="tabpanel">
                <div class="row" id="row-${l[i].id}">${homearr[i].display()}</div></div>`)
    }

    
    $("#nav").append(`<li class="nav-item"><a href="#tab-news" class="nav-link" role="tab" data-toggle="tab">NEWS</a></li>`);
    $("#TabContent").append(`<div class="tab-pane fade" id="tab-news" role="tabpanel"></div>`);
    
    
    for (i in n) {

        newsarr.push(new News(n[i].name, n[i].startdate, n[i].seats, n[i].seatstaken, n[i].shorttext, n[i].longtext, n[i].price));
        
        
        $("#tab-news").append(`<div class="row">${newsarr[i].display()}</div>`);
        
        // Discount
        let pricehook = document.querySelectorAll("ul.list-group.list-group-flush.price");
        let infohook = document.querySelectorAll("ul.list-group.list-group-flush.info");
        
        
        if (n[i].seats === n[i].seatstaken) {
            infohook[counter].children[1].innerText = "Booked up"
        }
        
        if (n[i].hasOwnProperty("rabattprice")) {
            
            let obj = document.createElement("li");
            obj.classList.add("list-group-item");
            obj.innerText = "Newprice: " + n[i].rabattprice + "€";
            
            pricehook[counter].firstElementChild.style.textDecoration = "line-through";
            pricehook[counter].appendChild(obj);
        }
        
        let button = document.getElementById(`button${n[i].id}`);
        button.addEventListener("click", function(){
            readMore(event)});

            function readMore(event) {
                let texttoggle = event.srcElement.parentElement.parentElement.children[1].querySelector("ul").children;
                $(texttoggle[2]).toggle("slow");
                $(texttoggle[3]).toggle("slow");
        }

        counter++;


    }


    for (i in x) { //for(i=0;i<x.length;i++){

        objs.push(new Courses(x[i].img, x[i].name, x[i].blurb, x[i].technologies, x[i].text, x[i].videoUrls, x[i].courseSpaceInfo, x[i].teachers, x[i].news, x[i].offers, x[i].testimonials));

        $(`#Courses`).append(`<a class="dropdown-item" href="#tab-${x[i].id}"role="tab" data-toggle="tab">${x[i].name}</a>`);

        $("#TabContent").append(`<div class="tab-pane fade" id="tab-${x[i].id}" role="tabpanel">
                <div class="row col-12" id="row-${x[i].id}">${objs[i].display()}</div></div>`)

    }

}