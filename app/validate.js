function verifyValidatedValue(result){
    const number = +result

    if (Number.isNaN(number)){
        console.log('invalid value')
        saidResult.innerHTML = `
        <div>You have said:</div>
        <span class="box">${result}</span>
        <div> Invalid Value. You must say a number!</div>
    `
    }

    if(number == randomNumber){
        document.body.innerHTML=`
            <h2>You got right!</h2>
            <h3>The secret number was ${randomNumber}</h3>

            <button id="play-again" class="btn-play-again"> Play again</button>
        `
    }

    if(number < randomNumber){
        saidResult.innerHTML = `
        <div>You have said:</div>
        <span class="box">${result}</span>
        <div> The correct number is higher <i class="fa-solid fa-arrow-up-long"></i></div>
    `
    }

    if(number > randomNumber){
        saidResult.innerHTML = `
        <div>You have said:</div>
        <span class="box">${result}</span>
        <div> The correct number is smaller <i class="fa-solid fa-arrow-down"></i></i></div>
    `
    }

    if(number > highestValue || number < smallestValue){
        saidResult.innerHTML = `
        <div>You have said:</div>
        <span class="box">${result}</span>
        <div> Invalid Value. You must say a number between ${smallestValue} and ${highestValue}!</div>
    `
    }

}

document.body.addEventListener('click', e =>{
    if (e.target.id == 'play-again'){
        window.location.reload()
        }
    })