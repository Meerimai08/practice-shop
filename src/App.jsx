// // import { createBrowserRouter, RouterProvider } from "react-router-dom";
// // import Home from "./pages/home";
// // import Products from "./pages/product";
// // import AddProducts from "./pages/addproduct";

// // const routes = createBrowserRouter([
// //   {
// //     path: "/",
// //     element: <Home />,
// //   },
// //   {
// //     path: "/product/:id",
// //     element: <Products />,
// //   },
// //   {
// //     path: "/product/create",
// //     element: <AddProducts />,
// //   },
// // ]);

// // function App() {
// //   return <RouterProvider router={routes} />;
// // }

// // export default App;
// import React, { useState } from "react";
// import Context from "./context";

// function App() {
//   const routes = createBrowserRouter([
//     {
//       path: "/",
//       element: <Home />,
//     },
//     {
//       path: "/product/:id",
//       element: <Products />,
//     },
//     {
//       path: "/product/create",
//       element: <AddProducts />,
//     },
//   ]);
//   const { data, setData } = useState([]);
//   return (
//     <Context.Provider value={{ data, setData }}>
//       <RouterProvider router={routes} />;
//     </Context.Provider>
//   );
// }

// export default App;
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import { useState } from "react";
import Context from "./context";
import Addproduct from "./pages/addproduct";
import Product from "./pages/product";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Home />
      </>
    ),
  },
  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "/product/create",
    element: (
      <>
        <Addproduct />
      </>
    ),
  },
]);
function App() {
  const [date, setDate] = useState([]);

  return (
    <Context.Provider
      value={{
        date,
        setDate,
      }}
    >
      <RouterProvider router={router} />
    </Context.Provider>
  );
}

export default App;
