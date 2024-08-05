import React from "react";
import Header from "../components/header/Header";
import Section from "../components/section/Section";
import Madeleine from "../components/madeleine/Madeleine";
import Footer from "../components/footer/Footer";
import Clothes from "../components/clothes/Clothes";
import Comments from "../components/comments/Comments";

const Home = () => {
  return (
    <>
      <Header />
      <Section />
      <Clothes />
      <Madeleine />
      <Comments />
      <Footer />
    </>
  );
};

export default Home;
