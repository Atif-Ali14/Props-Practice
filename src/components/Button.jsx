// src/components/Button.jsx
export default function Button({ text, color }) {
  return (
    <button
      style={{
        backgroundColor: color,
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        margin: "45px",
      }}
    >
      {text}
    </button>
  );
}
