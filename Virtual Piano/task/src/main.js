



const validWhite = ["A","S","D","F","G","H","J","a","s","d","f","g","h","j"]
const validBlack = ["E","e","T","t","U","u","W","w","Y","y"]
document.addEventListener("keydown", function (event){
    if (validWhite.includes(event.key)) {

        console.log("The '" + event.key.toUpperCase()  + "' key is pressed.")
        let tempString = "white_keys/" + event.key.toUpperCase() +".mp3";
        let tempAudio = new Audio(tempString);
        console.log(tempAudio.play());
    }
    else if(validBlack.includes(event.key)){
        console.log("The '" + event.key.toUpperCase()  + "' key is pressed.")
        let tempString = "black_keys/" + event.key.toUpperCase() + ".mp3";
        let tempAudio = new Audio(tempString);
        console.log(tempAudio.play());
    }
    else {
        console.warn("This is a warning!")
    }
})


