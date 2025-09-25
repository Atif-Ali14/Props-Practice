// src/components/Card.jsx
export default function Card({ title, description }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "15px",
        padding: "20px",
        margin: "50px",
        backgroundColor: "black",
        width: "250px",
      }}
    >
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
