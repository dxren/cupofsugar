import type { MetaFunction } from "@remix-run/node";
import sugar from "~/img/sugar.png"

export const meta: MetaFunction = () => {
    return [
        { title: "New Remix App" },
        { name: "description", content: "Welcome to Remix!" },
    ];
};

export default function Login() {
    return (
        <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8", textAlign: "center" }}>
            <br />
            <div className="flex flex-row">
                <div className="w-8" style={{ fontSize: "2rem" }}> Cup of Sugar </div>
            </div>
            <br />
            <div style={{ textAlign: "left", margin: "0 auto", maxWidth: "300px" }}>
                <label htmlFor="email" style={{ marginBottom: "5px" }}>Email:</label>
                <div style={{ textAlign: "left", maxWidth: "300px", maxHeight: "500px", border: "1px solid #000", borderRadius: "5px" }}>
                    <input type="email" name="email" placeholder="Email" required></input>
                </div>
            </div>
            <div style={{ textAlign: "left", margin: "0 auto", maxWidth: "300px" }}>
                <label htmlFor="password">Password:</label>
                <div style={{ textAlign: "left", maxWidth: "300px", maxHeight: "500px", border: "1px solid #000", borderRadius: "5px" }}>
                    <input type="password" name="password" placeholder="Password" required></input>
                </div>
            </div>
            <footer style={{ position: "fixed", bottom: 0, left: 0, width: "100%", background: "#f5f5f5", padding: "10px 0", textAlign: "center" }}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <img src={sugar} style={{ width: "80px", height: "80px" }} alt="Sugar" />
                </div>
            </footer>
        </div >
    );
}
