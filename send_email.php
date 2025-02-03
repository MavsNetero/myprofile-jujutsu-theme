<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $full_name = htmlspecialchars($_POST['full_name']);
    $email = htmlspecialchars($_POST['email']);
    $mobile_number = htmlspecialchars($_POST['mobile_number']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);
    
    // Email details
    $to = "maverickdanielle@gmail.com";
    $subject = "Contact Form Submission: " . $subject;
    $message_body = "
    <h2>New Message from Contact Form</h2>
    <p><strong>Full Name:</strong> $full_name</p>
    <p><strong>Email:</strong> $email</p>
    <p><strong>Mobile Number:</strong> $mobile_number</p>
    <p><strong>Subject:</strong> $subject</p>
    <p><strong>Message:</strong></p>
    <p>$message</p>
    ";
    
    // Set headers
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8" . "\r\n";
    $headers .= "From: $email" . "\r\n";
    
    // Send email
    if (mail($to, $subject, $message_body, $headers)) {
        echo "<script>alert('Message sent successfully!'); window.location.href='index.html';</script>";
    } else {
        echo "<script>alert('Message failed to send. Please try again later.'); window.location.href='index.html';</script>";
    }
} else {
    echo "<script>alert('Invalid request.'); window.location.href='index.html';</script>";
}
?>
