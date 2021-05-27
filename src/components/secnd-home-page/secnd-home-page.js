import React  from "react";
import "./secnd-home-page.css";
import {Header} from "../home-page-components/header-page/header-home-page"
import { Footer } from "../home-page-components/foooter-component/footer-home";
import { SecondMainTop } from "./components-second-home-page/component-secnd-main-top/component-secnd-main-top";
import { SecondMainBootom } from "./components-second-home-page/component-secnd-main-bootom/component-secnd-main-bootom";
// import { MainHome } from "../home-page-components/main-home-component/main-home";


 export function SecndPage(){



    

    return(
      
       <div className = "secnd-page">
          {/* <Header/> */}
      
           
           
           <SecondMainTop/>
           <SecondMainBootom/>
            
         {/* <Footer/> */}
    </div>
      
    )

};
