"use server"

import nodemailer from "nodemailer"

interface EmailData {
  name: string
  email: string
  subject: string
  message: string
}

export async function sendContactEmail(data: EmailData) {
  const { name, email, subject, message } = data

  // Create a transporter using Gmail
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD, // This should be an app password, not your regular Gmail password
    },
  })

  // Email content
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER, // Send to yourself
    subject: `Portfolio Contact: ${subject}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <h3>Message:</h3>
      <p>${message.replace(/\n/g, "<br>")}</p>
    `,
    replyTo: email, // Allow direct reply to the sender
  }

  try {
    // Send email
    await transporter.sendMail(mailOptions)
    return { success: true, message: "Email sent successfully" }
  } catch (error) {
    console.error("Error sending email:", error)
    return { success: false, message: "Failed to send email" }
  }
}

