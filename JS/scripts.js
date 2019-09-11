/*let app = new Vue({
  el: '.wrapper',
  data: {
    firstName: 'Привет, вью!'
  },
  methods: {
    addInput: function addNewInput() {
                  let newInput = document.createElement("input");
                      newInput.type = 'text';
                      newInput.placeholder = 'Фамилия Имя Отчество';
                      newInput.classList.add('input');

                  let blockGuests = document.querySelector('.add-guests');
                      blockGuests.appendChild(newInput);
    }
  }
});*/

let button = document.querySelector('.btn-primary');
let blockGuests = document.querySelector('.add-guests');
button.addEventListener('click', function (e) {
  e.preventDefault();
  let newInput = document.createElement("input");
  blockGuests.appendChild(newInput);
  newInput.type = 'text';
  newInput.placeholder = 'Фамилия Имя Отчество';
  newInput.classList.add('input', 'newInput');

});





