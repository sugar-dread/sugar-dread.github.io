const Card = ({ children, className = '' }) => {
  return (
    <div className={`card ${className}`}>
      {children}
    </div>
  );
};

export const CardContent = ({ children }) => {
  return (
    <div className="card-content">
      {children}
    </div>
  );
};

export const CardAction = ({ children }) => {
  return (
    <div className="card-action">
      {children}
    </div>
  );
};

export const CardReveal = ({ children }) => {
  return (
    <div className="card-reveal">
      {children}
    </div>
  );
};

export default Card;
