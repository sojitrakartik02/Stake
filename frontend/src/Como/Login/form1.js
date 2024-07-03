import React, { useState } from "react";
import { Box, TextField, Button, Typography, Link } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

const FormComponent = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
  });

  const { login } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const endpoint = isLogin ? "/login" : "/create";
      const response = await fetch(`http://localhost:4000/api${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        if (isLogin) {
          toast.success("Logged in successfully");
          login();
          navigate("/");
        } else {
          toast.success("Account created successfully");
        }
        setFormData({
          name: "",
          email: "",
          phone: "",
          address: "",
          password: "",
        });
      } else {
        if (isLogin) {
          toast.error("Failed to log in");
        } else {
          toast.error("Failed to create account");
        }
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error occurred. Please try again.");
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
      }}
    >
      <Box
        sx={{
          backgroundColor: "#1a2c38",
          padding: "20px",
          borderRadius: "8px",
          maxWidth: "35%",
          height: "100%",
          overflow: "auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h6"
          align="center"
          sx={{ color: "white", fontWeight: "700" }}
          gutterBottom
        >
          {isLogin ? "Login" : "Create an Account"}
        </Typography>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 2, width: "100%" },
            maxWidth: 600,
            margin: "auto",
            padding: "0px",
            color: "white",
            borderRadius: 8,
            backgroundColor: "#1a2c38",
          }}
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          {!isLogin && (
            <>
              <Typography
                sx={{ margin: " 0px 16px !important", color: "#b1bad3" }}
              >
                Name
              </Typography>
              <TextField
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                fullWidth
                sx={{
                  mb: 2,
                  backgroundColor: "#0f212e",
                  color: "white",
                  padding: "0px",
                }}
                InputLabelProps={{
                  style: { color: "#b1bad3" },
                }}
              />
              <Typography
                sx={{ margin: " 0px 16px !important", color: "#b1bad3" }}
              >
                Phone
              </Typography>
              <TextField
                id="phone"
                name="phone"
                variant="outlined"
                type="number"
                value={formData.phone}
                onChange={handleChange}
                required
                fullWidth
                sx={{
                  mb: 2,
                  backgroundColor: "#0f212e",
                  color: "white",
                }}
                InputLabelProps={{ style: { color: "#b1bad3" } }}
              />
              <Typography
                sx={{ margin: " 0px 16px !important", color: "#b1bad3" }}
              >
                Address
              </Typography>
              <TextField
                id="address"
                name="address"
                variant="outlined"
                value={formData.address}
                onChange={handleChange}
                required
                fullWidth
                sx={{
                  mb: 2,
                  backgroundColor: "#0f212e",
                  color: "white",
                  padding: 2,
                }}
                InputLabelProps={{ style: { color: "#b1bad3" } }}
              />
            </>
          )}
          <Typography sx={{ margin: " 0px 16px !important", color: "#b1bad3" }}>
            Email
          </Typography>
          <TextField
            id="email"
            name="email"
            variant="outlined"
            value={formData.email}
            onChange={handleChange}
            required
            fullWidth
            sx={{
              mb: 2,
              backgroundColor: "#0f212e",
              color: "white",
              padding: 2,
            }}
            InputLabelProps={{ style: { color: "#b1bad3" } }}
          />
          <Typography sx={{ margin: " 0px 16px !important", color: "#b1bad3" }}>
            Password
          </Typography>
          <TextField
            id="password"
            name="password"
            variant="outlined"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
            fullWidth
            sx={{
              mb: 2,
              backgroundColor: "#0f212e",
              color: "white",
              padding: 2,
            }}
            InputLabelProps={{ style: { color: "#b1bad3" } }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2, backgroundColor: "green", color: "black" }}
          >
            {isLogin ? "Login" : "Sign Up"}
          </Button>
        </Box>
        <Typography variant="body1" align="center" sx={{ mt: 2 }}>
          {isLogin ? (
            <>
              Don't have an account?{" "}
              <Link href="#" onClick={toggleForm} sx={{ color: "#b1bad3" }}>
                Sign Up here
              </Link>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <Link href="#" onClick={toggleForm} sx={{ color: "#b1bad3" }}>
                Login here
              </Link>
            </>
          )}
        </Typography>
        <ToastContainer />
      </Box>
    </Box>
  );
};

export default FormComponent;
