import axios from "axios"
const BASE_URL = "https://fitnesscoaching.onrender.com";


export async function SignUp(userData) {
  //console.log(userData)
    // const res = await fetch(BASE_URL, {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(userData)
    // });

    // console.log(res)
    // if (res.ok) {
    //     return res.json();
    // } else {
    // throw new Error("Invalid Sign Up");
    // }
try {
  const res = await axios({
    method: "POST",
    url: BASE_URL,
    data: userData
  })
  console.log(res)
}catch(e){
  console.log(e)
}

}

export async function login(userData) {
    // Use the data to make a network request
    const response = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    }).then((response) => {
      return response.json();
    });
  
    if (response.status === "success") {
      return response;
    } else {
      throw new Error("Invalid email or password");
    }
  }