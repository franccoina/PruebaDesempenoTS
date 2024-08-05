import { IPostCreateRequest, IPostCreateResponse, IGetAllPostResponse } from "../models/post.model";

export class PostController {
    public url: string;

    constructor(url: string) {
        this.url = url;
    }

    async createPost(dataNewPost: IPostCreateRequest, endPoint: string): Promise<IPostCreateResponse> {
        const response = await fetch(`${this.url}${endPoint}`, {
            method: 'POST',
            body: JSON.stringify(dataNewPost)
        });

        if (response.status !== 201) {
            throw new Error('There was an error creating the post. Try again.')
        }

        const responseCreatePost: IPostCreateResponse = await response.json();
        return responseCreatePost;
    }

    async updatePost(dataChangedPost: IPostCreateRequest, endPoint: string, postToChange:number): Promise<IPostCreateResponse> {
        const response = await fetch(`${this.url}${endPoint}/${postToChange}`, {
            method: 'PUT',
            body: JSON.stringify(dataChangedPost)
        });
        if (response.status !== 201) {
            throw new Error('There was an error creating the post. Try again.')
        }
        const responseUpdPost: IPostCreateResponse = await response.json();
        return responseUpdPost;
    }

    async deletePost(dataChangedPost: IPostCreateRequest, endPoint: string, postToDelete:number): Promise<IPostCreateResponse> {
        const response = await fetch(`${this.url}${endPoint}/${postToDelete}`, {
            method: 'PUT',
            body: JSON.stringify(dataChangedPost)
        });
        if (response.status !== 201) {
            throw new Error('There was an error creating the post. Try again.')
        }
        const responseDelPost: IPostCreateResponse = await response.json();
        return responseDelPost;
    }

    async getAllPosts(limit:number, currentPage: number, endPoint: string): Promise<IGetAllPostResponse> {
        const response = await fetch(`${this.url}${endPoint}?limit=${limit}&page=${currentPage}`);
        console.log(response)

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const responseGetAllPosts: IGetAllPostResponse = await response.json();
        console.log(responseGetAllPosts)
        return responseGetAllPosts;
    }
}