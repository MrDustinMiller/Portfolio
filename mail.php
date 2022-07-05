<?php 

if (isset($_Post['submit'])) {
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $mailFrom = $_POST['mail'];
    $message = $_POST['message'];

    $mailTo = "dustin.miller@mscoding.org";
    $headers ="From: ".$mailFrom;
    $txt = "You have recieved an e-mail from ".$name.".\n\n.".$message;

    mail($mailTo, $subject, $txt, $headers) or die("");
    header("Location: index.html?mailsend"); exit;
}

?>