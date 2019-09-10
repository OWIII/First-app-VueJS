let sample = new Vue({
  el: '.sample',
  data: {
    firstName: '',
    lastName: '',
    showText: false
  },
  methods: {
    fullName() {
      return this.firstName + ' ' + this.lastName;
    }
  }
});
