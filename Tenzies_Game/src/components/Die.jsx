export default function Die({ children, holdDie, isHeld }) {
  return (
    <div
      className={`die ${isHeld ? "dieIsHeld" : "dieIsNotHeld"}`}
      onClick={holdDie}
    >
      {children}
    </div>
  );
}
