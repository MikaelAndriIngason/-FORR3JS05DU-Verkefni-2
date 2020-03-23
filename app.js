
//Spurningar og svör
var spurningar = [
  {
    "spurning": "Hvað er 5+2?",
    "val": {
      "1": "3",
      "2": "8",
      "3": "10",
      "4": "7"
    },
    "rett": "7"
  },
  {
    "spurning": "Er þetta verkefni 2?",
    "val": {
      "1": "Já",
      "2": "Nei"
    },
    "rett": "Já"
  }
];

var spurnNum = -1;          //Númer spurningar
var rett = 0;               //Hversu mörg eru rétt
naestaSpurning(spurnNum);   //Setur fyrstu spurninguna í gang
var locked = false;         //Læsir svarið þegar notandinn velur

//Sýnir næstu spurningu
function naestaSpurning() {

  document.getElementById("neasta").style.display = "none"; //"Næsta spurning" hnappur hverfur
  locked = false; //aflæsir öllum valmöguleikum

  spurnNum++;

  //Hreinsar fyrirverandi svör
  const fyrriSvor = document.getElementById("val");
  while (fyrriSvor.firstChild)
    fyrriSvor.removeChild(fyrriSvor.lastChild);

  //Ef allar spurninganar eru búnar þá koma niðurstöðunar
  if(spurningar[spurnNum] == null) {
    document.getElementById("spurning").innerHTML = "Niðurstöður"
    document.getElementById("nidurstodur").innerHTML = "<br>Rétt svör: " + rett + "/2 (" + ((rett / 2) * 100) + "%)";
  }
  //Annars sýnir það bara næstu spurningu
  else{
    //Setur inn spurninguna
    document.getElementById("spurning").innerHTML = spurningar[spurnNum]["spurning"];
    
    //Setur inn alla valmöguleikana
    var valBox = document.getElementById("val");
    for(x in spurningar[spurnNum]["val"]) 
    {
      let nyttVal = document.createElement("li");
      nyttVal.innerHTML = spurningar[spurnNum]["val"][x];
      valBox.appendChild(nyttVal);

      nyttVal.addEventListener("click", answered.bind(x, nyttVal), true); //Gerir þannig að maður getur smellt á valmöguleikana
    }
  }
}

//Litar valmöguleikana
function answered(x, val) {
  //Ef notandinn er ekki búinn að velja
  if (!locked){
    locked = true;
    x.style.backgroundColor = "#9dd1ad";
    if (x.textContent == spurningar[spurnNum]["rett"]) //Ef það er rétt þá verður valið grænt og telur upp 1 stig
    {
      x.style.backgroundColor = "#9dd1ad";
      rett++;
    }
    else //Annars verður það bara rautt
      x.style.backgroundColor = "#d16666";

    document.getElementById("neasta").style.display = "block"; //Sýnir takkan til að fara í næstu spurningu
  }
}
