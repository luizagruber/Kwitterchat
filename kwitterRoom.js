
const firebaseConfig = {
  apiKey: "AIzaSyARwQGsIL44YOV1id4Zn0Qzdrl--S0e1Os",
  authDomain: "testedochat-93c98.firebaseapp.com",
  databaseURL: "https://testedochat-93c98-default-rtdb.firebaseio.com",
  projectId: "testedochat-93c98",
  storageBucket: "testedochat-93c98.appspot.com",
  messagingSenderId: "389010910405",
  appId: "1:389010910405:web:673cb90ee11964de0854ac"
};

firebase.initializeApp(firebaseConfig);

  userName = localStorage.getItem("userName");

document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";

function addRoom()
{
  roomName = document.getElementById("roomName").value;

  firebase.database().ref("/").child(roomName).update({
    purpose : "adicionar nome de sala"
  });

    localStorage.setItem("roomName", roomName);
    
    window.location = "kwitterPage.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       roomNames = childKey;
       console.log("Nome da Sala - " + roomNames);
      row = "<div class='roomName' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ roomNames +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("roomName", name);
    window.location = "kwitterpage.html";
}

function logout() {
localStorage.removeItem("userName");
localStorage.removeItem("roomName");
    window.location = ("index.html");
}
