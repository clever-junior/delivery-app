// import PropTypes from 'prop-types';

interface IButtonProps {
  dataTestId: string
  type: string
  name: string
  disabled: boolean
  text: string
  onClick?: () => void
}

export function Button({ dataTestId, type, name, disabled, onClick, text }: IButtonProps) {
  return (
    <button
      data-testid={ dataTestId }
      type={ type === 'submit' ? 'submit' : 'button' }
      name={ name }
      disabled={ disabled }
      onClick={ onClick }
    >
      { text }
    </button>
  );
}

// Button.defaultProps = {
//   disabled: false,
//   onClick: () => {},
// };

// Button.propTypes = {
//   dataTestId: PropTypes.string.isRequired,
//   type: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   disabled: PropTypes.bool,
//   onClick: PropTypes.func,
//   text: PropTypes.string.isRequired,
// };
