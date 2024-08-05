import { IBodyRequestLogin, IBodyRequestRegister, IBodyResponseRegister } from '../models/auth.model';

export class AuthController {
    public url: string;

    constructor(url: string) {
        this.url = url;
    }

    async register(dataNewUser: IBodyRequestRegister, endPoint: string): Promise<IBodyResponseRegister> {
        const response = await fetch(`${this.url}${endPoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataNewUser)
        });

        if (response.status !== 201) {
            throw new Error('There was an error trying to sign up. Try again.')
        }

        const responseRegister: IBodyResponseRegister = await response.json();
        return responseRegister;
    }

    async login(dataUser: IBodyRequestLogin, endPoint: string): Promise<IBodyRequestLogin> {
        const response = await fetch( `${this.url}${endPoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataUser)
        });

        console.log(response)

        if (response.status !== 201) {
            throw new Error('There was an error trying to log in. Try again.')
        }
        return dataUser;
    }
}