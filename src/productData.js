const productData = {
    iPhones: [
        { title: "Apple iPhone 15", key: 1, basePrice: 1499, folder: "iPhones", image: "iPhone 15.jpg", description: "128 Gb mit A16 Bionic Chip", StorageSpace:{'128GB': 0, '256GB': 300, '512GB' : 570} },
        { title: "Apple iPhone 14", key: 2, basePrice: 1199, folder: "iPhones", image: "iPhone 14.png", description: "128 Gb mit A15 Bionic Chip", StorageSpace:{'128GB': 0, '256GB': 280, '512GB' : 600} },
        { title: "Apple iPhone 13", key: 3, basePrice: 999, folder: "iPhones", image: "iPhone 13.jpeg", description: "128 Gb mit A15 Bionic Chip", StorageSpace:{'128GB': 0, '256GB': 290, '512GB' : 570} },
        { title: "Apple iPhone 12", key: 4, basePrice: 899, folder: "iPhones", image: "iPhone 12.jpg", description: "128 Gb mit A14 Bionic Chip", StorageSpace:{'128GB': 0, '256GB': 250, '512GB' : 570} }
    ],
    iMacs: [
        { title: "Apple iMac 24 Green", key: 5, basePrice: 1899, folder: "iMac", image: "iMac green.jpg", description: "M3 8-Core CPU 8-Core GPU", RAM: ['8GB', '16GB', '24GB'], ramPrices: { '8GB': 0, '16GB': 200, '24GB': 400 }, StorageSpace: {'512GB': 0, '1TB': 250, '2TB' : 570} },
        { title: "Apple iMac 24 Grey", key: 6, basePrice: 1799, folder: "iMac", image: "iMac grey.jpg", description: "M3 8-Core CPU 8-Core GPU", RAM: ['8GB', '16GB', '24GB'], ramPrices: { '8GB': 0, '16GB': 200, '24GB': 400 }, StorageSpace: {'512GB': 0, '1TB': 250, '2TB' : 570} },
        { title: "Apple iMac 24 Pink", key: 7, basePrice: 1999, folder: "iMac", image: "iMac pink.jpg", description: "M3 8-Core CPU 8-Core GPU", RAM: ['8GB', '16GB', '24GB'], ramPrices: { '8GB': 0, '16GB': 200, '24GB': 400 }, StorageSpace: {'512GB': 0, '1TB': 250, '2TB' : 570} },
        { title: "Apple iMac 24 Purple", key: 8, basePrice: 1899, folder: "iMac", image: "iMac purple.jpg", description: "M3 8-Core CPU 8-Core GPU", RAM: ['8GB', '16GB', '24GB'], ramPrices: { '8GB': 0, '16GB': 200, '24GB': 400 }, StorageSpace: {'512GB': 0, '1TB': 250, '2TB' : 570} },
    ],
    MacBooks: [
        { title: "Apple MacBook Air 22", key: 9, basePrice: 939, folder: "MacBook", image: "MacBook Air 13 Polarstern.jpg", description: "M2 8-Core - 8-Core GPU", RAM: ['16GB', '24GB'], ramPrices: { '16GB': 0, '24GB': 400 }, StorageSpace: {'512GB': 0, '1TB': 250, '2TB' : 570} },
        { title: "Apple MacBook Air 22", key: 10, basePrice: 959, folder: "MacBook", image: "MacBook Air 13 silver.jpg", description: "M3 8-Core CPU 8-Core GPU" , RAM: ['16GB', '24GB'], ramPrices: { '16GB': 0, '24GB': 400 }, StorageSpace: {'512GB': 0, '1TB': 250, '2TB' : 570}},
        { title: "Apple MacBook Air 24", key: 11, basePrice: 1724, folder: "MacBook", image: "MacBook Air 15 Polarstern.webp", description: "M3 8-Core CPU - 10-Core GPU", RAM: ['16GB', '24GB'], ramPrices: { '16GB': 0, '24GB': 400 }, StorageSpace: {'512GB': 0, '1TB': 250, '2TB' : 570} },
        { title: "Apple MacBook Pro 23", key: 12, basePrice: 3049, folder: "MacBook", image: "MacBook Pro 16 silver.jpg", description: "M3 Pro 12-Core CPU 18-Core GPU", RAM: ['16GB', '24GB'], ramPrices: { '16GB': 0, '24GB': 400 }, StorageSpace: {'512GB': 0, '1TB': 250, '2TB' : 570} }
    ],
    iPads: [
        { title: "Apple iPad 9", key: 13, basePrice: 429, folder: "iPad", image: "iPad 9 spacegrey.jpg", description: "A13 Bionic Chip", StorageSpace: {'64GB': 0, '256GB': 250}},
        { title: "Apple iPad mini", key: 14, basePrice: 599, folder: "iPad", image: "iPad mini 8.3 spacegrey.jpg", description: "A15 Bionic Chip", StorageSpace: {'64GB': 0, '256GB': 250} },
        { title: "Apple iPad Pro 7", key: 15, basePrice: 1519, folder: "iPad", image: "iPad Pro 7 silver.jpg", description: "M4 Chip", StorageSpace: {'256GB': 0, '512GB': 250, '1TB' : 570, '2TB' : 700} },
        { title: "Apple iPad Air 6", key: 16, basePrice: 689, folder: "iPad", image: "iPad Air 6 blue.jpg", description: "M2 Chip", StorageSpace:{'128GB': 0, '256GB': 250, '512GB' : 570, '1TB' : 700} },
    ],
    AirPods: [
        { title: "Apple AirPods 3 MagSafe", key: 17, basePrice: 209, folder: "AirPods", image: "AirPods 3 Magsafe.jpg", description: "3D Audio" },
        { title: "Apple AirPods 2", key: 18, basePrice: 149, folder: "AirPods", image: "AirPods 2.jpg", description: "Hi-Fi Sound" },
        { title: "Apple AirPods Max green", key: 19, basePrice: 579, folder: "AirPods", image: "AirPod Max green.jpg", description: "3D Audio" },
        { title: "Apple AirPods Max grey", key: 20, basePrice: 689, folder: "AirPods", image: "AirPods Max space grey.jpg", description: "3D Audio" },
    ],
    Watch: [
        { title: "AppleWatch Ultra 2 orange", key: 21, basePrice: 899, folder: "Watch", image: "AppleWatch Ultra 2 Titanium Cellular.webp", description: "Titanium Cellular", size: {'41mm': 0, '45mm': 340} },
        { title: "AppleWatch SE", basePrice: 279, key: 22, folder: "Watch", image: "AppleWatch SE.webp", description: "GPS", size: {'41mm': 0, '45mm': 340} },
        { title: "AppleWatch S9", basePrice: 449, key: 23, folder: "Watch", image: "AppleWatch S9.webp", description: "GPS", size: {'41mm': 0, '45mm': 340} },
        { title: "AppleWatch Ultra 2 white", key: 24, basePrice: 899, folder: "Watch", image: "AppleWatch Ultra 2 ocean white.webp", description: "Titanium Cellular", size: {'41mm': 0, '45mm': 340} },
    ],
    HomeTv: [
        { title: "Apple HomePod white", key: 25, basePrice: 349, folder: "HomeTv", image: "HomePod white.jpg", description: "High-Excursion Tieftöner" },
        { title: "Apple HomePod mini white", key: 26, basePrice: 109, folder: "HomeTv", image: "HomePod mini white.jpg", description: "360° Audio" },
        { title: "Apple HomePod mini grey", key: 27, basePrice: 109, folder: "HomeTv", image: "HomePod mini black.jpg", description: "360° Audio" },
        { title: "AppleTv 4K", key: 28, basePrice: 169, folder: "HomeTv", image: "AppleTv.jpg", description: "64 GB Wi-Fi" },
    ],
    Accesories: [
        { title: "Apple Pencil Pro", key: 29, basePrice: 149, folder: "Accesories", image: "Apple Pencil Pro.jpg", description: " Bluetooth" },
        { title: "Apple Magic Keyboard", key: 30, basePrice: 129, folder: "Accesories", image: "Magic Keyboard with numeric keypad.jpg", description: "numeric keypad" },
        { title: "Apple USB-C VGA", key: 31, basePrice: 79, folder: "Accesories", image: "USB-C VGA Multiport Adaptar.jpg", description: "Multiport Adapter" },
        { title: "Apple Lightning to USB-C", key: 32, basePrice: 24, folder: "Accesories", image: "Lightning USB-C Cable.jpg", description: "1 meter" },
    ]
};

export default productData;
