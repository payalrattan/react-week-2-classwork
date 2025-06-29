"use client";
import { useState } from "react";
import { Button } from "@/components/button/Button.jsx";
import { Input } from "@/components/input-component/InputComponent";
const LoginPage = () => {
    const [userName, setUserName] = useState("");
    const [passWord, setPassWord] = useState("");

    const handleLogin = () => {
        if (userName && passWord) {
            alert(`Welcome ${userName}!`);
        } else {
            alert("Please enter both username and password.");
        }
    };
  
    

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "80px" }}>
            <h2>Login Page</h2><br />
            <p>Please enter your credentials to login.</p><br />
            <Input
                type="text"
                placeholder="Username/E-Mail"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
            />
            <br />
            <Input
                type="password"
                placeholder="Password"
                value={passWord}
                onChange={(e) => setPassWord(e.target.value)}
            />
            <br />
            <Button
                text="Login"
                className="button-main"
                onClick={handleLogin}
            />
              <p>You typed: {userName}</p>
        </div>
    );
}

export default LoginPage;