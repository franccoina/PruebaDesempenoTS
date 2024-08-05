import { logout } from "./logout";
import { guardianOffline } from "./guardian";
import { PostController } from "../controllers/post.controller";
import { TemplateController } from "../controllers/cardTemplate.controller";
import { IGetAllPostResponse, IPost } from "../models/post.model";

//------------------------- Home Page -------------------------

// Define the URL for the API request
const urlDomain = "https://api-posts.codificando.xyz";

const logoutBtn = document.querySelector("#btn-logout") as HTMLInputElement;

const prevPage = document.querySelector("#prev-page") as HTMLButtonElement;
const nextPage = document.querySelector("#next-page") as HTMLButtonElement;

const postsContainer = document.querySelector('#postsContainer') as HTMLDivElement;

let currentPage: number = 1;
const limit: number = 6;

const cardTemplate = new TemplateController(postsContainer);

//------------------------- Start -------------------------

prevPage.addEventListener("click", async (ev: Event) => {
    if (currentPage > 1) {
        currentPage--;
        await allPosts(limit, currentPage);
    }
});
nextPage.addEventListener("click", async (ev: Event) => {
    if (currentPage >=1){
        currentPage++;
        await allPosts(limit, currentPage);
    }
});

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

    allPosts(limit, currentPage);
})

//--------------------------------------------- RENDER ---------------------------------------------
async function allPosts(limit: number, currentPage: number) {
    const postsController = new PostController(urlDomain);
    try {
        const posts = await postsController.getAllPosts(limit, currentPage, '/posts');
        console.log(posts)
        
        postsContainer.innerHTML = '';
        
        for (const post of posts) {
            cardTemplate.renderPosts(post);
        }

    } catch (error) {
        console.error(`Error fetching posts:`, error);
    }
}







