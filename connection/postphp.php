<?php

  if(isset($_POST['insert_post'])){
      include_once('connection/connection.php');
    $title = $_POST['title'];
    $center = $_POST['center'];
	// $image = $_FILES['photos']['name'];
    
    $discription= $_POST['Description'];
      
      $sql = "INSERT INTO posts (title, center,Descriptiond) VALUES ('$title', '$center','$discription')";
  	// execute query
      mysqli_query($conn, $sql);
      if($sql){
        echo 'seccessfull';
    }else{
         echo 'failed';
      }

  
  }