const productListTemp = [
  {
    name: "HEYYOU FLANNEL #2",
    description:
      "Mô tả:HEYYOU - THƯƠNG HIỆU QUỐC DÂN !!!* Tên sản phẩm: HEYYOU FLANNEL* Kích thước: Size M  | Size L  | Size XL.  * Chất liệu: 100% Cotton co giãn 4 chiều được đặt dệt riêng theo tiêu chuẩn của công ty.* Kĩ thuật in: Sản phẩm được sử dụng...",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/1.webp",
    sliderList: [
      "https://js-ecommerce-api.herokuapp.com/asset/img/1.webp",
      "https://js-ecommerce-api.herokuapp.com/asset/img/slide_list/slide_1.webp",
    ],
    type: "Shirt",
  },
  {
    name: "HEYYOU FLANNEL #4",
    description:
      "Mô tả:HEYYOU - THƯƠNG HIỆU QUỐC DÂN !!!* Tên sản phẩm: HEYYOU FLANNEL* Kích thước: Size M  | Size L  | Size XL.  * Chất liệu: 100% Cotton co giãn 4 chiều được đặt dệt riêng theo tiêu chuẩn của công ty.* Kĩ thuật in: Sản phẩm được sử dụng...",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/2.webp",
    sliderList: [
      "https://js-ecommerce-api.herokuapp.com/asset/img/2.webp",
      "https://js-ecommerce-api.herokuapp.com/asset/img/slide_list/slide_2.webp",
    ],
    type: "Shirt",
  },
  {
    name: "HEYYOU FLANNEL #8",
    description:
      "Mô tả:HEYYOU - THƯƠNG HIỆU QUỐC DÂN !!!* Tên sản phẩm: HEYYOU FLANNEL* Kích thước: Size M  | Size L  | Size XL.  * Chất liệu: 100% Cotton co giãn 4 chiều được đặt dệt riêng theo tiêu chuẩn của công ty.* Kĩ thuật in: Sản phẩm được sử dụng...",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/3.webp",
    sliderList: [
      "https://js-ecommerce-api.herokuapp.com/asset/img/3.webp",
      "https://js-ecommerce-api.herokuapp.com/asset/img/slide_list/slide_3.webp",
    ],
    type: "Shirt",
  },
  {
    name: "HEYYOU FLANNEL #6",
    description:
      "Mô tả:HEYYOU - THƯƠNG HIỆU QUỐC DÂN !!!* Tên sản phẩm: HEYYOU FLANNEL* Kích thước: Size M  | Size L  | Size XL.  * Chất liệu: 100% Cotton co giãn 4 chiều được đặt dệt riêng theo tiêu chuẩn của công ty.* Kĩ thuật in: Sản phẩm được sử dụng...    ",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/4.webp",
    sliderList: [
      "https://js-ecommerce-api.herokuapp.com/asset/img/4.webp",
      "https://js-ecommerce-api.herokuapp.com/asset/img/slide_list/slide_2.webp",
    ],
    type: "Shirt",
  },
  {
    name: "BUTTERFLY LONG WHITE SHIRT",
    description:
      "Mô tả:HEYYOU - THƯƠNG HIỆU QUỐC DÂN !!!* Tên sản phẩm: BUTTERFLY LONG WHITE SHIRT* Màu áo: Màu Trắng. * Kích thước: Size M  | Size L  | Size XL.  * Chất liệu: 100% Cotton co giãn 4 chiều được đặt dệt riêng theo tiêu chuẩn của công ty.* Kĩ thuật in:...",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/5.webp",
    sliderList: [
      "https://js-ecommerce-api.herokuapp.com/asset/img/5.webp",
      "https://js-ecommerce-api.herokuapp.com/asset/img/slide_list/slide_5.webp",
    ],
    type: "Shirt",
  },
  {
    name: "VINTAGE GREEN SHORT",
    description:
      "Mô tả:HEYYOU - THƯƠNG HIỆU QUỐC DÂN !!!* Tên sản phẩm: VINTAGE GREEN SHORT* Màu sắc: Xanh lá * Kích thước: Size M  | Size L  | Size XL.  * Chất liệu: Nỉ bông * Kĩ thuật: Sản phẩm được sử dụng kĩ thuật thêu.Thông tin cách thức bảo quản sản phẩm đúng... ",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/6.jpg",
    type: "Pants",
    sliderList: [
      "https://js-ecommerce-api.herokuapp.com/asset/img/6.jpg",
      "https://js-ecommerce-api.herokuapp.com/asset/img/slide_list/slide_6.webp",
    ],
  },
  {
    name: "BASIC TEE",
    description: "Chưa có mô tả cho sản phẩm này",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/7.jpg",
    sliderList: [
      "https://js-ecommerce-api.herokuapp.com/asset/img/7.jpg",
      "https://js-ecommerce-api.herokuapp.com/asset/img/slide_list/slide_7.webp",
    ],
    type: "Tee",
  },
  {
    name: "ESSENTIAL BABY BLUE HOODIE",
    description:
      "HEYYOU - THƯƠNG HIỆU QUỐC DÂN !!!* Tên sản phẩm: ESSENTIAL BABY BLUE HOODIE* Màu áo: Màu xanh nhạt* Kích thước: Size M  | Size L  | Size XL.  * Chất liệu: Nỉ bông * Kĩ thuật in: Sản phẩm được sử dụng kĩ thuật thêu.Thông tin cách thức bảo quản sản...",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/8.webp",
    sliderList: [
      "https://js-ecommerce-api.herokuapp.com/asset/img/8.webp",
      "https://js-ecommerce-api.herokuapp.com/asset/img/slide_list/slide_8.webp",
    ],
    type: "Hoodie",
  },
  {
    name: "HEYYOU FLANNEL #2",
    description:
      "Mô tả:HEYYOU - THƯƠNG HIỆU QUỐC DÂN !!!* Tên sản phẩm: HEYYOU FLANNEL* Kích thước: Size M  | Size L  | Size XL.  * Chất liệu: 100% Cotton co giãn 4 chiều được đặt dệt riêng theo tiêu chuẩn của công ty.* Kĩ thuật in: Sản phẩm được sử dụng...",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/1.webp",
    sliderList: [
      "https://js-ecommerce-api.herokuapp.com/asset/img/1.webp",
      "https://js-ecommerce-api.herokuapp.com/asset/img/slide_list/slide_1.webp",
    ],
    type: "Shirt",
  },
  {
    name: "FIREWORK WHITE TEE",
    description:
      "HEYYOU - THƯƠNG HIỆU QUỐC DÂN !!!* Tên sản phẩm: FIREWORK WHITE TEE* Màu sắc: Trắng* Kích thước: Size M  | Size L  | Size XL.  * Chất liệu: 100% Cotton co giãn 4 chiều được đặt dệt riêng theo tiêu chuẩn của công ty.* Kĩ thuật in: Sản phẩm được sử dụng...",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/10.webp",
    sliderList: [
      "https://js-ecommerce-api.herokuapp.com/asset/img/10.webp",
      "https://js-ecommerce-api.herokuapp.com/asset/img/slide_list/slide_10.webp",
    ],
    type: "Tee",
  },
  {
    name: "BASIC TEE",
    description: "Chưa có mô tả cho sản phẩm này",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/7.jpg",
    sliderList: [
      "https://js-ecommerce-api.herokuapp.com/asset/img/7.jpg",
      "https://js-ecommerce-api.herokuapp.com/asset/img/slide_list/slide_7.webp",
    ],
    type: "Tee",
  },
  {
    name: "MONOGRAM GREEN POLO",
    description:
      "Mô tả:HEYYOU - THƯƠNG HIỆU QUỐC DÂN !!!* Tên sản phẩm: MONOGRAM POLO * Màu áo: Màu Xanh Lá. * Kích thước: Size M  | Size L  | Size XL.  * Chất liệu: Vải Polo mắt chim được đặt dệt riêng theo tiêu chuẩn của công ty.* Kĩ thuật in: Sản phẩm được...",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/12.jpg",
    sliderList: [
      "https://js-ecommerce-api.herokuapp.com/asset/img/12.jpg",
      "https://js-ecommerce-api.herokuapp.com/asset/img/slide_list/slide_12.webp",
    ],
    type: "Varsity",
  },
  {
    name: "HEYYOU BASIC STRIPES GREEN POLO",
    description:
      "Mô tả:HEYYOU - THƯƠNG HIỆU QUỐC DÂN !!!* Tên sản phẩm: HEYYOU BASIC POLO STRIPES GREEN * Màu áo: Màu Xanh Lá. * Kích thước: Size M  | Size L  | Size XL.  * Chất liệu: Vải Polo mắt chim được đặt dệt riêng theo tiêu chuẩn của công ty.* Kĩ thuật in:...",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/13.jpg",
    sliderList: [
      "https://js-ecommerce-api.herokuapp.com/asset/img/13.jpg",
      "https://js-ecommerce-api.herokuapp.com/asset/img/slide_list/slide_13.webp",
    ],
    type: "Varsity",
  },
  {
    name: "HEYYOU FLANNEL #4",
    description:
      "Mô tả:HEYYOU - THƯƠNG HIỆU QUỐC DÂN !!!* Tên sản phẩm: HEYYOU FLANNEL* Kích thước: Size M  | Size L  | Size XL.  * Chất liệu: 100% Cotton co giãn 4 chiều được đặt dệt riêng theo tiêu chuẩn của công ty.* Kĩ thuật in: Sản phẩm được sử dụng...",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/2.webp",
    sliderList: [
      "https://js-ecommerce-api.herokuapp.com/asset/img/2.webp",
      "https://js-ecommerce-api.herokuapp.com/asset/img/slide_list/slide_2.webp",
    ],
    type: "Shirt",
  },
  {
    name: "BUTTERFLY LONG WHITE SHIRT",
    description:
      "Mô tả:HEYYOU - THƯƠNG HIỆU QUỐC DÂN !!!* Tên sản phẩm: BUTTERFLY LONG WHITE SHIRT* Màu áo: Màu Trắng. * Kích thước: Size M  | Size L  | Size XL.  * Chất liệu: 100% Cotton co giãn 4 chiều được đặt dệt riêng theo tiêu chuẩn của công ty.* Kĩ thuật in:...",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/5.webp",
    sliderList: [
      "https://js-ecommerce-api.herokuapp.com/asset/img/5.webp",
      "https://js-ecommerce-api.herokuapp.com/asset/img/slide_list/slide_5.webp",
    ],
    type: "Shirt",
  },
  {
    name: "Classic Drink * white",
    description:
      "HEYYOU - THƯƠNG HIỆU QUỐC DÂN !!!* Tên sản phẩm: ÁO CLASSIC DRINK * Màu áo: Màu TRẮNG. * Kích thước: Size M  | Size L  | Size XL.  * Chất liệu:  Nhung tăm, được kiểm tra chất lượng theo tiêu chuẩn của công ty.* Kĩ thuật in: Sản phẩm...",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/16.webp",
    sliderList: ["https://js-ecommerce-api.herokuapp.com/asset/img/16.webp"],
    type: "Shirt",
  },
  {
    name: "HEYYOU POCKET GREEN POLO",
    description:
      "Mô tả:HEYYOU - THƯƠNG HIỆU QUỐC DÂN !!!* Tên sản phẩm: HEYYOU POCKET POLO GREENK * Màu áo: Màu Xanh Lá. * Kích thước: Size M  | Size L  | Size XL.  * Chất liệu: Vải Polo mắt chim được đặt dệt riêng theo tiêu chuẩn của công ty.* Kĩ thuật in: Sản...",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/17.webp",
    sliderList: [
      "https://js-ecommerce-api.herokuapp.com/asset/img/17.jpg",
      "https://js-ecommerce-api.herokuapp.com/asset/img/slide_list/slide_17.webp",
    ],
    type: "Shirt",
  },
  {
    name: "HEYYOU FIRE BUTTERFLY WHITE HOODIE",
    description:
      "Mô tả:HEYYOU - THƯƠNG HIỆU QUỐC DÂN !!!* Tên sản phẩm: HEYYOU FIRE BUTTERFLY WHITE HOODIE * Màu áo: Màu Trắng. * Chất liệu: Cotton co giãn 4 chiều được đặt dệt riêng theo tiêu chuẩn của công ty.* Kĩ thuật in: Sản phẩm được sử dụng kĩ thuật in lụa thủ công.Thông...",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/18.webp",
    sliderList: [
      "https://js-ecommerce-api.herokuapp.com/asset/img/18.webp",
      "https://js-ecommerce-api.herokuapp.com/asset/img/slide_list/slide_18.webp",
    ],
    type: "Hoodie",
  },
  {
    name: "HEYYOU FLANNEL #4",
    description:
      "Mô tả:HEYYOU - THƯƠNG HIỆU QUỐC DÂN !!!* Tên sản phẩm: HEYYOU FLANNEL* Kích thước: Size M  | Size L  | Size XL.  * Chất liệu: 100% Cotton co giãn 4 chiều được đặt dệt riêng theo tiêu chuẩn của công ty.* Kĩ thuật in: Sản phẩm được sử dụng...",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/2.webp",
    sliderList: [
      "https://js-ecommerce-api.herokuapp.com/asset/img/2.webp",
      "https://js-ecommerce-api.herokuapp.com/asset/img/slide_list/slide_2.webp",
    ],
    type: "Shirt",
  },
  {
    name: "Áo thun ê bạn",
    description:
      "Mô tả:HEYYOU - THƯƠNG HIỆU QUỐC DÂN !!!* Tên sản phẩm: ÁO THUN Ê BẠN * Kích thước: Size M  | Size L  | Size XL.  * Chất liệu: 100% Cotton co giãn 4 chiều được đặt dệt riêng theo tiêu chuẩn của công ty.* Kĩ thuật in: Sản phẩm được sử dụng...",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/20.jpg",
    sliderList: ["https://js-ecommerce-api.herokuapp.com/asset/img/20.jpg"],
    type: "Tee",
  },
  {
    name: "MONOGRAM GREEN POLO",
    description:
      "Mô tả:HEYYOU - THƯƠNG HIỆU QUỐC DÂN !!!* Tên sản phẩm: MONOGRAM POLO * Màu áo: Màu Xanh Lá. * Kích thước: Size M  | Size L  | Size XL.  * Chất liệu: Vải Polo mắt chim được đặt dệt riêng theo tiêu chuẩn của công ty.* Kĩ thuật in: Sản phẩm được...",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/12.jpg",
    sliderList: [
      "https://js-ecommerce-api.herokuapp.com/asset/img/12.jpg",
      "https://js-ecommerce-api.herokuapp.com/asset/img/slide_list/slide_12.webp",
    ],
    type: "Varsity",
  },
  {
    name: "MONOGRAM GREEN POLO",
    description:
      "Mô tả:HEYYOU - THƯƠNG HIỆU QUỐC DÂN !!!* Tên sản phẩm: MONOGRAM POLO * Màu áo: Màu Xanh Lá. * Kích thước: Size M  | Size L  | Size XL.  * Chất liệu: Vải Polo mắt chim được đặt dệt riêng theo tiêu chuẩn của công ty.* Kĩ thuật in: Sản phẩm được...",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/12.jpg",
    sliderList: [
      "https://js-ecommerce-api.herokuapp.com/asset/img/12.jpg",
      "https://js-ecommerce-api.herokuapp.com/asset/img/slide_list/slide_12.webp",
    ],
    type: "Varsity",
  },
  {
    name: "Stand out - white tee",
    description:
      "Mô tả:HEYYOU - THƯƠNG HIỆU QUỐC DÂN !!!* Tên sản phẩm: STAND OUT * Màu áo: Màu Trắng. * Kích thước: Size M  | Size L  | Size XL.  * Chất liệu: Vải Polo mắt chim được đặt dệt riêng theo tiêu chuẩn của công ty.* Kĩ thuật in: Sản phẩm được...",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/23.jpg",
    sliderList: ["https://js-ecommerce-api.herokuapp.com/asset/img/23.jpg"],
    type: "Tee",
  },
  {
    name: "ESSENTIAL WASH TEE",
    description:
      "HEYYOU - THƯƠNG HIỆU QUỐC DÂN !!!* Tên sản phẩm: ESSENTIAL WASH TEE* Màu sắc: Màu WASH* Kích thước: Size M  | Size L  | Size XL.  * Chất liệu: 100% Cotton co giãn 2 chiều được đặt dệt riêng theo tiêu chuẩn của công ty.* Kĩ thuật in: Sản phẩm được sử dụng...",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/24.webp",
    sliderList: [
      "https://js-ecommerce-api.herokuapp.com/asset/img/24.webp",
      "https://js-ecommerce-api.herokuapp.com/asset/img/slide_list/slide_24.webp",
    ],
    type: "Tee",
  },
  {
    name: "MONOGRAM WHITE POLO",
    description:
      "Mô tả:HEYYOU - THƯƠNG HIỆU QUỐC DÂN !!!* Tên sản phẩm: MONOGRAM POLO * Màu áo: Màu Trắng. * Kích thước: Size M  | Size L  | Size XL.  * Chất liệu: Vải Polo mắt chim được đặt dệt riêng theo tiêu chuẩn của công ty.* Kĩ thuật in: Sản phẩm được sử...",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/25.jpg",
    sliderList: [
      "https://js-ecommerce-api.herokuapp.com/asset/img/25.jpg",
      "https://js-ecommerce-api.herokuapp.com/asset/img/slide_list/slide_25.webp",
    ],
    type: "Shirt",
  },
  {
    name: "T-Shirt black",
    description:
      "Mô tả:HEYYOU - THƯƠNG HIỆU QUỐC DÂN !!!* Tên sản phẩm: T-SHIRT * Màu áo: Màu Đen. * Kích thước: Size M  | Size L  | Size XL.  * Chất liệu: Vải Polo mắt chim được đặt dệt riêng theo tiêu chuẩn của công ty.* Kĩ thuật in: Sản phẩm được sử...",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/26.jpg",
    sliderList: ["https://js-ecommerce-api.herokuapp.com/asset/img/26.jpg"],
    type: "Shirt",
  },
  {
    name: "HEYYOU BUTTERFLY FIRE VARSITY ( DA 100% )",
    description:
      "Mô tả:HEYYOU - THƯƠNG HIỆU QUỐC DÂN !!!* Tên sản phẩm: HEYYOU BUTTERFLY FIRE VARSITY * Màu áo: Màu Trắng. * Chất liệu: 100% da được đặt riêng theo tiêu chuẩn của công ty.* Kĩ thuật in: Sản phẩm được sử dụng kĩ thuật in lụa thủ công.Thông tin cách thức bảo quản sản...",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/27.jpg",
    sliderList: [
      "https://js-ecommerce-api.herokuapp.com/asset/img/27.jpg",
      "https://js-ecommerce-api.herokuapp.com/asset/img/slide_list/slide_27.webp",
    ],
    type: "Shirt",
  },
  {
    name: "MONOGRAM BLACK POLO",
    description:
      "Mô tả:HEYYOU - THƯƠNG HIỆU QUỐC DÂN !!!* Tên sản phẩm: MONOGRAM POLO BLACK * Màu áo: Màu Đen. * Kích thước: Size M  | Size L  | Size XL.  * Chất liệu: Vải Polo mắt chim được đặt dệt riêng theo tiêu chuẩn của công ty.* Kĩ thuật in: Sản phẩm được...",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/28.jpg",
    sliderList: [
      "https://js-ecommerce-api.herokuapp.com/asset/img/28.jpg",
      "https://js-ecommerce-api.herokuapp.com/asset/img/slide_list/slide_28.webp",
    ],
    type: "Shirt",
  },
  {
    name: "HEYYOU BUTTERFLY FIRE VARSITY ( DA 100% )",
    description:
      "Mô tả:HEYYOU - THƯƠNG HIỆU QUỐC DÂN !!!* Tên sản phẩm: HEYYOU BUTTERFLY FIRE VARSITY * Màu áo: Màu Trắng. * Chất liệu: 100% da được đặt riêng theo tiêu chuẩn của công ty.* Kĩ thuật in: Sản phẩm được sử dụng kĩ thuật in lụa thủ công.Thông tin cách thức bảo quản sản...",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/27.jpg",
    sliderList: [
      "https://js-ecommerce-api.herokuapp.com/asset/img/27.jpg",
      "https://js-ecommerce-api.herokuapp.com/asset/img/slide_list/slide_27.webp",
    ],
    type: "Shirt",
  },
  {
    name: "T-Shirt green",
    description:
      "Mô tả:HEYYOU - THƯƠNG HIỆU QUỐC DÂN !!!* Tên sản phẩm: T-SHIRT * Màu áo: Màu Xanh Lá. * Chất liệu: 100% da được đặt riêng theo tiêu chuẩn của công ty.* Kĩ thuật in: Sản phẩm được sử dụng kĩ thuật in lụa thủ công.Thông tin cách thức bảo quản sản...",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/30.jpg",
    sliderList: ["https://js-ecommerce-api.herokuapp.com/asset/img/30.jpg"],
    type: "Shirt",
  },
  {
    name: "T-Shirt green",
    description:
      "Mô tả:HEYYOU - THƯƠNG HIỆU QUỐC DÂN !!!* Tên sản phẩm: T-SHIRT * Màu áo: Màu Xanh Lá. * Chất liệu: 100% da được đặt riêng theo tiêu chuẩn của công ty.* Kĩ thuật in: Sản phẩm được sử dụng kĩ thuật in lụa thủ công.Thông tin cách thức bảo quản sản...",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/30.jpg",
    sliderList: ["https://js-ecommerce-api.herokuapp.com/asset/img/30.jpg"],
    type: "Shirt",
  },
  {
    name: "HEYYOU FLANNEL #4",
    description:
      "Mô tả:HEYYOU - THƯƠNG HIỆU QUỐC DÂN !!!* Tên sản phẩm: HEYYOU FLANNEL* Kích thước: Size M  | Size L  | Size XL.  * Chất liệu: 100% Cotton co giãn 4 chiều được đặt dệt riêng theo tiêu chuẩn của công ty.* Kĩ thuật in: Sản phẩm được sử dụng...",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/2.webp",
    sliderList: [
      "https://js-ecommerce-api.herokuapp.com/asset/img/2.webp",
      "https://js-ecommerce-api.herokuapp.com/asset/img/slide_list/slide_2.webp",
    ],
    type: "Shirt",
  },
  {
    name: "T-Shirt green",
    description:
      "Mô tả:HEYYOU - THƯƠNG HIỆU QUỐC DÂN !!!* Tên sản phẩm: T-SHIRT * Màu áo: Màu Xanh Lá. * Chất liệu: 100% da được đặt riêng theo tiêu chuẩn của công ty.* Kĩ thuật in: Sản phẩm được sử dụng kĩ thuật in lụa thủ công.Thông tin cách thức bảo quản sản...",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/30.jpg",
    sliderList: ["https://js-ecommerce-api.herokuapp.com/asset/img/30.jpg"],
    type: "Shirt",
  },
  {
    name: "MONOGRAM GREEN POLO",
    description:
      "Mô tả:HEYYOU - THƯƠNG HIỆU QUỐC DÂN !!!* Tên sản phẩm: MONOGRAM POLO * Màu áo: Màu Xanh Lá. * Kích thước: Size M  | Size L  | Size XL.  * Chất liệu: Vải Polo mắt chim được đặt dệt riêng theo tiêu chuẩn của công ty.* Kĩ thuật in: Sản phẩm được...",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/12.jpg",
    sliderList: [
      "https://js-ecommerce-api.herokuapp.com/asset/img/12.jpg",
      "https://js-ecommerce-api.herokuapp.com/asset/img/slide_list/slide_12.webp",
    ],
    type: "Shirt",
  },
  {
    name: "Long sleeve shirt",
    description:
      "Mô tả:HEYYOU - THƯƠNG HIỆU QUỐC DÂN !!!* Tên sản phẩm: LONG SLEEVE SHIRT * Màu áo: Màu Đen. * Kích thước: Size M  | Size L  | Size XL.  * Chất liệu: Vải Polo mắt chim được đặt dệt riêng theo tiêu chuẩn của công ty.* Kĩ thuật in: Sản phẩm được...",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/35.jpg",
    sliderList: ["https://js-ecommerce-api.herokuapp.com/asset/img/35.jpg"],
    type: "Shirt",
  },
  {
    name: "PINK SKETCH TEE",
    description:
      "Mô tả:HEYYOU - THƯƠNG HIỆU QUỐC DÂN !!!* Tên sản phẩm: PINK SKETCH TEE* Màu áo: Màu Đen / Màu Trắng. * Kích thước: Size M  | Size L  | Size XL.  * Chất liệu: 100% Cotton co giãn 4 chiều được đặt dệt riêng theo tiêu chuẩn của công ty.*...",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/36.webp",
    sliderList: [
      "https://js-ecommerce-api.herokuapp.com/asset/img/36.webp",
      "https://js-ecommerce-api.herokuapp.com/asset/img/slide_list/slide_36.webp",
    ],
    type: "Tee",
  },
  {
    name: "MONOGRAM GREEN POLO",
    description:
      "Mô tả:HEYYOU - THƯƠNG HIỆU QUỐC DÂN !!!* Tên sản phẩm: MONOGRAM POLO * Màu áo: Màu Xanh Lá. * Kích thước: Size M  | Size L  | Size XL.  * Chất liệu: Vải Polo mắt chim được đặt dệt riêng theo tiêu chuẩn của công ty.* Kĩ thuật in: Sản phẩm được...",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/12.jpg",
    sliderList: [
      "https://js-ecommerce-api.herokuapp.com/asset/img/12.jpg",
      "https://js-ecommerce-api.herokuapp.com/asset/img/slide_list/slide_12.webp",
    ],
    type: "Varsity",
  },
  {
    name: "HEYYOU BUTTERFLY TEE",
    description:
      "Mô tả:HEYYOU - THƯƠNG HIỆU QUỐC DÂN !!!* Tên sản phẩm: HEYYOU BUTTERFLY TEE* Màu áo: Màu Đen / Màu Trắng. * Kích thước: Size M  | Size L  | Size XL.  * Chất liệu: 100% Cotton co giãn 4 chiều được đặt dệt riêng theo tiêu chuẩn của công ty.*...",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/38.webp",
    sliderList: [
      "https://js-ecommerce-api.herokuapp.com/asset/img/38.webp",
      "https://js-ecommerce-api.herokuapp.com/asset/img/slide_list/slide_38.webp",
    ],
    type: "Shirt",
  },
  {
    name: "CREAM MONSTERS BLACK TEE",
    description:
      "Mô tả:HEYYOU - THƯƠNG HIỆU QUỐC DÂN !!!* Tên sản phẩm: CREAM MONSTERS BLACK TEE * Màu sắc: Màu Đen* Kích thước: Size M  | Size L  | Size XL.  * Chất liệu: 100% Cotton co giãn 4 chiều được đặt dệt riêng theo tiêu chuẩn của công ty.* Kĩ thuật in: Sản...",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/39.webp",
    sliderList: [
      "https://js-ecommerce-api.herokuapp.com/asset/img/39.webp",
      "https://js-ecommerce-api.herokuapp.com/asset/img/slide_list/slide_39.webp",
    ],
    type: "Tee",
  },
  {
    name: "HEYYOU CHECK VARSITY",
    description:
      "Mô tả:HEYYOU - THƯƠNG HIỆU QUỐC DÂN !!!* Tên sản phẩm: HEYYOU CHECK VARSITY * Màu áo: Màu Đen Xanh Caro. * Chất liệu: 100% da được đặt riêng theo tiêu chuẩn của công ty.* Kĩ thuật in: Sản phẩm được sử dụng kĩ thuật in lụa thủ công.Thông tin cách thức bảo quản...",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/40.webp",
    sliderList: [
      "https://js-ecommerce-api.herokuapp.com/asset/img/40.webp",
      "https://js-ecommerce-api.herokuapp.com/asset/img/slide_list/slide_40.jpg",
    ],
    type: "Varsity",
  },
  {
    name: "HEYYOU FLANNEL #4",
    description:
      "Mô tả:HEYYOU - THƯƠNG HIỆU QUỐC DÂN !!!* Tên sản phẩm: HEYYOU FLANNEL* Kích thước: Size M  | Size L  | Size XL.  * Chất liệu: 100% Cotton co giãn 4 chiều được đặt dệt riêng theo tiêu chuẩn của công ty.* Kĩ thuật in: Sản phẩm được sử dụng...",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/2.webp",
    sliderList: [
      "https://js-ecommerce-api.herokuapp.com/asset/img/2.webp",
      "https://js-ecommerce-api.herokuapp.com/asset/img/slide_list/slide_2.webp",
    ],
    type: "Shirt",
  },
  {
    name: "Basic june brown shirt",
    description:
      "Mô tả:HEYYOU - THƯƠNG HIỆU QUỐC DÂN !!!* Tên sản phẩm: BASIC JUNE BROWN SHIRT * Kích thước: Size M  | Size L  | Size XL.  * Chất liệu: 100% Cotton co giãn 4 chiều được đặt dệt riêng theo tiêu chuẩn của công ty.* Kĩ thuật in: Sản phẩm được sử dụng...",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/42.jpg",
    sliderList: ["https://js-ecommerce-api.herokuapp.com/asset/img/42.jpg"],
    type: "Shirt",
  },
  {
    name: "PINK SKETCH TEE",
    description:
      "Mô tả:HEYYOU - THƯƠNG HIỆU QUỐC DÂN !!!* Tên sản phẩm: PINK SKETCH TEE* Màu áo: Màu Đen / Màu Trắng. * Kích thước: Size M  | Size L  | Size XL.  * Chất liệu: 100% Cotton co giãn 4 chiều được đặt dệt riêng theo tiêu chuẩn của công ty.*...",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/43.webp",
    sliderList: [
      "https://js-ecommerce-api.herokuapp.com/asset/img/43.webp",
      "https://js-ecommerce-api.herokuapp.com/asset/img/slide_list/slide_43.webp",
    ],
    type: "Tee",
  },
  {
    name: "Back to school shirt ( small )",
    description:
      "Mô tả:HEYYOU - THƯƠNG HIỆU QUỐC DÂN !!!* Tên sản phẩm: BACK TO SCHOOL SHIRT (SMALL)* Màu áo: Màu Đen. * Kích thước: Size M  | Size L  | Size XL.  * Chất liệu: 100% Cotton co giãn 4 chiều được đặt dệt riêng theo tiêu chuẩn của công ty.*...",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/44.jpg",
    sliderList: ["https://js-ecommerce-api.herokuapp.com/asset/img/44.jpg"],
    type: "Shirt",
  },
  {
    name: "MONOGRAM WHITE POLO",
    description:
      "Mô tả:HEYYOU - THƯƠNG HIỆU QUỐC DÂN !!!* Tên sản phẩm: MONOGRAM POLO * Màu áo: Màu Trắng. * Kích thước: Size M  | Size L  | Size XL.  * Chất liệu: Vải Polo mắt chim được đặt dệt riêng theo tiêu chuẩn của công ty.* Kĩ thuật in: Sản phẩm được sử...",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/25.jpg",
    sliderList: [
      "https://js-ecommerce-api.herokuapp.com/asset/img/25.jpg",
      "https://js-ecommerce-api.herokuapp.com/asset/img/slide_list/slide_25.webp",
    ],
    type: "Shirt",
  },
  {
    name: "HEYYOU FLANNEL #2",
    description:
      "Mô tả:HEYYOU - THƯƠNG HIỆU QUỐC DÂN !!!* Tên sản phẩm: HEYYOU FLANNEL* Kích thước: Size M  | Size L  | Size XL.  * Chất liệu: 100% Cotton co giãn 4 chiều được đặt dệt riêng theo tiêu chuẩn của công ty.* Kĩ thuật in: Sản phẩm được sử dụng...",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/1.webp",
    sliderList: [
      "https://js-ecommerce-api.herokuapp.com/asset/img/1.webp",
      "https://js-ecommerce-api.herokuapp.com/asset/img/slide_list/slide_1.webp",
    ],
    type: "Shirt",
  },
  {
    name: "FIREWORK WHITE TEE",
    description:
      "HEYYOU - THƯƠNG HIỆU QUỐC DÂN !!!* Tên sản phẩm: FIREWORK WHITE TEE* Màu sắc: Trắng* Kích thước: Size M  | Size L  | Size XL.  * Chất liệu: 100% Cotton co giãn 4 chiều được đặt dệt riêng theo tiêu chuẩn của công ty.* Kĩ thuật in: Sản phẩm được sử dụng...",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/47.webp",
    sliderList: [
      "https://js-ecommerce-api.herokuapp.com/asset/img/47.webp",
      "https://js-ecommerce-api.herokuapp.com/asset/img/slide_list/slide_47.webp",
    ],
    type: "Tee",
  },
  {
    name: "MONOGRAM GREEN POLO",
    description:
      "Mô tả:HEYYOU - THƯƠNG HIỆU QUỐC DÂN !!!* Tên sản phẩm: MONOGRAM POLO * Màu áo: Màu Xanh Lá. * Kích thước: Size M  | Size L  | Size XL.  * Chất liệu: Vải Polo mắt chim được đặt dệt riêng theo tiêu chuẩn của công ty.* Kĩ thuật in: Sản phẩm được...",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/12.jpg",
    sliderList: [
      "https://js-ecommerce-api.herokuapp.com/asset/img/12.jpg",
      "https://js-ecommerce-api.herokuapp.com/asset/img/slide_list/slide_12.webp",
    ],
    type: "Varsity",
  },
  {
    name: "Back to school shirt ( short )",
    description: "Chưa có mô tả cho sản phẩm này",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/49.jpg",
    sliderList: ["https://js-ecommerce-api.herokuapp.com/asset/img/49.jpg"],
    type: "Shirt",
  },
  {
    name: "Tee collab H&M x WAC ( We Are Campers ) * Black",
    description: "Northway",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/50.jpg",
    sliderList: ["https://js-ecommerce-api.herokuapp.com/asset/img/50.jpg"],
    type: "Tee",
  },
  {
    name: "PINK SKETCH TEE",
    description:
      "Mô tả:HEYYOU - THƯƠNG HIỆU QUỐC DÂN !!!* Tên sản phẩm: PINK SKETCH TEE* Màu áo: Màu Đen / Màu Trắng. * Kích thước: Size M  | Size L  | Size XL.  * Chất liệu: 100% Cotton co giãn 4 chiều được đặt dệt riêng theo tiêu chuẩn của công ty.*...",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/43.webp",
    sliderList: [
      "https://js-ecommerce-api.herokuapp.com/asset/img/43.webp",
      "https://js-ecommerce-api.herokuapp.com/asset/img/slide_list/slide_43.webp",
    ],
    type: "Tee",
  },
  {
    name: "MONOGRAM GREEN POLO",
    description:
      "Mô tả:HEYYOU - THƯƠNG HIỆU QUỐC DÂN !!!* Tên sản phẩm: MONOGRAM POLO * Màu áo: Màu Xanh Lá. * Kích thước: Size M  | Size L  | Size XL.  * Chất liệu: Vải Polo mắt chim được đặt dệt riêng theo tiêu chuẩn của công ty.* Kĩ thuật in: Sản phẩm được...",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/12.jpg",
    sliderList: [
      "https://js-ecommerce-api.herokuapp.com/asset/img/12.jpg",
      "https://js-ecommerce-api.herokuapp.com/asset/img/slide_list/slide_12.webp",
    ],
    type: "Varsity",
  },
  {
    name: "Tee collab HEYYOU x WAC ( We Are Campers ) * white",
    description:
      "Mô tả:HEYYOU - THƯƠNG HIỆU QUỐC DÂN !!!* Tên sản phẩm: Tee collab HEYYOU x WAC ( We Are Campers ) * white * Màu áo: Màu Trắng. * Kích thước: Size M  | Size L  | Size XL.  * Chất liệu: Vải Polo mắt chim được đặt dệt riêng theo tiêu chuẩn của công ty.* Kĩ thuật in: Sản phẩm được...",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/53.webp",
    sliderList: ["https://js-ecommerce-api.herokuapp.com/asset/img/53.webp"],
    type: "Tee",
  },
  {
    name: "FIREWORK WHITE TEE",
    description:
      "HEYYOU - THƯƠNG HIỆU QUỐC DÂN !!!* Tên sản phẩm: FIREWORK WHITE TEE* Màu sắc: Trắng* Kích thước: Size M  | Size L  | Size XL.  * Chất liệu: 100% Cotton co giãn 4 chiều được đặt dệt riêng theo tiêu chuẩn của công ty.* Kĩ thuật in: Sản phẩm được sử dụng...",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/47.webp",
    sliderList: [
      "https://js-ecommerce-api.herokuapp.com/asset/img/47.webp",
      "https://js-ecommerce-api.herokuapp.com/asset/img/slide_list/slide_47.webp",
    ],
    type: "Tee",
  },
  {
    name: "HEYYOU FIRE BUTTERFLY WHITE HOODIE",
    description:
      "Mô tả:HEYYOU - THƯƠNG HIỆU QUỐC DÂN !!!* Tên sản phẩm: HEYYOU FIRE BUTTERFLY WHITE HOODIE * Màu áo: Màu Trắng. * Chất liệu: Cotton co giãn 4 chiều được đặt dệt riêng theo tiêu chuẩn của công ty.* Kĩ thuật in: Sản phẩm được sử dụng kĩ thuật in lụa thủ công.Thông...",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/18.webp",
    sliderList: [
      "https://js-ecommerce-api.herokuapp.com/asset/img/18.webp",
      "https://js-ecommerce-api.herokuapp.com/asset/img/slide_list/slide_18.webp",
    ],
    type: "Hoodie",
  },
  {
    name: "Diet drinks tee ́* white",
    description: "Chưa có mô tả cho sản phẩm này",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/56.webp",
    sliderList: ["https://js-ecommerce-api.herokuapp.com/asset/img/56.webp"],
    type: "Tee",
  },
  {
    name: "The tobaco pants cream",
    description: "Chưa có mô tả cho sản phẩm này",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/57.jpg",
    sliderList: ["https://js-ecommerce-api.herokuapp.com/asset/img/57.jpg"],
    type: "Pants",
  },
  {
    name: "BASIC RED TEE",
    description:
      "HEYYOU - THƯƠNG HIỆU QUỐC DÂN !!!* Tên sản phẩm: BASIC RED TEE* Màu sắc: Đỏ* Kích thước: Size M  | Size L  | Size XL.  * Chất liệu: 100% Cotton co giãn 4 chiều được đặt dệt riêng theo tiêu chuẩn của công ty.* Kĩ thuật in: Sản phẩm được sử dụng...",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/58.webp",
    sliderList: [
      "https://js-ecommerce-api.herokuapp.com/asset/img/58.webp",
      "https://js-ecommerce-api.herokuapp.com/asset/img/slide_list/slide_58.webp",
    ],
    type: "Shirt",
  },
  {
    name: "HEYYOU FLANNEL #2",
    description:
      "Mô tả:HEYYOU - THƯƠNG HIỆU QUỐC DÂN !!!* Tên sản phẩm: HEYYOU FLANNEL* Kích thước: Size M  | Size L  | Size XL.  * Chất liệu: 100% Cotton co giãn 4 chiều được đặt dệt riêng theo tiêu chuẩn của công ty.* Kĩ thuật in: Sản phẩm được sử dụng...",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/1.webp",
    sliderList: [
      "https://js-ecommerce-api.herokuapp.com/asset/img/1.webp",
      "https://js-ecommerce-api.herokuapp.com/asset/img/slide_list/slide_1.webp",
    ],
    type: "Shirt",
  },
  {
    name: "Baisc polo white",
    description: "Chưa có mô tả cho sản phẩm này",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/60.jpg",
    sliderList: ["https://js-ecommerce-api.herokuapp.com/asset/img/60.jpg"],
    type: "Shirt",
  },
  {
    name: "HEYYOU FLANNEL #8",
    description:
      "Mô tả:HEYYOU - THƯƠNG HIỆU QUỐC DÂN !!!* Tên sản phẩm: HEYYOU FLANNEL* Kích thước: Size M  | Size L  | Size XL.  * Chất liệu: 100% Cotton co giãn 4 chiều được đặt dệt riêng theo tiêu chuẩn của công ty.* Kĩ thuật in: Sản phẩm được sử dụng...",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/3.webp",
    sliderList: [
      "https://js-ecommerce-api.herokuapp.com/asset/img/3.webp",
      "https://js-ecommerce-api.herokuapp.com/asset/img/slide_list/slide_3.webp",
    ],
    type: "Shirt",
  },
  {
    name: "H&M color layer 2021 t-Shirt black",
    description: "Chưa có mô tả cho sản phẩm này",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/63.jpg",
    sliderList: ["https://js-ecommerce-api.herokuapp.com/asset/img/63.jpg"],
    type: "Shirt",
  },
  {
    name: "TOTE Heyyou",
    description: "Chưa có mô tả cho sản phẩm này",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/64.webp",
    sliderList: ["https://js-ecommerce-api.herokuapp.com/asset/img/64.webp"],
    type: "Accessory",
  },
  {
    name: "Heyyou zombie white tee",
    description: "Chưa có mô tả cho sản phẩm này",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/65.webp",
    sliderList: [
      "https://js-ecommerce-api.herokuapp.com/asset/img/65.webp",
      "https://js-ecommerce-api.herokuapp.com/asset/img/slide_list/slide_65.webp",
    ],
    type: "Tee",
  },
  {
    name: "BUTTERFLY LONG WHITE SHIRT",
    description:
      "Mô tả:HEYYOU - THƯƠNG HIỆU QUỐC DÂN !!!* Tên sản phẩm: BUTTERFLY LONG WHITE SHIRT* Màu áo: Màu Trắng. * Kích thước: Size M  | Size L  | Size XL.  * Chất liệu: 100% Cotton co giãn 4 chiều được đặt dệt riêng theo tiêu chuẩn của công ty.* Kĩ thuật in:...",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/5.webp",
    sliderList: [
      "https://js-ecommerce-api.herokuapp.com/asset/img/5.webp",
      "https://js-ecommerce-api.herokuapp.com/asset/img/slide_list/slide_5.webp",
    ],
    type: "Shirt",
  },
  {
    name: "HEYYOU FIRE BUTTERFLY WHITE HOODIE",
    description:
      "Mô tả:HEYYOU - THƯƠNG HIỆU QUỐC DÂN !!!* Tên sản phẩm: HEYYOU FIRE BUTTERFLY WHITE HOODIE * Màu áo: Màu Trắng. * Chất liệu: Cotton co giãn 4 chiều được đặt dệt riêng theo tiêu chuẩn của công ty.* Kĩ thuật in: Sản phẩm được sử dụng kĩ thuật in lụa thủ công.Thông...",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/18.webp",
    sliderList: [
      "https://js-ecommerce-api.herokuapp.com/asset/img/18.webp",
      "https://js-ecommerce-api.herokuapp.com/asset/img/slide_list/slide_18.webp",
    ],
    type: "Hoodie",
  },
  {
    name: "HEYYOU FIRE BUTTERFLY WHITE HOODIE",
    description:
      "Mô tả:HEYYOU - THƯƠNG HIỆU QUỐC DÂN !!!* Tên sản phẩm: HEYYOU FIRE BUTTERFLY WHITE HOODIE * Màu áo: Màu Trắng. * Chất liệu: Cotton co giãn 4 chiều được đặt dệt riêng theo tiêu chuẩn của công ty.* Kĩ thuật in: Sản phẩm được sử dụng kĩ thuật in lụa thủ công.Thông...",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/18.webp",
    sliderList: [
      "https://js-ecommerce-api.herokuapp.com/asset/img/18.webp",
      "https://js-ecommerce-api.herokuapp.com/asset/img/slide_list/slide_18.webp",
    ],
    type: "Hoodie",
  },
  {
    name: "HEYYOU THE TOBACO BLACK PANTS",
    description:
      "Mô tả:HEYYOU - THƯƠNG HIỆU QUỐC DÂN !!!* Tên sản phẩm: HEYYOU THE TOBACO BLACK PANTS * Màu áo: Màu Đen. * Chất liệu: Nhung tăm được đặt dệt riêng theo tiêu chuẩn của công ty.* Kĩ thuật in: Sản phẩm được sử dụng kĩ thuật in lụa thủ công.Thông tin cách thức...",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/69.webp",
    sliderList: [
      "https://js-ecommerce-api.herokuapp.com/asset/img/69.webp",
      "https://js-ecommerce-api.herokuapp.com/asset/img/slide_list/slide_69.webp",
    ],
    type: "Pants",
  },
  {
    name: "HEYYOU THE TOBACO WHITE PANTS",
    description:
      "Mô tả:HEYYOU - THƯƠNG HIỆU QUỐC DÂN !!!* Tên sản phẩm: HEYYOU THE TOBACO WHITE PANTS * Màu áo: Màu Trắng. * Chất liệu: Nhung tăm được đặt dệt riêng theo tiêu chuẩn của công ty.* Kĩ thuật in: Sản phẩm được sử dụng kĩ thuật in lụa thủ công.Thông tin cách thức...",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/70.webp",
    sliderList: [
      "https://js-ecommerce-api.herokuapp.com/asset/img/70.webp",
      "https://js-ecommerce-api.herokuapp.com/asset/img/slide_list/slide_70.webp",
    ],
    type: "Pants",
  },
  {
    name: "Heyyou the tobaco pants creams",
    description:
      "HEYYOU - THƯƠNG HIỆU QUỐC DÂN !!!* Tên sản phẩm: QUẦN HEYYOU THE TOBACO CREAM* Màu áo: Màu Kem. * Kích thước: Size M  | Size L  | Size XL.  * Chất liệu:  Nhung tăm, được kiểm tra chất lượng theo tiêu chuẩn của công ty.* Kĩ thuật in: Sản phẩm...",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/71.webp",
    sliderList: [
      "https://js-ecommerce-api.herokuapp.com/asset/img/71.webp",
      "https://js-ecommerce-api.herokuapp.com/asset/img/slide_list/slide_71.webp",
    ],
    type: "Pants",
  },
  {
    name: "Heyyou fire yellow",
    description:
      "HEYYOU - THƯƠNG HIỆU QUỐC DÂN !!!* Tên sản phẩm: ÁO HEYYOU FIRE YELLOW * MÀU ÁO: VÀNG: Màu Kem. * Kích thước: Size M  | Size L  | Size XL.  * Chất liệu:  Nhung tăm, được kiểm tra chất lượng theo tiêu chuẩn của công ty.* Kĩ thuật in: Sản phẩm...",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/72.jpg",
    sliderList: ["https://js-ecommerce-api.herokuapp.com/asset/img/72.jpg"],
    type: "Hoodie",
  },
  {
    name: "BUTTERFLY LONG WHITE SHIRT",
    description:
      "Mô tả:HEYYOU - THƯƠNG HIỆU QUỐC DÂN !!!* Tên sản phẩm: BUTTERFLY LONG WHITE SHIRT* Màu áo: Màu Trắng. * Kích thước: Size M  | Size L  | Size XL.  * Chất liệu: 100% Cotton co giãn 4 chiều được đặt dệt riêng theo tiêu chuẩn của công ty.* Kĩ thuật in:...",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/5.webp",
    sliderList: [
      "https://js-ecommerce-api.herokuapp.com/asset/img/5.webp",
      "https://js-ecommerce-api.herokuapp.com/asset/img/slide_list/slide_5.webp",
    ],
    type: "Shirt",
  },
  {
    name: "BASIC BLUE TEE",
    description:
      "Mô tả:HEYYOU - THƯƠNG HIỆU QUỐC DÂN !!!* Tên sản phẩm: BASIC BLUE TEE * Màu áo: Màu Đen / Màu Trắng. * Kích thước: Size M  | Size L  | Size XL.  * Chất liệu: 100% Cotton co giãn 4 chiều được đặt dệt riêng theo tiêu chuẩn của công ty.*...",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/74.webp",
    sliderList: [
      "https://js-ecommerce-api.herokuapp.com/asset/img/74.webp",
      "https://js-ecommerce-api.herokuapp.com/asset/img/slide_list/slide_74.webp",
    ],
    type: "Tee",
  },
  {
    name: "ESSENTIAL TEE 1.0",
    description:
      "Mô tả:HEYYOU - THƯƠNG HIỆU QUỐC DÂN !!!* Tên sản phẩm: ESSENTIAL TEE* Kích thước: Size M  | Size L  | Size XL.  * Chất liệu: 100% Cotton co giãn 4 chiều được đặt dệt riêng theo tiêu chuẩn của công ty.* Kĩ thuật in: Sản phẩm được sử dụng...",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/75.webp",
    sliderList: [
      "https://js-ecommerce-api.herokuapp.com/asset/img/75.webp",
      "https://js-ecommerce-api.herokuapp.com/asset/img/slide_list/slide_75.webp",
    ],
    type: "Tee",
  },
  {
    name: "Heyyou buuter - flower shirt green/short",
    description: "Chưa có mô tả cho sản phẩm này",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/76.jpg",
    sliderList: ["https://js-ecommerce-api.herokuapp.com/asset/img/76.jpg"],
    type: "Shirt",
  },
  {
    name: "Heyyou zombie white tee",
    description: "Kilmaster",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/65.webp",
    sliderList: [
      "https://js-ecommerce-api.herokuapp.com/asset/img/65.webp",
      "https://js-ecommerce-api.herokuapp.com/asset/img/slide_list/slide_65.webp",
    ],
    type: "Tee",
  },
  {
    name: "Heyyou zombie white tee",
    description: "Kilmaster",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/65.webp",
    sliderList: [
      "https://js-ecommerce-api.herokuapp.com/asset/img/65.webp",
      "https://js-ecommerce-api.herokuapp.com/asset/img/slide_list/slide_65.webp",
    ],
    type: "Tee",
  },
  {
    name: "FIREWORK WHITE TEE",
    description:
      "HEYYOU - THƯƠNG HIỆU QUỐC DÂN !!!* Tên sản phẩm: FIREWORK WHITE TEE* Màu sắc: Trắng* Kích thước: Size M  | Size L  | Size XL.  * Chất liệu: 100% Cotton co giãn 4 chiều được đặt dệt riêng theo tiêu chuẩn của công ty.* Kĩ thuật in: Sản phẩm được sử dụng...",
    imageUrl: "https://js-ecommerce-api.herokuapp.com/asset/img/47.webp",
    sliderList: [
      "https://js-ecommerce-api.herokuapp.com/asset/img/47.webp",
      "https://js-ecommerce-api.herokuapp.com/asset/img/slide_list/slide_47.webp",
    ],
    type: "Tee",
  },
];

module.exports = productListTemp;
