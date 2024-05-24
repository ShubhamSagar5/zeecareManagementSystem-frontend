import React, { useContext } from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
import MessageForm from "../components/MessageForm";
import Departments from "../components/Departments";
import { Context } from "../main";

const Home = () => {
  
  const {isAuthenticated,user} = useContext(Context)
 
  const name = user
  return (
    <>
      <Hero
        title={
          `Welcome ${isAuthenticated ? user.firstName : ""} to ZeeCare Medical Institute | Your Trusted Healthcare Provider`
        }
        imageUrl={"/hero.png"}
      />
      <Biography imageUrl={"/about.png"} />
      <Departments />
      <MessageForm />
    </>
  );
};

export default Home;
