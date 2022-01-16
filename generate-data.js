const casual = require("casual");
const fs = require("fs");

// initialize
const productListTemp = require("./data/product-data");
const categoryListTemp = require("./data/category-data");

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
  console.log(n, productListTemp.length, categoryList.length);
  for (const category of categoryList) {
    Array.from(new Array(n)).forEach(() => {
      const product = {
        ...productListTemp[i],
        id: casual.uuid,
        status: casual.boolean,
        trending: casual.boolean,
        categoryId: category.id,
        mountSold: casual.integer((from = 0), (to = 100)),
        price: casual.integer((from = 50000), (to = 10000000)),
        createdAt: casual.unix_time,
        updatedAt: casual.unix_time,
      };
      i++;
      productList.push(product);
    });
  }

  return productList;
};

// IFFE
(() => {
  const categoryList = randomCategoryList();
  const productList = randomProductList(categoryList);

  const db = {
    categories: categoryList,
    products: productList,
    profile: {
      name: "ThaiPei",
    },
  };

  fs.writeFile("db.json", JSON.stringify(db), () => {
    console.log("Generate data successfully");
  });
})();
