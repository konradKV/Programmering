function erPalindrom(tekst) {
    // Fjerner mellomrom og gjør om til små bokstaver
    tekst = tekst.replace(/\s+/g, '').toLowerCase();

    // Gå gjennom første halvdel av teksten og sammenlign med den andre halvdel
    const lengde = tekst.length;
    for (let i = 0; i < lengde / 2; i++) {
        if (tekst[i] !== tekst[lengde - i - 1]) {
            return false; 
        }
    }
    return true; 
}

console.log(erPalindrom("nesen"));
console.log(erPalindrom("hei"));