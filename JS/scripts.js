let app = new Vue({
  el: '.wrapper',
  data: {
    formSubmited: false,
    email: ' ',
    firstName: ' ',
    lastName: ' ',
    phone: ' ',
    guests: []
  },
  methods: {
    addGuest() {
      this.guests.push('');
    },
    deleteGuest(index) {
      this.guests.splice(index, 1);
    }
  }
});


/*let button = document.querySelector('.btn-primary');
let blockGuests = document.querySelector('.add-guests');
button.addEventListener('click', function (e) {
  e.preventDefault();
  let newInput = document.createElement("input");
  blockGuests.appendChild(newInput);
  newInput.type = 'text';
  newInput.placeholder = 'Фамилия Имя Отчество';
  newInput.classList.add('input', 'newInput');

});

 */





