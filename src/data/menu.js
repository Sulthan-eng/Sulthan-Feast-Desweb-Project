// ... (export data menu lainnya biarkan saja) ...

export const categoryInfo = {
    appetizer: {
        title: "APPETIZER",
        description: "Hidangan Pembuka yang disajikan dengan bahan-bahan berkualitas."
    },
    maincourse: {
        title: "MAIN COURSE",
        description: "Hidangan utama khas Timur Tengah dengan rempah pilihan yang memanjakan lidah."
    },
    sidedish: {
        title: "SIDE DISH",
        description: "Pelengkap sempurna untuk menambah kenikmatan santap anda."
    },
    beverage: {
        title: "BEVERAGE",
        description: "Kesegaran minuman otentik untuk melepas dahaga."
    },
    dessert: {
        title: "DESSERT",
        description: "Penutup manis yang sempurna untuk mengakhiri petualangan rasa anda."
    }
}

export const appetizerMenu = [
    {
        id: 'appetizer1',
        name: 'Baba Gnaoush',
        description: 'Dip terong panggang lembut dengan tahini, bawang putih, lemon, dan minyak zaitun.',
        image: new URL('@/assets/images/menu/appertizer-dessert/baba_ghanoush.jpg', import.meta.url).href,
        price: "RP 40.000",
    },
    {
        id: 'appetizer2',
        name: 'Samosa',
        description: 'Kulit tipis goreng berisi daging berbumbu dan sayuran, disajikan hangat dengan saus yoghurt mint.',
        image: new URL('@/assets/images/menu/appertizer-dessert/samosa.jpeg', import.meta.url).href,
        price: "RP 30.000",
    },
    {
        id: 'appetizer3',
        name: 'Risoles',
        description: 'Tersedia 2 rasa : isi telur + Bihun dan telur + sosis',
        image: new URL('@/assets/images/menu/appertizer-dessert/risol.jpg', import.meta.url).href,
        price: "RP 13.000",
    },
    {
        id: 'appetizer4',
        name: 'Hummus',
        description: 'Dip lembut dari kacang arab tumbuk dengan tahini, bawang putih, lemon, dan minyak zaitun.',
        image: new URL('@/assets/images/menu/appertizer-dessert/hummus.jpeg', import.meta.url).href,
        price: "RP 25.000",
    },
    {
        id: 'appetizer5',
        name: 'Falafel',
        description: 'Bola goreng renyah dari kacang arab dan rempah khas Timur Tengah, disajikan dengan saus tahini.',
        image: new URL('@/assets/images/menu/appertizer-dessert/falafel.jpeg', import.meta.url).href,
        price: "RP 35.000",
    },
    {
        id: 'appetizer6',
        name: 'Kebab',
        description: 'Daging sapi berbumbu khas Timur Tengah, disajikan dengan roti tortilla, sayuran segar, dan saus yoghurt.',
        image: new URL('@/assets/images/menu/appertizer-dessert/kebab.jpg', import.meta.url).href,
        price: "RP 37.000",
    },
]


