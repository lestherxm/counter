const valueCounter = document.querySelector('.value-counter');
const btnLowerCount = document.querySelector('.btn-lower-count');
const btnAddCount = document.querySelector('.btn-add-count');

btnLowerCount.addEventListener('click', ()=>{
    operation('lower');
})

btnAddCount.addEventListener('click', ()=>{
    operation('add');
})

function operation(op = 'add'){
    let counter = parseInt(valueCounter.innerHTML);
    op === 'lower'
    ? counter -= 1
    : counter += 1
    validateCounter(counter)
    valueCounter.innerHTML = counter;
}

function validateCounter(counter){
    if (counter === 0){
        valueCounter.style.color = 'rgb(59, 58, 58)';
    }else if(counter < 0){
        valueCounter.style.color = 'red';
    }else{
        valueCounter.style.color = 'green';
    }
}