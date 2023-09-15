function operate(e){
    var textbox = document.getElementById('number-display')
    if(e.value==='clear'){
        textbox.value = ''
        operation = []
    }
    else if(e.value==='='){
        operation = [eval(operation.join('')).toFixed(2)]
        textbox.value = operation.join('')
    }
    else if(e.value==='back'){
        operation.pop();
        textbox.value = operation.join('')
    }
    else{
        operation.push(e.value)
        textbox.value = operation.join('');
    }
}
var operation = []
var input = document.getElementById('number-display');
input.addEventListener("keydown",(event) =>{
    if (event.key === "Enter") {
        operation.push(input.value.split())
        document.getElementById('equals').click()
        operation = []
    }
    else if(event.keyCode === 46){
        document.getElementById('clear').click()
    }
})
