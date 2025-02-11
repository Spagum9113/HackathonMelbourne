import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        // Parse the request body to get the form data
        const { name, email, message } = await req.json();

        // Configure the transporter using Gmail
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER, // Your Gmail address
                pass: process.env.EMAIL_PASS, // Your Gmail App Password
            },
        });

        // Set up the email options
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.RECEIVER_EMAIL,
            subject: "New Message from Your Website",
            text: `
        You have received a new message from your website:
        
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
        };

        // Send the email
        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { message: "Registration successful and email sent." },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json(
            { error: "Error processing registration" },
            { status: 500 }
        );
    }
}
