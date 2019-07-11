let lances = prompt("Quantos lances você quer na escada?");
while(isNaN(lances)){
    lances = prompt(`Isso não é um número, por favor digite quantos lances você quer`);
}
let i = 0;
let simbolo = prompt("Qual material você quer?")
let desenho = ""
while(i < lances){
    i++;
    console.log(simbolo.repeat(i));
}