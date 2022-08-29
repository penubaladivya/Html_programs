function validateform(){
  console.log('data')
  var name = document.myForm.name.value
  var password = document.myForm.password.value
  var comparePwd = document.myForm.passwordCompare.value
  var email = document.myForm.email.value
  var age = document.myForm.age.value
  let acctNumber = document.myForm.acctnumber.value

  let validationobj =[
    {age :{min:21,max:60}},
    {email : 'pavan@csg.com'},
    {pwdLength:6}
  ]
  console.log(validationobj[0].max)

  if(name==null || name==''){
    alert('name cannot be blank')
    return false
  }else if(comparePwd!==password){
    alert('passwords are not same')
    return false
  }
  else if(email!==validationobj[1].email){
    alert('not a valid user,enter valid email')
    return false
  }else if(age>validationobj[0].age.max){
    alert('age is not in limit')
    return false
  }else if(acctNumber!=="154301503294"){
    alert('account number is not valid')
    return false
  }else{
    return true//succes case
  }
}