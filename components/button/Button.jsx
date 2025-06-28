export const Button = ({ className, onClick, text }) => {
  return (
    <button  onClick={onClick} className={className}>
      {text}
    </button>
  );
};