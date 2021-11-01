const user = prompt("Ingresá tu nombre de usuario");
const pass = prompt("Ingresá tu contraseña");

//const edad = Number (prompt("Ingresa tu edad"));

//const booleanoVerdadero = true;
//const booleanoFalso = false;

//console.log(typeof booleanoFalso, booleanoFalso);
//console.log(typeof booleanoVerdadero, booleanoVerdadero);

/*
Admin: "admin" Pass: admin123
Usuario sin permisos:
User1: "martin", Pass: martin123,
User2: "carlos", Pass: carlitos,
User3: "lidia", Pass: luna
*/

const adminValido = (user == "admin" && pass == "admin123" && !sistemaCaido);
const usuarioValido = (user =="martin" && pass == "martin123") || (user == "carlos" && pass == "carlitos") || (user == "lidia" && pass == "luna");
const sistemaCaido = true;

if (adminValido){
    console.log("Bienvenido Admin Maestro");
} else if(usuarioValido) {
    console.log("Bienvenido" + user);
} else{
    console.log("Datos incorrectos");
}



//if (user == "Martin") {
//    console.log("Bienvenido" + user);
//} else{
//    console.log ("Bienvenido usuario invitado");
//}





//if (edad < 18){
//    console.log ("No podés ingresar, sos menor de edad");
//} else if (edad > 18) {
//    console.log ("Acceso permitido");
//} else (edad == 18) {
//    console.log("Acceso permitido, tenés justo 18");
//}

console.log("Después del IF");