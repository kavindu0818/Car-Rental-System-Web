import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../slice/UserSlice";
import { toast } from "react-toastify";

interface LoginModalProps {
    onClose: () => void; // onClose function to close the modal after login
}

const Login: React.FC<LoginModalProps> = ({ onClose }) => {
    const [credentials, setCredentials] = useState({ username: "", password: "" });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    // Handle input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const resultAction = await dispatch(loginUser(credentials));

            // Check if login was successful
            if (loginUser.fulfilled.match(resultAction)) {
                toast.success("✅ Login successful!", {
                    position: "top-right",
                    autoClose: 3000,
                });

                // Close the modal after successful login
                onClose();
            } else {
                setError("Invalid username or password.");
                toast.error("❌ Invalid username or password", {
                    position: "top-right",
                    autoClose: 3000,
                });
            }
        } catch (error) {
            setError("Unexpected error occurred. Try again.");
            toast.error("⚠️ Unexpected error. Try again.", {
                position: "top-right",
                autoClose: 3000,
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-md flex justify-center items-center z-50 transition-all duration-300 ease-in-out">
            <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md relative animate-fadeInUp">
                <button
                    onClick={onClose} // Close the modal when clicking the close button
                    aria-label="Close Login Modal"
                    className="absolute top-3 right-3 text-gray-500 hover:text-black text-2xl font-bold"
                >
                    &times;
                </button>
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Login</h2>

                {error && <p className="text-red-500 mb-4 text-center text-sm">{error}</p>}

                <form onSubmit={handleSubmit} className="space-y-5">
                    <input
                        type="text"
                        name="username"
                        value={credentials.username}
                        onChange={handleChange}
                        placeholder="Username"
                        required
                        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="password"
                        name="password"
                        value={credentials.password}
                        onChange={handleChange}
                        placeholder="Password"
                        required
                        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors"
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
