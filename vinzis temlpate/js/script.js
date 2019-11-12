//places class Capital!!
class Language {
    name = "";
    city = "";
    zip = "";
    address = "";
    image = "";
    constructor(name,city,zip,address,image){
        this.name = name;
        this.city = city;
        this.zip = zip;
        this.address = address;
        this.image= image;
    }
    display(){
        return `<h5 class="name"><b>${this.name}</b></h5>
                <div class="image-box"><img class="d-none d-sm-block image" src="${this.image}"></div>
                <p><b>${this.address}, ${this.zip} ${this.city}</b></p>`
    }
}


    
        //array holding everything
        var objs = [];
        var tabs = [];

        for(i=0;i<LANG_COURSE_EXAMPLE.length;i++){
            $("#tabs").append(`<li class="nav-item"><a href="#${LANG_COURSE_EXAMPLE[i].id}" class="nav-link active" role="tab" data-toggle="tab">${LANG_COURSE_EXAMPLE[i].name}</a></li>`)
            $("TabContent").append(`<div class="tab-pane fade" id="${LANG_COURSE_EXAMPLE[i].id}" role="tabpanel"><div class="row" id="${LANG_COURSE_EXAMPLE[i].name}s"></div></div>`)

        objs.push(new Language(`${LANG_COURSE_EXAMPLE[i].name}`,`${LANG_COURSE_EXAMPLE[i].blurb}`,"1010","Karlsplatz 01","./img/karl.jpg"));
        }

        //display objects on page
        window.onload = function(){
            for(var i=0;i<objs.length;i++){
                if()
                console.log(LANG_COURSE_EXAMPLE[i].id)
                var x = LANG_COURSE_EXAMPLE[i].id;
                document.getElementById(`${x}`).innerHTML += `<div class="col-md-6 col-lg-4 display border-bottom">${objs[i].display()}</div>`
               
            }
            }