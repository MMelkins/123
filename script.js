


function tableGenerate() {
  let rezultDiv = document.getElementById('tabulaa');
  let cipars = document.getElementById('drukaat').value; // Iegūstam ievadīto skaitli

  let title = document.createElement('h4');
  title.textContent = 'Reizināšanas tabula skaitlim ' + cipars + ':';
  rezultDiv.innerHTML = ''; // Iztīrām iepriekšējo saturu
  rezultDiv.appendChild(title); // Pievienojam virsrakstu

  let result = '';
  for (let i = 1; i <= 10; i++) {
    result += cipars + ' * ' + i + ' = ' + (i * cipars) + '<br>';  
  }
  rezultDiv.innerHTML += result; // Parādām rezultātu
}
