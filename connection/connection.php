<?php
 $conn = mysqli_connect('localhost','root','','bloodbank');
 if(!$conn){
     echo 'hello not connected';
 }
 else{
     echo 'hello you database is connected success fulll';
 }
 ?>

