// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import User from 'path/to/interfaces';

export type User = {
    id: number
    name: string
}

export type Goods = {
    id: number
    title: string
    price: string
    imgurl: string
}

export type Tags = {
    id: number
    label: string
    img?: string
}

