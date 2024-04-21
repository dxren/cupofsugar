export default function Footer() {
  return (
    <footer
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        background: "#f5f5f5",
        padding: "10px 0",
        textAlign: "center",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src="app/img/sugar2.png"
          style={{ width: "80px", height: "80px" }}
          alt="Sugar"
        />
      </div>
    </footer>
  );
}
