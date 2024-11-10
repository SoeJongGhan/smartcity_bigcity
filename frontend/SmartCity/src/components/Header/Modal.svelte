<script>
    import { createEventDispatcher } from 'svelte';
    import arrow from '../../lib/imgs/icons/arrow-right.png'
    const dispatch = createEventDispatcher();

    export let isOpenModal;

    function closeModal() {
        isOpenModal = false;
        dispatch('closeModal', { isOpenModal });
    }
</script>

<div id="background" style="--display: {isOpenModal ? 'block' : 'none'};" on:click={closeModal}></div>


<div id="modal" style="--display: {isOpenModal ? 'block' : 'none'};">
   <div class="content">
    <div class="header">
        <h2 class="header-title">Оставить обращение</h2>
        <div class="rand">
        <p class="header-suptitle">Тут вы можете оставить публичное обращение, после модерации оно будет опубликовано. <br/>
            Его статус вы сможете увидеть на главной странице и страницах обращений </p>
            <button class="submit" on:click|preventDefault={closeModal}>Отправить обращение <img src={arrow} alt="" style="margin-left: 0.7vw;"></button>
        </div>
    </div>
    </div>
    <div class="forms">
        <form action="post" class="form1">
            <div class="inp-name">
                <p class="name">Введите имя</p>
                <input type="text" class="input-name" placeholder="Введите имя">
            </div>
            <div class="inp-trubl">
                <p class="trubl">Укажите тип проблемы</p>
                <input type="text" class="input-trubl" placeholder="Введите проблему">
            </div>
            <div class="inp-iin">
                <p class="iin">Введите ИИН</p>
                <input type="text" class="input-iin" placeholder="Введите иин">
            </div>
            <div class="inp-zag">
                <p class="zag">Заголовок обращения</p>
                <input type="text" class="input-zag" placeholder="Заголовок обращения">
            </div>
        </form>
        <form action="post" class="form2">
            <div class="inp-surname">
                <p class="name">Введите фамилию</p>
                <input type="text" class="input-surname" placeholder="Введите фамилию">
            </div>
            <div class="inp-trubl">
                <p class="trubl">Укажите район города</p>
                <input type="text" class="input-trubl" placeholder="Укажите район города">
            </div>
            <div class="inp-number">
                <p class="number">Введите номер телефона</p>
                <input type="text" class="input-number" placeholder="Введите номер">
            </div>
            <div class="inp-text">
                <p class="text">Текст обращения</p>
                <textarea name="" id="" class="input-text"></textarea>
            </div>
        </form>
   </div>
</div>

<style>
    .input-text {
        margin-top: 1vh;
        width: 20vw;
        height: 4vh;
    }
    
    .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    input{
        border: none;
        width: 20.3vw;
        border-bottom: 1px dashed rgb(179, 177, 177);
        outline: none;
        font-size: 1.3vh;
    }

    form {
        font-size: 1.5vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
        border: 1px dashed grey;
        width: 20vw;
        height: 29vh;
    }

    .forms {
        margin-top: 5vh;
        display: flex;
        justify-content: space-around;
    }

    * {    
        font-family: "Montserrat", sans-serif;
    }

    .rand {
        position: relative;
        display: flex;
        justify-content: space-between;
    }

    .submit {
        cursor: pointer;
        margin-top: 4vh;
        border: none;
        border-radius: 10px;
        height: 40px;
        padding: 5px;
        background: #761596;
        color: #fff;
        display: flex;
        align-items: center;
    }
    
    .header-title{
        font-weight: bold;
        font-size: 4vh;
        margin-bottom: 0;
        margin-left: 2vw;
    }

    .header-suptitle {
        color: black;
        margin-left: 2vw;
    }
    
    .header {
        width: 80%;
        background: #d1d1d1;
        height: 20%;
        border-radius: 30px;
        padding: 10px;
    }

    #background {
        display: var(--display);
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
    }

    #modal {
        border-radius: 30px;
        padding: 30px;
        display: var(--display);
        position: fixed;
        height: 60vh;
        width: 60vw;
        z-index: 2;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #fff;
        filter: drop-shadow(0 0 20px #333);
    }
</style>