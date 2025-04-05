function jogar(){
idade = prompt ("Qual a sua idade?");

if (idade >= 18){
  alert ("Você pode jogar... Faça sua escolha:")
  escolhaPlayer = prompt ("Digite o número 1-Pedra, 2-Papel ou 3-tesoura?");
  escolhaPc = Math.floor(Math.random() * 3) + 1;
  
  
  //casos de empate
  if (escolhaPlayer == escolhaPc){
    alert("O Jogo deu empate!");
  }
  
  //escolha do jogador foi pedra
  if (escolhaPlayer == 1){
    if (escolhaPc == 2){
      alert ("Você foi embrulhado para presente :( O Computador venceu!")
    }
    else {
      alert ("Pedra quebra tesoura. Você venceu!")
    }
  }
  
  //escolha do jogador foi papel
  if (escolhaPlayer == 2){
    if (escolhaPc == 1){
      alert ("Papel embrulha a pedra. Você venceu!")
    }
    else {
      alert ("Você foi cortado :(  Computador venceu!")
    }
  }
  
  //escolha do jogador foi tesoura
  if (escolhaPlayer == 3){
    if (escolhaPc == 1){
      alert ("Te quebraram. Computador venceu!")
    }
    else {
      alert ("Tesoura corta papel. Você venceu!")
    }
  }
  alert("A escolha do jogador foi " + escolhaPlayer + " e a do computador foi " + escolhaPc)
}
  else{
  alert ("Sua idade é insuficiente para jogar Jokenpô");
 }
}
