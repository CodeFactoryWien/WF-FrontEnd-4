objs = [];

class Language{
    
    constructor(img,name,blurb,technologies,text,videoUrls,courseSpaceInfo,teachers,news,offers,testimonials){
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
    display(){
        return `
        <div>
        <div class=title>
        ${this.name}
        <img src=${this.img}>
        </div>
        <div class=subtitle>
        ${this.technologies.join(" ++ ")}
        </div>
        <div class=content-with-sidebar>
        
        <div>
        <h2>About the course</h2>
        <div class=text>${this.text}</div>
        
        <div class=vidbox>
        ${
            this.videoUrls.map(url =>
                `<iframe width="560" height="315" src="${url}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
                ).join("\n")
            }
            </div>
            
            <h2>Course facilities</h2>
            <div class=text>${this.courseSpaceInfo}</div>
            </div>
            
            <aside>
            <div class=sidebar-content>
            <a href=http://codefactory.wien><div class="sidebox signup-banner">
            Sign up now at codefactory.wien!
            </div></a>
            <div class="sidebox newsbox"> 
            <div class=box-title>
            News
            </div>
            ${
                this.news.map(o =>
                    `<div class=news-item><div>${o.date}</div><div>${o.text}</div></div>`
                    ).join("\n")
                }
                </div>
                <div class="sidebox teachersbox">
                <div class=box-title>
                Instructors
                </div>
                ${
                    this.teachers.map(o => 
                        `<div class=teachers-item>
                        <div>${o.name}</div>
                        <img src=${o.img}>
                        <div>${o.text}</div>
                        </div>`
                        ).join("\n")
                    }
                    </div>
                    </div>
                    </aside>
                    </div>
                    
                    <div class=fullwidth-content>
                    <div class=sub-headline>
                    offers you can't refuse..!
                    </div>
                    <div class=offers-box>
                    ${
                        this.offers.map(o =>
                            `<div class=offers-item>
                            <div>${o.name}</div>
                            <div>${o.price} EUR</div>
                            <div>${o.hours} hours</div>
                            <div>${o.text}</div>
                            <a href=http://codefactory.wien><div class="sidebox signup-banner">
                            Sign up now at codefactory.wien!
                            </div></a>
                            </div>`
                            )
                        }
                        </div>
                        <div class=sub-headline>
                        What our students say
                        </div>
                        <div class=testo-box>
                        ${
                            this.testimonials.map(o =>
                                `<div class=testo-item>
                                <div>${o.name}</div>
                                <q>${o.text}</q>
                  </div>`
                  ).join("\n")
                }
                </div>
                </div>
                </div>
                `
            }
        }
        
        const x = LANG_COURSE_DATA;
        window.onload = function(){
            
            for(i=0;i<x.length;i++){
                objs.push(new Language(x[i].img, x[i].name, x[i].blurb, x[i].technologies, x[i].text, x[i].videoUrls, x[i].courseSpaceInfo, x[i].teachers, x[i].news, x[i].offers, x[i].testimonials));
                
                $("#tabs").append(`<a class="dropdown-item" href="#tab-${x[i].id}"role="tab" data-toggle="tab">${x[i].name}</a>`);
                
                $("#TabContent").append(`<div class="tab-pane fade" id="tab-${x[i].id}" role="tabpanel">
                <div class="row" id="row-${x[i].id}">${objs[i].display()}</div></div>`)
                
                
            }
        }