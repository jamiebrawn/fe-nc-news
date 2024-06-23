const ErrorComponent = ({ message }) => {
  return (
    <div className="error">
      <h2>Error Occurred</h2>
      <p>{message}</p>
    </div>
  );
};

export default ErrorComponent;
