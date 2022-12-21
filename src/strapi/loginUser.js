// import axios from 'axios
async function LoginUser({email, password}){
            const response = await fetch('http://localhost:1337/api/auth/local/', {
                headers:{
                    'Content-Type' :'application/json',
                },
                body:JSON.stringify({
                    identifier:email,
                    password:password,
                }),
                method:'POST'
            })
            const data= await response.json();
            return data;
}

export default LoginUser;

