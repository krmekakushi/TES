<?php
  
/* Getting file name */
if($_FILES['file']['name']!=''){
$filename =explode ('.',$_FILES['file']['name']);
$ext = end($filename);
$name = rand(100,999).'.'.$ext;
/* Location */
$location = 'images/image.'.$ext;
$uploadOk = 1;
 }
 
 if($uploadOk == 0){
   echo 0;
}else{
   /* Upload file */
   if(move_uploaded_file($_FILES['file']['tmp_name'], $location)){
      echo $location;
   }else{
      echo 0;
   }
}
?>