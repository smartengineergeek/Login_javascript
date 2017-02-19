function validate()
{ 
   if( document.log.username.value == "ram" & document.log.pwd.value == "shyam")
   {
     document.log.name.focus() ;
     return true;
   }
 //  else{   alert("PLEASE ENTER CORRECT USERID AND PASSWORD");}
  
      return( false);
}
function fill()
{ 
   if( document.log.username.value == "" )
   {
     alert( "Please provide your Name!" );
     document.log.username.focus();
     return false;
   }
   else if( document.log.pwd.value == "" )
   {
     alert( "Please provide your Password!" );
     document.log.pwd.focus() ;
     return false;
   }
    return( true );
}