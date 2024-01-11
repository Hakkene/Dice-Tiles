import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUpScreen = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSignUp = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/register/", {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          username: username,
          password: password,
        }),
      });

      console.log("Response:", response);

      if (response.ok) {
        console.log("User successfully registered");
        <Link to={`/login`}></Link>;
      } else {
        const errorData = await response.json();
        console.error("Registration failed:", errorData);
        // Handle registration failure
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <div className="flex justify-center mt-20">
      <div className="w-1/5 flex flex-col">
        <label className="ml-4 text-sm font-medium text-gray-700">
          Username
        </label>
        <input
          type="text"
          id="usernameInput"
          className="mt-1 p-2 border border-gray-300 rounded-md"
          placeholder="Enter username"
          value={username}
          onChange={handleUsernameChange}
        />

        <label className="ml-4 mt-4 text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="emailInput"
          className="mt-1 p-2 border border-gray-300 rounded-md"
          placeholder="Enter email"
          value={email}
          onChange={handleEmailChange}
        />

        <label className="ml-4 mt-4 text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          type="password"
          id="passwordInput"
          className="mt-1 p-2 border border-gray-300 rounded-md"
          placeholder="Enter password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button
          className="bg-blue-500 text-white p-2 rounded-md mt-10"
          onClick={handleSignUp}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignUpScreen;
