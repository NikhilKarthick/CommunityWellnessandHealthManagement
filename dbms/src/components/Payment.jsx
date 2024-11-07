/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';

const Payment = () => {
    const [formData, setFormData] = useState({
        participant_id: '',
        program_id: '',
        payment_method: '',
        amount: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation for negative values
        if (
            formData.participant_id < 0 ||
            formData.program_id < 0 ||
            formData.amount < 0
        ) {
            alert("Participant ID, Program ID, and Amount cannot be negative.");
            return;
        }

        try {
            await axios.post('http://localhost:5001/api/payments/submit', formData);
            alert('Payment submitted successfully');
            setFormData({
                participant_id: '',
                program_id: '',
                payment_method: '',
                amount: '',
            });
        } catch (error) {
            console.error('Error submitting payment:', error);
            alert('Failed to submit payment');
        }
    };

    return (
        <div className="flex justify-center items-center min-h-[70vh] bg-green-50 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('picture.png')" }}>
            <form onSubmit={handleSubmit} className="flex flex-col w-80 p-6 bg-white rounded-lg shadow-md">
                <h2 className="mb-5 text-center text-gray-800 text-xl font-semibold">Submit Payment</h2>
                
                <input
                    type="number"
                    name="participant_id"
                    placeholder="Participant ID"
                    value={formData.participant_id}
                    onChange={handleChange}
                    min="0"
                    required
                    className="mb-3 px-3 py-2 text-base border border-gray-300 rounded focus:outline-none"
                />
                
                <input
                    type="number"
                    name="program_id"
                    placeholder="Program ID"
                    value={formData.program_id}
                    onChange={handleChange}
                    min="0"
                    required
                    className="mb-3 px-3 py-2 text-base border border-gray-300 rounded focus:outline-none"
                />
                
                <input
                    type="number"
                    name="amount"
                    placeholder="Amount"
                    value={formData.amount}
                    onChange={handleChange}
                    min="0"
                    required
                    className="mb-3 px-3 py-2 text-base border border-gray-300 rounded focus:outline-none"
                />

                <label className="text-sm text-gray-700">Select Payment Method</label>
                <select
                    name="payment_method"
                    value={formData.payment_method}
                    onChange={handleChange}
                    required
                    className="mb-4 px-3 py-2 text-base border border-gray-300 rounded focus:outline-none"
                >
                    <option value="">Choose Payment Method</option>
                    <option value="GPay">GPay</option>
                    <option value="PayPal">PayPal</option>
                    <option value="CreditCard">Credit Card</option>
                    <option value="DebitCard">Debit Card</option>
                    <option value="NetBanking">Net Banking</option>
                    <option value="EMI">EMI</option>
                </select>

                <button type="submit" className="mt-4 px-3 py-2 text-white bg-green-600 rounded hover:bg-green-700 transition-colors duration-300">
                    Submit Payment
                </button>
            </form>
        </div>
    );
};

export default Payment;
