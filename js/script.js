

// chiedo agli utenti la lorò èta ed il numero di km da percorrere

// imposto il prezzo del biglietto, questo è di 0.21 euro al km

// imposto la distanza

// sconto il prezzo per minorenni, quindi persone che hanno meno di  18 anni, qui il prezzo è del 20% in meno

//sconto il prezzo per anziani, persone che hanno oltre 65 anni, qui il prezzo è del 20% in più

// calcolo quindi il prezzo del biglietto - il 20 o 40 %


let prezzoBiglietto = 0.21;

let scontoOver65PerKm = (prezzoBiglietto * 40.0) / 100;
scontoOver65PerKm = (prezzoBiglietto - scontoOver65PerKm).toFixed(2);
console.log(scontoOver65PerKm);

let scontoUnder18PerKm = (prezzoBiglietto * 20) / 100;
console.log(scontoUnder18PerKm)
scontoUnder18PerKm = (prezzoBiglietto - scontoUnder18PerKm).toFixed(2);
console.log(scontoUnder18PerKm);

let etaUtente = parseInt(prompt('quanti anni hai?'))
console.log(etaUtente)

if(isNaN(etaUtente) == false && (etaUtente > 5 && etaUtente < 120) ){
    console.log('numero corretto')
}else {
    alert(`devi inserire un numero corretto`)
}

let destinazione = parseInt(prompt('Quanti km devi percorrere?'))
console.log(destinazione)

if(isNaN(destinazione) == false){
    console.log('numero corretto')
}else {
    alert(`devi inserire un numero`)
}

if( etaUtente > 65) {
    document.getElementById('password').innerHTML='il tuo prezzo è di'+ '&nbsp' + scontoOver65PerKm * destinazione + '' + '€ scontato del 40%';
} else if ( etaUtente < 18) {
    document.getElementById('password').innerHTML='il tuo prezzo è di' + '&nbsp' + scontoUnder18PerKm * destinazione + '' + '€ scontato del 20%';
} else {
    document.getElementById('password').innerHTML='il tuo prezzo è di' + '&nbsp' + prezzoBiglietto * destinazione + '&nbsp' + '€';
}