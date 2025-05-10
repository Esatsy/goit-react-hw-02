import Statistics from '../Statistics/Statistics';
import Notification from '../Notification/Notification';

const Feedback = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      {total > 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      ) : (
        <Notification message="No feedback given" />
      )}
    </div>
  );
};

export default Feedback; 