### Esercizio
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
**NOTA**:
Non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.
Potete implementare il countdown con setTimeout, ma meglio se con setInterval per mostrare il tempo rimasto all'utente in pagina :occhiolino:
Non vi preoccupate per eventuali numeri ripetuti.
**BONUS:**
- Inseriamo la validazione: se l'utente inserisce cose diverse da numeri lo blocchiamo in qualche modo.
- Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form.

### Dati
-5 numeri casuali;
-5 numeri inseriti dall'utente

### Esecuzione logica
-Genero 5 numeri casuali tra 1 a 100 e li salvo in un array e li visualizzo su un div.
-faccio partire la funzione timeout per 30 secondi scaduti i quali faccio display none dei numeri generati , counter e visualizzo 5 input text.
-salvo i numeri inseriti e li confronto con quelli generati.


### Output
Faccio visualizzare quanti numeri sono stati indovinati