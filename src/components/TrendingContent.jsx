export default function TredingContent({ value, isActive, onClick }) {
  const itemClass = isActive ? `item active` : "item";

  return (
    <div onClick={() => onClick(value)} className={itemClass}>
      {value}
    </div>
  );
}
