import style from './TransactionHistory.module.css'
import PropTypes from 'prop-types';

export default function TransactionHistory({items}){
    return (
      <table className={style.transactionHistory}>
        <thead className={style.head}>
          <tr>
            <th className={style.item}>Type</th>
            <th className={style.item}>Amount</th>
            <th className={style.item}>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(({id, type, amount, currency}) => (
            <tr key={id}>
              <td className={style.item}>{type}</td>
              <td className={style.item}>{amount}</td>
              <td className={style.item}>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};
   