export const mainCourseMenu = [
    {
        groupId: 'briyani',
        groupName: 'A. Nasi Briyani',
        groupDesc: 'Nasi berbumbu rempah khas Arab dengan aroma saffron, disajikan dengan daging yang empuk.',
        items:[
            {
                id: 'mc1',
                name: 'Nasi Briyani Daging Domba',
                price: "RP 70.000",
                image: new URL('@/assets/images/menu/maincourse-sidedish/briyani_domba.png', import.meta.url).href
            },
            {
                id: 'mc2',
                name: 'Nasi Briyani Daging Ayam',
                price: "RP 55.000",
                image: new URL('@/assets/images/menu/maincourse-sidedish/briyani_ayam.jpg', import.meta.url).href           
            },
            {
                id: 'mc3',
                name: 'Nasi Briyani Daging Sapi',
                price: "RP 70.000",
                image: new URL('@/assets/images/menu/maincourse-sidedish/briyani_sapi.png', import.meta.url).href            
            },
        ]
    },
    {
        groupId: 'kebuli',
        groupName: 'B. Nasi Kebuli',
        groupDesc: 'Nasi gurih berbumbu rempah dan kaldu daging, disajikan dengan daging serta acar dan sambal.',
        items: [
            {
                id: 'mc4',
                name: 'Nasi Kebuli Daging Domba',
                price: "RP 70.000",
                image: new URL('@/assets/images/menu/maincourse-sidedish/kebuli_domba.png', import.meta.url).href            
            },
            {
                id: 'mc5',
                name: 'Nasi Kebuli Daging Ayam',
                price: "RP 55.000",
                image: new URL('@/assets/images/menu/maincourse-sidedish/kebuli_ayam.jpg', import.meta.url).href           
            },
            {
                id: 'mc6',
                name: 'Nasi Kebuli Daging Sapi',
                price: "RP 70.000",
                image: new URL('@/assets/images/menu/maincourse-sidedish/kebuli_sapi.png', import.meta.url).href           
            },
        ]
    },
    {
        groupId: 'mandhi',
        groupName: 'C. Nasi Mandhi',
        groupDesc: 'Nasi berbumbu lembut khas Yaman, dimasak dengan rempah aromatik dan daging panggang.',
        items: [
            {
                id: 'mc7',
                name: 'Nasi Mandhi Daging Domba',
                price: "RP 70.000",
                image: new URL('@/assets/images/menu/maincourse-sidedish/mandhi-domba.jpg', import.meta.url).href            
            },
            {
                id: 'mc8',
                name: 'Nasi Mandhi Daging Ayam',
                price: "RP 55.000",
                image: new URL('@/assets/images/menu/maincourse-sidedish/mandhi-ayam.jpg', import.meta.url).href           
            },
            {
                id: 'mc9',
                name: 'Nasi Mandhi Daging Sapi',
                price: "RP 70.000",
                image: new URL('@/assets/images/menu/maincourse-sidedish/mandhi-sapi.jpg', import.meta.url).href,           
            },
        ]
    },
    {
        groupId: 'kabsah',
        groupName: 'D. Nasi Kabsah',
        groupDesc: 'Nasi rempah khas Arab Saudi dengan rasa gurih dan sedikit asam, disajikan dengan daging panggang.',
        items: [
            {
                id: 'mc10',
                name: 'Nasi Kabsah Daging Domba',
                price: "RP 70.000",
                image: new URL('@/assets/images/menu/maincourse-sidedish/kabsah-domba.jpg', import.meta.url).href            
            },
            {
                id: 'mc11',
                name: 'Nasi Kabsah Daging Ayam',
                price: "RP 55.000",
                image: new URL('@/assets/images/menu/maincourse-sidedish/kabsah-ayam.jpg', import.meta.url).href           
            },
            {
                id: 'mc12',
                name: 'Nasi Kabsah Daging Sapi',
                price: "RP 70.000",
                image: new URL('@/assets/images/menu/maincourse-sidedish/kabsah-sapi.jpg', import.meta.url).href           
            },
        ]
    }
]


export const sideDishMenu = [
    {
        id: 'sd1',
        name: 'Batata Harra',
        description: 'Kentang goreng berbumbu pedas khas Lebanon, ditumis dengan bawang putih, ketumbar, dan cabai.',
        image: new URL('@/assets/images/menu/maincourse-sidedish/batata-harra.jpg', import.meta.url).href,
        price: "RP 24.000",
    },
    {
        id: 'sd2',
        name: 'French Fries',
        description: 'Kentang goreng renyah disajikan hangat dengan saus tomat dan mayonnaise.',
        image: new URL('@/assets/images/menu/maincourse-sidedish/kentang_goreng.jpg', import.meta.url).href,
        price: "RP 17.000",
    },
    {
        id: 'sd3',
        name: 'Roti Maryam',
        description: 'Roti pipih khas Timur Tengah berlapis lembut dan sedikit manis, disajikan hangat dengan kuah kari atau madu.',
        image: new URL('@/assets/images/menu/maincourse-sidedish/roti-maryam.png', import.meta.url).href,
        price: "RP 18.000",
    },
    {
        id: 'sd4',
        name: 'Tabbouleh',
        description: 'Salad segar khas Lebanon dari peterseli cincang, tomat, bulgur, dan perasan lemon.',
        image: new URL('@/assets/images/menu/maincourse-sidedish/tabbouleh.jpg', import.meta.url).href,
        price: "RP 30.000",
    },
]


