//places class Capital!!
class places {
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

//restaurants class
class restaurants extends places{
    phoneNumber = "";
    type = "";
    homePage = "";
    constructor(name,city,zip,address,image,phoneNumber,type,homePage){
        super(name,city,zip,address,image);
        this.phoneNumber = phoneNumber;
        this.type = type;
        this.homePage = homePage;
    }
    display(){
        return `${super.display()}
                <p><b>Type: </b>${this.type}</p>
                <p><b>Phone: <b>${this.phoneNumber}</p>
                <p><a href="${this.homePage}">${this.homePage}</a></p>`
    }
}
//events class
class events extends places{
    eventDate = "";
    eventTime = "";
    ticketPrice = "";
    homePage = "";
    constructor(name,city,zip,address,image,eventDate,eventTime,ticketPrice,homePage){
        super(name,city,zip,address,image);
        this.eventDate = eventDate;
        this.eventTime = eventTime;
        this.ticketPrice = ticketPrice;
        this.homePage = homePage;
    }
    display(){
        return `${super.display()}
                <p><b>Date: </b>${this.eventDate}</p>
                <p><b>Time: </b>${this.eventTime}</p>
                <p><b>Price: </b>${this.ticketPrice}</p>
                <p><a href="${this.homePage}">${this.homePage}</a></p>`
            }
        }
        
        //FUNCTION FOR ADDING OBJECTS IN PROGRESS
window.onload = selVal;

var select = document.getElementById("select");
select.addEventListener("change",selVal);
var form = document.getElementById("form");
var input = `<input id="nameInput" type="text">
            <input id="cityInput" type="text">
            <input id="zipInput" type="text">
            <input id="addressInput" type="text">
            <input id="imageInput" type="text">`


        function selVal(){
            var opt = select.options[select.selectedIndex];
            console.log(opt.value);
    
            if(select.value == "Place") {
                form.innerHTML = input;
    
            } if (select.value == "Restaurant") {
                form.innerHTML = `<input id="nameInput" type="text">
                        <input id="cityInput" type="text">
                        <input id="zipInput" type="text">
                        <input id="addressInput" type="text">
                        <input id="typeInput" type="text">
                        <input id="phoneInput" type="text">
                        <input id="homeInput" type="text">
                        <input id="imageInput" type="text">`
            } if (select.value == "Event") {
                `<input id="nameInput" type="text">
                        <input id="cityInput" type="text">
                        <input id="zipInput" type="text">
                        <input id="addressInput" type="text">
                        <input id="dateInput" type="text">
                        <input id="timeInput" type="text">
                        <input id="priceeInput" type="text">
                        <input id="homeInput" type="text">
                        <input id="imageInput" type="text">`
    
            }
        }

        
        var addBtn = document.getElementById("addBtn");
        addBtn.addEventListener("click", newPlace);
        
        function newPlace(){

            var nameInput: string = document.getElementById("nameInput").value;
            var cityInput:string = document.getElementById("cityInput").value;
            var zipInput:string = document.getElementById("zipInput").value;
            var addressInput:string = document.getElementById("addressInput").value;
            var imageInput:string = document.getElementById("imageInput").value;
            
            objs.push(new places(`${nameInput}`,`${cityInput}`,`${zipInput}`,`${addressInput}`,`${imageInput}`));
            document.getElementById(`${objs[objs.length-1].constructor.name}`).innerHTML += `<div class="col-md-6 col-lg-4 display-${objs[objs.length-1].constructor.name}">${objs[objs.length-1].display()}</div>`
            
         }
        

        //array holding everything
        var objs = [];

        //Locations
        objs.push(new places("Karlsplatz","Vienna","1010","Karlsplatz 01","./img/karl.jpg"));
        objs.push(new places("Zoo Vienna","Vienna","1130","Maxingstr 13b","./img/zoo.jpg"))
        objs.push(new places("Naschmarkt Flohmarkt","Vienna","1060","Linke Wienzeile","./img/flohmarkt.jpg"))
        
        //Restaurants
        objs.push(new restaurants("Lemon Leaf","Vienna","1050","Kettenbrückengasse 19","./img/lemon.png","06505411114","thai","www.lemonleaf.at"));
        objs.push(new restaurants("Wiener Deewan","Vienna","1019","Liechtensteinstraße 10","./img/deewan.jpg","01 9251185","Pakistani","www.deewan.at"))
        objs.push(new restaurants("Disco Volante","Vienna","1060","Gumpendorfer Str. 98","./img/volante.png","0664 1952545","Pizzeria","www.disco-volante.at"))
        
        //Events
        objs.push(new events("Kris Kristofferson","Vienna","1150","Stadthalle","./img/kris.jpg","Fr., 15.12.2019","20:00","58,50€","www.kristofferson.com"));
        objs.push(new events("Vinzi\'s Freedom Flower Fiesta","Vienna","0420","Space","./img/vinzi.jpg","Every Day","All Day","Never for Money, Allways for Love","www.vinzi.space"))
        objs.push(new events("Lemmy Revival","Vienna","1050","Hartmanngasse 12","./img/lemmy.jpg","Thu. 31.10.2019","00:00","Free","www.longlivelemmy.com"))
        

        //display objects on page
        window.onload = function(){
            for(var i=0;i<objs.length;i++){
                document.getElementById(`${objs[i].constructor.name}`).innerHTML += `<div class="col-md-6 col-lg-4 display border-bottom">${objs[i].display()}</div>`
                //ALSO PART OF THE ADDING FUNCTION:
                }
            }