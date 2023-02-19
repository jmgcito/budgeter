import GetMoney from "./GetMoney";
import GetPercent from "./GetPercent";

const Header = ({
  currMoney,
  changeMoney,
  exPercent,
  changeExPercent,
  savPercent,
  changeSavPercent,
}) => {
  return (
    <div>
      <p className="margin-right">
        <strong>Budget Amount</strong>
        <br />$
        <GetMoney currMoney={currMoney} changeMoney={changeMoney} />
      </p>
      <p className="header-container">
        <strong>Expenses </strong>
        <GetPercent percent={exPercent} changePercent={changeExPercent} />%
        <strong>Savings </strong>
        <GetPercent percent={savPercent} changePercent={changeSavPercent} />%
      </p>
    </div>
  );
};

export default Header;
