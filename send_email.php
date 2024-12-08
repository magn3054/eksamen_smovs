<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = $_POST['email']; // Brugerens email
    $subject = "SMOVS booking information";
    $message = "Hello " . $_POST['name'] . ",\n\nVi glæder os til at se dig!";
    $from = "smovs@mdamsgaard.dk"; // Replace with your Simply.com email address

    // Headers
    $headers = "From: SMOVS <$from>\r\n";
    // $headers .= "Reply-To: $from\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        echo "Email sent successfully to $to!";
    } else {
        echo "Failed to send email. Please check your hosting configuration.";
    }
} else {
    echo "Invalid request method.";
}
?>
