/*
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

Bonus

Abbellire con CSS o Bootstrap
Inserire un bottone che al click faccia il fetch altre 10 mail (sostituendo le altre)

*/

const emailEl = document.getElementById('email')
const buttonEl = document.getElementById('button')

// Method fetch
function randomEmail(response) {
    let tenEmailRandom = []
    emailEl.innerHTML = " "
    for (i = 0; i < 10; i++) {
        fetch('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(res => res.json())
            .then(data => {
                const { success, response } = data
                if (success) {
                    //console.log(response);
                    tenEmailRandom.push(response)
                    const newLi = document.createElement('li')
                    newLi.textContent = response
                    emailEl.append(newLi)
                }
            })
    }
    //console.log(tenEmailRandom);
}

/*
//METHOD AXIOS

function randomEmail(response) {
    let tenEmailRandom = []
    emailEl.innerHTML = " "
    for (i = 0; i < 10; i++) {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(res => {
                const { success, response } = res.data
                if (success) {
                    //console.log(response);
                    tenEmailRandom.push(response)
                    const newLi = document.createElement('li')
                    newLi.textContent = response
                    emailEl.append(newLi)
                }
            })
    }
    //console.log(tenEmailRandom);

}

*/



buttonEl.addEventListener('click', randomEmail)