export const beverageMenu = [
    {
        groupId: 'bevarab',
        groupName: 'A. Minuman Khas Arab',
        items: [
            {
                id: 'beverage1',
                name: 'Sobia',
                description: 'Minuman susu kelapa berpadu rempah manis, disajikan dingin menyegarkan.',
                image: new URL('@/assets/images/menu/beverage/sobia.jpg', import.meta.url).href,
                price: "RP 20.000",
            },
            {
                id: 'beverage2',
                name: 'Karak Tea',
                description: 'Teh susu khas Teluk Arab dengan kapulaga dan rasa manis aromatik.',
                image: new URL('@/assets/images/menu/beverage/karak_tea.jpeg', import.meta.url).href,
                price: "RP 15.000",
            },
        ]
    },
    {
        groupId: 'bevkopi',
        groupName: 'B. Kopi',
        items: [
            {
                id: 'beverage3',
                name: 'Americano',
                image: new URL('@/assets/images/menu/beverage/kopi_americano.jpeg', import.meta.url).href,
                price: "RP 24.000",
            },
            {
                id: 'beverage4',
                name: 'Espresso',
                image: new URL('@/assets/images/menu/beverage/kopi_espresso.jpeg', import.meta.url).href,
                price: "RP 20.000",
            },
            {
                id: 'beverage5',
                name: 'Latte',
                image: new URL('@/assets/images/menu/beverage/kopi_latte.jpeg', import.meta.url).href,
                price: "RP 28.000",
            },
            {
                id: 'beverage6',
                name: 'Cappuccino',
                image: new URL('@/assets/images/menu/beverage/kopi_cappuccino.jpg', import.meta.url).href,
                price: "RP 28.000",
            },
            {
                id: 'beverage7',
                name: 'Moccacino',
                image: new URL('@/assets/images/menu/beverage/kopi_moccacino.jpeg', import.meta.url).href,
                price: "RP 28.000",
            }
        ]
    },
    {
        groupId: 'bevjus',
        groupName: 'C. Jus Buah',
        items: [
            {
                id: 'beverage8',
                name: 'Jus Buah Naga',
                image: new URL('@/assets/images/menu/beverage/jus_buah_naga.jpg', import.meta.url).href,
                price: "RP 20.000",
            },
            {
                id: 'beverage9',
                name: 'Jus Jeruk',
                image: new URL('@/assets/images/menu/beverage/jus_jeruk.jpg', import.meta.url).href,
                price: "RP 18.000",
            },
            {
                id: 'beverage10',
                name: 'Jus Alpukat',
                image: new URL('@/assets/images/menu/beverage/jus_alpukat.jpg', import.meta.url).href,
                price: "RP 23.000",
            },
            {
                id: 'beverage11',
                name: 'Jus Kurma',
                image: new URL('@/assets/images/menu/beverage/jus_kurma.jpg', import.meta.url).href,
                price: "RP 25.000",
            },
            {
                id: 'beverage12',
                name: 'Jus Mangga',
                image: new URL('@/assets/images/menu/beverage/jus_mangga.jpg', import.meta.url ).href,
                price: "RP 21.000",
            },
            {
                id: 'beverage13',
                name: 'Jus Pepaya',
                image: new URL('@/assets/images/menu/beverage/jus_pepaya.jpg', import.meta.url).href,
                price: "RP 20.000",
            },
        ]
    },
    {
        groupId: 'bevlain',
        groupName: 'D. Lainnya',
        items: [
            {
                id: 'beverage14',
                name: 'Teh Es/Hangat',
                image: new URL('@/assets/images/menu/beverage/teh.jpeg', import.meta.url).href,
                price: "RP 8.000",
            },
            {
                id: 'beverage15',
                name: 'Teh Tarik',
                image: new URL('@/assets/images/menu/beverage/teh_tarik.jpeg', import.meta.url).href,
                price: "RP 14.000",
            },
            {
                id: 'beverage16',
                name: 'Milo Es/Hangat',
                image: new URL('@/assets/images/menu/beverage/milo.jpeg', import.meta.url).href,
                price: "RP 12.000",
            },
            {
                id: 'beverage17',
                name: 'Air Putih Es/Hangat',
                image: new URL('@/assets/images/menu/beverage/air_putih.jpeg', import.meta.url).href,
                price: "RP 5.000",
            },
            {
                id: 'beverage18',
                name: 'Matcha Es/Hangat',
                image: new URL('@/assets/images/menu/beverage/matcha.jpeg', import.meta.url).href,
                price: "RP 17.000",
            },
        ]
    },
]


export const dessertMenu = [
    {
        id: 'dessert1',
        name: 'Baklava',
        description: 'Kue lapis khas Turki berisi kacang cincang dan madu, dibalut pastry renyah berlapis-lapis.',
        image: new URL('@/assets/images/menu/appertizer-dessert/baklava.png', import.meta.url).href,
        price: "RP 35.000",
    },
    {
        id: 'dessert2',
        name: 'Es Pisang Ijo',
        description: 'Hidangan penutup khas Makassar, pisang dibalut adonan hijau lembut dengan sirup merah dan santan dingin.',
        image: new URL('@/assets/images/menu/appertizer-dessert/Es_pisang_ijo.jpg', import.meta.url).href,
        price: "RP 22.000",
    },
    {
        id: 'dessert3',
        name: 'Kolak Kurma',
        description: 'Kreasi Nusantara dengan sentuhan Timur Tengah — kurma dan pisang dimasak dalam kuah santan manis beraroma pandan.',
        image: new URL('@/assets/images/menu/appertizer-dessert/kolak_kurma.jpg', import.meta.url).href,
        price: "RP 25.000",
    },
    {
        id: 'dessert4',
        name: 'Kunafa',
        description: 'Dessert khas Timur Tengah dari adonan kadaif renyah berlapis keju lembut, disiram sirup gula mawar hangat.',
        image: new URL('@/assets/images/menu/appertizer-dessert/kunafa.png', import.meta.url).href,
        price: "RP 40.000",
    },
    {
        id: 'dessert5',
        name: 'Mahalabia',
        description: 'Puding susu khas Arab yang lembut dan wangi air mawar, disajikan dingin dengan taburan kacang pistachio.',
        image: new URL('@/assets/images/menu/appertizer-dessert/mahalabia.jpg',import.meta.url).href,
        price: "RP 32.000",
    },
]