import * as React from "react";
import { useState, useEffect } from "react";
import ItemComponent from "./ItemComponent";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DrawerComponent from "./Drawer";
import Drawer from "@mui/material/Drawer";
import { Link } from "react-router-dom";

import ShoppingCart from "../components/ShoppingCart";
import CartPreview from "./ShoppingCart";
import AppBarWithoutSearch from "./AppBarWithoutSearch";
import { LoadingButton } from "@mui/lab";
import SendIcon from "@mui/icons-material/Send";
import { CommonDispatchContext, setSearchKeyword } from "../contexts/common";
import {
  CartStateContext,
  CartDispatchContext,
  toggleCartPopup,
} from "../contexts/cart";
import Item from "./Item";
import Fetch from "./Fetch";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

function Appbar(props) {
  const [inputText, setInputText] = useState("");
  const { items, DataisLoaded, brands, filter, path, types } = props;
  const [cartOpen, setCartOpen] = useState(false);
  var route;
  const [cartItems, setCartItems] = useState(() => {
    const stickyicky = localStorage.getItem("cart");

    return stickyicky !== null ? JSON.parse(stickyicky) : [];
  });

  useEffect(() => {
    //turn into js
    //will add a fetch for the cart items based on id

    //console.log("Localstorage:", JSON.parse(localStorage.getItem("cart")));
    //let ls = JSON.parse(localStorage.getItem("cart"));
    //load the persisted cart if it exists
    // if (ls) setCartItems(ls);
    // localStorage.setItem('cart',JSON.stringify(cartItems))
    let thiscart = JSON.stringify(cartItems);
    localStorage.setItem("cart", thiscart);
  }, [cartItems]);
  const [loading, setLoading] = React.useState(false);

  const getTotalItems = (items) =>
    items.reduce((acc, item) => acc + item.quantity, 0);

  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  const onAdd = async (product) => {
    const isItemInCart = cartItems.find((item) => item.id === product.id);
    console.log("adding");
    if (isItemInCart) {
      console.log("adding +1");
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id
            ? { ...isItemInCart, quantity: isItemInCart.quantity + 1 }
            : x
        )
      );
    } else {
      console.log("adding new");
      console.log("cartItems.quantity");
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    console.log("adding to local storage");
    console.log(cartItems);
    //const stringCart = JSON.stringify(cartItems);
    //localStorage.setItem("cart", stringCart);
    //console.log("addED to local storage");
    //await timeout(5000);
    //console.log("Localstorage:", JSON.parse(localStorage.getItem("cart")));
  };

  const onRemove = (product) => {
    const isItemInCart = cartItems.find((item) => item.id === product.id);
    console.log({ isItemInCart });
    if (isItemInCart.quantity === 1) {
      console.log("there was only one item its removed now");
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      console.log("there's more than one, its being removed rn");
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id
            ? { ...isItemInCart, quantity: isItemInCart.quantity - 1 }
            : x
        )
      );
    }
    //const stringCart = JSON.stringify(cartItems);
    //localStorage.setItem("cart", stringCart);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const [brandFilter, setBrandFilter] = useState(items);
  const [typesFilter, setTypesFilter] = useState(items);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMenuClick = (pageURL) => {
    setAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={() => handleMenuClick()}
    >
      <MenuItem onClick={() => handleMenuClose()}>
        <Link style={{ textDecoration: "none", color: "black" }} to="/profile">
          Profile
        </Link>
      </MenuItem>
      <MenuItem onClick={() => handleMenuClose()}>
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to="/myAccount"
        >
          My Account
        </Link>
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <p>Shopping Cart</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  const filterBrand = (uniqueBrand) => {
    console.log(uniqueBrand);
    const filteredItems = items.filter(
      (item) => item.brand == `${uniqueBrand}`
    );
    setBrandFilter(filteredItems);
  };
  const filterType = (uniqueType) => {
    console.log(uniqueType);
    const filteredItems = items.filter((item) => item.type == `${uniqueType}`);
    setTypesFilter(filteredItems);
  };

  if (path == "/" || path == "/items") {
    route = (
      <>
        <h1 style={{ "margin-top": "10px", "margin-bottom": "20px" }}>
          {" "}
          Top Products{"\n"}{" "}
        </h1>
        <ItemComponent
          onAdd={onAdd}
          inputText={inputText}
          cartItems={cartItems}
          items={items}
        />

        {renderMobileMenu}
        {renderMenu}
      </>
    );
  } else if (path == "/items/brands") {
    route = (
      <>
        <div
          style={{
            "text-align": "center",
            // "margin-top": "5em",
            padding: "20px",
          }}
        >
          <h1>Browse by Brands</h1>
          <LoadingButton
            size="small"
            onClick={() => setBrandFilter(items)}
            variant="contained"
            style={{ "margin-right": "20px" }}
          >
            All
          </LoadingButton>
          {brands.map((brand) => (
            <LoadingButton
              size="small"
              onClick={() => filterBrand(brand)}
              variant="contained"
              style={{ "margin-right": "20px" }}
            >
              {brand}
            </LoadingButton>
          ))}
        </div>

        <ItemComponent
          onAdd={onAdd}
          inputText={inputText}
          cartItems={cartItems}
          items={brandFilter}
        />

        {renderMobileMenu}
        {renderMenu}
      </>
    );
  } else if (path == "/items/types") {
    route = (
      <>
        <div
          style={{
            "text-align": "center",
            // "margin-top": "5em",
            padding: "20px",
          }}
        >
          <h1>Browse by Types</h1>
          <LoadingButton
            size="small"
            onClick={() => setTypesFilter(items)}
            variant="contained"
            style={{ "margin-right": "20px" }}
          >
            All
          </LoadingButton>
          {types.map((type) => (
            <LoadingButton
              size="small"
              onClick={() => filterType(type)}
              variant="contained"
              style={{ "margin-right": "20px" }}
            >
              {type}
            </LoadingButton>
          ))}
        </div>

        <ItemComponent
          onAdd={onAdd}
          inputText={inputText}
          cartItems={cartItems}
          items={typesFilter}
        />

        {renderMobileMenu}
        {renderMenu}
      </>
    );
  }

  return (
    <div>
      <DrawerComponent openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
      <Box style={{ backgroundColor: "#c3d2d6" }} sx={{ flexGrow: 1 }}>
        <AppBar style={{ backgroundColor: "#662E9B" }} position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
              onClick={() => setOpenDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component={Link}
              to="/"
              style={{ textDecoration: 'none', color: 'inherit'  }}
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              DealHunter
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                onChange={inputHandler}
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>

            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Drawer
                anchor="right"
                open={cartOpen}
                onClose={() => setCartOpen(false)}
              >
                <ShoppingCart
                  cartItems={cartItems}
                  onAdd={onAdd}
                  onRemove={onRemove}
                />
              </Drawer>
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
                onClick={() => setCartOpen(true)}
              >
                <Badge badgeContent={getTotalItems(cartItems)} color="error">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>

              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>

        {/* <h1 style = {{"margin-top":"10px","margin-bottom":"20px"}}> Top Products{"\n"} </h1>
        <ItemComponent
          onAdd={onAdd}
          inputText={inputText}
          cartItems={cartItems}
          items={items}
        />

        {renderMobileMenu}
        {renderMenu} */}
        {route}
      </Box>
    </div>
  );
}
export default Appbar;
