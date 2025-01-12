<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'mail/src/Exception.php';
require 'mail/src/PHPMailer.php';
require 'mail/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Gather form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $date = $_POST['date'];
    $time = $_POST['time'];
    $guests = $_POST['guests'];

    // Subject for the email
    $subject = "SMOVS Booking";

    // Build the HTML email content
    $message = "
<!DOCTYPE html>
<html lang='da'>
<head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>Booking Konfirmation</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }

        .email-container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #FFFCEB;
            border: 1px solid #58DDDC;
            border-radius: 8px;
            box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px;
            overflow: hidden;
        }

        .email-header {
            background-color: #F28608;
            color: #173e45;
            text-align: center;
            padding: 20px;
            position: relative;
            display: flex;
            justify-content: space-between;
            align-items: center;

        }

        .email-header::before {
            content: '';
            display: block;
            height: 10px;
            background-color: #F28608;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
        }

        .email-header img {
            width: 20%;
            margin: 0 0;
        }

        .email-header h1 {
            margin: 0 auto;
            font-size: 24px;
        }

        .email-body {
            padding: 20px;
        }

        .email-body p {
            line-height: 1.6;
        }

        .email-body h2 {
            color: #e63946;
        }

        .email-footer {
            background-color: #F28608;
            text-align: center;
            padding: 15px;
            font-size: 14px;
            color: #173e45;
            font-weight: bold;
        }

        .email-footer a {
            color: #173e45;
            text-decoration: underline;
        }

        .email-footer a:hover {
            color: #58DDDC;
        }
    </style>
</head>
<body>
    <div class='email-container'>
        <div class='email-header'>
            <img src="img/logo-border_smovs.webp" alt="">
            <h1>DIN BOOKINGBEKRÆFTELSE</h1>
        </div>
        <div class='email-body'>
            <p>Kære $name,</p>
            <p>Tak for din booking for $guests personer hos SMOVS.</p>
            <p>Vi ser frem til at byde dig velkommen: <strong>$date, kl. $time</strong>.</p>
            <h3>Informationer om din booking:</h3>
            <ul>
                <li><strong>Navn:</strong> $name</li>
                <li><strong>E-mail:</strong> $email</li>
                <li><strong>Dato:</strong> $date</li>
                <li><strong>Tidspunkt:</strong> $time</li>
                <li><strong>Antal gæster:</strong> $guests</li>
            </ul>
        </div>
        <div class='email-footer'>
            <p>Tak fordi du har valgt SMOVS!</p>
            <p>Har du spørgsmål, kontakt os venligst på <a href='mailto:smovs@mdamsgaard.dk'>smovs@mdamsgaard.dk</a>.</p>
        </div>
    </div>
</body>
</html>
";

    // Create a new PHPMailer instance
    $mail = new PHPMailer(true);

    try {
        // Set SMTP settings
        $mail->isSMTP();
        $mail->Host = 'websmtp.simply.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'smovs@mdamsgaard.dk';
        $mail->Password = 'SmovS8000';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Encoding and charset
        $mail->CharSet = 'UTF-8'; // Support Danish characters
        $mail->Encoding = 'base64';

        // Set the sender and recipient
        $mail->setFrom('smovs@mdamsgaard.dk', 'SMOVS');
        $mail->addAddress($email);

        // Set email format to HTML and attach the message
        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body = $message;
        $mail->AltBody = "Kære $name,\n\nTak for din booking for $guests personer hos SMOVS.\n\nVi ser frem til at byde dig velkommen:\nDato: $date\nTidspunkt: $time\n\nInformationer om din booking:\n- Navn: $name\n- E-mail: $email\n- Dato: $date\n- Tidspunkt: $time\n- Antal gæster: $guests\n\nTak fordi du har valgt SMOVS!";

        // Send the email
        if ($mail->send()) {
            header("Location: booked.html");
            exit();
        } else {
            echo "Failed to send email.";
        }
    } catch (Exception $e) {
        echo "Email could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }

}
?>