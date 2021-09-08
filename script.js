function lancarDados() {
  document.getElementById("mensagem").innerText = frequency();
}

function sort() {
  let soma = [];
  let dado1 = Math.floor(Math.random() * 6 + 1);
  let dado2 = Math.floor(Math.random() * 6 + 1);
  let somaDado1Dado2 = (dado1 + dado2);
    soma.push(somaDado1Dado2);
  return soma ;
}


function frequency() {
  const numbersCounts = {};
  let resultNumbers = [];
  for(let i = 0; i < 1000; i++) {
     resultNumbers.push(sort());
  }
  for(let i = 0; i < resultNumbers.length; i++) {
    let totalFrequency = resultNumbers[i];
    if(numbersCounts[totalFrequency] === undefined) {
      numbersCounts[totalFrequency] = 1;
    }else {
      numbersCounts[totalFrequency]++;
    }
  }
  for(let number in numbersCounts) {
    const numbersFinal = document.getElementById("numbersDiv");
    const span = document.createElement("span");
    span.innerText = `${number}:${numbersCounts[number]} `;
    const graficNumbers = document.createElement("div");
    graficNumbers.classList.add('grafic_info');
    graficNumbers.style.width = `${numbersCounts[number]}px`;    
    numbersFinal.appendChild(span);
    numbersFinal.appendChild(graficNumbers);
  }
  return "A frequencia em 1000 vezes é : ";
}