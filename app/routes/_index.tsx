import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8", textAlign: "center" }}>
      <div>
        <h1> Cup of Sugar </h1>
      </div>
      <div style={{ textAlign: "left", margin: "0 auto", maxWidth: "300px" }}>
        <label htmlFor="email" style={{ marginBottom: "5px" }}>Email:</label>
        <input type="email" id="email" name="email" placeholder="Email" required></input>
      </div>
      <div style={{ textAlign: "left", margin: "0 auto", maxWidth: "300px" }}>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" placeholder="Password" required></input>
      </div>
    </div>
  );
}
