// import React, { useContext, useEffect, useState } from "react";
// import Header from "../components/header/header";
// import { Button, Flex, Input } from "antd";
// import Context from "../context";
// import { useLocation } from "react-router-dom";

// function AddProducts() {
//   const { setData } = useContext(Context);
//   // const [data, setData] = useState({
//   //   name: "",
//   //   price: 0,
//   //   url: "",
//   //   adress: "",
//   //   description: "",
//   //   PhoneNumber: 0,
//   // });
//   function Add() {
//     const url = document.querySelector(".url");
//     const name = document.querySelector(".name");
//     const desc = document.querySelector("desc");
//     const product = {
//       id: new Date().getTime(),
//       url: url.value,
//       name: name.value,
//       desc: desc.value,
//     };
//     setData((prevDate) => [...prevDate, product]);
//   }

//   // const { search } = useLocation();
//   // useEffect(() => {
//   //   const param = new URLSearchParams(search);
//   //   console.log(param);
//   //   const id = param.get(`editNav`);
//   //   console.log(id);
//   //   const products = JSON.parse(localStorage.getItem("products")) || [];
//   //   console.log(products);
//   //   const prod = products.find((el) => el.id == id);
//   //   setData({ ...prod });
//   // }, []);

//   // function clickHandler(e) {
//   //   e.preventDefault();
//   //   const product = {
//   //     id: new Date().getTime(),
//   //     date: new Date().getTime(),
//   //     ...data,
//   //   };

//   //   const products = JSON.parse(localStorage.getItem("products")) || [];

//   //   products.push(product);

//   //   localStorage.setItem("products", JSON.stringify(products));
//   // }

//   return (
//     <>
//       <Header />

//       <div className="container">
//         <Flex
//           vertical
//           justify="center"
//           gap={30}
//           style={{ maxWidth: 300, marginLeft: 700, marginTop: 70 }}
//         >
//           <form action="#" onSubmit={clickHandler}>
//             <Input
//               // placeholder="image url"
//               // value={data.url}
//               // onChange={(e) => setData({ ...data, url: e.target.value })}
//               rootClassName="url"
//               placeholder="url"
//             />
//             <Input
//               // placeholder="name"
//               // value={data.name}
//               // onChange={(e) => setData({ ...data, name: e.target.value })}
//               rootClassName="name"
//               placeholder="name"
//             />
//             <Input
//               placeholder="price"
//               value={data.price}
//               onChange={(e) => setData({ ...data, price: e.target.value })}
//             />
//             <Input
//               placeholder="description"
//               value={data.description}
//               onChange={
//                 (e) => setData({ ...data, description: e.target.value })
//                 // rootClassName="desc"
//                 // placeholder="desc"
//               }
//             />
//             <Input
//               placeholder="adress"
//               value={data.adress}
//               onChange={(e) => setData({ ...data, adress: e.target.value })}
//             />
//             <Input
//               placeholder="PhoneNumber"
//               value={data.PhoneNumber}
//               onChange={(e) =>
//                 setData({ ...data, PhoneNumber: e.target.value })
//               }
//             />
//           </form>
//           <Button onClick={clickHandler}>add</Button>
//         </Flex>
//       </div>
//     </>
//   );
// }

// export default AddProducts;
// /*git init - начать работу с git
// git status - проверить папки и файлы
// git add . - добавить папки или файлы
// git commit -m “название коммита” - добавить коммит
// git log - посмотреть коммиты
// git push origin “название ветки” */
import { Button, Flex, Input } from "antd";
import React from "react";
import { useContext } from "react";
import Header from "../components/header/header";
import Context from "../context";

function Addproduct() {
  const { setDate } = useContext(Context);
  function addDate() {
    const url = document.querySelector(".url");
    const name = document.querySelector(".name");
    const desc = document.querySelector(".desc");
    const price = document.querySelector(".price");
    const product = {
      id: new Date().getTime(),
      name: name.value,
      url: url.value,
      desc: desc.value,
      price: price.value,
    };
    setDate((prevDate) => [...prevDate, product]);
  }
  return (
    <div>
      <Header />
      <div className="container">
        <Flex
          vertical
          align="center"
          style={{ maxWidth: 300, marginLeft: 450, padding: 50 }}
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              addDate();
            }}
          >
            <Input className="url" placeholder="url"></Input>
            <Input className="name" placeholder="name"></Input>
            <Input className="desc" placeholder="description"></Input>
            <Input className="price" placeholder="price"></Input>
            <button className="btn" type="submit">
              submit
            </button>
          </form>
        </Flex>
      </div>
    </div>
  );
}

export default Addproduct;
