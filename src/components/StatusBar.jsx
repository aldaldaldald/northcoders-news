export default function StatusBar({ error }) {
  if (!error) return null;

  return (
    <div className="status-bar">
      <p>{error}</p>
    </div>
  );
}
