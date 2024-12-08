<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'mail/src/Exception.php';
require 'mail/src/PHPMailer.php';
require 'mail/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = $_POST['email']; // Brugerens email
    $subject = "SMOVS booking";
    $message = "
<!DOCTYPE html>
<html lang='da'>
<head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>Booking Confirmation</title>
    <style>
        :root {
            --varm-vild: #F28608;
            --varm-mild: #FECC45;
            --pink-pift: #EF6BB4;
            --rolig-gron: #088371;
            --gang-gron: #94D539;
            --spansk-rod: #F6514D;
            --sydens-sol: #FBEB22;
            --smovse-turkis: #58DDDC;
            --lys-turkis: #a9fffe;
            --baggrund-farve: #FFFCEB;
            --tekst-farve: #173e45;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            background-color: #fff;
            color: var(--tekst-farve);
        }

        .email-container {
            max-width: 76%;
            margin: 20px auto;
            background-color: var(--baggrund-farve);
            border: 1px solid var(--smovse-turkis);
            border-radius: 5px;
            overflow: hidden;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .email-header {
            background-color: #000;
            color: white;
            text-align: center;
            padding: 20px;
            position: relative;
        }

        .email-header::before {
            content: '';
            display: block;
            height: 10px;
            background-color: #e63946;
            /* Red ribbon color */
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
        }

        .email-header h1 {
            margin: 0;
            font-size: 24px;
            letter-spacing: 1px;
        }

        .email-body {
            padding: 20px;
        }

        .email-body p {
            line-height: 1.6;
        }

        .email-body h2 {
            color: #e63946;
            /* Highlighted red color */
        }

        .email-footer {
            background-color: #f3f3f3;
            text-align: center;
            padding: 15px;
            font-size: 14px;
            color: #555;
        }

        .email-footer a {
            color: #e63946;
            text-decoration: none;
        }
    </style>
</head>
<body>
    <div class='email-container'>
        <div class='email-header'>
            <h1>DIN BOOKINGBEKRÆFTELSE</h1>
        </div>
        <div class='email-body'>
            <h1>Kære $name,</h1>
            
            <p>Tak for din booking for $guests personer hos SMOVS</p>
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
            <br>
            <p>Mvh.</p>
            <p>Fuld SMOVS Aarhus,</p>
            <p>Helle Virkners Plads 5</p>
            <p>8000 Aarhus</p> 
            <p>Telefon: <a href='tel:+4512345678'>+45 12 34 56 78</a>.  /  <a href='mailto:smovs@mdamsgaard.dk'>smovs@mdamsgaard.dk</a>.</p>
        </div>
    </div>
</body>
</html>
";

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
        $mail->CharSet = 'UTF-8'; // Sets the character encoding to UTF-8
        $mail->Encoding = 'base64'; // Ensures proper encoding for special characters
        $mail->Port = 587;

        // Set the sender and recipient
        $mail->setFrom('smovs@mdamsgaard.dk', 'SMOVS'); // From address
        $mail->addAddress($to); // Recipient's email address

        // Content settings
        $mail->isHTML(true); // Plain text email
        $mail->Body = file_get_contents('email_template.html');
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