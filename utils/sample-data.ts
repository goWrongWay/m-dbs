import {
    Goods,
    User,
    Tags,
    GoodsBasicInformation,
    Category,
} from '../interfaces'

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
        img:
            'https://img.ltwebstatic.com/images3_acp/2020/08/10/1597069279153b95436f352b720b1f040d9d938163.png',
    },
    {
        id: 102,
        label: 'Bob',
        img:
            'https://img.ltwebstatic.com/images3_acp/2020/08/10/15970693355e0483c57a5709a1bd736102f580c5ef.png',
    },
    { id: 103, label: 'Caroline' },
    { id: 104, label: 'shirt' },
    { id: 105, label: 'T-shirt' },
    { id: 106, label: 'man shoes' },
    { id: 107, label: 'new in' },
]
// 商品基本信息size
export const sampleGoodsBasicInformation: GoodsBasicInformation = {
    id: '666',
    title: 'xxx',
    price: '$US12',
    size: [
        {
            title: 'X',
            desc: 'Waist Size:: 69-106cm, Hip Size: 110cm, Length: 103cm',
        },
        {
            title: 'SX',
            desc: 'Waist Size:: 69-106cm, Hip Size: 110cm, Length: 103cm',
        },
        {
            title: 'M',
            desc: 'Waist Size:: 72-116cm, Hip Size: 120cm, Length: 113cm',
        },
        {
            title: 'L',
            desc: 'Waist Size:: 79-126cm, Hip Size: 130cm, Length: 133cm',
        },
    ],
    imgs: [
        {
            src:
                '//img.ltwebstatic.com/images3_pi/2020/08/05/1596622309e2abeb2a1f4a15f447944a69fedc4c01_thumbnail_750x.webp',
        },
        {
            src:
                '//img.ltwebstatic.com/images3_pi/2020/08/05/15966223137aa2c4432d14647633a20ba03900b2d5_thumbnail_750x.webp',
        },
        {
            src:
                '//img.ltwebstatic.com/images3_pi/2020/08/05/1596622317d48b3c8fc1d81be443d0d910f41e5e5b_thumbnail_750x.webp',
        },
        {
            src:
                '//img.ltwebstatic.com/images3_pi/2020/08/05/1596622321e068ab8204b4d3e6d2a0432e412b0c9f_thumbnail_750x.webp',
        },
        {
            src:
                '//img.ltwebstatic.com/images3_pi/2020/08/05/15966223137aa2c4432d14647633a20ba03900b2d5_thumbnail_750x.webp',
        },
        {
            src:
                '//img.ltwebstatic.com/images3_pi/2020/08/05/15966223137aa2c4432d14647633a20ba03900b2d5_thumbnail_750x.webp',
        },
    ],
}
export const sampleCategory: Category[] = [
    {
        title: 'WOMEN',
        children: [
            {
                title: 'NEW IN',
                children: [
                    {
                        title: 'SWIPPER',
                        type: 'swiper',
                        children: [
                            {
                                categoryId: '0',
                                title: 'Girl Crop Sweatshirts',
                                searchKey: 'Girl Crop Sweatshirts',
                                img:
                                    'https://img.ltwebstatic.com/images3_pi/2020/07/29/15960166974f4c749b8212f9046d3bd90194ddc817.gif',
                            },
                            {
                                categoryId: '1',
                                title: 'Girl Crop Sweatshirts',
                                searchKey: 'Girl Crop Sweatshirts',
                                img:
                                    'https://img.ltwebstatic.com/images3_pi/2020/08/20/1597909604f03c11c6b605b1edb7b5bc25a1e96f02.jpg',
                            },
                        ],
                    },
                    {
                        title: 'RECOMMENDATION0',
                        type: 'threeList',
                        children: [
                            {
                                categoryId: '0',
                                title: 'Girl Crop Sweatshirts',
                                searchKey: 'Girl Crop Sweatshirts',
                                img: '//img',
                            },
                        ],
                    },
                ],
            },
            {
                title: 'AHAHA',
                children: [
                    {
                        title: 'RECOMME',
                        children: [
                            {
                                categoryId: '0',
                                title: 'Girl Crop Sweatshirts',
                                searchKey: 'Girl Crop Sweatshirts',
                                img: '//img',
                            },
                        ],
                    },
                ],
            },
            {
                title: 'FEATURED',
                children: [
                    {
                        title: 'BABY TRENDS',
                        children: [
                            {
                                categoryId: '1',
                                title: 'Girl Crop Sweatshirts',
                                searchKey: 'Girl Crop Sweatshirts',
                                img: '//img',
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        title: 'KIDS',
        children: [
            {
                title: 'FEATURED1',
                children: [
                    {
                        title: 'RECOMMENDATION',
                        children: [
                            {
                                categoryId: '0',
                                title: 'Girl Crop Sweatshirts',
                                searchKey: 'Girl Crop Sweatshirts',
                                img: '//img',
                            },
                        ],
                    },
                ],
            },
            {
                title: 'FW 2020',
                children: [
                    {
                        title: 'BABY TRENDS',
                        children: [
                            {
                                categoryId: '0',
                                title: 'Green',
                                searchKey: 'Green',
                                img: '//img',
                            },
                            {
                                categoryId: '1',
                                title: 'Floral',
                                searchKey: 'floral',
                                img: '//img',
                            },
                        ],
                    },
                    {
                        title: 'TRENDING COLOR',
                        children: [
                            {
                                categoryId: '0',
                                title: 'Pastel',
                                searchKey: 'pastel',
                                img: '//img',
                            },
                            {
                                categoryId: '1',
                                title: 'White',
                                searchKey: 'White',
                                img: '//img',
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        title: 'HOME',
        children: [
            {
                title: '2019',
                children: [
                    {
                        title: 'SUMMER',
                        children: [
                            {
                                categoryId: '0',
                                title: 'Girl Crop Sweatshirts',
                                searchKey: 'Girl Crop Sweatshirts',
                                img: '//img',
                            },
                        ],
                    },
                ],
            },
            {
                title: 'FW 2019',
                children: [
                    {
                        title: 'BABY GIRL TRENDS',
                        children: [
                            {
                                categoryId: '0',
                                title: 'Green',
                                searchKey: 'Green',
                                img: '//img',
                            },
                            {
                                categoryId: '1',
                                title: 'Floral',
                                searchKey: 'floral',
                                img: '//img',
                            },
                        ],
                    },
                    {
                        title: 'COLOR FULL',
                        children: [
                            {
                                categoryId: '0',
                                title: 'Pastel',
                                searchKey: 'pastel',
                                img: '//img',
                            },
                            {
                                categoryId: '1',
                                title: 'White',
                                searchKey: 'White',
                                img: '//img',
                            },
                        ],
                    },
                ],
            },
        ],
    },
]
