import React from 'react';
import '../styles/footer.scss';

export default function Footer() {
  return (
    <footer className="footer" id='footer'>
      <div className="footer-content">
        <div className="footer-item">
          <p className="footer-title">Address:</p>
          <p className='footer-desc'>1733 Lions Gate Ln, North Vancouver,
          BC V7P 0C7</p>
        </div>
        <div className="footer-item">
          <p className="footer-title">Email:</p>
          <p className='footer-desc'>
            <a href='mailto:dibai.yasmin@gmail.com'>dibal.yasmin@gmail.com</a>
          </p>
        </div>
        <div className="footer-item">
          <p className="footer-title">Phone:</p>
          <p className='footer-desc'>604-512-6130</p>
        </div>
        <div className="footer-item">
          <p className="footer-title">Instagram:</p>
          <p className='footer-desc'>
            @hyte.program
          </p>
        </div>
      </div>
    </footer>
  );
};
