//------------------------------------------- POSTS -------------------------------------------

export interface IPostCreateRequest {
    title: string
    body: string
    creationDate: string
    creator: string
    estimatedPublicationDate: string
    status: string
    approvalPercentage: number
    corrections: string
    platform: string
    postUrl: string
    multimediaUrl: string
}

export interface IPostCreateResponse {
    postByUser: number,
    title: string
    body: string
    creationDate: Date
    estimatedPublicationDate: string
    status: string
    approvalPercentage: number
    corrections: string
    platform: string
    postUrl: string
    multimediaUrl: string
    creator: ICreator[]
    id: number
    deletedAt: null | string
}

interface ICreator {
    id: number
    email: string
    password: string
}


//------------------------------ CREATE ------------------------------

export interface IPost {
    id: number,
    postByUser: number,
    title: string
    body: string
    creationDate: Date
    estimatedPublicationDate: string
    status: string
    approvalPercentage: number
    corrections: string
    platform: string
    postUrl: string
    multimediaUrl: string
    deletedAt: null | string
}

export interface IGetAllPostResponse {
    data: IPost[]
}