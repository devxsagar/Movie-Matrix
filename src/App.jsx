import React, { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import store from "./store/store";
import { Toaster } from "./components/ui/sonner";
import { clarity } from "react-microsoft-clarity";
import { MICROSOFT_CLARITY_ID } from "./utils/constant";

const App = () => {

  useEffect(() => {
    if(process.env.NODE_ENV === "production") {
      clarity.init(MICROSOFT_CLARITY_ID);
    }
  }, []);

  return (
    <Provider store={store}>
      <div>
        <div className="w-full max-w-7xl mx-auto px-5">
          <Navbar />
          <Outlet />
          <Footer />
          <Toaster position="bottom-right" toastOptions={{ duration: 3000 }}  />
        </div>
      </div>
    </Provider>
  );
};

export default App;
