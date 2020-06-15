<?php	
	if(empty($_POST['name']) && strlen($_POST['name']) == 0 || empty($_POST['email']) && strlen($_POST['email']) == 0 || empty($_POST['input_504']) && strlen($_POST['input_504']) == 0 || empty($_POST['message']) && strlen($_POST['message']) == 0)
	{
		return false;
	}
	
	$name = $_POST['name'];
	$email = $_POST['email'];
	$input_504 = $_POST['input_504'];
	$message = $_POST['message'];
	
	$to = 'contact@lachouetteagence.com'; 


	$email_subject = "Message de votre site web - La chouette agence";
	$email_body = "Vous avez reçu un nouveau message. \n\n"."Nom : $name \nMail : $email \n\nComment ont-ils entendu parler de vous :\n $input_504 \n\nMessage: \n$message \n";
	$headers = "MIME-Version: 1.0\r\nContent-type: text/plain; charset=UTF-8\r\n";	
	$headers .= "De : contact@lachouetteagence.com\n";
	$headers .= "Répondre à : $email";	
	
	mail($to,$email_subject,$email_body,$headers);
	return true;			
?>