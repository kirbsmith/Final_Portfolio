<?php
$name = $_POST['Name'];
$email = $_POST['Email'];
$subject = $_POST['subjectInput'];
$message = $_POST['Message'];
$formcontent="From: $name \n Message: $message";
$recipient = "kirby@kirbysmith.me";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
readfile("contactReceived.html");
?>
