var commentsApp = new Vue({
  el:'#commentMain',
  data: {

      comment:[],
      newCommentForm: {}
},

methods: {
  handleCommentForm(e){
  //
  //   const s = JSON.stringify(this.workForm);
  //     console.log(s);
  //
    fetch('api/comment.php', {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify(
      {comment:this.newCommentForm.comment}) // body data type must match "Content-Type" header
      })
      .then( response => response.json())
      .then( json => {this.comment.push(json)})
      .catch( err => {
        console.error('COMMENTS POST ERROR:');
        console.error(err);
      })
    },

 //handle
//   getEmptyCommentForm() {
//   return {comment =
//     team_id: null,
//     task_id: this.task.id,
//     completion_estimate: 0
//   } // return
// }, //getEmptyWorkForm

getAllComments: function() {
  fetch('api/comment.php')
  .then(response => response.json())
  .then(json => {commentsApp.comment = json;} )
  .catch( err=> {
    console.error('COMMENTS FETCH ERROR:');
    console.error(err);
  })
},

getEmptyCommentForm() {
  return {
    comment: null
  }
}

},
  created () {
    this.getAllComments();
    this.newCommentForm = this.getEmptyCommentForm();
    // const url = new URL(window.location.href);
    // const taskId = url.searchParams.get('taskId');
    // console.log('Task: '+ taskId);
    // this.task.id = taskId;


  }


});
