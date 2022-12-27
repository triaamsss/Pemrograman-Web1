document.querySelectorAll("#option a").forEach((a) => {
    // Jika nanti di klik maka akan menjalankan sebuah function computerChoice
    a.addEventListener("click", (element) => {
        computerChoice(element);
    });
})
function computerChoice(element){
    // Pilihan user
    let pilihanUser = element.target.innerText;

    // Menangkap elemen result dengan queryselector
    let pilihanKomputer = document.querySelector("#result");

    // Membuat  pilihan utnuk komputer dengan array
    let choices = ["Rock","Paper","Scissors"];

    // pilihan random komputer
    pilihanKomputer.innerHTML = choices[Math.round(Math.random() * 2)];
    pilihanKomputer = pilihanKomputer.innerHTML;

    // jika pilihan user == komputer(draw)
    if(pilihanUser == pilihanKomputer){
        // alert("DRAW");
        setTimeout(() => alert("DRAW"), 300);
    }

    // Jika pilihan user menang
    if(pilihanUser == "Rock" && pilihanKomputer == "Scissors"){
        alert("USER WIN")
    } else if(pilihanUser == "Paper" && pilihanKomputer == "Rock"){
        alert("USER WIN YEAYYY")
    } else if(pilihanUser == "Scissors" && pilihanKomputer == "Paper"){
        alert("USER WIN!!!!")
    }

    // jika pilihan komputer menang 
    if(pilihanUser == "Rock" && pilihanKomputer == "Paper"){
        alert("KOMPUTER WIN")
    } else if(pilihanUser == "Paper" && pilihanKomputer == "Scissors"){
        alert("KOMPUTER WIN YEAYYY")
    } else if(pilihanUser == "Scissors" && pilihanKomputer == "Rock"){
        alert("KOMPUTER WINN!!!")
    }
}