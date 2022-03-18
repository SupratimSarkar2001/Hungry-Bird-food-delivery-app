import {
  AccountBalanceWalletRounded,
  Chat,
  Favorite,
  HomeRounded,
  Settings,
  SummarizeRounded,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import "./App.css";
import CheckOut from "./Components/CheckOut";
import BannerName from "./Components/BannerName";
import Header from "./Components/Header";
import MenuCard from "./Components/MenuCard";
import MenuContainer from "./Components/MenuContainer";
import SubMenuContainer from "./Components/SubMenuContainer";
import { MenuItems, Items } from "./Components/Data";
import ItemCard from "./Components/ItemCard";
import DebitCard from "./Components/DebitCard";
import CartItem from "./Components/CartItem";
import { useStateValue } from "./Components/StateProvider";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  //data of main dish item
  const [isMainData, setMainData] = useState(
    Items.filter((element) => element.itemId === "buger01")
  );
  const [{ cart, total }, dispatch] = useStateValue();
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    //for bottom nav bar
    const menuLi = document.querySelectorAll("#menu li");

    function setMenuActive() {
      menuLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }
    menuLi.forEach((n) => n.addEventListener("click", setMenuActive));

    //for Menu card Items
    const menuCard = document
      .querySelector(".rowContainer")
      .querySelectorAll(".rowMenuCard");
    function setMenuCardActive() {
      menuCard.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }
    menuCard.forEach((n) => n.addEventListener("click", setMenuCardActive));
  }, [isMainData, cart, total, totalPrice]);
  //set main dish item on filter
  const setData = (itemId) => {
    setMainData(Items.filter((element) => element.itemId === itemId));
  };
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* Header Section  */}
          <Route exact path="/">
            <Header />
            {/* Main Container  */}
            <main>
              <div className="mainContainer">
                {/* banner */}
                <div className="banner">
                  <BannerName name={"Hungry"} discount={"500"} link={"#"} />
                </div>
                <div className="dishContainer">
                  <div className="menuCard">
                    <SubMenuContainer name={"Menu Category"} />
                  </div>
                  <div className="rowContainer">
                    {MenuItems &&
                      MenuItems.map((data) => (
                        <div key={data.id} onClick={() => setData(data.itemId)}>
                          <MenuCard
                            imgSrc={data.imgSrc}
                            name={data.name}
                            isActive={data.id === "1" ? true : false}
                          />
                        </div>
                      ))}
                  </div>
                  <div className="dishItemContainer">
                    {isMainData &&
                      isMainData.map((data) => (
                        <ItemCard
                          key={data.id}
                          itemId={data.id}
                          imgSrc={data.imgSrc}
                          name={data.name}
                          ratings={data.ratings}
                          price={data.price}
                        />
                      ))}
                  </div>
                </div>
              </div>
              <div className="rightMenu">
                <div className="debitCardContainer">
                  <div className="debitCard">
                    <DebitCard />
                  </div>
                </div>
                {!cart ? (
                  <div className="addSomeItem">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2FemptyCart.png?alt=media&token=50b733d4-cdd9-4025-bffe-8efa4066ca24"
                      alt=""
                      className="emptyCart"
                    />
                  </div>
                ) : (
                  <div className="cartCheckOutContianer">
                    <div className="cartContainer">
                      <SubMenuContainer />

                      <div className="cartItems">
                        {cart &&
                          cart.map((data) => (
                            <CartItem
                              key={data.id}
                              itemId={data.id}
                              name={data.name}
                              imgSrc={data.imgSrc}
                              price={data.price}
                            />
                          ))}
                      </div>
                    </div>
                    <div className="totalSection">
                      <h3>Thank You</h3>
                    </div>
                    <Link to="/checkout">
                      <button className="checkOut">Check Out</button>
                    </Link>
                  </div>
                )}
              </div>
            </main>
            {/* Bottom Menu  */}
            <div className="bottomMenu">
              <ul id="menu">
                <MenuContainer link={"/"} icon={<HomeRounded />} isHome />
                <MenuContainer link={"#"} icon={<Chat />} />
                <MenuContainer
                  link={"#"}
                  icon={<AccountBalanceWalletRounded />}
                />
                <MenuContainer link={"/"} icon={<Favorite />} />
                <MenuContainer link={"/"} icon={<SummarizeRounded />} />
                <MenuContainer link={"/"} icon={<Settings />} />
                <div className="indicator"></div>
              </ul>
            </div>
          </Route>
          <Route path="/checkout">
            <CheckOut />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
