export class PostController {
    public url: string;

    constructor(url: string) {
        this.url = url;
    }

    async register(dataNewUser:object,endPoint: string): Promise<any> {
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

        const responseRegister = await response.json();
        return responseRegister;
    }
}