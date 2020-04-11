class Main {
    constructor(){
        this.tipsButton = createButton('Safety Tips <br> For Women');
        this.lawsButton = createButton('Women <br> Safety Laws');
        this.escapeButton = createButton(' Escaping  <br>  Threat -Tips');
        this.defenceButton = createButton('Self Defence<br>Videos');
        this.sosButton = createButton('SOS<br>Alert');
        this.infoButton = createButton('(i)');

        this.buttonSound = loadSound('Button-click-sound.mp3');

        this.resetButton = createButton('🏠');

        this.tips2button = createButton('⨠');
        this.tips3button = createButton('⨠');

        this.defence2button = createButton('⨠');
        this.defence3button = createButton('⨠');
        this.defence4button = createButton('⨠');
        this.video1 = createA('https://youtu.be/T7aNSRoDCmg','Bright Side Self Defence<br>Video');
        this.video2 = createA('https://youtu.be/Gx3_x6RH1J4','5-Minutes Self Defence<br>Trick Video');

        this.policestation = createA('https://www.google.co.in/maps/search/nearby+police+station','Nearby Police Stations');
        this.policecall = createA("tel:+919622354935",'Call Police');
        this.otherno = createButton(' Other  <br> Numbers');

        this.womencall = createA("tel:+919622354935",'📞');
        this.emergencycall = createA("tel:+919622354935",'📞');
        this.ncwcall = createA("tel:+919622354935",'📞');
        this.ambulancecall = createA("tel:+919622354935",'📞');

        this.escape2button = createButton('⨠');
        this.escape3button = createButton('⨠');
        this.escape4button = createButton('⨠');
        this.escape5button = createButton('⨠');

    }
    
    display(){
        background(bgmain);

        this.tipsButton.style('background-color','#5D3A8A');
        this.tipsButton.style('color','white');
        this.tipsButton.style('font-size','22px');
        this.tipsButton.position(350/2-150, 250);

            this.tips2button.style('background-color','#5D3A8A');
            this.tips2button.style('color','white');
            this.tips2button.hide();
            this.tips2button.position(320, 355);

            this.tips3button.style('background-color','#5D3A8A');
            this.tips3button.style('color','white');
            this.tips3button.hide();
            this.tips3button.position(320, 355);


        this.lawsButton.style('background-color','#5D3A8A');
        this.lawsButton.style('color','white');
        this.lawsButton.style('font-size','22px');
        this.lawsButton.position(350/2 + 20, 250);


        this.escapeButton.style('background-color','#5D3A8A');
        this.escapeButton.style('color','white');
        this.escapeButton.style('font-size','22px');
        this.escapeButton.position(350/2-150, 320);

            this.escape2button.style('background-color','#5D3A8A');
            this.escape2button.style('color','white');
            this.escape2button.hide();
            this.escape2button.position(320, 375);

            this.escape3button.style('background-color','#5D3A8A');
            this.escape3button.style('color','white');
            this.escape3button.hide();
            this.escape3button.position(320, 375);

            this.escape4button.style('background-color','#5D3A8A');
            this.escape4button.style('color','white');
            this.escape4button.hide();
            this.escape4button.position(320, 375);

            this.escape5button.style('background-color','#5D3A8A');
            this.escape5button.style('color','white');
            this.escape5button.hide();
            this.escape5button.position(320, 375);


        this.defenceButton.style('background-color','#5D3A8A');
        this.defenceButton.style('color','white');
        this.defenceButton.style('font-size','22px');
        this.defenceButton.position(350/2+20, 320);

            this.defence2button.style('background-color','#5D3A8A');
            this.defence2button.style('color','white');
            this.defence2button.hide();
            this.defence2button.position(320, 375);

            this.defence3button.style('background-color','#5D3A8A');
            this.defence3button.style('color','white');
            this.defence3button.hide();
            this.defence3button.position(320, 375);

            this.defence4button.style('background-color','#5D3A8A');
            this.defence4button.style('color','white');
            this.defence4button.hide();
            this.defence4button.position(320, 375);

            this.video1.style('color','pink');
            this.video1.style('font-size','22px');
            this.video1.position(70,330);
            this.video1.hide();

            this.video2.style('color','pink');
            this.video2.style('font-size','22px');
            this.video2.position(70,580);
            this.video2.hide();


        this.sosButton.style('background-color','red');
        this.sosButton.style('color','white');
        this.sosButton.style('font-size','60px');
        this.sosButton.style('border-radius','30%');
        this.sosButton.position(350/2-65,420);

            this.policestation.style('color','#96F291');
            this.policestation.style('font-size','22px');
            this.policestation.hide();
            this.policestation.position(70,550);

            this.policecall.style('color','#00ffff');
            this.policecall.style('font-size','22px');
            this.policecall.hide();
            this.policecall.position(70,300);

            this.otherno.style('background-color','#ff0000');
            this.otherno.style('color','white');
            this.otherno.style('font-size','22px');
            this.otherno.hide();
            this.otherno.position(200,290);

            this.womencall.style('color','white');
            this.womencall.style('font-size','22px');
            this.womencall.hide();
            this.womencall.position(310,300);

            this.emergencycall.style('color','white');
            this.emergencycall.style('font-size','22px');
            this.emergencycall.hide();
            this.emergencycall.position(310,370);

            this.ncwcall.style('color','white');
            this.ncwcall.style('font-size','22px');
            this.ncwcall.hide();
            this.ncwcall.position(310,440);

            this.ambulancecall.style('color','white');
            this.ambulancecall.style('font-size','22px');
            this.ambulancecall.hide();
            this.ambulancecall.position(310,510);


        this.infoButton.style('border-radius','80%');
        this.infoButton.style('font-size','15px');
        this.infoButton.position(320,677);


        this.resetButton.style('background-color','#5D3A8A');
        this.resetButton.style('color','white');
        this.resetButton.position(320,100);



        this.tipsButton.mousePressed(()=>{
            this.buttonSound.play();
            this.tipsButton.hide();
            this.lawsButton.hide();
            this.escapeButton.hide();
            this.defenceButton.hide();
            this.sosButton.hide();
            this.infoButton.hide();
            background(tips1Img);
            Main.tipslooking = true;
            this.tips2button.show();
        });

            this.tips2button.mousePressed(()=>{
                this.buttonSound.play();
                this.tipsButton.hide();
                this.lawsButton.hide();
                this.escapeButton.hide();
                this.defenceButton.hide();
                this.sosButton.hide();
                this.infoButton.hide();
                background(tips2Img);
                Main.tipslooking = true;
                this.tips3button.show();
                this.tips2button.hide();
            });

            this.tips3button.mousePressed(()=>{
                this.buttonSound.play();
                this.tipsButton.hide();
                this.lawsButton.hide();
                this.escapeButton.hide();
                this.defenceButton.hide();
                this.sosButton.hide();
                this.infoButton.hide();
                background(tips3Img);
                Main.tipslooking = true;
                this.tips3button.hide();
            });


        this.lawsButton.mousePressed(()=>{
            this.buttonSound.play();
            this.tipsButton.hide();
            this.lawsButton.hide();
            this.escapeButton.hide();
            this.defenceButton.hide();
            this.sosButton.hide();
            this.infoButton.hide();
        });


        this.escapeButton.mousePressed(()=>{
            this.buttonSound.play();
            this.tipsButton.hide();
            this.lawsButton.hide();
            this.escapeButton.hide();
            this.defenceButton.hide();
            this.sosButton.hide();
            this.infoButton.hide();
            background(escape1);
            this.escape2button.show();
        });

            this.escape2button.mousePressed(()=>{
                this.buttonSound.play();
                this.tipsButton.hide();
                this.lawsButton.hide();
                this.escapeButton.hide();
                this.defenceButton.hide();
                this.sosButton.hide();
                this.infoButton.hide();
                background(escape2);
                Main.tipslooking = true;
                this.escape3button.show();
                this.escape2button.hide();
            });

            this.escape3button.mousePressed(()=>{
                this.buttonSound.play();
                this.tipsButton.hide();
                this.lawsButton.hide();
                this.escapeButton.hide();
                this.defenceButton.hide();
                this.sosButton.hide();
                this.infoButton.hide();
                background(escape3);
                Main.tipslooking = true;
                this.escape4button.show();
                this.escape3button.hide();
            });

            this.escape4button.mousePressed(()=>{
                this.buttonSound.play();
                this.tipsButton.hide();
                this.lawsButton.hide();
                this.escapeButton.hide();
                this.defenceButton.hide();
                this.sosButton.hide();
                this.infoButton.hide();
                background(escape4);
                Main.tipslooking = true;
                this.escape5button.show();
                this.escape4button.hide();
            });

            this.escape5button.mousePressed(()=>{
                this.buttonSound.play();
                this.tipsButton.hide();
                this.lawsButton.hide();
                this.escapeButton.hide();
                this.defenceButton.hide();
                this.sosButton.hide();
                this.infoButton.hide();
                background(escape5);
                Main.tipslooking = true;
                this.escape5button.hide();
            });


        this.defenceButton.mousePressed(()=>{
            this.buttonSound.play();
            this.tipsButton.hide();
            this.lawsButton.hide();
            this.escapeButton.hide();
            this.defenceButton.hide();
            this.sosButton.hide();
            this.infoButton.hide();
            background(defence1Img);
            this.defence2button.show();
        });

            this.defence2button.mousePressed(()=>{
                this.buttonSound.play();
                this.tipsButton.hide();
                this.lawsButton.hide();
                this.escapeButton.hide();
                this.defenceButton.hide();
                this.sosButton.hide();
                this.infoButton.hide();
                background(defence2Img);
                this.defence2button.hide();
                this.defence3button.show();
            });

            this.defence3button.mousePressed(()=>{
                this.buttonSound.play();
                this.tipsButton.hide();
                this.lawsButton.hide();
                this.escapeButton.hide();
                this.defenceButton.hide();
                this.sosButton.hide();
                this.infoButton.hide();
                background(defence3Img);
                this.defence3button.hide();
                this.defence4button.show();
            });

            this.defence4button.mousePressed(()=>{
                this.buttonSound.play();
                this.tipsButton.hide();
                this.lawsButton.hide();
                this.escapeButton.hide();
                this.defenceButton.hide();
                this.sosButton.hide();
                this.infoButton.hide();
                background(defence4Img);
                this.defence4button.hide();
                this.video1.show();
                this.video2.show();
            });


        this.sosButton.mousePressed(()=>{
            this.buttonSound.play();
            this.tipsButton.hide();
            this.lawsButton.hide();
            this.escapeButton.hide();
            this.defenceButton.hide();
            this.sosButton.hide();
            this.infoButton.hide();
            this.policestation.show();
            this.policecall.show();
            this.otherno.show();
            background(emergencybg);
        });

            this.otherno.mousePressed(()=>{
                this.buttonSound.play();
                this.tipsButton.hide();
                this.lawsButton.hide();
                this.escapeButton.hide();
                this.defenceButton.hide();
                this.sosButton.hide();
                this.infoButton.hide();
                this.policestation.hide();
                this.policecall.hide();
                this.otherno.hide();
                this.womencall.show();
                this.emergencycall.show();
                this.ncwcall.show();
                this.ambulancecall.show();
                background(sosnoImg);
            });


        this.infoButton.mousePressed(()=>{
            this.buttonSound.play();
            this.tipsButton.hide();
            this.lawsButton.hide();
            this.escapeButton.hide();
            this.defenceButton.hide();
            this.sosButton.hide();
            this.infoButton.hide();
        });


        this.resetButton.mousePressed(()=>{
            this.buttonSound.play();
            this.tipsButton.show();
            this.lawsButton.show();
            this.escapeButton.show();
            this.defenceButton.show();
            this.sosButton.show();
            this.infoButton.show();

            this.tips2button.hide();
            this.tips3button.hide();

            this.defence2button.hide();
            this.defence3button.hide();
            this.defence4button.hide();
            this.video2.hide();
            this.video1.hide();

            this.escape2button.hide();
            this.escape3button.hide();
            this.escape4button.hide();
            this.escape5button.hide();

            this.policestation.hide();
            this.policecall.hide();

            this.ambulancecall.hide();
            this.emergencycall.hide();
            this.ncwcall.hide();
            this.womencall.hide();

            background(bgmain);
        });
        
    }
    
}

function newFunction() {
    return false;
}
