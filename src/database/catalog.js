const PRODUCTTYPE_DRINK = 'drink';
const PRODUCTTYPE_MAINFOOD = 'mainFood';
const PRODUCTTYPE_TASTY = 'tasty';
const PRODUCTTYPE_SOUCE = 'souce';


const catalog = [
    {
        id: 1,
        name: 'Гирос с говядиной',
        category: 'giros',
        price: 190,
        description: 'Гирос относится к греческому фастфуду, но здоровой его версии. Ведь он приготовлен из выпеченной без масла мягкой питы, гриллованной куриной грудки, замаринованной в лимонном соке и ароматных травах, легкого йогуртового соуса и свежих овощей. Попробуйте эту версию, она вам обязательно понравится.',
        allowedSize: [],
        options: ['Лук', 'Болгарский перец', 'Острый перчик'],
        images:[
            'https://www.philips.ru/c-dam/b2c/ru_RU/marketing-catalog/ho/recipes/breakfast/giros/giros1.jpg',
            'https://grandkulinar.ru/uploads/posts/2015-12/1449830535_grecheskij-fast-fud-giros-lepeshka-s-myasom-yagnenka-i-sousom-dzadziki.jpg',
        ],
        type: PRODUCTTYPE_MAINFOOD
    },
    {
        id: 2,
        name: 'Гирос с курицей',
        category: 'giros',
        price: 180,
        description: 'Гирос относится к греческому фастфуду, но здоровой его версии. Ведь он приготовлен из выпеченной без масла мягкой питы, говядины на углях, замаринованной в лимонном соке и ароматных травах, легкого йогуртового соуса и свежих овощей. Попробуйте эту версию, она вам обязательно понравится.',
        allowedSize: [],
        options: ['Лук', 'Болгарский перец', 'Острый перчик'],
        images:[
            'https://www.philips.ru/c-dam/b2c/ru_RU/marketing-catalog/ho/recipes/breakfast/giros/giros1.jpg',
            'https://grandkulinar.ru/uploads/posts/2015-12/1449830535_grecheskij-fast-fud-giros-lepeshka-s-myasom-yagnenka-i-sousom-dzadziki.jpg',
        ],
        type: PRODUCTTYPE_MAINFOOD
    },
    {
        id: 3,
        name: 'Пицца с грибами',
        category: 'pizza',
        price: 360,
        description: 'Пицца с грибами — один из самых популярных вариантов этого замечательного блюда как в самой Италии, так и во всем остальном мире. Традиционно для начинки используются шампиньоны, выращенные «в неволе». И это действительно отличный выбор, так как они готовятся очень быстро (кстати, их вообще можно есть в сыром виде!) и идеально сочетаются как с томатным соусом, так и с сыром',
        allowedSize: [],
        options: ['Лук', 'Маслины', 'Перчики холопеньо'],
        images:[
            'https://cdn.vkuso.ru/uploads/picca-s-gribami-po-domashnemu.jpg',
            'https://img.postershop.me/6880/Products/2119259_1623745398.0151_original.jpg',
            'https://www.pro-vkusnyashki.ru/wp-content/uploads/2020/06/domashnyaya-gribnaya-picca-s-shampinonami-gotovaya-picca-800x445.jpg',
        ],
        type: PRODUCTTYPE_MAINFOOD
    },
    {
        id: 4,
        name: 'Кока-кола 0.5',
        category: 'drink',
        price: 45,
        description: 'Кока-кола – освежающий безалкогольный сильногазированный пастеризованный напиток.',
        allowedSize: [],
        options: [],
        images:[
            'https://www.barista-ltd.ru/components/com_jshopping/files/img_products/coca-cola_05.jpg',
        ],
        type: PRODUCTTYPE_DRINK
    },
    {
        id: 5,
        name: 'Сендвич Мелт',
        category: 'sanwiches',
        price: 150,
        description: 'Свежие овощи по Вашему выбору и сочная горячая начинка из бекона, индейки и ветчины с сыром на свежевыпеченном хлебе в комбинации с Вашим любимым соусом.',
        allowedSize: [],
        options: ['Перец', 'Оливки'],
        images:[
            'https://455701.selcdn.ru/upload-e261a37fafa9b8f93cad0d17d88d8dc6/iblock/1ca/sandwich_400x211_melt.jpg',
        ],
        type: PRODUCTTYPE_MAINFOOD
    },
    {
        id: 6,
        name: 'Булочка с джемом',
        category: 'bakery',
        price: 40,
        description: 'Горячая булочка из слоеного теста с начинкой из вишневого джема',
        allowedSize: [],
        options: [],
        images:[
            'https://бабушкинырецепты.рф/wp-content/uploads/2019/04/1-jpeg.jpeg',
        ],
        type: PRODUCTTYPE_TASTY
    },
    {
        id: 7,
        name: 'Хот-дог куриный',
        category: 'hotdogs',
        price: 340,
        description: 'Хот-дог с куриной колбаской с травами, сладким горчичным соусом, кетчупом, маринованными огурчиками, луком и халапеньо.',
        allowedSize: [],
        options: [],
        images:[
            'https://kfs-menu.ru/images/menu/hot-dog-kurinyy.png',
        ],
        type: PRODUCTTYPE_MAINFOOD
    },
    {
        id: 8,
        name: 'Мороженное клубничное',
        category: 'dessert',
        price: 80,
        description: 'Ванильное мороженое с наполнителем - клубничный соус.',
        allowedSize: [],
        options: [],
        images:[
            'https://orderapp-static.burgerking.ru/x512/mobile_image/e9ad94f4131ba9e55793c4aabc57daf9.png',
        ],
        type: PRODUCTTYPE_TASTY
    },
    {
        id: 9,
        name: 'Чизбургер',
        category: 'burgers',
        price: 120,
        description: 'Рубленый бифштекс из натуральной говядины на карамелизованной булочке, с ломтиком сыра «Чеддер», кетчупом, горчицей, луком и маринованными огурчиками.',
        allowedSize: [],
        options: ['Горчичный соус', 'Кетчуп томатный', 'Лук'],
        images:[
            'https://static9.depositphotos.com/1588534/1095/i/600/depositphotos_10957284-stock-photo-cheeseburger-and-french-fries.jpg',
        ],
        type: PRODUCTTYPE_MAINFOOD
    },
]

export default catalog;