import { IPostRequest } from "../models/post.model"

export class CardTemplate{
    public container: HTMLDivElement

    constructor(container: HTMLDivElement){
        this.container = container
    }

    public renderCard(post: IPostRequest): HTMLDivElement{
        const div = document.createElement('div') as HTMLDivElement
        const title = document.createElement('h3') as HTMLHeadElement
        const body = document.createElement('p') as HTMLParagraphElement

        title.textContent = post.title
        body.textContent = post.body

        div.append(title, body)

        this.container.append(div)

        return this.container
    }
}