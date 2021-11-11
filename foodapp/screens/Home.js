import React from "react";
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList
} from "react-native";

import { icons, images, SIZES, COLORS, FONTS } from '../constants'

const Home = ({ navigation }) => {

    // Dummy Datas

    const initialCurrentLocation = {
        streetName: "Kuching",
        gps: {
            latitude: 1.5496614931250685,
            longitude: 110.36381866919922
        }
    }

    const categoryData = [
        {
            id: 1,
            name: "Supermarket",
            icon: icons.hamburger,
        },

        {
            id: 2,
            name: "Carnicería",
            icon: icons.noodle,
        },

        {
            id: 3,
            name: "Verdurería",
            icon: icons.hotdog,
        },

        {
            id: 4,
            name: "Ferretería",
            icon: icons.salad,
        },

        {
            id: 5,
            name: "Comidas",
            icon: icons.rice_bowl,
        },

        {
            id: 7,
            name: "Farmacia",
            icon: icons.fries,
        },
        {
            id: 8,
            name: "Panaderia",
            icon: icons.sushi,
        },
        {
            id: 9,
            name: "Bicicletas",
            icon: icons.donut,
        },
        {
            id: 10,
            name: "Motocicletas",
            icon: icons.drink,
        },

    ]

    // price rating
    const affordable = 1
    const fairPrice = 2
    const expensive = 3



    const restaurantData = [
        {
            id: 1,
            name: "ABARROTES Y GRANOS",
            rating: 4.8,
            categories: [1],
            priceRating: affordable,
            photo: images.arrozk,
            duration: "30 - 45 min",
            location: {
                latitude: 1.5347282806345879,
                longitude: 110.35632207358996,
            },
            menu: [
                {
                    menuId: 1,
                    name: "Arroz Tio Pelon 91",
                    photo: images.tiopelon91,
                    description: "Grano entero",
                    calories: 200,
                    price: 10
                },
                {
                    menuId: 2,
                    name: "Arroz Tio Pelon 99",
                    photo: images.tiopelon99,
                    description: "Grano entero",
                    calories: 250,
                    price: 15
                },
                {
                    menuId: 3,
                    name: "Arroz Sabanero",
                    photo: images.sabaneroa,
                    description: "Grano entero",
                    calories: 194,
                    price: 8
                }
            ]
        },
        {
            id: 2,
            name: "CONDIMENTOS Y ESPECIAS",
            rating: 4.8,
            categories: [1],
            priceRating: expensive,
            photo: images.condimentk,
            duration: "15 - 20 min",
            location: {
                latitude: 1.556306570595712,
                longitude: 110.35504616746915,
            },
            courier: {
                avatar: images.avatar_2,
                name: "Jackson"
            },
            menu: [
                {
                    menuId: 4,
                    name: "Consume pack",
                    photo: images.consumea,
                    description: "consume paquete de 8",
                    calories: 250,
                    price: 15
                },
                {
                    menuId: 5,
                    name: "Ajinomoto",
                    photo: images.ajinomotoa,
                    description: "Bolsa de ajinomoto",
                    calories: 250,
                    price: 20
                }
            ]
        },
        {
            id: 3,
            name: "SOPAS Y PASTAS",
            rating: 4.8,
            categories: [1],
            priceRating: expensive,
            photo: images.sopask,
            duration: "20 - 25 min",
            location: {
                latitude: 1.5238753474714375,
                longitude: 110.34261833833622,
            },
            courier: {
                avatar: images.avatar_3,
                name: "Amy"
            },
            menu: [
                {
                    menuId: 8,
                    name: "Sopas Magui",
                    photo: images.sopamag,
                    description: "Fresh tomatoes, all beef hot dogs",
                    calories: 100,
                    price: 20
                },
                {
                    menuId: 999999,
                    name: "Sopas Negra",
                    photo: images.sopaneg,
                    description: "Fresh tomatoes, all beef hot dogs",
                    calories: 100,
                    price: 20
                },
                {
                    menuId: 999998,
                    name: "Rancheritas blabla",
                    photo: images.rancheritaa,
                    description: "rancheritas detalles dosj jsj",
                    calories: 100,
                    price: 20
                },
            ]
        },
        {
            id: 4,
            name: "LICORES Y BEBIDAS",
            rating: 4.8,
            categories: [1],
            priceRating: expensive,
            photo: images.licoresk,
            duration: "10 - 15 min",
            location: {
                latitude: 1.5578068150528928,
                longitude: 110.35482523764315,
            },
            courier: {
                avatar: images.avatar_4,
                name: "Ahmad"
            },
            menu: [
                {
                    menuId: 9,
                    name: "Coca Cola retornable ",
                    photo: images.retornablea,
                    description: "Coca Cola 2Kg Retornable",
                    calories: 100,
                    price: 50
                },
                {
                    menuId: 999997,
                    name: "Coca Cola 3Lt",
                    photo: images.coca3l,
                    description: "Coca cola 3 litros",
                    calories: 100,
                    price: 20
                },

            ]
        },
        {
            id: 5,
            name: "FRUTAS Y VERDURAS",
            rating: 4.8,
            categories: [1, 3],
            priceRating: affordable,
            photo: images.frutask,
            duration: "15 - 20 min",
            location: {
                latitude: 1.558050496260768,
                longitude: 110.34743759630511,
            },
            courier: {
                avatar: images.avatar_4,
                name: "Muthu"
            },
            menu: [
                {
                    menuId: 10,
                    name: "Manzana",
                    photo: images.manzanaa,
                    description: "Noodles with char siu",
                    calories: 200,
                    price: 5
                },
                {
                    menuId: 11,
                    name: "Uva",
                    photo: images.uva,
                    description: "Vermicelli noodles, cooked prawns",
                    calories: 300,
                    price: 8
                },
                {
                    menuId: 12,
                    name: "Banano",
                    photo: images.bananoa,
                    description: "A traditional Malay rice dish",
                    calories: 300,
                    price: 8
                },
                {
                    menuId: 13,
                    name: "Platano maduro",
                    photo: images.platanomaduro,
                    description: "A traditional Indian rice dish with mutton",
                    calories: 300,
                    price: 8
                },
                
                {
                    menuId: 999995,
                    name: "Aguacate",
                    photo: images.aguacate,
                    description: "Delicioso aguacate maduro",
                    calories: 100,
                    price: 20
                },

            ]
        },


        {

            id: 6,
            name: "SNACKS Y DULCES",
            rating: 4.9,
            categories: [1],
            priceRating: affordable,
            photo: images.dulcesk,
            duration: "35 - 40 min",
            location: {
                latitude: 1.5573478487252896,
                longitude: 110.35568783282145,
            },
            courier: {
                avatar: images.avatar_1,
                name: "Jessie"
            },
            menu: [
                {
                    menuId: 14,
                    name: "Galletas x",
                    photo: images.doritosss,
                    description: "Chips de chocolate",
                    calories: 100,
                    price: 2
                }
               
            ]

        },


        {

            id: 7,
            name: "ARTÍCULOS PARA EL HOGAR",
            rating: 4.9,
            categories: [1],
            priceRating: affordable,
            photo: images.hogark,
            duration: "35 - 40 min",
            location: {
                latitude: 1.5573478487252896,
                longitude: 110.35568783282145,
            },
            courier: {
                avatar: images.avatar_1,
                name: "Jessie"
            },
            menu: [
                {
                    menuId: 17,
                    name: "Escoba",
                    photo: images.escobaa,
                    description: "Escoba de limpieza",
                    calories: 100,
                    price: 2
                },
                {
                    menuId: 18,
                    name: "Bajilla de platos",
                    photo: images.platosa,
                    description: "5 platos y un vaso",
                    calories: 100,
                    price: 3
                }
            ]

        },




        {

            id: 8,
            name: "LACTEOS Y CONGELADOS",
            rating: 4.9,
            categories: [1],
            priceRating: affordable,
            photo: images.congeladosk,
            duration: "35 - 40 min",
            location: {
                latitude: 1.5573478487252896,
                longitude: 110.35568783282145,
            },
            courier: {
                avatar: images.avatar_1,
                name: "Jessie"
            },
            menu: [
                {
                    menuId: 20,
                    name: "Helado Dos pinos 5lt",
                    photo: images.heladodos,
                    description: "Helado de vainilla rico",
                    calories: 100,
                    price: 2
                },
                {
                    menuId: 21,
                    name: "Paleta de chocolate 356hg",
                    photo: images.palatecho,
                    description: "Deliciosa paleta de chocolate con chispas de chocolate",
                    calories: 100,
                    price: 3
                },
                {
                    menuId: 22,
                    name: "Bandeja de muslitos de pollo",
                    photo: images.bandejapollo,
                    description: "Bandeja de pollo",
                    calories: 300,
                    price: 20
                }
            ],

        },


        {

            id: 9,
            name: "ASEO PERSONAL",
            rating: 4.9,
            categories: [1],
            priceRating: affordable,
            photo: images.aseok,
            duration: "35 - 40 min",
            location: {
                latitude: 1.5573478487252896,
                longitude: 110.35568783282145,
            },
            courier: {
                avatar: images.avatar_1,
                name: "Jessie"
            },
            menu: [
                {
                    menuId: 23,
                    name: "Pasta Deltal Colgate total 12",
                    photo: images.colgate12,
                    description: "Pasta dental",
                    calories: 100,
                    price: 2
                }
            ]

        },





        {

            id: 10,
            name: "PRODUCTOS PARA BEBÉ",
            rating: 4.9,
            categories: [1],
            priceRating: affordable,
            photo: images.bebek,
            duration: "35 - 40 min",
            location: {
                latitude: 1.5573478487252896,
                longitude: 110.35568783282145,
            },
            courier: {
                avatar: images.avatar_1,
                name: "Jessie"
            },
            menu: [
                {
                    menuId: 27,
                    name: "Pañalito crema",
                    photo: images.pañalito,
                    description: "Pañalito crema mediana grande pequeña",
                    calories: 100,
                    price: 3
                }
            ]

        },





        {

            id: 11,
            name: "PRODUCTOS DE LIMPIEZA",
            rating: 4.9,
            categories: [1],
            priceRating: affordable,
            photo: images.limpiezak,
            duration: "35 - 40 min",
            location: {
                latitude: 1.5573478487252896,
                longitude: 110.35568783282145,
            },
            courier: {
                avatar: images.avatar_1,
                name: "Jessie"
            },
            menu: [
                {
                    menuId: 29,
                    name: "Cloro",
                    photo: images.cloro,
                    description: "Galon de clorox",
                    calories: 100,
                    price: 2
                },
                {
                    menuId: 30,
                    name: "Ace 5kg",
                    photo: images.ace,
                    description: "Paquete de ace sasd",
                    calories: 100,
                    price: 3
                }
            ]

        },








        {

            id: 12,
            name: "CARNE DE CERDO",
            rating: 4.9,
            categories: [1, 2],
            priceRating: affordable,
            photo: images.cerdok,
            duration: "35 - 40 min",
            location: {
                latitude: 1.5573478487252896,
                longitude: 110.35568783282145,
            },
            courier: {
                avatar: images.avatar_1,
                name: "Jessie"
            },
            menu: [
                {
                    menuId: 32,
                    name: "Posta de Cerdo",
                    photo: images.postaa,
                    description: "! kg de porsta de cerdo fresca",
                    calories: 100,
                    price: 2
                },
                {
                    menuId: 33,
                    name: "Costilla de cerdo",
                    photo: images.costillaa,
                    description: "deliciosa costilla amada por los clientes",
                    calories: 100,
                    price: 3
                },
                {
                    menuId: 34,
                    name: "Panzada",
                    photo: images.panzadaa,
                    description: "Deliciosa pansada para esos chicharroncitos",
                    calories: 300,
                    price: 20
                }
            ]

        },










        {

            id: 13,
            name: "CARNE DE RES",
            rating: 4.9,
            categories: [1, 2],
            priceRating: affordable,
            photo: images.resk,
            duration: "35 - 40 min",
            location: {
                latitude: 1.5573478487252896,
                longitude: 110.35568783282145,
            },
            courier: {
                avatar: images.avatar_1,
                name: "Jessie"
            },
            menu: [
                {
                    menuId: 35,
                    name: "Bistec de res",
                    photo: images.bistecc,
                    description: "Delicioso bistec de res",
                    calories: 100,
                    price: 2
                }
            ]

        },








        {

            id: 14,
            name: "POLLO",
            rating: 4.9,
            categories: [1, 2],
            priceRating: affordable,
            photo: images.pollok,
            duration: "35 - 40 min",
            location: {
                latitude: 1.5573478487252896,
                longitude: 110.35568783282145,
            },
            courier: {
                avatar: images.avatar_1,
                name: "Jessie"
            },
            menu: [
                {
                    menuId: 38,
                    name: "Muslo encuestro",
                    photo: images.muslo,
                    description: "Delicoso pollo fresco ",
                    calories: 100,
                    price: 2
                },
                {
                    menuId: 39,
                    name: "Piedras",
                    photo: images.piedras,
                    description: "Ricas piedras para una salsita n",
                    calories: 100,
                    price: 3
                },
                {
                    menuId: 40,
                    name: "Pechuga",
                    photo: images.pechuga,
                    description: "Deliciosas pechugas ",
                    calories: 300,
                    price: 20
                }
            ]

        },




        {

            id: 15,
            name: "Ferreteria Norma",
            rating: 4.9,
            categories: [1, 4],
            priceRating: affordable,
            photo: images.ferreteriak,
            duration: "35 - 40 min",
            location: {
                latitude: 1.5573478487252896,
                longitude: 110.35568783282145,
            },
            courier: {
                avatar: images.avatar_1,
                name: "Jessie"
            },
            menu: [
                {
                    menuId: 41,
                    name: "Martillo",
                    photo: images.martillob,
                    description: "Exceletne martillo mlcla",
                    calories: 100,
                    price: 2
                },
                {
                    menuId: 42,
                    name: "Clavos",
                    photo: images.clavosb,
                    description: "clavos de acero ",
                    calories: 100,
                    price: 3
                }
            ]

        },







        {

            id: 16,
            name: "Pollo Frito y Taqueria Bolita",
            rating: 4.9,
            categories: [5],
            priceRating: affordable,
            photo: images.sodatink,
            duration: "35 - 40 min",
            location: {
                latitude: 1.5573478487252896,
                longitude: 110.35568783282145,
            },
            courier: {
                avatar: images.avatar_1,
                name: "Jessie"
            },
            menu: [
                {
                    menuId: 44,
                    name: "Papas supremas",
                    photo: images.supremas,
                    description: "Ricas papas supremas",
                    calories: 100,
                    price: 2
                },
                {
                    menuId: 45,
                    name: "Tacos",
                    photo: images.tacosk,
                    description: "Tacos",
                    calories: 100,
                    price: 3
                },
                {
                    menuId: 46,
                    name: "Chalupas",
                    photo: images.chalupas,
                    description: "Chalupas",
                    calories: 300,
                    price: 20
                }
            ]

        },







        {

            id: 17,
            name: "El Changarro de Alonso",
            rating: 4.9,
            categories: [5],
            priceRating: affordable,
            photo: images.changarro,
            duration: "35 - 40 min",
            location: {
                latitude: 1.5573478487252896,
                longitude: 110.35568783282145,
            },
            courier: {
                avatar: images.avatar_1,
                name: "Jessie"
            },
            menu: [
                {
                    menuId: 47,
                    name: "Papas Supreme",
                    photo: images.supremas,
                    description: "Deliciosa papas",
                    calories: 100,
                    price: 2
                },
                {
                    menuId: 48,
                    name: "Alitas em BBQ",
                    photo: images.bbq,
                    description: "deliciosas alitas en babjs",
                    calories: 100,
                    price: 3
                },
                {
                    menuId: 49,
                    name: "Pollo frito",
                    photo: images.pollofrito,
                    description: "Deliciosas porciones de pollo",
                    calories: 300,
                    price: 20
                }
            ]

        },




        {

            id: 18,
            name: "Donde Wiky",
            rating: 4.9,
            categories: [5],
            priceRating: affordable,
            photo: images.wiky,
            duration: "35 - 40 min",
            location: {
                latitude: 1.5573478487252896,
                longitude: 110.35568783282145,
            },
            courier: {
                avatar: images.avatar_1,
                name: "Jessie"
            },
            menu: [
                {
                    menuId: 50,
                    name: "Pizza",
                    photo: images.pizzaaaa,
                    description: "deliciosajsanb sahdas",
                    calories: 100,
                    price: 2
                },
            ]

        },





        {

            id: 19,
            name: "Pollolandia La Cuesta",
            rating: 4.9,
            categories: [5],
            priceRating: affordable,
            photo: images.pollolandia,
            duration: "35 - 40 min",
            location: {
                latitude: 1.5573478487252896,
                longitude: 110.35568783282145,
            },
            courier: {
                avatar: images.avatar_1,
                name: "Jessie"
            },
            menu: [
                {
                    menuId: 53,
                    name: "Delicioso pollo frito",
                    photo: images.pollofrito,
                    description: "Pollo frito",
                    calories: 100,
                    price: 2
                },
                {
                    menuId: 55,
                    name: "Delicosas papas fritas",
                    photo: images.papasfritas,
                    description: "Papas fritas",
                    calories: 300,
                    price: 20
                }
            ]

        },





        {

            id: 20,
            name: "Ferreteria Materiales",
            rating: 4.9,
            categories: [4],
            priceRating: affordable,
            photo: images.materialesk,
            duration: "35 - 40 min",
            location: {
                latitude: 1.5573478487252896,
                longitude: 110.35568783282145,
            },
            courier: {
                avatar: images.avatar_1,
                name: "Jessie"
            },
            menu: [
                {
                    menuId: 56,
                    name: "Clavos de acero",
                    photo: images.clavosb,
                    description: "Three sasdasd",
                    calories: 100,
                    price: 2
                },
                {
                    menuId: 57,
                    name: "Disco de cortar ",
                    photo: images.discocortar,
                    description: "cas dksk s acero",
                    calories: 100,
                    price: 3
                },
                {
                    menuId: 58,
                    name: "servicio samita  ",
                    photo: images.servicio,
                    description: "skdks isk",
                    calories: 300,
                    price: 20
                }
            ]

        },





        {

            id: 21,
            name: "Farmasur",
            rating: 4.9,
            categories: [1, 7],
            priceRating: affordable,
            photo: images.farmasurk,
            duration: "35 - 40 min",
            location: {
                latitude: 1.5573478487252896,
                longitude: 110.35568783282145,
            },
            courier: {
                avatar: images.avatar_1,
                name: "Jessie"
            },
            menu: [
                {
                    menuId: 59,
                    name: "Pastillas acetaminofen",
                    photo: images.acetaminofen,
                    description: "Three aceftmainiso dde",
                    calories: 100,
                    price: 2
                },
                {
                    menuId: 71,
                    name: "Microginon",
                    photo: images.microginon,
                    description: "3mm",
                    calories: 300,
                    price: 20
                }
            ]

        },



        {

            id: 61,
            name: "Panaderia La Flor",
            rating: 4.9,
            categories: [8],
            priceRating: affordable,
            photo: images.panaderiak,
            duration: "35 - 40 min",
            location: {
                latitude: 1.5573478487252896,
                longitude: 110.35568783282145,
            },
            courier: {
                avatar: images.avatar_1,
                name: "Jessie"
            },
            menu: [
                {
                    menuId: 72,
                    name: "Pañuelos",
                    photo: images.pañuelo,
                    description: "ricos envueltos de dulce de leche",
                    calories: 100,
                    price: 2
                },
                {
                    menuId: 73,
                    name: "BAguet",
                    photo: images.baguet,
                    description: "3x2",
                    calories: 100,
                    price: 3
                },
                {
                    menuId: 74,
                    name: "Pan pizza",
                    photo: images.panpizza,
                    description: "Pan pizza",
                    calories: 300,
                    price: 20
                }
            ]

        },



        {

            id: 22,
            name: "Ciclo Kike",
            rating: 4.9,
            categories: [9],
            priceRating: affordable,
            photo: images.kikek,
            duration: "35 - 40 min",
            location: {
                latitude: 1.5573478487252896,
                longitude: 110.35568783282145,
            },
            courier: {
                avatar: images.avatar_1,
                name: "Jessie"
            },
            menu: [
                {
                    menuId: 75,
                    name: "Neumatico",
                    photo: images.neumatico,
                    description: "Neumaico",
                    calories: 100,
                    price: 2
                }
            ]

        },





        {

            id: 23,
            name: "Moto Sport Paso Canoas",
            rating: 4.9,
            categories: [10],
            priceRating: affordable,
            photo: images.sportk,
            duration: "35 - 40 min",
            location: {
                latitude: 1.5573478487252896,
                longitude: 110.35568783282145,
            },
            courier: {
                avatar: images.avatar_1,
                name: "Jessie"
            },
            menu: [
                {
                    menuId: 78,
                    name: "Casco de motocros",
                    photo: images.cascomoto,
                    description: "fuerte casco de motocros",
                    calories: 100,
                    price: 2
                }
            ]

        },






    ]











    const [categories, setCategories] = React.useState(categoryData)
    const [selectedCategory, setSelectedCategory] = React.useState(null)
    const [restaurants, setRestaurants] = React.useState(restaurantData)
    const [currentLocation, setCurrentLocation] = React.useState(initialCurrentLocation)


    function onSelectCategory(category) {
        //filter restaurant
        let restaurantList = restaurantData.filter(a => a.categories.includes(category.id))

        setRestaurants(restaurantList)

        setSelectedCategory(category)
    }

    function getCategoryNameById(id) {
        let category = categories.filter(a => a.id == id)

        if (category.length > 0)
            return category[0].name

        return ""
    }


    function renderMainCategories() {
        const renderItem = ({ item }) => {
            return (
                <TouchableOpacity
                    style={{
                        padding: SIZES.padding,
                        paddingBottom: SIZES.padding * 2,
                        backgroundColor: (selectedCategory?.id == item.id) ? COLORS.primary : COLORS.white,
                        borderRadius: SIZES.radius,
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: SIZES.padding,
                        ...styles.shadow
                    }}
                    onPress={() => onSelectCategory(item)}
                >
                    <View
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: 25,
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.lightGray
                        }}
                    >
                        <Image
                            source={item.icon}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30
                            }}
                        />
                    </View>

                    <Text
                        style={{
                            marginTop: SIZES.padding,
                            color: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.black,
                            ...FONTS.body5
                        }}
                    >
                        {item.name}
                    </Text>
                </TouchableOpacity>
            )
        }

        return (
            <View style={{ padding: 1 }}>

                <FlatList
                    data={categories}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderItem}
                    contentContainerStyle={{ marginTop: 12, marginLeft: 5, marginVertical: 18 }}
                />
            </View>
        )
    }

    function renderRestaurantList() {
        const renderItem = ({ item }) => (
            <TouchableOpacity
                style={{ marginBottom: 44, marginTop: 12, backgroundColor: "#e0e0e0", borderRadius: SIZES.radius }}
                onPress={() => navigation.navigate("Restaurant", {
                    item,
                    currentLocation
                })}
            >
                {/* Image */}
                <View
                    style={{
                        marginBottom: SIZES.padding
                    }}
                >
                    <Image
                        source={item.photo}
                        resizeMode="cover"
                        style={{
                            width: "100%",
                            height: 200,
                            borderRadius: SIZES.radius
                        }}
                    />

                    <View
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            height: 50,
                            width: SIZES.width * 0.3,
                            backgroundColor: COLORS.white,
                            borderTopRightRadius: SIZES.radius,
                            borderBottomLeftRadius: SIZES.radius,
                            alignItems: 'center',
                            justifyContent: 'center',
                            ...styles.shadow
                        }}
                    >
                        <Text style={{ ...FONTS.h4 }}>{item.duration}</Text>
                    </View>
                </View>

                {/* Restaurant Info */}
                <Text style={{ ...FONTS.body2, marginLeft: 12, fontWeight: "bold" }}>{item.name}</Text>

                <View
                    style={{
                        marginVertical: 5,
                        flexDirection: 'row'
                    }}
                >

                    {/* Rating */}
                    <Image
                        source={icons.star}
                        style={{
                            height: 20,
                            width: 20,
                            tintColor: COLORS.primary,
                            marginRight: 10,
                            marginLeft: 21
                        }}
                    />
                    <Text style={{ ...FONTS.body3 }}>{item.rating}</Text>

                    {/* Categories */}
                    <View
                        style={{
                            flexDirection: 'row',
                            marginLeft: 10
                        }}
                    >
                        {
                            item.categories.map((categoryId) => {
                                return (
                                    <View
                                        style={{ flexDirection: 'row' }}
                                        key={categoryId}
                                    >
                                        <Text style={{ ...FONTS.body3 }}>{getCategoryNameById(categoryId)}</Text>
                                        <Text style={{ ...FONTS.h3, color: COLORS.darkgray }}> . </Text>
                                    </View>
                                )
                            })
                        }

                        {/* Price */}
                        {
                            [1, 2, 3].map((priceRating) => (
                                <Text
                                    key={priceRating}
                                    style={{
                                        ...FONTS.body3,
                                        color: (priceRating <= item.priceRating) ? COLORS.black : COLORS.darkgray
                                    }}
                                >$</Text>
                            ))
                        }
                    </View>
                </View>
            </TouchableOpacity>
        )

        return (
            <FlatList
                data={restaurants}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
                contentContainerStyle={{

                    paddingHorizontal: SIZES.padding * 2,

                    paddingBottom: 33
                }}
            />
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {renderMainCategories()}
            {renderRestaurantList()}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    }
})

export default Home;