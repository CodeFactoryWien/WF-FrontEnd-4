const LANG_COURSE_DATA = [
    ////////////////////////////
    {
        id: 6,
        img: "js",
        name: "Javascript",
        blurb: `The language of the web`,
        technologies: ["javascript", "node.js", "jquery", "typescript"],
        text: `<p>The language to Rule All Browsers! Javascript is the only language that
      all browsers in the world understand. It is a great point to start your wondrous
      journey into the world of programming!</p>

      <p>Here are some unrelated things to fill up the example text. I like rain, but only if
      it's not too cold. Being inside while the rain is outside is the optimal configuration,
      if combined with a cup of tea, coffee or tomato soup. Some cookies or a cat are also
      nice too have.</p>

      <p>Here is an example of javascript code</p>
      <pre><code>
        const cats = ["longcat", "purrdurr", "snowy"]
        cats.forEach(cat => console.log(cat))
      </code></pre>

      <p>Here at CodeFactory we like to tame monkeys to write our code. We keep them in little
      coding cages and they do all the work. Sometimes we feed them with bananas, but the bananas
      are mostly virtual. Our coding monkeys sometimes start randomly generating Shakespeare's complete
      works, this is when we know that they need a break.</p>

      <p>Here at CodeFactory we like to tame monkeys to write our code. We keep them in little
      coding cages and they do all the work. Sometimes we feed them with bananas, but the bananas
      are mostly virtual. Our coding monkeys sometimes start randomly generating Shakespeare's complete
      works, this is when we know that they need a break.</p>
    `,
        videoUrls: ["", ""], 
        videoUrls: ["https://www.youtube.com/embed/PkZNo7MFNFg", "https://www.youtube.com/embed/2pL28CcEijU"],
        courseSpaceInfo: `<p>This course is based in our main headquarters. It is very nice there.
      <span class=strikethru>We have a coffee machine with hazelnut flavored coffee</span>we
      have a nice little kitchen with all the necessary implements.</p>

      <p>In our secret base we have a big mainframe system that runs on javascript with a
      magic-based backend. The magic backend sometimes fails when mana runs out, so
      sometimes we need to include our students in big mana-generating rituals. We
      have an extra room for that. We promise that the rituals don't taint people's souls
      (kein rechtsanspruch).</p>
    `,
        teachers: [{
                img: "face1",
                name: "Proggo E. Smartman",
                text: "Proggo has been programming since he was a little baby",
            },
            {
                img: "drill",
                name: "Scriptappa McSupergreat",
                text: "Founding member of Microsoft, Apple, Google and Burger King. Likes cheeseburgers and perl poetry.",
            }
        ],
        news: [{
                date: "2019-08-05",
                text: "New course dates available now! Go to codefactory.wien."
            },
            {
                date: "2019-07-04",
                text: "javascript inventor's cat dies at 88"
            }
        ],
        offers: [{
                name: "Basics",
                price: 3999,
                hours: 220,
                text: `Learn how to manipulate the DOM, how classes work and other nice things`
            },
            {
                name: "Advanced",
                price: 7990.90,
                hours: 190,
                text: `Be initiated into the secret world of frameworks, types and other weird shit.`
            },
            {
                name: "Master",
                price: 14700.90,
                hours: 330,
                text: "Learn how to use rx.js, all the frameworks and the Force."
            }
        ],
        testimonials: [{
                name: "Pupil Van Studyendt, 23, Wien",
                text: "I learneded all the things! I love to learn!"
            },
            {
                name: "Computor Tortupop, 25, Dublin",
                text: "I had a blast and I found friends. I have friends now."
            },
            {
                name: "Learno the wise",
                text: "I now know things that I did not know before about the topic which you speak of?"
            },
        ]
    },

    //////////////////////
    {
        id: 7,
        img: "haskell",
        name: "Haskell",
        blurb: `Haskell is very hard.`,
        technologies: ["ghc", "hackage", "monad theory"],
        text: `<p>Haskell is the hardest language in the world. Actually, no one really wants to
      learn it or use it. It is only for very big brained people.</p>

      <p>When you understand it though, you will be able to warp the fabric of time, control
      All The Things in the Internet Of Things, and challenge God to a game of intergalactic
      chess. You will also learn to communicate with Monads, which are immortal space aliens
      that live on a different plane of reality.</p>

      <p>Haskell is the purest of all the languages, white as freshly fallen snow and black
      as the night sky in outermost space. Here is a code example, the quicksort algorithm:</p>
      <pre></code>
        qsort [] = []
        qsort (x:xs) = qsort [y | y <- xs, y < x] ++ [x] ++ qsort [y | y <- xs, y >= x]
      </code></pre>

      <p>Here at CodeFactory we like to tame monkeys to write our code. We keep them in little
      coding cages and they do all the work. Sometimes we feed them with bananas, but the bananas
      are mostly virtual. Our coding monkeys sometimes start randomly generating Shakespeare's complete
      works, this is when we know that they need a break.</p>

      <p>Here at CodeFactory we like to tame monkeys to write our code. We keep them in little
      coding cages and they do all the work. Sometimes we feed them with bananas, but the bananas
      are mostly virtual. Our coding monkeys sometimes start randomly generating Shakespeare's complete
      works, this is when we know that they need a break.</p>
    `,
        videoUrls: ["", "", ""],
        videoUrls: ["https://www.youtube.com/embed/5SD2j9k6E7c", "https://www.youtube.com/embed/2f-89z1zkGQ", "https://www.youtube.com/embed/iSmkqocn0oQ"],
        courseSpaceInfo: `<p>The haskell course is held at our special facilities in space. Our space base alternates
      between orbiting the moon and mars and is reached with a special reusable rocket ship supplied personally
      by Elon Musk</p>

      <p>In this course, every students is supplied with a stimulant injection device, which directly injects
      stimulants into your bloodstream or your brain. You can choose between caffeine, alcohol, THC, glucose
      and many other stimulants. Even mix and match if you want!</p>
    `,
        teachers: [{
                img: "ork",
                name: "Gorgorog Mogotron",
                text: `As a young boy I always wanted to fight dragons with the mighty sword of Haskell,
          but then I took an arrow to the knee. This is why I teach the next generation of
          glorious code warriors at CodeFactory today, to rise up and take my place.
        `
            },
            {
                img: "robot",
                name: "Blipbloop Robotoface",
                text: "Haskell is best language! I teach you Haskell, you teach me about the ways of the Human.",
            },
            {
                img: "gadget",
                name: "Inspector Gadget",
                text: "I control all my gadgets with Haskell code. Now retired as a hero, I will teach you everything you need to know.",
            }
        ],
        news: [{
                date: "2019-05-04",
                text: "New course starts July! Sign up at codefactory.wien"
            },
            {
                date: "2019-01-01",
                text: "Haskell Curry's ghost spotted in cyberspace"
            },
            {
                date: "2018-05-05",
                text: "Hacker destroys all of google with 3 lines of Haskell"
            }
        ],
        offers: [{
                name: "Super Basic",
                price: 50000,
                hours: 699,
                text: `The simple stuff to get you started. Write the best "Hello World" program in Haskell!`
            },
            {
                name: "Pretty Basic",
                price: 30999.99,
                hours: 250,
                text: `Learn how to write a program that adds two numbers and prints the result on screen!`
            },
            {
                name: "Basic",
                price: 40880.95,
                hours: 300,
                text: "Learn how to write a unit converter for multiple different units!"
            },
            {
                name: "Super Master Advanced",
                price: 99999.99,
                hours: 950,
                text: "Only for people in the know. Discover the innermost secrets of the Universe."
            }
        ],
        testimonials: [{
                name: "Processorman Motherboardov",
                text: "I still don't know how to use Haskell, but I think I get it."
            },
            {
                name: "Zenman Jedimaster",
                text: "Finally I have reached the state of Ultimate Nothingness, in which I don't program Haskell in order to program Haskell. Thank you."
            },
            {
                name: "Hacko Wacko",
                text: "The secret knowledge I acquired in this course allowed me to hack the pentagon. Best course 10/10!"
            }
        ]
    },

    ////////////////////////////////
    {
        id: 8,
        img: "brainfuck",
        name: "Brainfuck",
        blurb: `The only language that can &gt;&gt;&gt;--&lt;-&gt;:..&gt;[[]]&gt;&lt;&lt;&lt;&lt;&lt;`,
        technologies: ["brainfuck-cli", "bfck-web", "Funckular", "brainLibs"],
        text: `<p>Ever wanted to write programming code that looks like censored offensive words in
      a comic book? You can do that now with the glorious brainfuck language, our newest addition
      to our diverse course roster.</p>

      <p>With brainfuck, it's all about the experience, not so much about the results. This language
      is a lifestyle, a statement, a political movement.</p>

      <p>Here is quicksort in brainfuck</p>
      <pre><code>
        &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;,[&gt;,]&lt;[[&gt;&gt;&gt;+&lt;&lt;&lt;-]&gt;[&lt;+&gt;-]&lt;+&lt;]&gt;[&lt;&lt;&lt;
        &lt;&lt;&lt;&lt;&lt;+&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;-]&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;[[&gt;&gt;+ &gt;+&gt;&gt;+&lt;
        &lt;&lt;&lt;&lt;-]&gt;&gt;[&lt;&lt;+&gt;&gt;-]&lt;[&gt;+&gt;&gt;+&gt;&gt;+&lt;&lt;&lt;&lt;&lt;-]&gt;[&lt;+&gt;-]&gt;
        &gt;&gt;&gt;[-&lt;-&gt;]+&lt;[&gt;-&gt;+&lt;&lt;-[&gt;&gt;- &lt;&lt;[-]]]&gt;[&lt;+&gt;-]&gt;[&lt;&lt;+&gt;&gt;-]&lt;
        +&lt;[-&gt;-&lt;&lt;[-]&lt;[-]&lt;&lt;[-]&lt;[[&gt;+&lt;-]&lt;]&gt;&gt;[&gt;]&lt;+&gt;&gt;&gt;&gt;]&gt;[-&lt; &lt;
        +[-[&gt;+&lt;-]&lt;-[&gt;+&lt;-]&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;[&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;+&gt;&gt;&gt;&gt;
        &gt;&gt;&gt;&gt;-]&lt;&lt;&lt;&lt;&lt;&lt;]&lt;&lt;[&gt;&gt;+&lt;&lt;-]&gt;[&gt;[&gt;+&gt; &gt;+&lt;&lt;&lt;-]&gt;
        [&lt;+&gt;-]&gt;&gt;&gt;&gt;&gt;&gt;[&lt;+&lt;+&gt;&gt;-]&lt;[&gt;+&lt;-]&lt;&lt;&lt;[&gt;+&gt;[&lt;-]&lt;[&lt;
        ]&gt;&gt;[&lt;&lt;+&gt;[-]+&gt;-]&gt;-&lt;&lt;- ]&gt;&gt;[-]+&lt;&lt;&lt;[-&gt;&gt;+&lt;&lt;]&gt;&gt;[-&gt;-&lt;
        &lt;&lt;&lt;&lt;[&gt;+&lt;-]&lt;[&gt;+&lt;-]&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;[&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;+&gt;
        &gt;&gt;&gt;&gt;&gt;&gt;&gt;-] &lt;&lt;]&gt;[[-]&lt;&lt;&lt;&lt;&lt;&lt;[&gt;&gt;+&gt;&gt;&gt;&gt;&gt;+&lt;&lt;&lt;
        &lt;&lt;&lt;&lt;-]&gt;&gt;[&lt;&lt;+&gt;&gt;-]&gt;&gt;&gt;&gt;&gt;[-[&gt;&gt;[&lt;&lt;&lt;+&gt;&gt;&gt;-]&lt;
        [&gt;+&lt;-] &lt;-[&gt;+&lt;-]&gt;]&lt;&lt;[[&gt;&gt;+&lt;&lt;-]&lt;]]&gt;]&lt;&lt;&lt;&lt;&lt;&lt;-]&gt;[&gt;&gt;&gt;
        &gt;&gt;&gt;+&lt;&lt;&lt;&lt;&lt;&lt;-]&lt;&lt;[[&gt;&gt;&gt;&gt;&gt;&gt;&gt;+&lt;&lt;&lt;&lt;&lt;&lt;&lt; -]&gt;
        [&lt;+&gt;-]&lt;+&lt;]&lt;[[&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;+&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;-]&gt;&gt;[&lt;+&gt;
        -]&lt;+&lt;&lt;]&gt;+&gt;[&lt;-&lt;&lt;[&gt;+&lt;-]&lt;[&lt;]&gt;[[&lt; +&gt;-]&gt;]&gt;&gt;&gt;[&lt;&lt;&lt;&lt;+&gt;
        &gt;&gt;&gt;-]&lt;&lt;[&lt;+&gt;-]&gt;&gt;]&lt;[-&lt;&lt;+&gt;&gt;]&gt;&gt;&gt;]&lt;&lt;&lt;&lt;&lt;&lt;]&gt;&gt;&gt;
        &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;[.&gt;]
      </code></pre>

      <p>We're no strangers to love You know the rules and so do I A full
      commitment's what I'm thinking of You wouldn't get this from any other guy</p>

      <p> [Pre-Chorus 1] I just wanna tell you how I'm feeling Gotta make you
      understand

      [Chorus] Never gonna give you up Never gonna let you down Never gonna run
      around and desert you Never gonna make you cry Never gonna say goodbye
      Never gonna tell a lie and hurt you</p>

      <p>[Verse 2] We've known each other for so long Your heart's been aching but
      you're too shy to say it Inside we both know what's been going on We know
      the game and we're gonna play it</p>
    `,
        videoUrls: ["", "", ""],
        videoUrls: ["https://www.youtube.com/embed/-3C200nCwpk", "https://www.youtube.com/embed/nyfj3O6sYao", "https://www.youtube.com/embed/tcHaMWktCYE"],
        courseSpaceInfo: `<p>Since learning brainfuck sometimes has weird effects on people's brains,
      we conduct our brainfuck course in our special personal safety facilities. Our CodeSafectory offices
      have soft, pillow-padded walls, a kitchen without hot elements and sharp objects and a dedicated
      100% soundproof room for crying, crazy shouting and desperate shrieking.</p>

      <p>What is love Oh baby, don't hurt me Don't hurt me no more Oh, baby don't
      hurt me Don't hurt me no more What is love Yeah Oh, I don't know why
      you're not there I give you my love, but you don't care So what is right
      and what is wrong Gimme a sign What is love Oh baby, don't hurt me Don't
      hurt me no more What is love Oh baby, don't hurt me Don't hurt me no more
      Whoa whoa whoa, oooh oooh Whoa whoa whoa, oooh oooh Oh, I don't know, what</p>
      <p>can I do What else can I say, it's up to you I know we're one, just me and
      you I can't go on What is love Oh baby, don't hurt me Don't hurt me no
      more What is love Oh baby, don't hurt me Don't hurt me no more Whoa whoa
      whoa, oooh oooh Whoa whoa whoa, oooh oooh What is love, oooh, oooh, oooh
      What is love, oooh, oooh, oooh What is love Oh baby</p>
    `,
        teachers: [{
                img: "crazyman",
                name: "Brian Fakhed",
                text: "I always wanted to teach this beautiful understated language to people and now I can finally murder my family!",
            },
            {
                img: "shining",
                name: "Jack van Hack",
                text: "Brainfuck will make you feel like work and play are the same thing! Come join the movement",
            },
        ],
        news: [{
                date: "2018-12-24",
                text: "merry christmas! I don't know where I live anymore!"
            },
            {
                date: "2018-04-01",
                text: "New course starts today! Or maybe not! Only one way to find out!"
            }
        ],
        offers: [{
                name: "lvl 1",
                price: 1337,
                hours: 137,
                text: `The basic course in brainfuck will teach you all the basic unpronounceable characters you need`
            },
            {
                name: "lvl 2",
                price: 13377,
                hours: 173,
                text: `make your refrigerator heat food and your oven freeze fruchtzwergs with brainfuck`
            },
            {
                name: "lvl 99",
                price: 17733,
                hours: 733,
                text: `???`
            }
        ],
        testimonials: [{
                name: "E. Musk",
                text: "I was very smart when I started that course, but now I understand that only crazy chaos matters, thanks to u guysss"
            },
            {
                name: "Zflz FZZZlllfFZ",
                text: "CodEfacotry? What? Whaaat? No? No! NOOO! What? No! No no no! Yeah! ahahhAHaHAhAa"
            },
            {
                name: "mister mittens",
                text: "wierd shit! my brain hurts now! thank you codefactory NOT!"
            }
        ]
    }
]

