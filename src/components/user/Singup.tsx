import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveUser } from "../../slice/UserSlice";
// import loginVideo from '../../Assets/video/CarAnimation.mp4';

interface SignUpModalProps {
    onClose: () => void;
}

const SignUp: React.FC<SignUpModalProps> = ({ onClose }) => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        role: "",
        image: "",
    });
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value, type, files } = e.target as any;
        if (type === "file") {
            const file = files[0];
            setFormData({ ...formData, [name]: file });
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string);
            };
            if (file) {
                reader.readAsDataURL(file);
            }
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            if (formData.image) {
                const uploadedImageUrl = await uploadImageToServer(formData.image);
                formData.image = uploadedImageUrl;
            }

            const resultAction = await dispatch(saveUser(formData));

            if (saveUser.fulfilled.match(resultAction)) {
                alert("✅ Sign-up successful!");
                onClose(); // CLOSE SignUp Modal
            }
        } catch (error) {
            console.error("Sign-up error:", error);
            alert("❌ Error signing up, please try again.");
        } finally {
            setLoading(false);
        }
    };

    const uploadImageToServer = async (file: File) => {
        const dummyUrl = '/uploads/user-images/' + file.name;
        return dummyUrl;
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
            <div className="bg-blue-950 p-8 rounded-2xl shadow-2xl w-full max-w-md relative text-white">
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-white text-2xl"
                >
                    &times;
                </button>

                <h2 className="text-3xl font-bold mb-6 text-center">Sign Up</h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="Username"
                        required
                        className="w-full bg-[#163d63] border border-blue-500 rounded-lg p-3 text-white placeholder-gray-300"
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        required
                        className="w-full bg-[#163d63] border border-blue-500 rounded-lg p-3 text-white placeholder-gray-300"
                    />
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Password"
                        required
                        className="w-full bg-[#163d63] border border-blue-500 rounded-lg p-3 text-white placeholder-gray-300"
                    />

                    {/*<select*/}
                    {/*    name="role"*/}
                    {/*    value={formData.role}*/}
                    {/*    onChange={handleChange}*/}
                    {/*    required*/}
                    {/*    className="w-full bg-[#163d63] border border-blue-500 rounded-lg p-3 text-white"*/}
                    {/*>*/}
                    {/*    <option value="">Select Role</option>*/}
                    {/*    <option value="MANAGER">Manager</option>*/}
                    {/*    <option value="CASHIER">Cashier</option>*/}
                    {/*    <option value="ADMIN">Admin</option>*/}
                    {/*</select>*/}

                    {/*<input*/}
                    {/*    type="file"*/}
                    {/*    name="image"*/}
                    {/*    onChange={handleChange}*/}
                    {/*    className="w-full bg-[#163d63] border border-blue-500 rounded-lg p-3 text-white"*/}
                    {/*/>*/}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold"
                    >
                        {loading ? "Signing Up..." : "Sign Up"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
