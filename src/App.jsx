// src/App.jsx
import Button from "./components/Button";
import UserProfile from "./components/UserProfile";
import Card from "./components/Card";

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Props Practice</h1>

      {/* Buttons with props */}
      <h2>Buttons</h2>
      <Button text="Click Me" color="#0496c7" />
      <Button text="Delete" color="#99000d" />
      <Button text="Submit" color="#90EE90" />

      {/* User Profiles */}
      <h2>User Profiles</h2>
      <UserProfile name="Atif Ali" age={22} hobby="Coding" />
      <UserProfile name="Usman Khan" age={23} hobby="Movie Directing" />
      <UserProfile name="Aroona " age={22} hobby="Writing" />

      {/* Cards */}
      <h2>Cards</h2>
      <Card title="Bootstrap Basics" description="Learning how to apply css through bootstrap."/>
      <Card title="Advanced React" description="Hooks, Context, and more." />
      <Card title="Frontend Tools" description="Explore Vite, Tailwind, and libraries."/>
    </div>
  );
}

export default App;
