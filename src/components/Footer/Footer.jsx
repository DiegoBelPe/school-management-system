import React from 'react';
import './Footer.css';
import image from '../../assets/images';

function Footer() {
  return (
    <div className="container__footer">
      <h4>Redes Sociales</h4>
      <div className="col1">
        <div className="container__icons">
          <div className="icons">
            <img className="icons_logos" src={image.img21} alt="faceboook" />
          </div>

          <div className="icons">
            <img className="icons_logos" src={image.img22} alt="instagram" />
          </div>

          <div className="icons">
            <img className="icons_logos" src={image.img23} alt="twitter" />
          </div>
        </div>
        <hr />
      </div>
      <div className="row">
        <p className="col-copyrigh">
          &copy;
          {new Date().getFullYear()}
          Make It Real Camp High School | All
          right reserved | Term of Service | Privacy BDJ |
        </p>
      </div>
    </div>
  );
}

export default Footer;
