export const appertizerMenu = [
    {
        id: 'appertizer1',
        name: 'Baba Gnaoush',
        description: 'Dip terong panggang lembut dengan tahini, bawang putih, lemon, dan minyak zaitun.',
        image: '@/assets/images/menu/appertizer-dessert/baba_ghanoush.jpg',
        price: "RP 40000",
    },
    {
        id: 'appertizer2',
        name: 'Samosa',
        description: 'Kulit tipis goreng berisi daging berbumbu dan sayuran, disajikan hangat dengan saus yoghurt mint.',
        image: '@/assets/images/menu/appertizer-dessert/samosa.jpeg',
        price: "RP 30000",
    },
    {
        id: 'appertizer3',
        name: 'Risoles',
        description: 'Tersedia 2 rasa : isi telur + Bihun dan telur + sosis',
        image: '@/assets/images/menu/appertizer-dessert/risol.jpg',
        price: "RP 13000",
    },
    {
        id: 'appertizer4',
        name: 'Hummus',
        description: 'Dip lembut dari kacang arab tumbuk dengan tahini, bawang putih, lemon, dan minyak zaitun.',
        image: '@/assets/images/menu/appertizer-dessert/hummus.jpeg',
        price: "RP 25000",
    },
    {
        id: 'appertizer5',
        name: 'Falafel',
        description: 'Bola goreng renyah dari kacang arab dan rempah khas Timur Tengah, disajikan dengan saus tahini.',
        image: '@/assets/images/menu/appertizer-dessert/falafel.jpeg',
        price: "RP 35000",
    },
    {
        id: 'appertizer6',
        name: 'Kebab',
        description: 'Daging sapi berbumbu khas Timur Tengah, disajikan dengan roti tortilla, sayuran segar, dan saus yoghurt.',
        image: '@/assets/images/menu/appertizer-dessert/kebab.jpg',
        price: "RP 37000",
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
                price: "RP 70000",
                image: '@/assets/images/menu/maincourse-sidedish/briyani_domba.png'
            },
            {
                id: 'mc2',
                name: 'Nasi Briyani Daging Ayam',
                price: "RP 55000",
                image: '@/assets/images/menu/maincourse-sidedish/briyani_ayam.jpg'
            },
            {
                id: 'mc3',
                name: 'Nasi Briyani Daging Sapi',
                price: "RP 70000",
                image: '@/assets/images/menu/maincourse-sidedish/briyani_sapi.png'
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
                price: "RP 70000",
                image: '@/assets/images/menu/maincourse-sidedish/kebuli_domba.png'
            },
            {
                id: 'mc5',
                name: 'Nasi Kebuli Daging Ayam',
                price: "RP 55000",
                image: '@/assets/images/menu/maincourse-sidedish/kebuli_ayam.jpg'
            },
            {
                id: 'mc6',
                name: 'Nasi Kebuli Daging Sapi',
                price: "RP 70000",
                image: '@/assets/images/menu/maincourse-sidedish/kebuli_sapi.png'
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
                price: "RP 70000",
                image: '@/assets/images/menu/maincourse-sidedish/mandhi-domba.jpg'
            },
            {
                id: 'mc8',
                name: 'Nasi Mandhi Daging Ayam',
                price: "RP 55000",
                image: '@/assets/images/menu/maincourse-sidedish/mandhi-ayam.jpg'
            },
            {
                id: 'mc9',
                name: 'Nasi Mandhi Daging Sapi',
                price: "RP 70000",
                image: '@/assets/images/menu/maincourse-sidedish/mandhi-sapi.jpg'
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
                price: "RP 70000",
                image: '@/assets/images/menu/maincourse-sidedish/kabsah-domba.jpg'
            },
            {
                id: 'mc11',
                name: 'Nasi Kabsah Daging Ayam',
                price: "RP 55000",
                image: '@/assets/images/menu/maincourse-sidedish/kabsah-ayam.jpg'
            },
            {
                id: 'mc12',
                name: 'Nasi Kabsah Daging Sapi',
                price: "RP 70000",
                image: '@/assets/images/menu/maincourse-sidedish/kabsah-sapi.jpg'
            },
        ]
    }
]


