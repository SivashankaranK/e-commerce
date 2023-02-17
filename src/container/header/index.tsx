import logo from '../../assets/icons/logo.svg';
import '../../assets/style/header.scss';
import arrowIcon from '../../assets/icons/arrow.svg';
import searchIcon from '../../assets/icons/search.svg';
import { headerOrderList } from '../../utils';

export const Header = () => {

  return (
    <div class="header_bar">
      <div class='header_icon'>
        <img src={logo} alt='logo' />
      </div>

      <div class='search_bar'>
        <div class='search_categories'>
          <span>
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
    </div>
  )
}