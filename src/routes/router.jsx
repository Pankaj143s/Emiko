import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Faq from "../pages/Faq";
import Careers from "../pages/Careers";
import About from "../pages/About";
import History from "../pages/History";
import FindDealer from "../components/sections/whereToBuy/FindDealer";
import BecomeDealer from "../components/sections/whereToBuy/BecomeDealer";
import BecomeDistributor from "../components/sections/whereToBuy/BecomeDistributor";
import WhereToBuy from "../pages/WhereToBuy";
import BlogPage from "../components/sections/blogs/BlogPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/:id",
        element: <Products />,
      },
      {
        path: "aboutus",
        element: <About />,
      },

      {
        path: "faq",
        element: <Faq />,
      },
      {
        path: "carrers",
        element: <Careers />,
      },
      // {
      //   path: "history",
      //   element: <History />,
      // },
      // {
      //   path: "where-to-buy",
      //   element: <WhereToBuy />,
      // },
      {
        path: "find-dealer",
        element: <FindDealer />,
      },
      {
        path: "become-dealer",
        element: <BecomeDealer />,
      },
      {
        path: "become-distributor",
        element: <BecomeDistributor />,
      },
      {
        path: "blogs",
        element: <BlogPage />,
      },
    ],
  },
]);
