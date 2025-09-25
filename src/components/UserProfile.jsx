// src/components/UserProfile.jsx
export default function UserProfile({ name, age, hobby }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "15px",
        margin: "45px",
        width: "200px",
        textAlign: "center",
      }}
    >
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>Hobby: {hobby}</p>
    </div>
  );
}
