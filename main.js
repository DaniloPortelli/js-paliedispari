// Palidroma Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma
// Consigli del giorno
// Scriviamo sempre in italiano i passaggi che vogliamo fare
// Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
// Domande da farsi quando si crea una funzione:
// Come dovrebbe chiamarsi?
// Ho bisogno di parametri?
// Devo restituire un valore?
// Se sì, di che tipo?


// 1. creare variabile prompt con parola
// 2. creare funzione con charAt
// 3. creare condizione per verificare se la parola dell'utente è uguale al risultato della funzione



// let parolaUtente = "itopinonavevanonipoti"
// const parolaUtenteSplit = parolaUtente.split("")
//     console.log(parolaUtenteSplit)

// function reverseWord (parolaUtente){

//     for( let i = 0; i <= parolaUtenteSplit.length - 1; i++){
//         let parolaUtenteSplit.charAt(i)
//         console.log(parolaUtenteSplit.charAt(i))

//     }

// }

















// Pari e Dispari L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. 
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
// Sommiamo i due numeri.
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione).
// Dichiariamo chi ha vinto.


// Variabile per il numero dell'utente
let randomNumberUser = parseInt(prompt("Inserisci qui un numero da 1 a 5 e scegli 'Pari o Dispari'"))
    console.log(`Il numero che ha selezionato l'utente e' ${randomNumberUser}`)


// Funzione per il numero random del Cpu
function numberCpu (min,  max){
    return Math.floor(Math.random() * max) + min;
}

const randomNumberCpu = numberCpu(1,5);
    console.log(`Il numero di Cpu e' ${randomNumberCpu}`)


// Funzione per la somma dei due valori
function sommaRisultati(num1, num2) {
    return num1 + num2;    
}
const somma = sommaRisultati( randomNumberUser, randomNumberCpu) 
   console.log(`La somma dei numeri di User e Cpu e':${somma}`);


// Funzione per stabilire il vincitore
function pariODispari(x){
    if(x % 2 == 0){
    console.log(`Il numero ${x} e' pari, User vince`)
    } else {
    console.log(`Il numero ${x} e' dispari, Cpu vince`)
    }
}

pariODispari(somma)
























// let randomNumberUser = 5
//     console.log(randomNumberUser)

// function numberCpu (min,  max){
//     return Math.floor(Math.random() * max) + min;
// }

// const randomNumberCpu = numberCpu(1,5)
//     console.log(randomNumberCpu)


// function sommaRisultati(num1, num2) {
//     console.log(num1 + num2);
    
// }
//     sommaRisultati( randomNumberUser, randomNumberCpu )
    
