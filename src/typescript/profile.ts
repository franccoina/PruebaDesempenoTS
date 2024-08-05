import { IPostCreateRequest, IPostCreateResponse, IGetAllPostResponse} from "../models/post.model"
import { logout } from "./logout";
import { guardianOffline } from "./guardian";
import { PostController } from "../controllers/post.controller";

//--------------------------- Profile Page ---------------------------

const form = document.querySelector("form") as HTMLFormElement;
const titlePost = document.querySelector("#post-title") as HTMLInputElement;
const bodyPost = document.querySelector("#post-body") as HTMLTextAreaElement;

const logoutBtn = document.querySelector("#btn-logout") as HTMLInputElement;

const postArray: IPostCreateRequest[] = JSON.parse(localStorage.getItem("postArray") || "[]");

// Define the URL for the API request
const urlDomain = "https://api-posts.codificando.xyz";

const approvalPercentage = null

const corrections = null

//--------------------------- Start ---------------------------

form.addEventListener("submit", async (event: Event) => {
    event.preventDefault();

    const newPost: IPostCreateRequest = {
        title: titlePost.value,
        body: bodyPost.value,
        creationDate: '2024-03-03',
        creator: '',
        estimatedPublicationDate: '2024-03-03',
        status: 'pending',
        approvalPercentage: 75,
        corrections: 'Ninguna',
        platform: 'Data Leaker',
        postUrl: 'http://example.com/post',
        multimediaUrl: 'http://example.com/media'
    }

    const postsController = new PostController(urlDomain);
    const responseCreatePost: IPostCreateResponse = await postsController.createPost(newPost, "/posts")

    console.log(responseCreatePost)

    postArray.push(newPost)

    localStorage.setItem("postArray", JSON.stringify(postArray));
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