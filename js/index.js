var mode = document.body;
mode.id = "Body";

var modeButton = document.getElementById("darkMode");

var h1 = document.getElementsByTagName("H1")[0];
h1.innerHTML = "Regular Show Fan Site";

var pic = document.getElementById("img1");

var vid1 = document.getElementById("vid1");
vid1.style.visibility = "hidden";

var vid2 = document.getElementById("vid2");
vid1.style.visibility = "hidden";

var backButton = document.getElementById("Back");
backButton.style.visibility = "hidden";

var nextButton = document.getElementById("Next");

var triviaLightButton = document.getElementById("TriviaLight");
triviaLightButton.style.visibility = "hidden";

var triviaDarkButton = document.getElementById("TriviaDark");
triviaDarkButton.style.visibility = "hidden";

var triviaButton = triviaLightButton;

var pBox = document.getElementById("pBox");

var p = document.getElementsByTagName("P")[0];
p.innerHTML = "This a Fan Site dedicated to Regular Show.";

function darkMode(){
    if(mode.id == "Body"){
        mode.id = "darkBody";
        pic.className = "imgDark";
        vid1.id = "vid2Dark";
        vid2.id = "vid2Dark"
        modeButton.innerHTML = "Light Mode";
        modeButton.id = "lightMode";
        backButton.id = "darkBack";
        nextButton.id = "darkNext";
        if(vid2.style.visibility == "visible"){
            triviaLightButton.style.visibility = "hidden";
            triviaDarkButton.style.visibility = "visible";
        }
        pBox.id = "pDarkBox";
    }
    else{
        mode.id = "Body";
        pic.className = "img";
        vid1.id = "vid2";
        vid2.id = "vid2"
        modeButton.innerHTML = "Dark Mode";
        modeButton.id = "darkMode";
        backButton.id = "Back";
        nextButton.id = "Next";
        if(vid2.style.visibility == "visible"){
            triviaDarkButton.style.visibility = "hidden";
            triviaLightButton.style.visibility = "visible";
        }
        pBox.id = "pBox";
    }
}

