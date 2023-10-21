<?php
$secretKey = "6LcWNnIoAAAAAE5IODrGLxJue9in4zY0MLN1gLUV";
$response = $_POST["g-recaptcha-response"];

$verify = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$secretKey&response=$response");
$responseData = json_decode($verify);

if ($responseData->success) {
    // CAPTCHA was successful, process the form submission
    // Perform your form handling here
} else {
    // CAPTCHA failed, display an error message
    echo "CAPTCHA verification failed. Please try again.";
}
?>