const C2 = parseInt(document.getElementById('#gf2').value, 10);
const S1 = parseInt(document.getElementById('#gf1').value, 10);
const B3 = parseInt(document.getElementById('#gf3').value, 10);
const SE4 = parseInt(document.getElementById('#gf4').value, 10);
const C5 = parseInt(document.getElementById('#gf5').value, 10);
const SE6 = parseInt(document.getElementById('#gf6').value, 10);
const B7 = parseInt(document.getElementById('#gf7').value, 10);
const S8 = parseInt(document.getElementById('#gf8').value, 10);
const C9 = parseInt(document.getElementById('#gf9').value, 10);
const B10 = parseInt(document.getElementById('#gf10').value, 10);
const SE11 = parseInt(document.getElementById('#gf11').value, 10);
const S12 = parseInt(document.getElementById('#gf12').value, 10);
var somCA, somSE, somSU, somBR;
function compare1 () {
    //Rodada 1
    var br1; 
    var su1; 
    var cam1; 
    var ser1; 

    if(S1 > C2){
        su1 = 3;
    }else if (S1 == C2){
        su1 = 1;
        cam1 = 1
    }else if(S1 < C2){
        cam1 = 3;
    }

    if(B3 > SE4){
        br1 = 3;
    } else if (B3 == SE4){
        br1 = 1;
        ser1 = 1;
    } else if(B3 < SE4){
        ser1 = 3;
    }

    //Rodada 2
    var br2; 
    var su2; 
    var cam2; 
    var ser2; 

    if(C5 > SE6){
        cam2 = 3;
    } else if (C5 == SE6){
        cam2 = 1;
        ser2 = 1;
    } else if(C5 < SE6){
        ser2 = 3;
    }

    if(B7 > S8){
        br2 = 3;
    } else if (B7 == S8){
        br2 = 1;
        su2 = 1;
    } else if(B7 < S8){
        su2 = 3;
    }

    //Rodada 3
    var br3; 
    var su3; 
    var ser3; 
    var cam3; 

    if(C9 > B10){
        cam3 = 3;
    } else if (C9 == B10){
        cam3 = 1;
        br3 = 1;
    } else if(C9 < B10){
        br3 = 3;
    }
    
    if(SE11 > S12){
        ser3 = 3;
    } else if (SE11 == S12){
        ser3 = 1;
        su3 = 1;
    } else if(SE11 < S12){
        su3 = 3
    }

    //Cálculo Pontuação
    pontBR = (br1 + br2 + br3) - (ser1 + su2 + cam3);
    pontCA = (cam1 + cam2 + cam3) - (su1 + ser2 + br3);
    pontSE = (ser1 + ser2+ ser3) - (br1 + cam2 + su3);
    pontSU = (su1 + su2 + su3) - (cam1 + br2 + sere);

    //Colocação
    if(pontBR == 9){
        document.getElementById('resultado1').innerHTML = 'Brasil';
        document.getElementById('ponto1').innerHTML = pontBR;
        console.log(pontBR)
    }else if(pontCA == 9){
        document.getElementById('resultado1').innerHTML = "Camarões";
        document.getElementById('ponto1').innerHTML = pontCA;
    }else if(pontSE == 9){
        document.getElementById('resultado1').innerHTML = "Sérvia";
        document.getElementById('ponto1').innerHTML = pontSE;
    }else if(pontSU == 9){
        document.getElementById('resultado1').innerHTML = "Suíça";
        document.getElementById('ponto1').innerHTML = pontSU;
    }else if(pontBR == 6){
        document.getElementById('resultado2').innerHTML = "Brasil";
        document.getElementById('ponto2').innerHTML = pontBR;
    }else if(pontCA == 6){
        document.getElementById('resultado2').innerHTML = "Camarões";
        document.getElementById('ponto2').innerHTML = pontCA;
    }else if(pontSE == 6){
        document.getElementById('resultado2').innerHTML = "Sérvia";
        document.getElementById('ponto2').innerHTML = pontSE;
    }else if(pontSU == 6){
        document.getElementById('resultado2').innerHTML = "Suíça";
        document.getElementById('ponto2').innerHTML = pontSU;
    }else if(pontBR == 3){
        document.getElementById('resultado3').innerHTML = "Brasil";
        document.getElementById('ponto3').innerHTML = pontBR;
    }else if(pontCA == 3){
        document.getElementById('resultado3').innerHTML = "Camarões";
        document.getElementById('ponto3').innerHTML = pontCA;
    }else if(pontSE == 3){
        document.getElementById('resultado3').innerHTML = "Sérvia";
        document.getElementById('ponto3').innerHTML = pontSE;
    }else if(pontSU == 3){
        document.getElementById('resultado3').innerHTML = "Suíça";
        document.getElementById('ponto3').innerHTML = pontSU;
    }else if(pontBR == 0){
        document.getElementById('resultado4').innerHTML = "Brasil";
        document.getElementById('ponto4').innerHTML = pontBR;
    }else if(pontCA == 0){
        document.getElementById('resultado4').innerHTML = "Camarões";
        document.getElementById('ponto4').innerHTML = pontCA;
    }else if(pontSE == 0){
        document.getElementById('resultado4').innerHTML = "Sérvia";
        document.getElementById('ponto4').innerHTML = pontSE;
    }else if(pontSU == 0){
        document.getElementById('resultado4').innerHTML = "Suíça";
        document.getElementById('ponto4').innerHTML = pontSU;
    }
}
