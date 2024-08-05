//--------------------------- Logout ---------------------------

export function logout() {
    // Eliminar token de local storage e ir al login page
    localStorage.removeItem('userEmail')
    localStorage.removeItem('userPassword')
    // Redirect to login page
    window.location.href = '/'
}


































