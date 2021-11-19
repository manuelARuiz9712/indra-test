

/**
 * 
 * @param base El numero Base
 * @param exponent  el Exponente
 * @returns  retorna equivalente a Base^exponente
 */
const customPow = (base:number,exponent:number)=>{

    let count = 1;

    for (let index = 0; index < exponent; index++) {
        count = count * base;
        
    }

    return count;
    

}

/**
 * 
 * @param maxNumbers Maximo de numeros a retornar
 * @returns Array con la sencuencia fibonachi
 */
const getFibonachiSerie = (maxNumbers:number)=>{
   
	var serie = [0,1];

	for(let i=0; i <= maxNumbers; i++){
		serie.push(serie[serie.length-2] + serie[serie.length -1]);
		
	}

    return serie;
}

export {
    customPow,
    getFibonachiSerie
}