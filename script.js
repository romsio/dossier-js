let inputValue = "";
let affichage = document.createElement("form");
let affichage1 = document.createElement("input");
affichage1.setAttribute("type","text");
affichage.append(affichage1);
document.body.append(affichage);
let affichage2 = document.createElement("p");
document.body.append(affichage2);

affichage.addEventListener("submit",e=>{
    e.preventDefault();
}); 
