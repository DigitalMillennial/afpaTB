function dann(){
    let PU = document.getElementById("PU").value;
    let QTECOM = document.getElementById("QTECOM").value;
   
function Calck(PU,QTECOM){
    
    let remise = 0;
    let PORT = 0;
    let TOT = PU * QTECOM;
   
    if(TOT>=100 && TOT<=200){
        remise = TOT * 0.05;        
    }
    else if(TOT > 200){
        remise = TOT * 0.1; 
    }
    else{
        remise = 0;
    }
    TOT = TOT - remise;
    if(TOT>500){
        PORT = 0;
    }
    else{
        PORT = TOT * 0.02;
        if(PORT<6){
            PORT = 6;
        }else{            
        }
    }   
    document.getElementById('REM').innerText = remise;
    document.getElementById('PORT').innerText = PORT;
    document.getElementById('PAP').innerText = TOT;
}
Calck(PU,QTECOM);
}