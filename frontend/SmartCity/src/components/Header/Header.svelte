<script>
    import { base } from '$app/paths';
    import logo from '../../lib/imgs/logo.png';   
    import Modal from './Modal.svelte';

    let isOpenModal = false;

    function openModal() {
        isOpenModal = true;
    }

    function closeModal() {
        isOpenModal = false;
    }
</script>

<header>
    <div class="logo">
        <img src={logo} alt="logo" class="logo-img">
    </div>
    <div class="nav">
        <a href="https://govtechbot.up.railway.app/" class="header-link">Чат с ИИ</a>
        <a href="{base}/news" class="header-link">Новости</a>
        <a href="{base}/" class="header-link">Карта событий</a>
        <p class="header-link" on:click|preventDefault={openModal} style="cursor: pointer;">Обращение</p>
        <Modal isOpenModal={isOpenModal} on:closeModal={closeModal} />
        <a href="{base}/reg" class="header-link">Вход/Регистрация</a>
        <select name="lang" id="lang">
            <option value="ru">RU</option>
            <option value="eng">ENG</option>
        </select>
    </div>

</header>

<style>
    * {    
        font-family: "Montserrat", sans-serif;
    }

    header {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: auto;
        position: relative;
        height: 181px;
    }

    .header-link {
        color: #fff;
        margin: 20px;
        font-weight: bold;
        text-decoration: none;
        position: relative;
        display: inline-block; 
    }

    .logo-img {
        width: 150px;
        height: 150px;
    }

    a {
        color: #000;
        text-decoration: none;
    }

    select{
        border: none;
        position: relative;
        outline: none;
        padding: 5px;
        color: #fff;
        background: #4d4f54;
    }

    .header-link::after{
        content: ''; 
        position: absolute; 
        bottom: 0; 
        left: 0;
        width: 100%; 
        height: 2px; 
        background-color: #fff; 
        transform: scaleX(0);
        transform-origin: bottom left; 
        transition: transform 0.5s ease-in-out; 
    }

    .header-link:hover::after{
        transform: scaleX(1); 
    }
</style>