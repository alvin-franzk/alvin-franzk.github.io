<?php
	error_reporting(E_ALL);
	ini_set('display_errors', 1);
	
	/*
		The Send Mail php Script for Contact Form
		Server-side data validation is also added for good data validation.
	*/
	
	$data['error'] = false;
	
	$name = $_POST['name'];
	$email = $_POST['email'];
	$phone = $_POST['phone'];
	$organization = $_POST['organization'];
	$message = $_POST['message'];
	
	$subject = "New Message from Portfolio Website";

	if( empty($name) ){
		$data['error'] = 'Please enter your name.';
	}else if(filter_var($email, FILTER_VALIDATE_EMAIL) == false){
		$data['error'] = 'Please enter a valid email address.';
	}else if( empty($message) ){
		$data['error'] = 'The message field is required!';
	}else if( empty($phone) ){
		$data['error'] = 'Please enter your phone number.';
	}else{
		
		$formcontent="From: $name\nPhone: $phone\nOrganization: $organization\nEmail: $email\nMessage: $message";
		
		
		//Place your Email Here
		$recipient = "alvinfranz815@gmail.com";
		
		$mailheader = "From: $email\r\n";
		$mailheader .= "Reply-To: $email\r\n";
		$mailheader .= "MIME-Version: 1.0\r\n";
		$mailheader .= "Content-Type: text/plain; charset=UTF-8\r\n";
		
		if( mail($recipient, $subject, $formcontent, $mailheader) == false ){
			$data['error'] = 'Sorry, an error occured!';
		}else{
			$data['error'] = false;
		}
	
	}
	
	echo json_encode($data);
	
?>