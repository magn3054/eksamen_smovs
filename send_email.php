<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'mail/src/Exception.php';
require 'mail/src/PHPMailer.php';
require 'mail/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = $_POST['email']; // Brugerens email
    $subject = "SMOVS booking information";
    $message = "Hello " . $_POST['name'] . ",\n\nVi glæder os til at se dig!";

    // Create a new PHPMailer instance
    $mail = new PHPMailer(true);

    try {
        // Set SMTP as the sending method
        $mail->isSMTP();
        $mail->Host = 'websmtp.simply.com'; // Simply's SMTP server
        $mail->SMTPAuth = true;
        $mail->Username = 'smovs@mdamsgaard.dk'; // Replace with your Simply.com email
        $mail->Password = 'SmovS8000';    // Replace with your Simply.com email password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Set the sender and recipient
        $mail->setFrom('websmtp.simply.com', 'SMOVS'); // From address
        $mail->addAddress($to); // Recipient's email address

        // Content settings
        $mail->isHTML(false); // Plain text email
        $mail->Subject = $subject;
        $mail->Body = $message;

        // Send the email
        if ($mail->send()) {
            echo "Email sent successfully!";
        } else {
            echo "Failed to send email.";
        }
    } catch (Exception $e) {
        echo "Email could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}
?>