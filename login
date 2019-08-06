<?php

$con = mysqli_connect("localhost","root","","iposita");

  
session_start();
if(isset($_POST['login'])){
     
     $name = mysqli_real_escape_string($con, $_POST['name']);
    $pass = mysqli_real_escape_string($con, $_POST['password']);
    
               
    $sel_c = "select * from admins where password=? and name=? ";
     $statement= mysqli_stmt_init($con);
if (!mysqli_stmt_prepare($statement,$sel_c)) {
      # code...
    echo "oops something went wrong!";
  }else{
    mysqli_stmt_bind_param($statement,"ss", $pass, $name);
    mysqli_stmt_execute($statement);
   $run_c=mysqli_stmt_get_result($statement);

    $row = mysqli_fetch_array($run_c);
      $nm=$row['name'];
      $pss =$row['password'];
      
    

    $check_customer = mysqli_num_rows($run_c);
    
    if($check_customer==0){
      
 
      
   echo "failed";
   echo "<script>window.open('login.html','_self')</script>";
    }
    
   else{
    
    $_SESSION['key']=$pss;
 
     echo "success";
       
    echo "<script>window.open('admin/index.php','_self')</script>";
        
     
   }
  }


}



?>