//--------------------------- Guardian ---------------------------

export function guardianOffline() {
    // Obtaining email from user online from local storage
    const getUserEmail = localStorage.getItem("userEmail");

    // If there is no email, redirect to login view
    if (!getUserEmail) {
        window.location.href = '/'
    }
}














