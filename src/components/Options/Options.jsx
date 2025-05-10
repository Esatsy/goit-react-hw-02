import styles from './Options.module.css';

const Options = ({ onLeaveFeedback, total }) => {
  return (
    <div className={styles.options}>
      <button
        className={styles.button}
        onClick={() => onLeaveFeedback('good')}
      >
        Good
      </button>
      <button
        className={styles.button}
        onClick={() => onLeaveFeedback('neutral')}
      >
        Neutral
      </button>
      <button
        className={styles.button}
        onClick={() => onLeaveFeedback('bad')}
      >
        Bad
      </button>
      {total > 0 && (
        <button
          className={styles.resetButton}
          onClick={() => onLeaveFeedback('reset')}
        >
          Reset
        </button>
      )}
    </div>
  );
};

export default Options; 