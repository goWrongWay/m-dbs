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

export type ImgList = {
    src: string
}
export type GoodsBasicInformation = {
    id: string
    title: string
    price: string
    size: { title: string; desc: string }[]
    imgs: { src: string }[]
}
export type CategorySecond = {
    title: string
    img?: string
    children: CategoryThird[]
}
export type CategoryThird = {
    title: string
    img?: string
    children: CategoryItem[]
}
export type CategoryItem = {
    categoryId: string
    searchKey: string
    title: string
    img: string
}
export type Category = {
    title: string
    img?: string
    children: CategorySecond[]
}
