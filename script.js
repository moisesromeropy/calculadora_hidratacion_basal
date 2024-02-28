const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');

CALCULAR.addEventListener('click', () => {
    const DATO = document.getElementById('peso').value;
    //console.log('dato ingresado: ', DATO);

    //validamos que se cargue un dato:
    if (DATO > 0 && DATO <= 30){
        ERROR.style.display = 'none'
        let volumen24hs = calcularVolumenDiario(DATO); 
        let mantenimiento = calcMantenimiento(volumen24hs);
        let mantenimientoYMedio = calcMantenimientoYMedio(mantenimiento);
        FLU.innerHTML = 'm: ' + mantenimiento + ' cc/hr';
        MAN.innerHTML = 'm+m/2: ' + mantenimientoYMedio + ' cc/hr';
        FLU.style.display = 'block';
        MAN.style.display = 'block';
    } else if (DATO > 30){
        ERROR.style.display = 'none'
        let sc = superficieCorporal(DATO);
        let scx1500 = x1500(sc);
        let scx2000 = x2000(sc);       
        FLU.innerHTML = 'SCx1500: ' + scx1500 + ' cc/24hs';
        MAN.innerHTML = 'SCx2000: ' + scx2000 + ' cc/24hs';
        FLU.style.display = 'block';
        MAN.style.display = 'block';
    } else if(DATO < 0 ){
        ERROR.innerHTML = 'Por favor, ingrese un número mayor a 0'
        ERROR.style.display = 'block';
        FLU.style.display = 'none';
        MAN.style.display = 'none';
    } else {
        ERROR.style.display = 'block';
        FLU.style.display = 'none';
        MAN.style.display = 'none';
    }

})

function calcularVolumenDiario(dato)  {
    let peso = dato;
    let volumenDiario = 0;
    if(peso <= 10 ){
        volumenDiario = peso * 100;
    }
    if(peso > 10 && peso <=20){
        let auxiliar = peso - 10;
        volumenDiario = (auxiliar * 50) + 1000;
    }
    if(peso > 20 && peso <=30 ){
        let auxiliar = peso - 20
        volumenDiario = (auxiliar * 20) + 1500;
    }
    
    return volumenDiario;
}

function calcMantenimiento(volumenDiario){
    let volumen = volumenDiario;
    let mantenimiento = Math.round(volumen / 24);
    return mantenimiento;
}

function calcMantenimientoYMedio(flujoHorario) {
    let mantenimiento = flujoHorario;
    let mantenimientoYMedio = Math.round(mantenimiento + mantenimiento / 2);
    return mantenimientoYMedio
}

function superficieCorporal(Peso){
    let P = Peso;
    //console.log(P);
    let numerador = (parseInt(P) * 4) + 7;
    //console.log(numerador);
    let denominador = parseInt(P) + 90;
    //console.log(denominador);
    let superficie = numerador / denominador;
    //console.log(superficie);
    return superficie;
}
function x1500(superficieC){
    let superficieCorporal = superficieC;
    let volumenx1500 = Math.round(superficieCorporal * 1500);
	//console.log(volumenx1500);
    return volumenx1500;
}
function x2000(superficieC){
    let superficieCorporal = superficieC;
    let volumenx2000 =Math.round(superficieCorporal * 2000);
    //console.log(volumenx2000);
    return volumenx2000;
}