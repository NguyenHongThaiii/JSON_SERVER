const casual = require("casual");
const fs = require("fs");

// initialize
const productListTemp = require("./data/product-data");
const categoryListTemp = require("./data/category-data");
const sliderListTemp = require("./data/slider-data");

// function
const randomCategoryList = () => {
  const categoryList = [];

  Array.from(new Array(categoryListTemp.length)).forEach((x, i) => {
    const category = {
      ...categoryListTemp[i],
      id: casual.uuid,
      createdAt: casual.unix_time,
      updatedAt: casual.unix_time,
    };

    categoryList.push(category);
  });
  return categoryList;
};

const randomProductList = (categoryList) => {
  const productList = [];

  let i = 0;
  const n = Math.ceil(productListTemp.length / categoryList.length);

  for (const category of categoryList) {
    Array.from(new Array(n)).forEach(() => {
      const index = categoryList.findIndex(
        (category) => category.name === productListTemp[i].type
      );
      console.log(index);
      const product = {
        ...productListTemp[i],
        id: casual.uuid,
        status: casual.boolean,
        trending: casual.boolean,
        categoryId: categoryList[index]?.id,
        mountSold: casual.integer((from = 0), (to = 100)),
        price: casual.integer((from = 1), (to = 15)),
        createdAt: casual.unix_time,
        updatedAt: casual.unix_time,
      };
      i++;
      productList.push(product);
    });
  }

  return productList;
};

const randomSliderList = () => {
  const sliderList = [];

  Array.from(new Array(sliderListTemp.length)).forEach((x, i) => {
    const slider = {
      ...sliderListTemp[i],
      createdAt: casual.unix_time,
      updatedAt: casual.unix_time,
    };
    sliderList.push(slider);
  });
  return sliderList;
};

// IFFE
(() => {
  const categoryList = randomCategoryList();
  const productList = randomProductList(categoryList);
  const sliderList = randomSliderList();
  const db = {
    categories: categoryList,
    products: productList,
    sliders: sliderList,
    profile: {
      name: "ThaiPei",
    },
  };

  fs.writeFile("db.json", JSON.stringify(db), () => {
    console.log("Generate data successfully");
  });
})();