const HOME_CONTENT = [{
    id: 0,
    img: "landing_narrow",
    name: "HOME",
    blurb: ``,
    technologies: ["", "", ""],
    text: ``,
    videoUrls: ["", "", ""],
    courseSpaceInfo: ``
}]

const newslist = [{
        "id": 1,
        "name": "See Rammstein Live at Code Factory!",
        "img": "notrammstein.jpg",
        "price": "",
        "rabattprice": "",
        "startdate": "",
        "shorttext": "Rammstein are coming to Code Factory at 24.12.2019 to do one of their famous stealth Christmas concerts!",
        "longtext": `<p>Everybody and their grandma loves Rammstein, and we here at CF do too! That's why we booked the kings of
          bubblegum nihilist metal-pop to play live on our balcony. Let's rock the old farts who live around our block right
          out of their old people socks! Free entry!</p>
        `,
        "seats": "",
        "seatstaken": "",
        "timestamp": "2019-11-06",
        "category": "News"
    },
    {
        "id": 2,
        "name": "FORTRAN course open for registration",
        "img": "oldlaptop.jpg",
        "price": 12,
        "rabattprice": 10,
        "startdate": "1977-07-07",
        "shorttext": "Learn the cutting edge programming language of Tomorrow",
        "longtext": `
          <p>Your Minecraft server can be ddosed so easily. I can use my Google
          downstream tcp ip layer 7 http protocol to easily penetrate the java
          c++ router metasploit code, from there I can run a reverse upstream python
          packet to hack into the mainframe of your server, then I can download the
          database dumping IP protocol c++ python JavaScript ssh graphics card
          packets to disable your Minecraft transmission cmatrix ping nestat sockets
          microwave processing computer scratch IP Address. Your Minecraft server
          will be down in milliseconds. Don’t mess with me, skiddy.</p>
          <p>Your Minecraft server can be ddosed so easily. I can use my Google
          downstream tcp ip layer 7 http protocol to easily penetrate the java
          c++ router metasploit code, from there I can run a reverse upstream python
          packet to hack into the mainframe of your server, then I can download the
          database dumping IP protocol c++ python JavaScript ssh graphics card
          packets to disable your Minecraft transmission cmatrix ping nestat sockets
          microwave processing computer scratch IP Address. Your Minecraft server
          will be down in milliseconds. Don’t mess with me, skiddy.</p>
        `,
        "seats": 20,
        "seatstaken": 20,
        "timestamp": "1977-02-10",
        "category": "Course"

    },
    {
        "id": 3,
        "name": "Haskell Basic course open for registration",
        "img": "haskell-guy.jpeg",
        "price": 1200,
        "rabattprice": 1000,
        "startdate": "05.12.2017",
        "shorttext": "Register now!",
        "longtext": `
          <p>Every night in my dreams I see you, I feel you That is how I know you
          go on Far across the distance And spaces between us You have come to
          show you go on Near, far, wherever you are I believe that the heart does
          go on Once more you ope</p><p>n the door And you're here in my heart And my heart
          will go on and on Love can touch us one time And last for a lifetime And
          never let go 'til we're gone Love was when I loved you One true time
          I hold to In my life we'll al</p><p>ways go on Near, far, wherever you are
          I believe that the heart does go on Once more you open the door And you're
          here in my heart And my heart will go on and on You're here, there's
          nothing I fear And I know that my h</p><p>eart will go on We'll stay forever this
          way You are safe in my heart And my heart will go on and on</p>
        `,
        "seats": 10,
        "seatstaken": 2,
        "timestamp": "2017-05-09",
        "category": "Course"

    },
    {
        "id": 4,
        "name": "CodeFactory opens Mars branch",
        "img": "mars.jpg",
        "price": "",
        "rabattprice": "",
        "startdate": "",
        "shorttext": "Is there Life On Mars? YES - and it's HACKIN'",
        "longtext": `
          <p>After years of preparation and base-building we finally announce proudly the opening of
          our first Marsian CodeFactory company branch! There will be a fancy opening ceremony 
          and everything, where King Elon The Great will cut the Ceremonial Ribbon. The date is
          still T.B.A., but it will be BRUHSOME!</p>
          <p>Afterparty in the King's Antigrav Chambers!</p>
        `,
        "seats": "",
        "seatstaken": "",
        "timestamp": "2019-07-09",
        "category": "News"

    },
    {
        "id": 5,
        "name": "Java course",
        "img": "java.jpg",
        "price": 1200,
        "rabattprice": 1000,
        "startdate": "05.12.2018",
        "shorttext": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor",
        "longtext": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor",
        "seats": 20,
        "seatstaken": 14,
        "timestamp": "2018-07-12",
        "category": "Course"

    },
].sort((a,b) => new Date(a.timestamp) > new Date(b.timestamp) ? -1 : 1)
