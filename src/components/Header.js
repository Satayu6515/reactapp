// src/components/Header.js
import React from 'react';

function Header() {
    return (
        <header className="bg-yellow-200 shadow p-4 flex justify-between items-center">
            <h1 className="text-xl font-bold">กู้เงินดอทคอม</h1>
            <div className="flex flex-grow justify-center space-x-4">
                <button className="text-gray-700">หน้าแรก</button>
                <button className="text-gray-700">เกี่ยวกับ</button>
                <button className="text-gray-700">ติดต่อเรา</button>
            </div>
            <div>
                <button className="text-gray-700">Logout</button>
            </div>  
        </header>
    );
}

export default Header;
