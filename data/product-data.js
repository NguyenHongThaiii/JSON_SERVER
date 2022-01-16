const productListTemp = [
  {
    name: "Player T-Shirt Collection",
    description: "Alennikov",
    imageUrl: null,
  },
  {
    name: "Basic 2021 T-Shirt Collection",
    description: "Armstead",
    imageUrl: null,
  },
  {
    name: "Messenger T-Shirt Collection",
    description: "Robatham",
    imageUrl: null,
  },
  {
    name: "Heaerbeat 2021 T-Shirt Collection",
    description: "Bullas",
    imageUrl: null,
  },
  {
    name: "Oni T-Shirt ",
    description: "Dumbrell",
    imageUrl: null,
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
    imageUrl: null,
  },
  {
    name: "Pacman T-Shirt",
    description: "Rapier",
    imageUrl: null,
  },
  {
    name: "Classic Racer * Black",
    description: "Rodolico",
    imageUrl: null,
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
    imageUrl: null,
  },
  {
    name: "Butterfly multi T-Shirt white",
    description: "Lidgett",
    imageUrl: null,
  },
  {
    name: "Classic Racer * white",
    description: "Skelcher",
    imageUrl: null,
  },
  {
    name: "Classic Racer * Green",
    description: "Rodolico",
    imageUrl: null,
  },
  {
    name: "Butterfly white * mix orange",
    description: "Kinker",
    imageUrl: null,
  },
  {
    name: "Bút chì màu T-Shirt black",
    description: "Pracy",
    imageUrl: null,
  },
  {
    name: "Áo thun ê bạn",
    description: "Guisby",
    imageUrl: null,
  },
  {
    name: "Color loading * black",
    description: "Gheraldi",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/21.jpg",
  },
  {
    name: "Monogram polo - cream/green",
    description: "Gamwell",
    imageUrl: null,
  },
  {
    name: "Stand out - white tee",
    description: "Haggard",
    imageUrl: null,
  },
  {
    name: "Color loading * grey",
    description: "Gheraldi",
    imageUrl: null,
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
    imageUrl: null,
  },
  {
    name: "Monogram polo - black",
    description: "Quiddihy",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/30.jpg",
  },
  {
    name: "Monogram polo - grey",
    description: "Quiddihy",
    imageUrl: null,
  },
  {
    name: "Happiness T-Shirt 2021 black",
    description: "Stellino",
    imageUrl: null,
  },
  {
    name: "Basic polo green",
    description: "Twohig",
    imageUrl: null,
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
    imageUrl: null,
  },
  {
    name: "Monogram polo - green",
    description: "Marchent",
    imageUrl: null,
  },
  {
    name: "Butterfly shirt * black",
    description: "Sey",
    imageUrl: null,
  },
  {
    name: "Big logo balloons white tee",
    description: "Rosthorn",
    imageUrl: null,
  },
  {
    name: "Graffiti v2 varsity black",
    description: "Markovic",
    imageUrl: null,
  },
  {
    name: "T-Shirt flower leaf * black",
    description: "Gwilliams",
    imageUrl: null,
  },
  {
    name: "Basic june white tee",
    description: "Signoret",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/42.jpg",
  },
  {
    name: "Basic trousers black",
    description: "Fairhead",
    imageUrl: null,
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
    name: "Cheese T-Shirt white 2021",
    description: "Orrock",
    imageUrl: null,
  },
  {
    name: "Pocket polo black",
    description: "Porkiss",
    imageUrl: null,
  },
  {
    name: "Monogram polo - white",
    description: "Teal",
    imageUrl: null,
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
    imageUrl: null,
  },
  {
    name: "Baisc polo cream",
    description: "Calwell",
    imageUrl: null,
  },
  {
    name: "Tee collab H&M x WAC ( We Are Campers ) * white",
    description: "Fawcus",
    imageUrl: null,
  },
  {
    name: "H&M rocket * white tee",
    description: "Godber",
    imageUrl: null,
  },
  {
    name: "H&M hologram butterfly T-Shirt",
    description: "Sarfat",
    imageUrl: null,
  },
  {
    name: "Phi hành gia x Sao kim ́* white",
    description: "Delamaine",
    imageUrl: null,
  },
  {
    name: "The tobaco pants cream",
    description: "Caldicott",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/57.jpg",
  },
  {
    name: "Basic line T-Shirt 2021 white/red",
    description: "Eayrs",
    imageUrl: null,
  },
  {
    name: "happiness t-Shirt 2021 white",
    description: "Peppard",
    imageUrl: null,
  },
  {
    name: "Baisc polo white",
    description: "Clipston",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/60.jpg",
  },
  {
    name: "H&M color layer 2021 t-Shirt white",
    description: "McGeachey",
    imageUrl: null,
  },
  {
    name: "H&M color layer 2021 t-Shirt black",
    description: "Barber",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/63.jpg",
  },
  {
    name: "TOTE H&M",
    description: "Hollingsbee",
    imageUrl: null,
  },
  {
    name: "H&M zombie white tee",
    description: "Vaggers",
    imageUrl: null,
  },
  {
    name: "H&M big logo smoke black tee",
    description: "Horry",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/66.jpg",
  },
  {
    name: "H&M butterfly barsity baby blue",
    description: "Skiplorne",
    imageUrl: null,
  },
  {
    name: "T-shirt butterfly * white",
    description: "Flacknell",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/68.jpg",
  },
  {
    name: "H&M the tobaco pants black",
    description: "Maudlin",
    imageUrl: null,
  },
  {
    name: "H&M butter - flower shirt white/long",
    description: "Chrichton",
    imageUrl: null,
  },
  {
    name: "H&M basic line t-shirt 2021 white/blue",
    description: "Conaghan",
    imageUrl: null,
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
    name: "H&M water * white tee",
    description: "Anning",
    imageUrl: null,
  },
  {
    name: "H&M big logo smoke yellow tee",
    description: "MacMenemy",
    imageUrl: null,
  },
  {
    name: "H&M buuter - flower shirt white/short",
    description: "Mokes",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/76.jpg",
  },
  {
    name: "H&M zombie black tee",
    description: "Kilmaster",
    imageUrl: null,
  },
  {
    name: "H&M butter - flower white tee",
    description: "Creeboe",
    imageUrl: null,
  },
  {
    name: "H&M pocket polo green",
    description: "Stabler",
    imageUrl: null,
  },
];

module.exports = productListTemp;
