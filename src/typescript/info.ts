import { logout } from "./logout";
import { guardianOffline } from './guardian';

const logoutBtn = document.querySelector("#btn-logout") as HTMLInputElement;

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







