const productListTemp = [
  {
    name: "Player T-Shirt Collection",
    description: "Alennikov",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/1.webp",
  },
  {
    name: "Basic 2021 T-Shirt Collection",
    description: "Armstead",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/2.webp",
  },
  {
    name: "Messenger T-Shirt Collection",
    description: "Robatham",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/3.webp",
  },
  {
    name: "Heartbeat 2021 T-Shirt Collection",
    description: "Bullas",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/4.webp",
  },
  {
    name: "Oni T-Shirt ",
    description: "Dumbrell",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/5.webp",
  },
  {
    name: "Basic short",
    description: "Dumke",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/6.jpg",
  },
  {
    name: "Basic Line Collection",
    description: "Kinny",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/7.jpg",
  },
  {
    name: "Mystery Box",
    description: "Portress",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/8.webp",
  },
  {
    name: "Pacman T-Shirt",
    description: "Rapier",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/1.webp",
  },
  {
    name: "Classic Racer * Black",
    description: "Rodolico",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/10.webp",
  },
  {
    name: "Happy T-Shirt",
    description: "Klimpke",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/11.jpg",
  },
  {
    name: "Monogram polo - cream/black",
    description: "Minchinton",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/12.jpg",
  },
  {
    name: "Basic polo stripes green",
    description: "Fairnie",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/13.jpg",
  },
  {
    name: "Basic line T-Shirt 2021 black/grey ",
    description: "Kimmitt",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/2.webp",
  },
  {
    name: "Butterfly multi T-Shirt white",
    description: "Lidgett",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/15.webp",
  },
  {
    name: "Classic Racer * white",
    description: "Skelcher",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/16.webp",
  },
  {
    name: "Classic Racer * Green",
    description: "Rodolico",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/17.webp",
  },
  {
    name: "Butterfly white * mix orange",
    description: "Kinker",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/18.webp",
  },
  {
    name: "T-Shirt black",
    description: "Pracy",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/2.webp",
  },
  {
    name: "Áo thun ê bạn",
    description: "Guisby",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/20.jpg",
  },
  {
    name: "Color loading * black",
    description: "Gheraldi",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/21.jpg",
  },
  {
    name: "Monogram polo - cream/green",
    description: "Gamwell",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/22.jpg",
  },
  {
    name: "Stand out - white tee",
    description: "Haggard",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/23.jpg",
  },
  {
    name: "Color loading * grey",
    description: "Gheraldi",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/24.webp",
  },
  {
    name: "Butterfly fire T-Shirt white",
    description: "Rotlauf",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/25.jpg",
  },
  {
    name: "The tobaco pants white",
    description: "Waren",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/26.jpg",
  },
  {
    name: "Pocket polo white",
    description: "Derell",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/27.jpg",
  },
  {
    name: "Basic polo black",
    description: "Currin",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/28.jpg",
  },
  {
    name: "Butterfly fire varsity ( DA 100% ) ",
    description: "Ramelet",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/29.webp",
  },
  {
    name: "Monogram polo - black",
    description: "Quiddihy",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/30.jpg",
  },
  {
    name: "Monogram polo - grey",
    description: "Quiddihy",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/30.jpg",
  },
  {
    name: "Happiness T-Shirt 2021 black",
    description: "Stellino",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/2.webp",
  },
  {
    name: "Basic polo green",
    description: "Twohig",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/30.jpg",
  },
  {
    name: "Basic crack white tee",
    description: "Derrett",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/34.jpg",
  },
  {
    name: "Butter - flower hoodie white",
    description: "Geane",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/35.jpg",
  },
  {
    name: "Basic july T-Shirt white",
    description: "McMurrugh",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/36.webp",
  },
  {
    name: "Monogram polo - green",
    description: "Marchent",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/37.jpg",
  },
  {
    name: "Butterfly shirt * black",
    description: "Sey",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/38.webp",
  },
  {
    name: "Big logo monster white tee",
    description: "Rosthorn",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/39.webp",
  },
  {
    name: "Graffiti v2 varsity black",
    description: "Markovic",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/40.webp",
  },
  {
    name: "T-Shirt flower leaf * black",
    description: "Gwilliams",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/4.webp",
  },
  {
    name: "Basic june white tee",
    description: "Signoret",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/42.jpg",
  },
  {
    name: "Basic trousers black",
    description: "Fairhead",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/43.webp",
  },
  {
    name: "Back to school shirt ( long )",
    description: "Hazeldene",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/44.jpg",
  },
  {
    name: "Basic polo stripes brown",
    description: "McAlinion",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/45.jpg",
  },
  {
    name: "Cheese T-Shirt blue 2021",
    description: "Orrock",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/1.webp",
  },
  {
    name: "Pocket polo black",
    description: "Porkiss",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/47.webp",
  },
  {
    name: "Monogram polo - white * green",
    description: "Teal",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/22.jpg",
  },
  {
    name: "Back to school shirt ( short )",
    description: "Kolinsky",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/49.jpg",
  },
  {
    name: "Tee collab H&M x WAC ( We Are Campers ) * Black",
    description: "Northway",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/50.jpg",
  },
  {
    name: "Basic july * black",
    description: "Sutterfield",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/51.webp",
  },
  {
    name: "Baisc polo cream",
    description: "Calwell",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/37.webp",
  },
  {
    name: "Tee collab HEYYOU x WAC ( We Are Campers ) * white",
    description: "Fawcus",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/53.webp",
  },
  {
    name: "Heyyou rocket * white tee",
    description: "Godber",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/47.webp",
  },
  {
    name: "Heyyou hologram butterfly T-Shirt",
    description: "Sarfat",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/18.webp",
  },
  {
    name: "Diet drinks tee ́* white",
    description: "Delamaine",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/56.webp",
  },
  {
    name: "The tobaco pants cream",
    description: "Caldicott",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/57.jpg",
  },
  {
    name: "Basic line T-Shirt 2021 white/red",
    description: "Eayrs",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/58.webp",
  },
  {
    name: "happiness t-Shirt 2021 blue",
    description: "Peppard",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/1.webp",
  },
  {
    name: "Baisc polo white",
    description: "Clipston",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/60.jpg",
  },
  {
    name: "Heyyou color layer 2021 t-Shirt yellow",
    description: "McGeachey",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/3.webp",
  },
  {
    name: "H&M color layer 2021 t-Shirt black",
    description: "Barber",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/63.jpg",
  },
  {
    name: "TOTE Heyyou",
    description: "Hollingsbee",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/64.webp",
  },
  {
    name: "Heyyou zombie white tee",
    description: "Vaggers",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/65.webp",
  },
  {
    name: "H&M big logo smoke black tee",
    description: "Horry",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/66.jpg",
  },
  {
    name: "Heyyou butterfly barsity baby blue",
    description: "Skiplorne",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/18.webp",
  },
  {
    name: "T-shirt butterfly * white",
    description: "Flacknell",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/68.jpg",
  },
  {
    name: "Heyyou the tobaco pants black",
    description: "Maudlin",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/69.webp",
  },
  {
    name: "Heyyou the tobaco pants white",
    description: "Chrichton",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/70.webp",
  },
  {
    name: "Heyyou the tobaco pants creams",
    description: "Conaghan",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/71.webp",
  },
  {
    name: "H&M butterfly fire hoodie white",
    description: "Goymer",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/72.jpg",
  },
  {
    name: "H&M bút chì màu T-shirt white",
    description: "Aylott",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/73.jpg",
  },
  {
    name: "Heyyou water * white tee",
    description: "Anning",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/74.webp",
  },
  {
    name: "H&M big logo smoke yellow tee",
    description: "MacMenemy",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/75.webp",
  },
  {
    name: "H&M buuter - flower shirt white/short",
    description: "Mokes",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/76.jpg",
  },
  {
    name: "Heyyou zombie white tee",
    description: "Kilmaster",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/65.webp",
  },
  {
    name: "Heyyou butter - flower white tee",
    description: "Creeboe",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/5.webp",
  },
  {
    name: "Heyyou pocket polo green",
    description: "Stabler",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/47.webp",
  },
];

module.exports = productListTemp;