function next(){ 
    if(vid1.style.visibility == "visible"){
        h1.innerHTML = "Favorite Scene";
        vid1.style.visibility = "hidden";
        vid2.style.visibility = "visible";
        nextButton.style.visibility = "hidden";
        if(mode.id == "Body"){
            triviaDarkButton.style.visibility = "hidden";
            triviaLightButton.style.visibility = "visible";
        }
        else{
            triviaLightButton.style.visibility = "hidden";
            triviaDarkButton.style.visibility = "visible";
        }
        p.innerHTML = "<strong><span style='font-size: 120%;'>Season 7<span style='font-size: x-large;'>,</span> Episode 23 - Gary's Synthesizer</span></strong><br><br>Mordecai and Rigby go to Synthos after accidentally reseting Gary's synthesizer<span style='font-size: x-large;'>,</span> which caused him to vanish. When they finally fix Gary's synthesizer<span style='font-size: x-large;'>,</span> Gary reappears and fights his half-brother (as you can see in this video)<span style='font-size: x-large;'>,</span> David<span style='font-size: x-large;'>,</span> who took over Synthos while Gary was on Earth<span style='font-size: x-large;'>,</span> apparently being the former king of Synthos.";
    }
    else if(pic.id == "img1"){
        h1.innerHTML = "Main Characters";
        pic.id = "img2";
        backButton.style.visibility = "visible";
        p.innerHTML = "These are the main characters<span style='font-size: x-large;'>,</span> Mordecai and Rigby. Mordecai is a blue jay and Rigby is a raccoon. They've known each other since childhoold<span style='font-size: x-large;'>,</span> went to the same school<span style='font-size: x-large;'>,</span> and<span style='font-size: x-large;'>,</span> after an incident where Rigby tampered with Mordecai's college acceptance letter<span style='font-size: x-large;'>,</span> ended up both working jobs at a park<span style='font-size: x-large;'>,</span> where they embark on crazy adventures together.";
    }
    else if(pic.id == "img2"){
        h1.innerHTML = "Favorite Characters";
        pic.id = "img3";
        p.innerHTML = "These are my favorite characters. They show up the most often<span style='font-size: x-large;'>,</span> so it seems super obvious to pick them as my favorites<span style='font-size: x-large;'>,</span> but they are my favorites<span style='font-size: x-large;'>,</span> nonetheless. Apart from Mordecai and Rigby<span style='font-size: x-large;'>,</span> whom I told you about<span style='font-size: x-large;'>,</span> the gumball machine is Benson<span style='font-size: x-large;'>,</span> their boss and manager of the park<span style='font-size: x-large;'>,</span> the gorilla is Skips (formerly Walks)<span style='font-size: x-large;'>,</span>  the pink<span style='font-size: x-large;'>,</span> round headed man is Pops (like a lollipop)<span style='font-size: x-large;'>,</span> and the green man is Mitch (aka. Muscle Man).";
    }
    else if(pic.id == "img3"){
        h1.innerHTML = "Favorite Original Song";
        pic.style.visibility = "hidden";
        vid1.style.visibility = "visible";
        p.innerHTML = "<strong><span style='font-size: 120%;'>Season 1<span style='font-size: x-large;'>,</span> Episode 12 - Mordecai and the Rigbys</span></strong><br><br>Mordecai and Rigby accidentally get into a gig for a battle of the bands<span style='font-size: x-large;'>,</span> having no musical experience. After spilling soda on a record player<span style='font-size: x-large;'>,</span> older<span style='font-size: x-large;'>,</span> musician versions of them selves appear from the future<span style='font-size: x-large;'>,</span> ready to help them out for the gig. This is the song they perform at the battle of the bands<span style='font-size: x-large;'>,</span> which they actually were lip-syncing to without knowing it<span style='font-size: x-large;'>,</span> as planned by their older selves. When they find this out<span style='font-size: x-large;'>,</span> and that their older selves are lip-syncing frauds<span style='font-size: x-large;'>,</span> they swear never to turn out the way their older selves had<span style='font-size: x-large;'>,</span> which erases their older selves from existance. Despite not winning battle of the bands<span style='font-size: x-large;'>,</span> the crowd there still appreciates a speech that Mordecai gives.";
    }
}
function back(){
    if(pic.id == "img2"){
        h1.innerHTML = "Regular Show Fan Site";
        pic.id = "img1";
        backButton.style.visibility = "hidden";
        p.innerHTML = "This a Fan Site dedicated to Regular Show.";
    }
    else if(vid2.style.visibility == "visible"){
        h1.innerHTML = "Favorite Original Song";
        vid2.style.visibility = "hidden";
        vid1.style.visibility = "visible";
        nextButton.style.visibility = 'visible';
        triviaLightButton.style.visibility = "hidden";
        triviaDarkButton.style.visibility = "hidden";
        p.innerHTML = "<strong><span style='font-size: 120%;'>Season 1<span style='font-size: x-large;'>,</span> Episode 12 - Mordecai and the Rigbys</span></strong><br><br>Mordecai and Rigby accidentally get into a gig for a battle of the bands<span style='font-size: x-large;'>,</span> having no musical experience. After spilling soda on a record player<span style='font-size: x-large;'>,</span> older<span style='font-size: x-large;'>,</span> musician versions of them selves appear from the future<span style='font-size: x-large;'>,</span> ready to help them out for the gig. This is the song they perform at the battle of the bands<span style='font-size: x-large;'>,</span> which they actually were lip-syncing to without knowing it<span style='font-size: x-large;'>,</span> as planned by their older selves. When they find this out<span style='font-size: x-large;'>,</span> and that their older selves are lip-syncing frauds<span style='font-size: x-large;'>,</span> they swear never to turn out the way their older selves had<span style='font-size: x-large;'>,</span> which erases their older selves from existance. Despite not winning battle of the bands<span style='font-size: x-large;'>,</span> the crowd there still appreciates a speech that Mordecai gives.";
    }
    else if(vid1.style.visibility == "visible"){
        h1.innerHTML = "Favorite Characters";
        vid1.style.visibility = "hidden";
        pic.style.visibility = "visible";
        p.innerHTML = "These are my favorite characters. They show up the most often<span style='font-size: x-large;'>,</span> so it seems super obvious to pick them as my favorites<span style='font-size: x-large;'>,</span> but they are my favorites<span style='font-size: x-large;'>,</span> nonetheless. Apart from Mordecai and Rigby<span style='font-size: x-large;'>,</span> whom I told you about<span style='font-size: x-large;'>,</span> the gumball machine is Benson<span style='font-size: x-large;'>,</span> their boss and manager of the park<span style='font-size: x-large;'>,</span> the gorilla is Skips (formerly Walks)<span style='font-size: x-large;'>,</span> the pink<span style='font-size: x-large;'>,</span> round headed man is Pops (like a lollipop)<span style='font-size: x-large;'>,</span> and the green man is Mitch (aka. Muscle Man).";
    }
    else if(pic.id == "img3"){
        h1.innerHTML = "Main Characters";
        pic.id = "img2";
        p.innerHTML = "These are the main characters<span style='font-size: x-large;'>,</span> Mordecai and Rigby. Mordecai is a blue jay and Rigby is a raccoon. They've known each other since childhoold<span style='font-size: x-large;'>,</span> went to the same school<span style='font-size: x-large;'>,</span> and<span style='font-size: x-large;'>,</span> after an incident where Rigby tampered with Mordecai's college acceptance letter<span style='font-size: x-large;'>,</span> ended up both working jobs at a park<span style='font-size: x-large;'>,</span> where they embark on crazy adventures together.";
    }
}
