import { AuthController } from "../controllers/auth.controller"
import { IBodyResponseRegister, IBodyRequestRegister } from "../models/auth.model"

//--------------------------- Register Page ---------------------------

// Get references to the form and inputs
const registerForm = document.querySelector("form") as HTMLFormElement;
const emailUser = document.querySelector("#email") as HTMLInputElement;
const passwordUser = document.querySelector("#password") as HTMLInputElement;

// Define the URL for the API request
const urlDomain = "https://api-posts.codificando.xyz";

//--------------------------- Start ---------------------------

registerForm.addEventListener("submit", async (event: Event) => {
  event.preventDefault();

  const dataNewUser: IBodyRequestRegister = {
    email: emailUser.value,
    password: passwordUser.value,
  };

  try {
    const pageController = new AuthController(urlDomain);
    const responseRegister: IBodyResponseRegister = await pageController.register(dataNewUser, "/users/register");

    localStorage.setItem("userEmail", responseRegister.email);
    localStorage.setItem("userPassword", responseRegister.password);

    const getUserEmail = localStorage.getItem("userEmail");

    if (getUserEmail) {
      window.location.href = "./home.html"
      // Redirect to dashboard page
    }
  } catch (error) {
    console.error(error)
    // Display error message
  }
})
