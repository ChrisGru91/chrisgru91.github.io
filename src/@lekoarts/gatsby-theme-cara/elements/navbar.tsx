/** @jsx jsx */
import { jsx } from "theme-ui"
import scrollTo from 'gatsby-plugin-smoothscroll'


const Navbar = () => {
   return (
      <nav sx={{ textAlign: `center`, display: `block`, padding: `5px 0`, background: `#2d3748`, borderBottom: `1px solid #141821` }}>
         <div sx={{ display: `inline-block`, margin: `0 15px`, fontSize: `14px`, fontWeight: `600`, fontFamily: `inherit` }}
         onClick={() => scrollTo('.o-magento')}
         >
            O Magento
         </div>
         <div sx={{ display: `inline-block`, margin: `0 15px`, fontSize: `14px`, fontWeight: `600`, fontFamily: `inherit` }}
         onClick={() => scrollTo('.funkcjonalnosci')}
         >
            Funkcjonalności
         </div>
         <div sx={{ display: `inline-block`, margin: `0 15px`, fontSize: `14px`, fontWeight: `600`, fontFamily: `inherit` }}
         onClick={() => scrollTo('.zastosowanie')}
         >
            Zastosowanie
         </div>
      </nav>
   );
};

export default Navbar