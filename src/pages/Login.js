import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthProvider';
import axios from 'axios';

function Login() {
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false); // State สำหรับ loading
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // ตั้งค่า loading เป็น true

        try {
            const res = await axios.post('http://localhost:4000/login', {
                email: email,
                password: password
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            login(res.data.token);
            alert('เข้าสู่ระบบสำเร็จ!');
            navigate('/');
        } catch (err) {
            setLoading(false); // รีเซ็ต loading เมื่อเกิดข้อผิดพลาด
            setError('รหัสไม่ถูกต้อง โปรดลองใหม่'); // แสดงข้อความนี้เสมอ
            console.error(err.response ? err.response.data : err);
        }
    };

    return (
        <div 
            className="flex items-center justify-center min-h-screen" 
            style={{ 
                background: 'linear-gradient(to right, white, #FFEB8D)'
            }}
        >
            <div className="p-8 bg-white mt-6 rounded-lg shadow-lg max-w-md w-full relative">
                <img 
                    src="T.gif" 
                    alt="ยินดีต้อนรับ" 
                    className="w-full h-40 object-cover rounded-t-lg mb-4"
                />

                <form className="space-y-6" onSubmit={handleSubmit}>
                    <h2 className="text-3xl font-bold text-gray-800 text-center">ขอบคุณที่มาเว็บไซต์เรา</h2>

                    {error && (
                        <div role="alert" className="p-3 bg-red-100 text-red-600 rounded text-center">
                            {error}
                        </div>
                    )}
                    
                    <div>
                        <label htmlFor="email" className="block text-gray-700 font-medium">อีเมล</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full p-3 border border-gray-300 rounded mt-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-gray-700 font-medium">รหัสผ่าน</label>
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                className="w-full p-3 border border-gray-300 rounded mt-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <button
                                type="button"
                                className="absolute right-3 top-3 text-gray-600 focus:outline-none hover:text-blue-500"
                                onClick={() => setShowPassword(!showPassword)}
                                aria-label={showPassword ? 'Hide password' : 'Show password'}
                            >
                                {showPassword ? '.◕‿◕.' : '(ᴗ˳ᴗ)'}
                            </button>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className={`w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={loading}
                    >
                        {loading ? 'กำลังเข้าสู่ระบบ...' : 'เข้าสู่ระบบ'}
                    </button>
                </form>

                <p className="mt-6 text-center text-gray-600">
                    ยังไม่มีบัญชีใช่หรือไม่?{' '}
                    <Link to="/register" className="text-purple-700 hover:underline">ลงทะเบียน</Link>
                </p>
            </div>
        </div>
    );
}

export default Login;
