
const items = [
    // Men's Items
    {
        id: 'M001',
        name: 'Classic Leather Jacket',
        category: 'Men',
        price: 120.00,
        description: 'A stylish black leather jacket with a comfortable fit.',
        imageId: 'https://m.media-amazon.com/images/I/71vVC-aUNQL._AC_UL1500_.jpg'
    },
    {
        id: 'M002',
        name: 'Slim Fit Jeans',
        category: 'Men',
        price: 45.00,
        description: 'Denim slim fit jeans perfect for casual outings.',
        imageId: 'https://m.media-amazon.com/images/I/61dgFPlwIML._AC_UL480_FMwebp_QL65_.jpg'
    },
    {
        id: 'M003',
        name: 'Casual T-Shirt',
        category: 'Men',
        price: 20.00,
        description: 'A comfortable cotton t-shirt available in various colors.',
        imageId: 'https://m.media-amazon.com/images/I/612Rl6GKHoL._AC_UL480_FMwebp_QL65_.jpg'
    },
    {
        id: 'M004',
        name: 'Formal Shoes',
        category: 'Men',
        price: 85.00,
        description: 'Elegant formal shoes made from high-quality leather.',
        imageId: 'https://m.media-amazon.com/images/I/71rYxtbE8SS._AC_UL480_FMwebp_QL65_.jpg'
    },
    {
        id: 'M005',
        name: 'Sports Watch',
        category: 'Men',
        price: 50.00,
        description: 'A durable sports watch with multiple features.',
        imageId: 'https://m.media-amazon.com/images/I/815PjZsaUHL._AC_UL480_FMwebp_QL65_.jpg'
    },
   
    // Women's Items
    {
        id: 'W001',
        name: 'Floral Summer Dress',
        category: 'Women',
        price: 70.00,
        description: 'A light and breezy floral dress ideal for summer.',
        imageId: 'https://m.media-amazon.com/images/I/61nWah8LpBL._AC_UL480_FMwebp_QL65_.jpg'
    },
    {
        id: 'W002',
        name: 'Woolen Cardigan',
        category: 'Women',
        price: 55.00,
        description: 'A cozy woolen cardigan in various colors.',
        imageId: 'https://m.media-amazon.com/images/I/816kHkDJByL._AC_UL480_FMwebp_QL65_.jpg'
    },
    {
        id: 'W003',
        name: 'Elegant Handbag',
        category: 'Women',
        price: 95.00,
        description: 'A stylish handbag made from premium materials.',
        imageId: 'https://m.media-amazon.com/images/I/71zJ8IEEt9L._AC_UL480_FMwebp_QL65_.jpg'
    },
    {
        id: 'W004',
        name: 'Running Leggings',
        category: 'Women',
        price: 30.00,
        description: 'Comfortable running leggings with moisture-wicking fabric.',
        imageId: 'https://m.media-amazon.com/images/I/61R68xlxbnL._AC_UL480_FMwebp_QL65_.jpg'
    },
    {
        id: 'W005',
        name: 'Sun Hat',
        category: 'Women',
        price: 25.00,
        description: 'A wide-brimmed sun hat for protection against UV rays.',
        imageId: 'https://m.media-amazon.com/images/I/71SxqyJ2H-L._AC_UL480_FMwebp_QL65_.jpg'
    },
   
    // Accessories
    {
        id: 'A001',
        name: 'Leather Wallet',
        category: 'Accessories',
        price: 25.00,
        description: 'A durable leather wallet with multiple compartments.',
        imageId: 'https://m.media-amazon.com/images/I/81FmBosIRHL._AC_UL480_FMwebp_QL65_.jpg'
    },
    {
        id: 'A002',
        name: 'Aviator Sunglasses',
        category: 'Accessories',
        price: 30.00,
        description: 'Stylish aviator sunglasses with UV protection.',
        imageId: 'https://m.media-amazon.com/images/I/41ZX47JRNML._AC_UL480_FMwebp_QL65_.jpg'
    },
    {
        id: 'A003',
        name: 'Beanie Hat',
        category: 'Accessories',
        price: 15.00,
        description: 'A warm beanie hat for cold weather.',
        imageId: 'https://m.media-amazon.com/images/I/51p3el5Dq7L._AC_UL480_FMwebp_QL65_.jpg'
    },
    {
        id: 'A004',
        name: 'Scarf',
        category: 'Accessories',
        price: 20.00,
        description: 'A cozy scarf available in multiple colors and patterns.',
        imageId: 'https://m.media-amazon.com/images/I/61Cu11HdAlL._AC_UL480_FMwebp_QL65_.jpg'
    },
    {
        id: 'A005',
        name: 'Leather Belt',
        category: 'Accessories',
        price: 18.00,
        description: 'A high-quality leather belt with a classic buckle.',
        imageId: 'https://m.media-amazon.com/images/I/71ee3wKDLML._AC_UL480_FMwebp_QL65_.jpg'
    },
   
    // Sports Items
    {
        id: 'S001',
        name: 'Running Shoes',
        category: 'Sports',
        price: 85.00,
        description: 'Lightweight and comfortable running shoes for all terrains.',
        imageId: 'https://m.media-amazon.com/images/I/81Pk4RiSKqL._AC_UL480_FMwebp_QL65_.jpg'
    },
    {
        id: 'S002',
        name: 'Yoga Mat',
        category: 'Sports',
        price: 20.00,
        description: 'A non-slip yoga mat for all types of exercises.',
        imageId: 'https://m.media-amazon.com/images/I/81feGML0NAL._AC_UL480_FMwebp_QL65_.jpg'
    },
    {
        id: 'S003',
        name: 'Fitness Tracker',
        category: 'Sports',
        price: 60.00,
        description: 'A fitness tracker to monitor your workouts and health metrics.',
        imageId: 'https://m.media-amazon.com/images/I/61xmPxXNPUL._AC_UY327_FMwebp_QL65_.jpg'
    },
    {
        id: 'S004',
        name: 'Basketball',
        category: 'Sports',
        price: 25.00,
        description: 'An official size and weight basketball for indoor and outdoor use.',
        imageId: 'https://m.media-amazon.com/images/I/719pw9cKYzL._AC_UL480_FMwebp_QL65_.jpg'
    },
    {
        id: 'S005',
        name: 'Tennis Racket',
        category: 'Sports',
        price: 100.00,
        description: 'A lightweight and durable tennis racket for all levels.',
        imageId: 'https://m.media-amazon.com/images/I/61RNhFQ1ceL._AC_UL480_FMwebp_QL65_.jpg'
    },
   
    // Kids' Items
    {
        id: 'K001',
        name: 'Teddy Bear',
        category: 'Kids',
        price: 15.00,
        description: 'A soft and cuddly teddy bear for children.',
        imageId: 'https://m.media-amazon.com/images/I/81A+9JEi5zL._AC_UL480_FMwebp_QL65_.jpg'
    },
    {
        id: 'K002',
        name: 'Coloring Book',
        category: 'Kids',
        price: 10.00,
        description: 'A fun and educational coloring book with various themes.',
        imageId: 'https://m.media-amazon.com/images/I/81ZiMSpnmDL._AC_UY327_FMwebp_QL65_.jpg'
    },
    {
        id: 'K003',
        name: 'Remote Control Car',
        category: 'Kids',
        price: 35.00,
        description: 'A fast and fun remote control car for kids of all ages.',
        imageId: 'https://m.media-amazon.com/images/I/61qMSWNu6dL._AC_UL480_FMwebp_QL65_.jpg'
    },
    {
        id: 'K004',
        name: 'Lego Set',
        category: 'Kids',
        price: 50.00,
        description: 'A creative and engaging Lego set for building various structures.',
        imageId: 'https://m.media-amazon.com/images/I/91FmZYSGOOL._CR,,,_QL70_SL300_.jpg'
    },
    {
        id: 'K005',
        name: 'Puzzle Game',
        category: 'Kids',
        price: 12.00,
        description: 'A challenging and educational puzzle game for kids.',
        imageId: 'https://m.media-amazon.com/images/I/91mZW6RSUML._AC_UL480_FMwebp_QL65_.jpg'
    }
];

export default items;