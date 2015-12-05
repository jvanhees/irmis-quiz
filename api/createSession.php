<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
require_once('connect.php');

if(!isset($_POST['feedbackType']) || ($_POST['feedbackType'] != 'negative' && $_POST['feedbackType'] != 'positive')){
	http_response_code('400');
	$response['message'] = 'No valid feedback type given.';
	die(json_encode($response));
}


$ip = $db->escape_string($_SERVER['REMOTE_ADDR']);
$feedback_type = $db->escape_string($_POST['feedbackType']);

$sql = 'INSERT INTO `sessions` (`ip`, `starttime`, `feedback_type`)	VALUES ("'.$ip.'", NOW(), "'.$feedback_type.'")';

if(!$result = $db->query($sql)){
	http_response_code('500');
    $response['message'] = 'There was an error running the query [' . $db->error . ']';
} else {
	http_response_code('200');
	$response['message'] = $db->insert_id;
}

header('Content-Type: application/json');
echo json_encode($response);