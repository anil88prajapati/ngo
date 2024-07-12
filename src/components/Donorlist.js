import React from "react";
import Header from "./Header";
import Footer from "../global/Footer";
import { Divider } from '@mui/material';

const donorData = [
    { id: 1, name: "SEVA Advisory LLP" }, { id: 19, name: "Mr. Atul Kumar Pandey" },
    { id: 2, name: "SEVA Learning & Entrepreneurship LLP" }, { id: 20, name: "Mr. Satya Narayan Sen" },
    { id: 3, name: "Verity Software" }, { id: 21, name: "Mr. Harshvardhan Gupta" },
    { id: 4, name: "Mr. R.C. Masheshwari" }, { id: 22, name: "Mrs. Anjali Maheshwari" },
    { id: 5, name: "Anil Prajapati" }, { id: 23, name: "Mr. Sundhiraj Sharma" },
    { id: 6, name: "Savinder Tanwar" }, { id: 24, name: "Ms. Aditi Sharma" },
    { id: 7, name: "Satish Saini" }, { id: 25, name: "Ms. Annika Sharma" },
    { id: 8, name: "Mr. Avdhesh" }, { id: 26, name: "Mr. Rachit" },
    { id: 9, name: "Mr. Vinod Joshi" }, { id: 27, name: "Ms. Arunima" },
    { id: 10, name: "Mr. Pawan Kumar Khatana" }, { id: 28, name: "Ms. Aarti" },
    { id: 11, name: "Saraswati Thapa" }, { id: 29, name: "Mr. Rohan" },
    { id: 12, name: "Mr. Nitin Chandila" }, { id: 30, name: "Mr. Rao Vijay Singh" },
    { id: 13, name: "Mr. Ashish Lohiya" }, { id: 31, name: "Mr. Ravi Kadel" },
    { id: 14, name: "Mr. Rakesh Kumar" }, { id: 32, name: "Mrs. Kamlesh Pareek" },
    { id: 15, name: "Mr. Chander Mohan Singhal" }, { id: 33, name: "Ms. Alisha Jain" },
    { id: 16, name: "Mr. Vishnu Mondal" }, { id: 34, name: "Dr. (Ms.) Sumana Raychaudhuri" },
    { id: 17, name: "Mr. Sandeep Choudhary" }, { id: 35, name: "Ms. Shobha Yadav" },
    { id: 18, name: "Mr. Vriksh Dev Tiwari" }, { id: 36, name: "Mr. Upender Yadav" }
];

const Donorlist = () => {
    return (
        <>
            <Header />
            <div style={{ padding: "20px" }}>
                <h1 style={{ textAlign: 'center', fontFamily: 'initial', padding: 20, color: '#5b3c14' }}>
                    <Divider sx={{ border: '1px solid lightgray', width: '100%', m: '20px 0px' }} />
                    Donor List
                    <Divider sx={{ border: '1px solid lightgray', width: '100%', m: '20px 0px' }} />
                </h1>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <table style={{ borderCollapse: "collapse", width: "80%" }}>
                        <thead>
                            <tr>
                                <th style={{ border: "1px solid #ccc", padding: "10px" }}>Sl. No.</th>
                                <th style={{ border: "1px solid #ccc", padding: "10px" }}>Name</th>
                                <th style={{ border: "1px solid #ccc", padding: "10px" }}>Sl. No.</th>
                                <th style={{ border: "1px solid #ccc", padding: "10px" }}>Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {donorData.reduce((rows, key, index, array) => {
                                return index % 2 === 0
                                    ? [...rows, array.slice(index, index + 2)]
                                    : rows;
                            }, []).map((pair, index) => (
                                <tr key={index}>
                                    <td style={{ border: "1px solid #ccc", padding: "10px", textAlign: "center" }}>{pair[0].id}</td>
                                    <td style={{ border: "1px solid #ccc", padding: "10px" }}>{pair[0].name}</td>
                                    <td style={{ border: "1px solid #ccc", padding: "10px", textAlign: "center" }}>{pair[1]?.id}</td>
                                    <td style={{ border: "1px solid #ccc", padding: "10px" }}>{pair[1]?.name}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Donorlist;
