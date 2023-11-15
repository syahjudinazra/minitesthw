function printNumbers() {
  for (let i = 1; ; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("TigaLima");
      document.getElementById("output").innerHTML += "TigaLima <br>";
    } else if (i % 3 === 0) {
      console.log("Tiga");
      document.getElementById("output").innerHTML += "Tiga <br>";
    } else if (i % 5 === 0) {
      console.log("Lima");
      document.getElementById("output").innerHTML += "Lima <br>";
    } else {
      console.log(i);
      document.getElementById("output").innerHTML += i + " <br>";
    }
  }
}

printNumbers();
