function tambahikon1(){
	document.getElementById("note1").value="- ";
}
function tambahikon2(){
	document.getElementById("note2").value="-️ ";
}
function tambahikon3(){
	document.getElementById("note3").value="- ";
}
function myurl() {
  var xx = document.getElementById("coverimg").value;
  document.getElementById("8").src =xx;
  document.getElementById("coverulr").value=xx;
}

function myurl2() {
  var yy = document.getElementById("linkrom").value;
  document.getElementById("linkulr").value=yy;
}

function tes(){
	document.getElementById("pratinjau").style.display = "block";
	document.getElementById("udahan").style.display = "block";
	document.getElementById("udahan3").style.display = "block";
	var lolo = document.getElementById("coverulr").value;
	var narom =document.getElementById("Namarom").value;
	var lirom =document.getElementById("linkrom").value;
	var verom =document.getElementById("versirom").value;
	var namain =document.getElementById("namamain").value;
	var tgl = document.getElementById("theDate").value;
	var ctn = document.getElementById("note1").value;
	var ctn2 = document.getElementById("note2").value;
	var ctn3 = document.getElementById("note3").value;
	var aa = document.getElementById("option1").value;
	var bb = document.getElementById("option2").value;
	var cc = document.getElementById("option2").value;
	
	var radioBtn = document.getElementsByName("options");
	var c;
		for(i=0; i<radioBtn.length; i++){
		if(radioBtn[i].checked){
			c = radioBtn[i].value;
	}
	}
	var baa = document.getElementById("opsi1").value;
	var bbb = document.getElementById("opsi2").value;
	var bcc = document.getElementById("opsi2").value;
	var bradioBtn = document.getElementsByName("buildtipe");
	var bcccc;
		for(i=0; i<bradioBtn.length; i++){
		if(bradioBtn[i].checked){
			bcccc = bradioBtn[i].value;
	}
	}
	
	document.getElementById("gambarurl").src =lolo;
	document.getElementById("namaroms").innerHTML = "✨ "+narom ;
	document.getElementById("versirom").innerHTML = "▫️ Versi Android  ‎‎‎‎‎‎‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎: "+c;
	document.getElementById("buildrom").innerHTML = "▫️ Tipe Rom  ‎‎‎‎‎‎‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‎‎‎‎‎‎‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‎‎‎‎‎‎‎‏‏‎: "+bcccc;
	document.getElementById("maintainers").innerHTML = "▫️ Oleh   ‎‎‎‎‎‎‎‎‏‏‎ ‎‏‏‎  ‎‎‎‎‎‎‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‎‎‎‎‎‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‎‎‎‎‎‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‎‎‎‎‎‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎: @"+namain;
	document.getElementById("tanggal").innerHTML = "▫️ Build Tanggal  ‎‎‎‎‎‎‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎: "+tgl;
	document.getElementById("cttn").innerHTML =" ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‎‎‎‎‎‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‎‎‎‎‎‎‎‏‏‎‎‏‏‎‎‏ " + ctn;
	document.getElementById("cttn2").innerHTML = " ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‎‎‎‎‎‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‎‎‎‎‎‎‎‏‏‎ ‏‏‎‎‏‏‎ " + ctn2;
	document.getElementById("cttn3").innerHTML = " ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‎‎‎‎‎‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‎‎‎‎‎‎‏‏‎ ‎‏‏‎‎‏‏‎ " + ctn3;
	document.getElementById("a1").value = narom ;
	document.getElementById("a2").value = c ;
	document.getElementById("a3").value = bcccc ;
	document.getElementById("a4").value = namain ;
	document.getElementById("a5").value = tgl ;
	document.getElementById("a6").value = ctn ;
	document.getElementById("a9").value = ctn2 ;
	document.getElementById("a10").value = ctn3 ;
	document.getElementById("a7").value = lolo ;
	document.getElementById("a8").value = lirom ;
	}
	
function uplud() {	
var upup = 'https://t.me/ImageGraphBot';
	window.open(upup,"lol");
	return false; 
}	
	
function stiker() {	
var tga = 'https://api.telegram.org/bot2048978248:AAGIjF2G-r_RH9jqFtDCwidNvLOM2t4m_mw/sendSticker?chat_id=@suicover&parse_mode=HTML&disable_web_page_preview=false&sticker=CAACAgUAAxkBAAEDUcdhl5mRKSBwI2QG0zkpRfl7duHEowACcgQAAgKRwFRo9wO5vbDN6iIE';
	window.open(tga,"lol");
	return false; 
}

	
	
function posting() {

	var tgapi = 'https://api.telegram.org/bot2048978248:AAGIjF2G-r_RH9jqFtDCwidNvLOM2t4m_mw/sendMessage?chat_id=@suicover&parse_mode=HTML&disable_web_page_preview=false&text=';
	var gambarkuurl = document.getElementById("coverulr").value;
	var tgtanggal = document.getElementById("a5").value;
	var tgvos = document.getElementById("a2").value;
	var tgtipe = document.getElementById("a3").value;
	var tgctn = document.getElementById("a6").value;
	var tgctn2 = document.getElementById("a9").value;
	var tgctn3 = document.getElementById("a10").value;
	var c4 = tgctn3 + "%0A"
	if (tgctn3 == ""){ c4 = tgctn3 };
	var tgmaintainer = document.getElementById("a4").value;
	var tgnamarom = document.getElementById("a1").value;
	var ling = document.getElementById("linkulr").value;
	window.open(tgapi+"✨ "+"<strong>"+tgnamarom+"</strong>"+"<a href=%22"+gambarkuurl+"%22>%0A%0A</a>"+
	"▫️ Versi OS  : "+tgvos+"%0A"+
	"▫️ Oleh         : @"+tgmaintainer+"%0A"+
	"▫️ Build        : "+tgtanggal+"%0A"+
	"▫️ Tipe         : "+tgtipe+"%0A"+
	"▫️ Catatan %0A"
	+"    "+tgctn+"%0A"
	+"    "+tgctn+"%0A"
	+"    "+c4
	+"%0A📳 Realme 5 Pro ID"
	+"&reply_markup={"+"%22inline_keyboard%22"+": [[{"+"%22text%22"+": "+"%22Download Link%22"+", "+"%22url%22"+": "+"%22"+ ling +"%22"+"}],[{"+"%22text%22"+": "+"%22Cara Pasang%22"+", "+"%22url%22"+": "+"%22https://telegra.ph/Flash-Custom-Rom-08-22%22"+"}, {"+"%22text%22"+": "+"%22Screenshot%22"+", "+"%22url%22"+": "+"%22https://t.me/realme5proQScreenshots%22"+"}]]}"
	,"lol"
	
	
	);
	return false; 
}