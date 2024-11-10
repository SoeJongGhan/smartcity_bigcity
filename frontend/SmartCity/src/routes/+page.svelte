<script>
    import { base } from '$app/paths';
    import Header from "../components/Header/Header.svelte";
    import InfoCards from "../components/Cards/InfoCards.svelte";
    import Slider from "../components/Slider/Slider.svelte";
    import arrow from '../lib/imgs/arrow.png';
    import card1 from '../lib/imgs/cards/card1.png';
    import card2 from '../lib/imgs/cards/card2.png';
    import card3 from '../lib/imgs/cards/card3.png';
    import card4 from '../lib/imgs/cards/card4.png';
    import CelebrateCards from "../components/Cards/CelebrateCards.svelte";
    import Appleas from "../components/Appleas/Appleas.svelte";
    import Footer from "../components/Footer/Footer.svelte";
    export const prerender = true;
</script>

<div class="container">
    <div class="bg-img">
        <Header/>
        <Slider/>
    </div>

    <div class="main-section-1">
        <div class="up-section">
            <div class="left">
                <h2 class="write-us">Напишите нам</h2>
                <div class="border"></div>
            </div>
            <div class="check">
                <div class="check-h2">Посмотреть все</div>
                <img src={arrow} alt="" class="check-arrow">
            </div>
        </div>
        <div class="card-section">
            <InfoCards name='ЖКХ' card_img={`${card1}`} descr="Отвечает за состояние городской инфраструктуры и сферы жилищно-коммунальных услуг, отвечает заместитель директора Абылхатов Б.Б., адрес: улица птушкина, район колотушкина"/>
            <InfoCards name='Транспортный отдел' card_img={`${card2}`} descr="Всё, что связано с транспортом и дорогами. По поводу состояния пешеходной, вело-, мото- и автотранспортной инфраструктуры, пишите в этот чат, отвечает заместитель директора Гайсагалиева Б.Б."/>
        </div>
    </div>
    <div class="main-section-2">
        <div class="up-section">
            <div class="left">
                <h2 class="write-us">Городские события</h2>
                <div class="border"></div>
            </div>
            <div class="check">
                <a href='/news' style="text-decoration: none;"><div class="check-h2">Посмотреть все</div></a>
                <a href="/news"><img src={arrow} alt="" class="check-arrow"></a>
            </div>
        </div>
        <div class="card-section">
            <CelebrateCards name='Фестиваль цветов' card_img={`${card3}`} descr="Праздник актюбинских цветов! Наши садоводы покажут свои лучшие художественные творения. Насладитесь этим праздиком природы. Вход свободный" address='Проспект Абая'/>
            <CelebrateCards name='Чета еще' card_img={`${card4}`} descr="Локальные и республиканские исполнители будут ждать вас на фестивале музыки перед Триатлон парком. Живой звук, декорации, и, конечно, музыка. Вход свободный." address='Площадь Независимости'/>
        </div>
    </div>

    <div class="appleas">
        <div class="appleas-top">
            <h2 class="appleas-title">Обращения</h2>
            <div class="border" style="margin-bottom: 10px;"></div>
        </div>
        <div class="appleas-str">
            <Appleas title='one' path='{base}/'/>
            <Appleas title='two' path='{base}/'/>
            <Appleas title='three' path='{base}/'/>
            <Appleas title='two' path='{base}/'/>
            <Appleas title='asdasdasdasdasdasdasdasdasdasdadasdasdasd' path='{base}/'/>
        </div>
    </div>
   <Footer/>
</div>

<style>
    .appleas {
        padding: 30px;
        width: 400px;
        height: auto;
        background: #fff;
        position: absolute;
        top: 25%;
        left: 73%;
        box-shadow: 5px 4px 5px rgb(102, 102, 102);
    }

    .appleas-str {
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

    .appleas-title {
        margin-bottom: 0;
    }

    * {
        font-family: "Montserrat", sans-serif;
    }

    .card-section {
        display: flex;
    }
    
    .main-section-1 {
        margin-top: 20vh;
        width: 60%;
        margin-left: 7vw;
    }

    .main-section-2 {
        margin-top: 10vh;
        width: 60%;
        margin-left: 7vw;
    }

    .up-section {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .border {
        height: 0.5vh;
        width: 4vw;
        background: #761596;
        margin: 0;
    }

    .check {
        cursor: pointer;
        display: flex;
        align-items: center;
    }

    .check-arrow {
        margin-left: 20px;
    }

    .check-h2 {
        font-size: 2vh;
        color: #761596;
        margin-bottom: 0;
        font-weight: 600;
    }

    .write-us {
        font-size: 4vh;
        margin-bottom: 0;
    }

    .container {
        display: flex;
        flex-direction: column;
        position: relative;
        width: auto;
        overflow: hidden;
        height: auto;
        background: rgb(219,226,245); 
        background: -moz-linear-gradient(90deg, rgba(219,226,245,1) 10%, rgba(255,255,255,1) 90%); 
    }

    .bg-img {
        height: 90vh;
        width: 100vw;
        background-image: url('../lib/imgs/bg-img.jpg');
        object-fit: contain; /* Сохраняем пропорции изображения, заполняя контейнер */
        background-size: cover;
    }
</style>