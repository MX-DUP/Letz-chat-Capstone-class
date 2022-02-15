var firebaseConfig = {
    apiKey: "AIzaSyBqOYBORWlGuWNVuT-vVIullWbBGWxIOGY",
    authDomain: "newpew-abcb4.firebaseapp.com",
    databaseURL: "https://newpew-abcb4.firebaseio.com",
    projectId: "newpew-abcb4",
    storageBucket: "newpew-abcb4.appspot.com",
    messagingSenderId: "949329081940",
    appId: "1:949329081940:web:e65641ae4284c415addfc1",
    measurementId: "G-T98V7TFQ2J"
};

firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
console.log(room_name);

function send() {
msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name: user_name , 
message: msg , 
like: 0

});
document.getElementById("msg").value = "";

}




function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
