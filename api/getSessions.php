<?php
require_once('connect.php');

$sql = 'SELECT * FROM `sessions`';
$result = $db->query($sql);
if ($result->num_rows > 0) {
	// output data of each row
	$data = array();
    while($row = $result->fetch_assoc()) {
		$data[] = $row;
	}
}

function getLikert($var){
	switch($var) {
		case '0':
			return '++';
		break;
		case '1':
			return '+';
		break;
		case '2':
			return '0';
		break;
		case '3':
			return '-';
		break;
		case '4':
			return '--';
		break;
	}
}

function evenOdd($number){
	if($number % 2 == 0){
		return 'even';
	}
	return 'odd';
}
?>
<!DOCTYPE html>
<html>
<head>
	<title>IRMIS Results</title>
</head>
<body>
<h1>Results</h1>
<table>
	<thead>
		<tr>
			<td>ID</td>
			<td>Ip</td>
			<td>Start time</td>
			<td>End time</td>
			<td>Questions correct</td>
			<td>Questions wrong</td>
			<td>Feedback type</td>
		
			<td>Quiz Q1</td>
			<td>Quiz Q2</td>
			<td>Quiz Q3</td>
		
			<td>Prototype Q1</td>
			<td>Prototype Q2</td>
			<td>Prototype Q3</td>
		</tr>
	</thead>
	<tbody>
		<?php foreach($data as $key => $row){ ?>
			<tr class="<?=evenOdd($key)?>">
				<td><?=$row['id']?></td>
				<td><?=$row['ip']?></td>
				<td><?=$row['starttime']?></td>
				<td><?=$row['endtime']?></td>
				<td><?=$row['questions_correct']?></td>
				<td><?=$row['questions_wrong']?></td>
				<td><?=$row['feedback_type']?></td>
				
				<td><?=getLikert($row['quiz_q1'])?></td>
				<td><?=getLikert($row['quiz_q2'])?></td>
				<td><?=getLikert($row['quiz_q3'])?></td>
				
				<td><?=getLikert($row['prototype_q1'])?></td>
				<td><?=getLikert($row['prototype_q2'])?></td>
				<td><?=getLikert($row['prototype_q3'])?></td>
			</tr>
		<?php } ?>
	</tbody>
</table>
</body>
<style type="text/css" media="screen">
body {
	font-family: sans-serif;
	font-size: 12px;
}

table {
	width: 100%;
	border-collapse: collapse;
}
td {
	border: none;
	padding: 5px 5px;
}

thead {
	font-weight: bold;
}

.even {
	background-color: #EEE;
}
</style>
</html>