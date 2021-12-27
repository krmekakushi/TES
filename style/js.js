function showVOS(){
    if(document.getElementById("VOS").classList.contains("VOSOFF")){
        document.getElementById("VOS").classList.replace("VOSOFF","VOSON");
        document.getElementById("DIM").classList.replace("DIMOFF","DIMON");
    }else{
        document.getElementById("VOS").classList.replace("VOSON","VOSOFF");
        document.getElementById("DIM").classList.replace("DIMON","DIMOFF");
    }
}
