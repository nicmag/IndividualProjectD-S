var userinfoApp = new Vue({
  el: '#userinfo',
  data: {
    description:{
    firstName:'',
    lastName:'',
    originCity:'',
    originCountry:'',
    birthdate:'',
    age:'',
    email:'',
    imageSource:''
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

    fetchUser: function () {
     fetch('https://randomuser.me/api/')
     .then( (response) => response.json())
     .then( json =>{
       userinfoApp.description.firstName = json.results[0].firstName;
       userinfoApp.description.lastName = json.results[0].lastName;
       userinfoApp.description.originCity = json.results[0].originCity;
       userinfoApp.description.originCountry = json.results[0].originCountry;
       userinfoApp.description.birthdate = json.results[0].birthdate;
       userinfoApp.description.age = json.results[0].age;
       userinfoApp.description.email = json.results[0].email;
       userinfoApp.description.imageSource = json.results[0].imageSource;
     }
     .catch(function(err){
       console.log('task fetch error:');
       console.log(err);
     })
   }
 },
 created() {
   this.fetchUser()
 }
})
