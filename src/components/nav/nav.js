import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './nav.scss';

class Nav extends Component {
  state = {
    commonLinks: [
      {
        text: 'Home',
        to: '/',
      },
      {
        text: 'About Us',
        to: '/about',
      },
      {
        text: 'Movie List',
        to: '/movie-list',
      },
    ],
    noAuthLinks: [
      {
        text: 'Sign In',
        to: '/sign-in',
      },
      {
        text: 'Sign Up',
        to: '/sign-up',
      },
    ],
    authLinks: [
      {
        text: 'Secret Movie List',
        to: '/secret-movie-list',
      },
      {
        text: 'Movie Quotes',
        to: '/movie-quotes',
      },
    ],
  }

  renderLinks() {
    const { authLinks, commonLinks, noAuthLinks } = this.state;
    const auth = true;
    const links = commonLinks;
    auth ? links.push(...authLinks) : links.push(...noAuthLinks);

    return links.map(link => {
      return (
        <li key={link.to}>
          <Link to={link.to}>{link.text}</Link>
        </li>
      );
    });
  }

  render() {
    return (
      <nav className="blue darken-2">
        <Link className="brand-logo" to="/">Movie Quote</Link>

        <ul className="right">
          {this.renderLinks()}
        </ul>
      </nav>
    );
  }
}

export default Nav;
