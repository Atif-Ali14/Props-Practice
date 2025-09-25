// src/components/Card.jsx
export default function Card({ title, description }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "15px",
        padding: "20px",
        margin: "15px",
        backgroundColor: "#f9f9f9",
        width: "250px",
      }}
    >
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
