<?php 
header('Content-Type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST, FILES");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: *");

$files = count($_FILES['files']['name']);

if ($files > 0){
    for ($i = 0; $i <$files; $i++){
        $tmpFilePath = $_FILES['files']['tmp-name'][$i];
        $newFileName = 'images/'.$_FILES['files']['name'][$i];
        copy($tmpFilePath, $newFileName);
    }
}




    


?>