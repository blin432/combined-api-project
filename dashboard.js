




var database = firebase.database();
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        
    } else {
        window.location = "http://localhost:3000/index.html";
    }
  });

function logOut(){
    firebase.auth().signOut().then(function() {
        window.location="http://localhost:3000/index.html"
      }).catch(function(error){

      });
    }  

 function writeComment(){
        var comment = document.getElementById("text");
        var timestamp= Math.floor(Date.now()/1000);
          database.ref(`comments/${timestamp}`).set({
      
            username:name,
            
            comment:comment.value
          });
          comment.value="";
      };   

function thread(){
        var thread = document.getElementById('thread');
        var threadContent="";
        var commentThread= database.ref('comments/');
        commentThread.on('value',function(snapshot){
      
       while(thread.firstChild){
         thread.removeChild(thread.firstChild);
       }
        snapshot.forEach(function(entry){
          var commentFromDb = entry.val().comment;
          threadContent=`<div class="border boder-primary  bg-secondary  p-3 mt-3">${commentFromDb}</div>`
          thread.innerHTML +=threadContent;
        });
      });
      };
thread();      