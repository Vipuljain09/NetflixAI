export const checkValidators =(email,password)=>{
    const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password);
    if(!isValidEmail)return "Invalid Email";
    if(!isPassword)return "Invalid Password";
    return null;
}