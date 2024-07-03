import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Link,
  IconButton,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import CloseIcon from "@mui/icons-material/Close";

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
  const [isOpen, setIsOpen] = useState(true);

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

  const handleClose = () => {
    setIsOpen(false);
    navigate("/");
  };

  if (!isOpen) {
    return null;
  }

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
          padding: "16px",
          borderRadius: "8px",
          position: "relative",
          width: "500px",
          height: "auto",
          overflow: "auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            top: "10px",
            right: "10px",
            color: "white",
          }}
        >
          <CloseIcon />
        </IconButton>
        <Typography
          variant="h6"
          align="center"
          sx={{ color: "white", fontWeight: "700", fontSize: "18px" }}
          gutterBottom
        >
          {isLogin ? "Login" : "Create an Account"}
        </Typography>
        <Box>
          <Box
            sx={{ display: "flex", flexDirection: "column" }}
            component="form"
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            {!isLogin ? (
              <>
                {" "}
                <label
                  style={{
                    marginTop: "1rem",
                    padding: "0 0 0.25rem",
                    color: "#B1BAD3",
                    fontSize: "14px",
                  }}
                >
                  Name
                </label>
                <input
                  style={{
                    padding: "0.5em",
                    background: "#0F212E",
                    color: "#B1BAD3",
                    border: "none",
                    borderRadius: "4px",
                  }}
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <label
                  style={{
                    marginTop: "1rem",
                    padding: "0 0 0.25rem",
                    color: "#B1BAD3",
                    fontSize: "14px",
                  }}
                >
                  Phone
                </label>
                <input
                  style={{
                    padding: "0.5em",
                    background: "#0F212E",
                    color: "#B1BAD3",
                    border: "none",
                    borderRadius: "4px",
                  }}
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                <label
                  style={{
                    marginTop: "1rem",
                    padding: "0 0 0.25rem",
                    color: "#B1BAD3",
                    fontSize: "14px",
                  }}
                >
                  Address
                </label>
                <input
                  style={{
                    padding: "0.5em",
                    background: "#0F212E",
                    color: "#B1BAD3",
                    border: "none",
                    borderRadius: "4px",
                  }}
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
                <label
                  style={{
                    marginTop: "1rem",
                    padding: "0 0 0.25rem",
                    color: "#B1BAD3",
                    fontSize: "14px",
                  }}
                >
                  Email
                </label>
                <input
                  style={{
                    padding: "0.5em",
                    background: "#0F212E",
                    color: "#B1BAD3",
                    border: "none",
                    borderRadius: "4px",
                  }}
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <label
                  style={{
                    marginTop: "1rem",
                    padding: "0 0 0.25rem",
                    color: "#B1BAD3",
                    fontSize: "14px",
                  }}
                >
                  Password
                </label>
              </>
            ) : (
              <>
                <label
                  style={{
                    marginTop: "1rem",
                    padding: "0 0 0.25rem",
                    color: "#B1BAD3",
                    fontSize: "14px",
                  }}
                >
                  Email
                </label>
                <input
                  style={{
                    padding: "0.5em",
                    background: "#0F212E",
                    color: "#B1BAD3",
                    border: "none",
                    borderRadius: "4px",
                  }}
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <label
                  style={{
                    marginTop: "1rem",
                    padding: "0 0 0.25rem",
                    color: "#B1BAD3",
                    fontSize: "14px",
                  }}
                >
                  Password
                </label>
              </>
            )}

            <input
              style={{
                padding: "0.5em",
                background: "#0F212E",
                color: "#B1BAD3",
                border: "none",
                borderRadius: "4px",
              }}
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
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
        </Box>
        <Typography
          variant="body1"
          align="center"
          sx={{ mt: 2, color: "#B1BAD3" }}
        >
          {isLogin ? (
            <>
              Don't have an account?{" "}
              <Link
                href="#"
                onClick={toggleForm}
                sx={{ color: "white", textDecoration: "none" }}
              >
                Sign Up here
              </Link>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <Link
                href="#"
                onClick={toggleForm}
                sx={{ color: "white", textDecoration: "none" }}
              >
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
