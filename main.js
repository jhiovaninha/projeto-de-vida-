const botoes=document.queryselectorAII("botoes")
for(let i=0;i<botoes.length;i++) {
  botoes[i].onclick=function() {
    for(let j=0;<botoes.length;j++){
      botoes[j].classList.remove("ative");
    }
    botoes[i].classList.add("ativo");
  };
}
