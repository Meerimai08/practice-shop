// import React, { useEffect, useState } from "react";
// import Header from "../components/header/header";
// import { Button, Card, Input } from "antd";
// import { useNavigate } from "react-router-dom";

// function Home() {
//   const [data, setData] = useState([]);

//   const nav = useNavigate();

//   useEffect(() => {
//     const dataFromLocalStorage =
//       JSON.parse(localStorage.getItem("products")) || [];
//     setData(dataFromLocalStorage);
//   }, []);

//   function searchProduct(e) {
//     let productFilterAdd = JSON.parse(localStorage.getItem("products")) || [];
//     productFilterAdd = productFilterAdd.filter((el) =>
//       el.name.toLowerCase().includes(e.target.value.toLowerCase())
//     );
//     setData(productFilterAdd);
//   }
//   function sortedHigh() {
//     const resHigh = [...data].sort(
//       (a, b) => parseInt(b.price) - parseInt(a.price)
//     );
//     setData(resHigh);
//   }

//   function sortedLow() {
//     const resLow = [...data].sort(
//       (a, b) => parseInt(a.price) - parseInt(b.price)
//     );
//     setData(resLow);
//   }
//   function btnNav(id, e) {
//     e.stopPropagation();
//     nav(`/product/create?editNav=${id}`);
//   }
//   return (
//     <>
//       <Header />
//       {/* <div className="container">
//         <Input onChange={searchProduct}></Input>
//         <Button onClick={sortedHigh}>High</Button>
//         <Button onClick={sortedLow}>Low</Button>
//         <div className="cards">
//           {data.map((el) => (
//             <Card
//               onClick={() => nav("/product/" + el.id)}
//               key={el.id}
//               hoverable
//               style={{ Width: 300 }}
//               cover={
//                 <img
//                   style={{ width: 300, height: 300 }}
//                   alt="example"
//                   src={el.url}
//                 />
//               }
//             >
//               <Card.Meta title={el.name} description={` Цена: ${el.price}`} />
//               <Card.Meta
//                 title={el.description}
//                 description={` Адрес: ${el.adress}`}
//               />
//               <Card.Meta title={` PhoneNumber:  ${el.PhoneNumber}`} />
//               <Button
//                 style={{ background: "blue", color: "#fff" }}
//                 onClick={(e) => btnNav(el.id, e)}
//               >
//                 edit
//               </Button>
//             </Card>
//           ))} */}
//         {/* </div>
//       </div> */}
//     </>
//   );
// }

// export default Home;
import { Card } from "antd";
import React, { useContext } from "react";
import Header from "../components/header/header";
import Context from "../context";

function Home() {
  const { date } = useContext(Context);
  return (
    <div className="home">
      <Header />
      <div className="container">
        <div
          className="cards"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            paddingTop: "50px",
            gap: "20px",
          }}
        >
          {date.map((el) => (
            <Card
              key={el.id}
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src={el.url} />}
            >
              <Card.Meta title={el.name} description={el.desc} />
              <Card.Meta title={el.price} />
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
