const Answer = ({ updatePoints, setUserAnswer, userAnswer }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    updatePoints(userAnswer);
    setUserAnswer("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
        placeholder="your answer"
        required
      />
      <button type="submit">prove</button>
    </form>
  );
};

export default Answer;
