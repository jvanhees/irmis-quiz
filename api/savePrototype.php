<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
require_once('connect.php');

if(!isset($_POST) || !isset($_POST['sessionId']) || $_POST['sessionId'] == ''){
	http_response_code('400');
	$response['message'] = 'No valid session id given.';
	die(json_encode($response));
}

$sessionId = $db->escape_string($_POST['sessionId']);

$questionQuery = '';
if(isset($_POST['questions'])){
	$questions = json_decode($_POST['questions']);
	if(!empty($questions)){
		foreach($questions as $key => $value){
			$questionQuery .= ', `prototype_'.$db->escape_string($key).'` = "'.$db->escape_string($value).'" ';
	 	}
	}
}

$sql = 'UPDATE `sessions` SET `endtime` = NOW() '.$questionQuery.' WHERE `id` = "'.$sessionId.'"';

if(!$result = $db->query($sql)){
	http_response_code('500');
    $response['message'] = 'There was an error running the query [' . $db->error . ']';
} else {
	http_response_code('200');
	$response['message'] = $sessionId;
}

header('Content-Type: application/json');
echo json_encode($response);