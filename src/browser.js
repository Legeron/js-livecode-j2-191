const authorization = "Bearer sk_ebac5f9cf33d3f89d0c17d0c895b42ba";

const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const userBio = document.getElementById("userBio");
const userLocation = document.getElementById("userLocation");

const dataParse = (data) => {
    userName.innerText = data.name.fullName;
    userEmail.innerText = data.email;
    userBio.innerText = data.bio;
    userLocation.innerText = data.location;
  }

const getInfoUser = (event) => {
  const email = document.getElementById("clearbitEmail").value;
  fetch(`https://person.clearbit.com/v1/people/email/${email}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": authorization
    }
    })
  .then(response => response.json())
  .then(dataParse);
}

const submit = document.querySelector("#clearbitSubmit");
submit.addEventListener("click", getInfoUser);