export const sideDishMenu = [
    {
        id: 'sd1',
        name: 'Batata Harra',
        description: 'Kentang goreng berbumbu pedas khas Lebanon, ditumis dengan bawang putih, ketumbar, dan cabai.',
        image: '@/assets/images/menu/maincourse-sidedish/batata-harra.jpg',
        price: "RP 24000",
    },
    {
        id: 'sd2',
        name: 'French Fries',
        description: 'Kentang goreng renyah disajikan hangat dengan saus tomat dan mayonnaise.',
        image: '@/assets/images/menu/maincourse-sidedish/kentang_goreng.jpg',
        price: "RP 17000",
    },
    {
        id: 'sd3',
        name: 'Roti Maryam',
        description: 'Roti pipih khas Timur Tengah berlapis lembut dan sedikit manis, disajikan hangat dengan kuah kari atau madu.',
        image: '@/assets/images/menu/maincourse-sidedish/roti-maryam.png',
        price: "RP 18000",
    },
    {
        id: 'sd4',
        name: 'Tabbouleh',
        description: 'Salad segar khas Lebanon dari peterseli cincang, tomat, bulgur, dan perasan lemon.',
        image: '@/assets/images/menu/maincourse-sidedish/tabbouleh.jpg',
        price: "RP 30000",
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
                image: '@/assets/images/menu/beverage/sobia.jpg',
                price: "RP 20000",
            },
            {
                id: 'beverage2',
                name: 'Karak Tea',
                description: 'Teh susu khas Teluk Arab dengan kapulaga dan rasa manis aromatik.',
                image: '@/assets/images/menu/beverage/karak_tea.jpeg',
                price: "RP 15000",
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
                image: '@/assets/images/menu/beverage/kopi_americano.jpeg',
                price: "RP 24000",
            },
            {
                id: 'beverage4',
                name: 'Espresso',
                image: '@/assets/images/menu/beverage/kopi_espresso.jpeg',
                price: "RP 20000",
            },
            {
                id: 'beverage5',
                name: 'Latte',
                image: '@/assets/images/menu/beverage/kopi_latte.jpeg',
                price: "RP 28000",
            },
            {
                id: 'beverage6',
                name: 'Cappuccino',
                image: '@/assets/images/menu/beverage/kopi_cappuccino.jpg',
                price: "RP 28000",
            },
            {
                id: 'beverage7',
                name: 'Moccacino',
                image: '@/assets/images/menu/beverage/kopi_moccacino.jpeg',
                price: "RP 28000",
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
                image: '@/assets/images/menu/beverage/jus_buah_naga.jpg',
                price: "RP 20000",
            },
            {
                id: 'beverage9',
                name: 'Jus Jeruk',
                image: '@/assets/images/menu/beverage/jus_jeruk.jpg',
                price: "RP 18000",
            },
            {
                id: 'beverage10',
                name: 'Jus Alpukat',
                image: '@/assets/images/menu/beverage/jus_alpukat.jpg',
                price: "RP 23000",
            },
            {
                id: 'beverage11',
                name: 'Jus Kurma',
                image: '@/assets/images/menu/beverage/jus_kurma.jpg',
                price: "RP 25000",
            },
            {
                id: 'beverage12',
                name: 'Jus Mangga',
                image: '@/assets/images/menu/beverage/jus_mangga.jpg',
                price: "RP 21000",
            },
            {
                id: 'beverage13',
                name: 'Jus Pepaya',
                image: '@/assets/images/menu/beverage/jus_pepaya.jpg',
                price: "RP 20000",
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
                image: '@/assets/images/menu/beverage/teh.jpeg',
                price: "RP 8000,"
            },
            {
                id: 'beverage15',
                name: 'Teh Tarik',
                image: '@/assets/images/menu/beverage/teh_tarik.jpeg',
                price: "RP 14000",
            },
            {
                id: 'beverage16',
                name: 'Milo Es/Hangat',
                image: '@/assets/images/menu/beverage/milo.jpeg',
                price: "RP 12000",
            },
            {
                id: 'beverage17',
                name: 'Air Putih Es/Hangat',
                image: '@/assets/images/menu/beverage/air_putih.jpeg',
                price: "RP 5000,"
            },
            {
                id: 'beverage18',
                name: 'Matcha Es/Hangat',
                image: '@/assets/images/menu/beverage/matcha.jpeg',
                price: "RP 17000",
            },
        ]
    },
]


export const dessertMenu = [
    {
        id: 'dessert1',
        name: 'Baklava',
        description: 'Kue lapis khas Turki berisi kacang cincang dan madu, dibalut pastry renyah berlapis-lapis.',
        image: '@/assets/images/menu/appertizer-dessert/baklava.png',
        price: "RP 35000",
    },
    {
        id: 'dessert2',
        name: 'Es Pisang Ijo',
        description: 'Hidangan penutup khas Makassar, pisang dibalut adonan hijau lembut dengan sirup merah dan santan dingin.',
        image: '@/assets/images/menu/appertizer-dessert/Es_pisang_ijo.jpg',
        price: "RP 22000",
    },
    {
        id: 'dessert3',
        name: 'Kolak Kurma',
        description: 'Kreasi Nusantara dengan sentuhan Timur Tengah — kurma dan pisang dimasak dalam kuah santan manis beraroma pandan.',
        image: '@/assets/images/menu/appertizer-dessert/kolak_kurma.jpg',
        price: "RP 25000",
    },
    {
        id: 'dessert4',
        name: 'Kunafa',
        description: 'Dessert khas Timur Tengah dari adonan kadaif renyah berlapis keju lembut, disiram sirup gula mawar hangat.',
        image: '@/assets/images/menu/appertizer-dessert/kunafa.png',
        price: "RP 40000",
    },
    {
        id: 'dessert5',
        name: 'Mahalabia',
        description: 'Puding susu khas Arab yang lembut dan wangi air mawar, disajikan dingin dengan taburan kacang pistachio.',
        image: '@/assets/images/menu/appertizer-dessert/mahalabia.jpg',
        price: "RP 32000",
    },
]