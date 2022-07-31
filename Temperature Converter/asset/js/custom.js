
const convertFahrenheit =() =>{
   var celsius = parseFloat(document.querySelector("#celsius").value);

   var fahrenheitResult = (1.8 * celsius) + 32;
   var a = fahrenheitResult.toFixed(1);

   document.querySelector("#celsius").value = celsius;
   document.querySelector("#fah").value = a ;
}

const convertCelsius = () => {
    var fahren = parseFloat(document.querySelector("#fah").value);

    var CelsiusResult = ((fahren -32)/1.8);
    var b = CelsiusResult.toFixed(1);

    document.querySelector("#fah").value = fahren;
    document.querySelector("#celsius").value = b;
}

const reset = () =>{
    document.querySelector("#celsius").value = " ";
    document.querySelector("#fah").value = " "; 
}