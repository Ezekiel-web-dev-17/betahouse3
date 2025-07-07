import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./layout/RootLayout.jsx";
import AuthLayout from "./layout/AuthLayout.jsx";
import Homepage from "./pages/home/Homepage.jsx";
import Aboutpage from "./pages/about/Aboutpage.jsx";
import Blog from "./pages/blog/Blog.jsx";
import Contact from "./pages/contact/Contact.jsx";
import Properties from "./pages/properties/Properties.jsx";
import Login from "./pages/log/Login.jsx";
import SignUp from "./pages/signup/SignUp.jsx";
import { ApiProvider } from "./context/AxiosContext.jsx";
import EachHoouse from "./pages/eachHouse/EachHoouse.jsx";
import CartPage from "./pages/cartpg/CartPage.jsx";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Faq from "./pages/faq/Faq.jsx";
import CheckOut from "./pages/checkout/CheckOut.jsx";
// https://betahousebackend2.onrender.com/api/v1/auth/sign-{up || in}

function App() {
  return (
    <>
      <ApiProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<RootLayout />}>
              <Route path="/" element={<Homepage />} />
              <Route path="/about" element={<Aboutpage />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/properties" element={<Properties />} />
              <Route path="/house/:id" element={<EachHoouse />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/faqs" element={<Faq />} />
              <Route path="/checkout" element={<CheckOut />} />
            </Route>
            <Route element={<AuthLayout />}>
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ApiProvider>
      <ToastContainer />
    </>
  );
}

export default App;
