// import React from 'react'
import CategoryCard from "./CategoryCard";
const data = [
    {
        id: 0,
        name:"Nutritious food",
        count: "250+ Products",
        img: "https://www.all4pets.in/wp-content/uploads/2020/06/MR.-PUPPY-WITH-CHICKEN-AND-RICE.jpg",
    },
    {
        id: 1,
        name:"Comfy Clothes",
        count: "200+ Products",
        img: "https://lanapaws.com/cdn/shop/products/PupperPartyJacketcopy_800x.jpg?v=1670838481",
    },
    {
        id: 2,
        name:"Non toxic Toys",
        count: "150+ Products",
        img: "https://www.justdogsstore.com/wp-content/uploads/2023/08/Drools-Chew-Bone-Teething-Dog-Toy-1.webp",
    },
    {
        id: 3,
        name:"Affordable Combos",
        count: "50+ Products",
        img: "https://headsupfortails.com/cdn/shop/files/HUFTCB1070.jpg?v=1708414766&width=533",
    },
    // {
    //     id: 4,
    //     name:"Product E",
    //     count: "9 Products",
    //     img: "https://assets.ajio.com/medias/sys_master/root/20210618/lEBc/60cb9aa5aeb269a9e3ed7355/-1117Wx1400H-4918987940-multi-MODEL.jpg",
    // },
    // {
    //     id: 5,
    //     name:"Product F",
    //     count: "9 Products",
    //     img: "https://img0.junaroad.com/uiproducts/19748203/zoom_0-1683050072.jpg",
    // },
    // {
    //     id: 6,
    //     name:"Product G",
    //     count: "9 Products",
    //     img: "https://lanapaws.com/cdn/shop/products/PupperPartyJacketcopy_800x.jpg?v=1670838481",
    // },
    // {
    //     id: 7,
    //     name:"Product H",
    //     count: "9 Products",
    //     img: "https://caitec.com/cdn/shop/products/64312_2.jpg?v=1670921778",
    // },

];

const Category = () => {
  return (
    <div className="container pt-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {data.map(el => (
                <CategoryCard
                key={el.id}
                img = {el.img}
                name={el.name}
                count={el.count}
                />
            ))}
        </div>
    </div>
  )
}

export default Category