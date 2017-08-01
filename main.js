const cust = customers.results;

cust.forEach(function(e){


  let addressFull = `<p>${e.location.street}</p> <p>${e.location.city}</p> <p>${e.location.state}</p>
  <p>${ e.location.postcode}</p>`
let phoneNum = e.phone;


console.log(phoneNum)


let tarDiv = document.createElement('div')
tarDiv.classList.add('flexWrap')
let container = document.querySelector('.container');

container.appendChild(tarDiv);

console.log(container);



let crusty =`<div class="custWrap">
  <div class="picture"><img src="${e.picture.large}" alt="${e.name.first} ${e.name.last}"></div>
  <p class="name">${e.name.first} ${e.name.last}</p>
  <p class = 'email'>${e.email}</p><br>
  <div class="address">${addressFull}</div>
  <p class="phone">${phoneNum}</p><br>
</div>`

tarDiv.innerHTML = crusty




})
