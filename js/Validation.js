function validateform(){  
    var fname=document.myform.fname.value;  
    var lname=document.myform.lname.value;  

    if (fname==null || fname==""){  
      alert("first Name can't be blank");  
      return false;  
    }else if(lname==null || lname==""){  
      alert("Last Name Cant be Blnk.");  
      return false;  
      }  
    }  