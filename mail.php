<?php 

if (isset($_Post['submit'])) {
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $mailFrom = $_POST['mail'];
    $message = $_POST['message'];

    $mailTo = "dustin.miller@mscoding.org";
    $headers ="From: ".$mailFrom;
    $txt = "You have recieved an e-mail from ".$name.".\n\n.".$message;

    mail($mailTo, $subject, $txt, $headers) or die("Error!");
   
    echo'
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Contact form</title>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=Poppins&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <div class="container">
            <h1>Thank you for contacting me. I will get back to you as soon as possible!</h1>
            <p class="back">Go back <a href="index.html">home</a>.</p>
            
        </div>
    </body>
    </html>
    ';   
}

?>