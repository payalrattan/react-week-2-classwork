import "./inputComponent.css";
export const Input = ({ placeholder, type, value, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};
