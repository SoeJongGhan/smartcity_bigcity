<script>
    import Footer from "../../components/Footer/Footer.svelte";
    import Header from "../../components/Header/Header.svelte";
    export const prerender = true;
</script>

<div class="container">
    <div class="bg">
        <Header/>    
        <form action="" class="loginbox">
            <h1>Sign In</h1>    
            <label>Username</label>
            <input type="text" placeholder="Enter Username"/>
            <label>Password</label>
            <input type="password" placeholder="Enter Password"/>
            <input type="submit" value="Sign In"/>
            <a href="#">Forgot Password?</a>
        </form>
    </div>
    <Footer/>
</div>

<style>

    * {    
        font-family: "Montserrat", sans-serif;
    }

    .container {
        width: 100%;
        background: rgb(219,226,245); 
        background: -moz-linear-gradient(90deg, rgba(219,226,245,1) 10%, rgba(255,255,255,1) 90%); 
    }


    .bg { 
        position: relative;
        z-index: 123123;
        overflow: hidden;  
        width: 99vw;
        background-image: url('../../lib/imgs/bg-img.jpg');
        object-fit: contain; 
        background-size: cover;
    }

    .loginbox{
        padding: 20px;
        width: 300px;
        height: 380px;
        background: #1c2833;
        color: white;
        margin: 20vh auto;
        border-radius: 10px;
    }

    h1{
        text-align: center;
        margin-top: 50px;
    }
    label{
        font-size: 18px;
        display: block;
        margin-left: 20px;
    }
    input{
        width: 80%;
        margin: 0 0 20px 20px;
    }
    input[type="text"],input[type="password"]{
        border: none;
        background: transparent;
        border-bottom: 1px solid #fff;
        height: 40px;
        outline: none;
        color: white;
        font-size: 16px;
    }
    input[type="submit"]{
        border: none;
        outline: none;
        height: 40px;
        border-radius: 20px;
        background: #fb2525;
        color: white;
        font-size: 20px;
        cursor: pointer;
    }
    a{
        text-decoration: none;
        color: white;
        margin-left: 30%;
    }
</style>