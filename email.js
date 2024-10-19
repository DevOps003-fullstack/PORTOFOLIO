const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
    const { name, email, message } = JSON.parse(event.body);

    const transporter = nodemailer.createTransport({
        service: 'gmail', // Use your email service
        auth: {
            user: 'your-email@gmail.com', // Replace with your email
            pass: 'your-email-password', // Replace with your email password
        },
    });

    const mailOptions = {
        from: email,
        to: 'odekunleabiola2003@gmail.com', // Replace with your email
        subject: `Message from ${name}`,
        text: message,
    };

    try {
        await transporter.sendMail(mailOptions);
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Email sent successfully' }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.toString() }),
        };
    }
};

emailjs.send(
    
)