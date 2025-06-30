const user = {
    name: 'John',
    isAdmin: true,
    isLoggedIn: false
}

const Conditional = () => {
    const{isAdmin} = user;

    return <div>{isAdmin&&<p>Hello admin</p>}</div>


    // return(
    //     <div>{user.isLoggedIn? <h1>Welcome Back</h1> : <p>Please Log in</p>}</div>
    // )

    // if(user.isLoggedIn){
    //     return  <p>Welcome back</p>;
    // } else{
    //     return <p>Please Log In</p>;
    // }
};

export default Conditional;
