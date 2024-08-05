import { AuthController } from "../controllers/auth.controller"
import { IBodyRequestLogin } from "../models/auth.model"

//--------------------------- Login Page ---------------------------

// Get references to the form and inputs
const loginForm = document.querySelector("form") as HTMLFormElement;
const emailUser = document.querySelector("#email") as HTMLInputElement;
const passwordUser = document.querySelector("#password") as HTMLInputElement;

// Define the URL for the API request
const urlDomain = "https://api-posts.codificando.xyz";

loginForm.addEventListener("submit", async (event: Event) => {
  event.preventDefault();

  const dataUser: IBodyRequestLogin = {
    email: emailUser.value,
    password: passwordUser.value,
  };

  try {
    const pageController = new AuthController(urlDomain);
    const userOnline: IBodyRequestLogin = await pageController.login(dataUser, "/auth/login");
    
    localStorage.setItem("userEmail", userOnline.email);
    localStorage.setItem("userPassword", userOnline.password);

    const getUserEmail = localStorage.getItem("userEmail");
    if (getUserEmail) {
      window.location.href = "./src/views/home.html"
      // Redirect to dashboard page
    }
  } catch (error) {
    console.error(error)
    // Display error message
  }
})
