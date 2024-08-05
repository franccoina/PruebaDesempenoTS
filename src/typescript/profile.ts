import { IPostRequest } from "../models/post.model"
import { logout } from "./logout";
import { guardianOffline } from "./guardian";

const form = document.querySelector("form") as HTMLFormElement;
const titlePost = document.querySelector("#post-title") as HTMLInputElement;
const bodyPost = document.querySelector("#post-body") as HTMLTextAreaElement;

const logoutBtn = document.querySelector("#btn-logout") as HTMLInputElement;

const postArray: IPostRequest[] = JSON.parse(localStorage.getItem("postArray") || "[]");

form.addEventListener("submit", (event: Event) => {
    event.preventDefault();

    const newPost = {
        title: titlePost.value,
        body: bodyPost.value,
    }

    postArray.push(newPost);
    localStorage.setItem("cityArray", JSON.stringify(postArray));
    form.reset();
    alert("Post was succesfully submitted.");
})

//--------------------------- Logout ---------------------------

logoutBtn?.addEventListener('click', () => {
    // Logout the user and redirect to the login page
    logout()
})

//--------------------------- Guardian ---------------------------

document.addEventListener('DOMContentLoaded', () => {
    //Guardian: Checks if the user is already logged in and redirect to login 
    //page if 'false'
    guardianOffline()
})