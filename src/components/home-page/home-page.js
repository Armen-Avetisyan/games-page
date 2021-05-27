import React  from "react";
import { Baner } from "../home-page-components/banner-component/banner";
import { Footer } from "../home-page-components/foooter-component/footer-home";
import { Header } from "../home-page-components/header-page/header-home-page";
import { MainHome } from "../home-page-components/main-home-component/main-home";
import "./home-page.css";



 export function Home(){



    

    return(
      
       <div className = "home">
           <Header/>
           <Baner/>
           <MainHome/>
           <Footer/>
     
    </div>
      
    )

};


