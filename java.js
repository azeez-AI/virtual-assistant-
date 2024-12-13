let btn = document.querySelector("#btn");
let centent = document.querySelector("#text");
let voice = document.querySelector("#voice");

function speak(text){
    let text_speak= new SpeechSynthesisUtterance(text)
    text_speak.rate=1;
    text_speak.volume=1;
    text_speak.pitch=1;
    window.speechSynthesis.speak(text_speak);
}

function wishme(){
    let days= new Date();
    let hours = days.getHours()
    if(hours>=0 && hours<12){
        speak("Good Morning azeez")
    } else if(hours>=12 && hours<16){
        speak("Good Afternoon azeez")
    } else {
        speak("Good Evening azeezr")
    }
}

window.addEventListener("load",()=>{
    wishme()
})

let speechRecognization = window.speechRecognization || window.webkitSpeechRecognition
let recognization = new speechRecognization();
recognization.onresult=(event)=>{
    let currentIndex= event.resultIndex
    let transcript= event.results[currentIndex][0].transcript;
    centent.innertext = transcript;
    takeCommand(transcript.toLowerCase())
   
}
btn.addEventListener("click",()=>{
    btn.style.display = "none"
    voice.style.display = "block"
    recognization.start()
})

function takeCommand(message){
    btn.style.display="flex"
    voice.style.display = "none"
    if(message.includes("hello") || message.includes("hey") || message.includes("hi")|| message.includes("good") ){
        wishme();
        speak("Hey sir What can I help you?");
       } else if(message.includes("open youtube")){
        speak("Openning youtube...");
        window.open("https://www.youtube.com/","_blank")
       } else if(message.includes("open facebook")){
        speak("Openning facebook...");
        window.open("https://www.facebook.com/","_blank")
       } else if(message.includes("open instagram")){
        speak("Openning instagram...");
        window.open("https://www.instagram.com/","_blank")
       } else if(message.includes("open spotify")){
        speak("Openning spotify...");
        window.open("https://www.spotify.com/","_blank")  
       } else if(message.includes("open calculator")){
        speak("Openning calculator...");
        window.open("calculator://")
       } else if(message.includes("open whatsapp")){
        speak("Openning whatsapp...");
        window.open("whatsapp://")
       } else if(message.includes("time")){
        let time= new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
        speak(time);
       } 
       else if (message.includes("what is your name")){
        speak("my name is  koko what is you name ")
       }else if(message.includes("date")){
        let date= new Date().toLocaleString(undefined,{day:"numeric",month:"short",year:"numeric"})
        speak(date);
       } 
       else{
        speak(`This is whatever I found on Internet regarding to ${message}`)
        window.open(`https://www.google.com/search?q=${message}`)
       }
    }
