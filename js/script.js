const lista = document.getElementById("shopping-list");

let articolo = "";

// Ciclo while accroccato
while (true) {
    articolo = prompt("Inserisci un articolo nella lista della spesa (lascia vuoto e premi OK per terminare):");
    console.log(articolo, typeof articolo);
    
    // COME FACCIO PER L'ANNULLA CHE NON MI TOGLIE IL PROMPT?
    
    if (articolo === "") {
      console.log(articolo, typeof articolo);
        break; // Esce dal ciclo, c'è un modo per fargli ignorare gli spazi? ((trim? come si usa))
    }
    
    // Output 

    const ElemLista = document.createElement("li");
    ElemLista.textContent = articolo;

    // prova di rimozione
    ElemLista.addEventListener('click', function() {
        lista.removeChild(ElemLista);
    });

    lista.appendChild(ElemLista);
}