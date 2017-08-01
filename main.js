const cust = customers.results;

cust.forEach(function(e){


let addressFull = `${e.location.street} ${e.location.city} ${e.location.state} ${ e.location.postcode}`
let phoneNum = e.phone;


console.log(phoneNum)


let tarDiv = document.createElement('div')
let container = document.querySelector('.container');

container.appendChild(tarDiv)
console.log(container);

let crusty =`<div class="custWrap">
  <div class="picture"><img src="${e.picture.large}" alt="${e.name.first} ${e.name.last}"></div>
  <p class="name">${e.name.first} ${e.name.last}</p>
  <p class="address">${addressFull}</p>
  <p class="phone">${phoneNum}</p>
</div>`

tarDiv.innerHTML = crusty




})
