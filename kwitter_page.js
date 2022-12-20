//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyCbaviI6BAg0sCo-MsfOYwiM8fGZf1Gnmg",
    authDomain: "greetingbot-mfwl.firebaseapp.com",
    databaseURL: "https://greetingbot-mfwl-default-rtdb.firebaseio.com",
    projectId: "greetingbot-mfwl",
    storageBucket: "greetingbot-mfwl.appspot.com",
    messagingSenderId: "640891812878",
    appId: "1:640891812878:web:d7697def4dba9d5f93105f"
  };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

    function send()
    {
      msg= document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            u_name:user_name,
             message:msg,
             like:0
      });
      document.getElementById("msg").value= "";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

      } });  }); }
getData();



function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location= "index.html";
}