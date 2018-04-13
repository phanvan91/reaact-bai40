var initialState = [
    {
        id:1,
        name:'iphone7plus',
        image:'https://clickbuy.com.vn/wp-content/uploads/2017/01/iphone6Plus_thumb_SILVER-300x350.jpg',
        description:'San pham do apple gia cong',
        price:500,
        iventory:10,
        rating:4
    },
    {
        id:2,
        name:'iphone6plus',
        image:'https://www.didongviet.vn/pub/media/catalog/product//i/p/iphone-6-plus-quoc-te-64gb-didongviet.jpg',
        description:'San pham do apple gia cong',
        price:500,
        iventory:10,
        rating:3
    },
    {
        id:3,
        name:'iphone8plus',
        image:'https://www.t-mobile.com/content/dam/t-mobile/en-p/cell-phones/apple/apple-iphone-8-plus/gold/apple-iphone8plus-gold-2-3x.jpg',
        description:'San pham do apple gia cong',
        price:500,
        iventory:10,
        rating:5
    },
    {
        id:4,
        name:'iphone 5 plus',
        image:'http://suachuadienthoaiiphone.net/wp-content/uploads/2017/12/nen-mua-iphone-5s-16gb-hay-32gb-su-lua-chon-phu-thuoc-nhu-cau1.jpeg',
        description:'San pham do apple gia cong',
        price:500,
        iventory:10,
        rating:2
    },
    {
        id:5,
        name:'iphone X plus',
        image:'https://cdn.fptshop.com.vn/Uploads/Originals/2017/12/8/636483223586180190_1.jpg',
        description:'San pham do apple gia cong',
        price:500,
        iventory:10,
        rating:2
    }
]

const products = (state = initialState, action) => {
    switch (action.type){
        default : return [...state]
    }
}


export default products;