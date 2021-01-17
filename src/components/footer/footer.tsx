import * as React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
    return (<React.Fragment>
        <footer className="footer container">
        <Link className="footer__logo-link" to="/">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </Link>
      </footer>
    </React.Fragment>
    )
}