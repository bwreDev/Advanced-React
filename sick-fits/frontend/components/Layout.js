import PropTypes from 'prop-types';
import Header from './Header';

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <h1>My Layout</h1>
      {children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.any,
};
