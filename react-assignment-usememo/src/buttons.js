export default function Buttons({ Prop,setCompleted }) {
  return (
    <div className="typebutton">
      <button
        className="typebutton"
        type="button"
        onClick={() => setCompleted()}
      >
        {Prop}
      </button>
    </div>
  );
}
