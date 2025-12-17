// Exercice 1
let x="150";
let y=150;
let z=true;

console.log(typeof(x), typeof(y), typeof(z));

x = Number(x);
console.log(typeof(x));

// Exercice 2

age = 23;

prenom = "Sara";

phrase = "je m'appelle " + prenom + "et j'ai " + age + "ans";

// Exercice 3

nb = Number(prompt("Entrer un Nombre: "));

if(nb < 0) {
    console.log("Nombre négatif");
} else if(nb>=0 && nb <=10) {
    console.log("Petit");
} else if(nb>=11 && nb <=50) {
    console.log("Moyen");
} else if(nb>50 && nb<=100) {
    console.log("Grand");
} else {
    console.log("Trés Grand");
}

// Exercicr 4

let min = Number(prompt("entrez le min: "));
let max = Number(prompt("entrez le max: "));
for(i=min;i<=max;i++) {
    console.log(i+ " ");
    if(i%3==0 && i%5==0) {
        console.log("Five&Three\n");
    }
    else if (i%3 == 0) {
        console.log("Three\n");
    }
    else if (i%5 == 0) {
        console.log("Five\n");
    }
}

// Exercice 5

let n = Number(prompt("entrez nombre: "));
for(i=1;i<=10;i++) {
    console.log(n, "x", i, "=", i*n);
}

// Exercice 6

let sp=0;
let simp=0;
for(i=1;i<=50;i++) {
    if(i%2 == 0) {
        sp+=i;
    }else {
        simp+=i;
    }
}
console.log(sp, simp);
// Exercice 7
function verifierMotDePasse(mdp) {
    if (mdp.includes("@") && mdp.length >= 8) {
        return true;
    }
    return false;
}

var mdp = String(prompt("entrez Mot de pass: "));

if (verifierMotDePasse(mdp)) {
    console.log("Mot de passe valide");
} else {
    console.log("Mot de passe non valide");
}

// Exercice 8

function totalAvecRemise(total, remise) {
    return total - (total * remise / 100);
}

total = Number(prompt("entrez le total: "));
remise = Number(prompt("entrez le remise: "));

console.log(totalAvecRemise(total, remise));

// Exercice 9

function factorielle(n) {
    if (n==0) {
        return 1;
    } else {
        n*factorielle(n-1);
    }
}

// Exercice 10

function sommeIterative(n) {
    let s=0;
    for(i=1;i<=n;i++) {
        s+=i;
    }
    return s;
}

function sommeRecursive(n) {
    if (n==1) {
        return 1;
    } else {
        return n + sommeRecursive(n-1);
    }
}

// 1. le plus lisible est la version itérative
// 2. le plus performant est la version recursive
// 3. si n est grand on risque que la memoir sera platner
// 4. si n est tres grand


