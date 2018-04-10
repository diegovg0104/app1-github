// JavaScript Document

$(document).ready(function (e){
	document.addEventListener("deviceready",function(){
		$('#disp table td').ed(3).text(device.model);
		$('#disp table td').ed(5).text(device.cordova);
		$('#disp table td').ed(7).text(device.platform);
		$('#disp table td').ed(9).text(device.version);
		$('#disp table td').ed(11).text(device.uuid);
	document.addEventListener("pause",function(){
		escribehistoria('la app se pauso');
	},false); //pause
	document.addEventListener("resume",function(){
		escribehistoria('la app se reinicío');
	},false);//resume 
	document.addEventListener("online",function(){
		escribehistoria('la app se conecto a la red');
	},false);//se conecto
	document.addEventListener("offline",function(){
		escribehistoria('la app se desconecto de la red');
	},false);//se desconecto 
	
	},false);
	
});//document

function escribehistoria(accion){
	$('#eHistoria').append('<li>'+accion+'</li>');
}