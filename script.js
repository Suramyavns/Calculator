function operate(e){
    var textbox = document.getElementById('number-display')
    if(e.value==='clear'){
        textbox.innerHTML = ''
        operation = []
    }
    else if(e.value==='='){
        operation = [eval(operation.join('')).toFixed(2)]
        textbox.innerHTML = operation.join('')
    }
    else if(e.value==='back'){
        operation.pop();
        textbox.innerHTML = operation.join('')
    }
    else{
        operation.push(e.value)
        textbox.innerHTML = operation.join('');
    }
}
var operation = []
