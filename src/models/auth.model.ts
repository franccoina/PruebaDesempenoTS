//------------------------------ LOGIN ------------------------------

// Requests para la API 

export interface IBodyRequestLogin {
    email: string;
    password: string;
}

// Responses para la API 

export interface IBodyResponseLogin {
    message: string;
}

//------------------------------ REGISTER ------------------------------

// Requests para la API

export interface IBodyRequestRegister {
    email: string;
    password: string;
}

// Responses para la API

export interface IBodyResponseRegister {
    email: string;
    password: string;
    id: number
}