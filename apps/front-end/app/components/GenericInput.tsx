interface IGenericInput {
  testId: string
  type: string
  input: string
  name: string
  placeholder: string
  fieldName: string
  selector: string
  setter: (value: string) => void
}

export function GenericInput({
  testId,
  type,
  input,
  name,
  placeholder,
  setter,
  selector,
  fieldName }: IGenericInput) {
  return (
    <label htmlFor={ selector }>
      { fieldName }
      <input
        className="rounded-lg px-2 py-1 text-gray-400"
        data-testid={ testId }
        type={ type }
        value={ input }
        name ={ name }
        placeholder={ placeholder }
        onChange={ (event) => setter(event.target.value) }
      />
    </label>
  );
}

// GenericInput.defaultProps = {
//   setter: () => {},
// };

// GenericInput.propTypes = {
//   testId: PropTypes.string.isRequired,
//   type: PropTypes.string.isRequired,
//   input: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   setter: PropTypes.func,
//   placeholder: PropTypes.string.isRequired,
//   selector: PropTypes.string.isRequired,
//   fieldName: PropTypes.string.isRequired,
// };
