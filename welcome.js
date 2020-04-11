class Welcome {
    constructor(){
        this.input = createInput("Name");
        this.button = createButton('PROCEED');
        this.greeting = createElement('h2');
        this.buttonSound = loadSound('Button-click-sound.mp3');
    }

    appState = 0;

    hide(){
        this.greeting.hide();
    }

    display(){
        background(welcomebg);
       

        this.input.position(350/2 - 85, 400);
        this.button.position(350/2 - 35, 430);

        this.button.mousePressed(()=>{
            this.buttonSound.play();
            this.input.hide();
            this.button.hide();
            var username = this.input.value();
            this.greeting.html("Hello <br>" + username);
            this.greeting.style("color", "white");
            this.greeting.style("font-size", "15px");
            this.greeting.position(350/2 + 120, 627);
            Welcome.appState = 1;
        });

        

        console.log(frameCount);
        
    }
}