let productsDB = [
    {
      id: 1,
      title: "headphone",
      size: "large",
      imageUrl: "images/headphone.jpg",
      qty:1
    },
    {
      id: 2,
      title: "phones",
      size: "large",
      imageUrl: "images/phones.jpg",
      qty:1

    },
    {
      id: 3,
      title: "PC",
      size: "large",
      imageUrl: "images/PC.jpg",
      qty:1

    },
    {
      id: 4,
      title: "camera",
      size: "large",
      imageUrl: "images/camera.jpg",
      qty:1

    },
  ];
  localStorage.setItem("products",JSON.stringify(productsDB));