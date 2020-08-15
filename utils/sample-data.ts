import { Goods, User, Tags } from '../interfaces'

/** Dummy user data. */
export const sampleUserData: User[] = [
    { id: 101, name: 'Alice' },
    { id: 102, name: 'Bob' },
    { id: 103, name: 'Caroline' },
    { id: 104, name: 'Dave' },
]

export const sampleGoodsData: Goods[] = [
    {
        id: 101,
        title: 'Alice',
        price: '$20',
        imgurl:
            'https://img.ltwebstatic.com/images3_pi/2020/07/24/1595586666b030dd0345f78bdcddf409c0bf674a20_thumbnail_405x552.webp',
    },
    {
        id: 102,
        title: 'Bob',
        price: '$20',
        imgurl:
            'https://img.ltwebstatic.com/images3_pi/2020/07/24/15955866917d07bb5775bd0ae91fa62738496a64b4.webp',
    },
    {
        id: 103,
        title: 'Caroline',
        price: '$20',
        imgurl:
                'https://img.ltwebstatic.com/images3_pi/2020/06/19/1592545798f368815e4c905e9a5ea8e12e780936e0.webp',
    },
    {
        id: 104,
        title: 'Dave',
        price: '$20',
        imgurl:
            'https://img.ltwebstatic.com/images3_pi/2020/07/24/1595586703693ea67a40fb43d03345853c89eb3256.webp',
    },
    {
        id: 105,
        title: 'Dave',
        price: '$20',
        imgurl:
            'https://img.ltwebstatic.com/images3_pi/2020/07/24/15955866993ca08c8e97814e2fe51704a6fd4ebe16.webp',
    },
    {
        id: 106,
        title: 'Dave',
        price: '$20',
        imgurl:
            'https://img.ltwebstatic.com/images3_pi/2020/07/24/159558670372b6c092f96ed068c90399097b487d92.webp',
    },
    {
        id: 107,
        title: 'Dave',
        price: '$20',
        imgurl:
            '//img.ltwebstatic.com/images3_pi/2020/08/04/159652260406aca691874044b96f5f85c433b46346_thumbnail_900x.webp',
    },
]


/** Dummy search tags. */
export const sampleSearchTags: Tags[] = [
    {
        id: 101,
        label: 'Alice',
        img: 'https://img.ltwebstatic.com/images3_acp/2020/08/10/1597069279153b95436f352b720b1f040d9d938163.png',
    },
    {
        id: 102,
        label: 'Bob',
        img: 'https://img.ltwebstatic.com/images3_acp/2020/08/10/15970693355e0483c57a5709a1bd736102f580c5ef.png',
    },
    { id: 103, label: 'Caroline' },
    { id: 104, label: 'shirt' },
    { id: 105, label: 'T-shirt' },
    { id: 106, label: 'man shoes' },
    { id: 107, label: 'new in' },
]