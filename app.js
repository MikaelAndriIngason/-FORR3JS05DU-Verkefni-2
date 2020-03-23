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

var spurnNum = -1;
var rett = 0;
naestaSpurning(spurnNum);
var locked = false;

function naestaSpurning() {

  document.getElementById("neasta").style.display = "none";
  locked = false;

  spurnNum++;
  if(spurningar[spurnNum] == null) {
    document.getElementById("spurning").innerHTML = "Niðurstöður"
    document.getElementById("nidurstodur").innerHTML = "<br>Rétt svör: " + rett + "/2 (" + ((rett / 2) * 100) + "%)";
  }

  const fyrriSvor = document.getElementById("val");
  while (fyrriSvor.firstChild)
    fyrriSvor.removeChild(fyrriSvor.lastChild);

  document.getElementById("spurning").innerHTML = spurningar[spurnNum]["spurning"];
  var valBox = document.getElementById("val");
  
  for(x in spurningar[spurnNum]["val"]) 
  {
    let nyttVal = document.createElement("li");
    nyttVal.innerHTML = spurningar[spurnNum]["val"][x];
    valBox.appendChild(nyttVal);
    temp_val = nyttVal;
    nyttVal.addEventListener("click", answered.bind(x, temp_val), true);
  }
}

function answered(x, val) {
  if (!locked){
    locked = true;
    console.log(x,val);
    x.style.backgroundColor = "#9dd1ad";
    if (x.textContent == spurningar[spurnNum]["rett"])
    {
      x.style.backgroundColor = "#9dd1ad";
      rett++;
    }
    else
      x.style.backgroundColor = "#d16666";

    document.getElementById("neasta").style.display = "block";
  }
}
