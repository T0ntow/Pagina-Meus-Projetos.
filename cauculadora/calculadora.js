function insert(num)
{
   var numero = document.getElementById('text-display').innerHTML; 
   document.getElementById('text-display').innerHTML = numero + num
}
function clean()
{
    document.getElementById('text-display').innerHTML = ('');
}
function back()
{
    var resultado = document.getElementById('text-display').innerHTML;
    document.getElementById('text-display').innerHTML = resultado.substring(0, resultado.length - 1)
}
function calcular()
{
    var resultado = document.getElementById('text-display').innerHTML;
    if(resultado)
    {
        document.getElementById('text-display').innerHTML = eval(resultado);  
    }
    else{
        document.getElementById('text-display').innerHTML ="Nada para calcular";
    }
    
}