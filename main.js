

let quotes = ["Resentment is like drinking poison and waiting for your enemies to die.", "Do not take life too seriously. You will not get out alive."
    , "It's not what happens to you, but how you react to it that matters.", "The best revenge is massive success."];
let persons = ["--Nelson Mandela", "--Elbert Hubbard", "--Epictetus", "--Epictetus"];


let checkNum;

function person() {
    const num = (Math.floor(Math.random() * quotes.length));
    if (checkNum != num) {
        document.getElementById("quotes").innerHTML = `\"${quotes[num]}\"`;

        document.getElementById("persons").innerHTML = `${persons[num]} `;
    }
    else {
        num++;
        document.getElementById("quotes").innerHTML = `\"${quotes[num]}\"`;

        document.getElementById("persons").innerHTML = `${persons[num]} `;
    }
    checkNum = num;
    //alert(checkNum)

}