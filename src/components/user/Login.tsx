import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../slice/UserSlice";
import { toast } from "react-toastify";
import SignUp from "../user/Singup.tsx"; // Correct the import

interface LoginModalProps {
    onClose: () => void;
}

const Login: React.FC<LoginModalProps> = ({ onClose }) => {
    const [credentials, setCredentials] = useState({ username: "", password: "" });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const [isSignUpOpen, setIsSignUpOpen] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const resultAction = await dispatch(loginUser(credentials));

            if (loginUser.fulfilled.match(resultAction)) {
                toast.success("✅ Login successful!", { position: "top-right", autoClose: 3000 });
                onClose();
            } else {
                setError("Invalid username or password.");
                toast.error("❌ Invalid username or password", { position: "top-right", autoClose: 3000 });
            }
        } catch (error) {
            setError("Unexpected error occurred. Try again.");
            toast.error("⚠️ Unexpected error. Try again.", { position: "top-right", autoClose: 3000 });
        } finally {
            setLoading(false);
        }
    };

    const openSignUp = () => {
        setIsSignUpOpen(true);
    };

    const closeSignUp = () => {
        setIsSignUpOpen(false);
    };

    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md flex justify-center items-center z-50">
                <div className="bg-[#0a2540] p-8 rounded-2xl shadow-2xl w-full max-w-md relative text-white">
                    <button
                        onClick={onClose}
                        className="absolute top-3 right-3 text-gray-300 hover:text-white text-2xl font-bold"
                    >
                        &times;
                    </button>
                    <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>

                    {error && <p className="text-red-400 mb-4 text-center text-sm">{error}</p>}

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <input
                            type="text"
                            name="username"
                            value={credentials.username}
                            onChange={handleChange}
                            placeholder="Username"
                            required
                            className="w-full bg-[#163d63] border border-blue-500 rounded-lg p-3 text-white placeholder-gray-300"
                        />
                        <input
                            type="password"
                            name="password"
                            value={credentials.password}
                            onChange={handleChange}
                            placeholder="Password"
                            required
                            className="w-full bg-[#163d63] border border-blue-500 rounded-lg p-3 text-white placeholder-gray-300"
                        />
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold"
                        >
                            {loading ? "Logging in..." : "Login"}
                        </button>
                    </form>

                    <div className="mt-5 text-center">
                        <p className="text-sm text-gray-300 mb-2">Don't have an account?</p>
                        <button
                            onClick={openSignUp}
                            className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold"
                        >
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>

            {/* Sign Up Modal */}
            {isSignUpOpen && (
                <SignUp onClose={closeSignUp} />
            )}
        </>
    );
};

export default Login;
