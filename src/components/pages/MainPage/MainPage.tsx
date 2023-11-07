import Menu from "../../menu/Menu";
import Promo from "./promo/Promo";
import Advantages from "./advantages/Advantages";
import Organization from "./organization/Organization";
import Agency from "./agency/Agency";
import Management from "./managment/Management";
import Scheme from "./scheme/Scheme";
import Recall from "./recall/Recall";
import Price from "./price/Price";
import Footer from "../../footer/Footer";

const MainPage = () => {
  return (
    <>
      <Menu />
      <Promo />
      <Advantages />
      <Organization />
      <Agency />
      <Price />
      <Management />
      <Scheme />
      <Recall />
      <Footer />
    </>
  );
};

export default MainPage;
