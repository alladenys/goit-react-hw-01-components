import style from './Statistics.module.css'
import PropTypes from 'prop-types';

export default function Statistics({stats}){
    return (
      <section className={style.statistics}>
        <h2 className={style.title}>Upload stats</h2>

        <ul className={style.statList}>
            {stats.map(({id, label, percentage}) => (
                <li className={style.item} key={id} style={{backgroundColor:randomBgColor()}}>
                   <span className={style.label}>{label}</span>
                   <span className={style.percentage}>{percentage}%</span>
                   </li>
            ))}
        </ul>
      </section>
    );
};

function randomBgColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
  
    return 'rgb(' + r + ',' + g + ',' + b + ')';
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      }),
    ),
};