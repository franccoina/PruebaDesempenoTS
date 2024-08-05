import { IPost } from "../models/post.model"

export class TemplateController{
    public container: HTMLDivElement

    constructor(container: HTMLDivElement){
        this.container = container
    }

    public renderPosts(post: IPost): void{
        const div = document.createElement('div') as HTMLDivElement
        div.classList.add('card', 'mb-3', 'p-5')

        const title = document.createElement('h3') as HTMLHeadElement
        title.classList.add('card-header','border', 'rounded', 'w-100','mb-5')

        const body = document.createElement('p') as HTMLParagraphElement

        title.textContent = post.title
        body.textContent = post.body

        div.append(title, body)

        this.container.append(div)
    }
}