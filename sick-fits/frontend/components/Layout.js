import PropTypes from 'prop-types';

export default function Layout({ children }) {
  return (
    <div>
      <h1>My Layout</h1>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
};
