
//ADD YOUR FIREBASE LINKS HERE

const firebaseConfig = {
      apiKey: "AIzaSyChScY7c3vEvJ6BNFm49ik2yAAsd21ZDJk",
      authDomain: "kwitter-app-72ed8.firebaseapp.com",
      projectId: "kwitter-app-72ed8",
      storageBucket: "kwitter-app-72ed8.appspot.com",
      messagingSenderId: "287876720526",
      appId: "1:287876720526:web:88be3b22c90bff344b26df"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
