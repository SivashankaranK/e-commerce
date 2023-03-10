import '../../assets/style/header.scss';
import { headerOrderList } from '../../utils';

import logo from '../../assets/icons/logo.svg';
import arrowIcon from '../../assets/icons/arrow.svg';
import searchIcon from '../../assets/icons/search.svg';
import headphonesIcon from '../../assets/icons/headphones.svg';
import phoneIcon from '../../assets/icons/phone.svg';
import cartIcon from '../../assets/icons/cart.svg';
import heartIcon from '../../assets/icons/heart.svg';
import userIcon from '../../assets/icons/user.svg';
import menuIcon from '../../assets/icons/menu-burger.svg';
import signInIcon from '../../assets/icons/sign-in.svg';

import { createSignal } from 'solid-js';
import { Offcanvas } from 'solid-bootstrap';

export const Header = () => {

  const [isMenuEnabled, setMenuState] = createSignal(false);

  return (
    <div class="header_bar">
      <div class='header_icon'>
        <img src={logo} alt='logo' />
      </div>

      <div class='search_bar'>
        <div class='search_categories'>
          <span class='all_categories'>
            All categories
          </span>
          <img src={arrowIcon} alt='arrow' class='search_categories_down_arrow' />
        </div>
        <span class='search_divider' />
        <div class='search_area'>
          <input value='' placeholder='Search for products' class='search__input_area' />
          <span class='search_button'>
            <img src={searchIcon} alt='searchIcon' />
          </span>
        </div>
      </div>

      <div class='order_tabs'>
        {headerOrderList.map((it) => {
          return (
            <div class='order_elements'>
              <span class='orderIcon_element'>
                <img src={it.logo} alt={it.value} class='order_icons' />
              </span>

              <span class='order_text'>{it.label}</span>
            </div>
          )
        })
        }
      </div>

      <div class='contact_details'>
        <div class='contact_details_now'>
          Call Us Now
        </div>
        <div class='headphone_details'>
          <img src={headphonesIcon} alt='headphonesIcon' class='headphones_icon' />
          <span class='headphones_number'>+011 5827918</span>
        </div>
        <div class='sig_in_contact'>
          Sign In
        </div>
      </div>

      <div class='user_details'>
        <img src={userIcon} alt='userIcon' />
        <img src={heartIcon} alt='heartIcon' />
        <span class='cart_contenet'>
          <img src={cartIcon} alt='cartIcon' />
          Cart
        </span>
      </div>

      <div class='burger_menu'>
        <img class='menu_icon' src={menuIcon} alt='menuIcon' onClick={() => setMenuState((prev) => !prev)} />
      </div>
      <Offcanvas
        show={isMenuEnabled()}
        onHide={() => setMenuState(false)}
        placement={'end'}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>ORDER DETAILS</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body class='burger_container'>
          <div>
            {headerOrderList.map((it) => {
              return (
                <div class='burgger_contents'>
                  <span class='burgger_label'>
                    {it.label}
                  </span>
                </div>
              )
            })}
          </div>
          <div class='footer_content'>
            <div class='contact_details'>
              <span class='label'>
                Call Us Now
              </span>
              <span class='phone_number'>
                <span>+011 5827918</span>
                <img src={phoneIcon} alt='headphonesIcon' class='icon' />
              </span>
            </div>
            <div class='sign_in'>
              <span>
                Sign In
              </span>
              <img src={signInIcon} alt='signInIcon' class='icon' />
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div >
  )
}