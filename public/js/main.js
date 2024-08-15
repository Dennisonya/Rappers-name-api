document.querySelector("#Search").addEventListener("click",makeReq)

async function  makeReq(){

    const rapperName = document.querySelector('#rappersName').value.toLowerCase()
    const res = await fetch(`/api/${rapperName}`)
    const data = await res.json()

    console.log(data)
    document.querySelector('#name').innerHTML= `Name: ${data.realName}`
    document.querySelector('#age').innerHTML = `Age: ${data.age}`
    document.querySelector('#genre').innerHTML = `Genre: ${data.genre}`
    document.querySelector('#rappersImage').src = data.image
}