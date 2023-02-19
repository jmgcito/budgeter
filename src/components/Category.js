const Category = ({ amount, name, onClick }) => {
  return (
    <div>
      {`${name} – $${amount} `}
      <button onClick={onClick}>x</button>
      <div className="vl" />
    </div>
  );
};

export default Category;
