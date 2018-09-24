var userinfoApp = new Vue({
  el: '#userinfo',
  data: {
    profile: {
      "name": {
        "first": "",
        "last": "",
        },

        "location": {
          "city": "",
        },

        "dob": {
        "date": "",
        "age": ""
      },

      "email":'',
      "picture": {
        "large":''
      }

}
},
computed:{
    days_left: function(){
      return moment(this.taget_date).diff(moment(), 'days')
    },
    pretty_target_date: function () {
      return this.pretty_date(this.target_date)
    }
  },
  methods: {
    pretty_date: function (d) {
      return moment(d).format('l')
    },

    fetchRandomUser: function(){
      fetch('https://randomuser.me/api/')
      .then( function(response) {return response.json()})

      .then(json => {userinfoApp.profile=json.results[0]})

      .catch(function(err){
        console.log('FETCH ERROR');
        console.log(err);
      }) ;
    }
  },
  created() {
    this.fetchRandomUser();
  },
  computed:{
    computeAge: function(){
      return moment().diff(this.profile.dob.date,'years');
    }
  }
});
