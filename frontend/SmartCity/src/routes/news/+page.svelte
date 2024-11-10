<script>
    import Footer from "../../components/Footer/Footer.svelte";
    import Header from "../../components/Header/Header.svelte";
    import NewsCard from "../../components/Cards/NewsCard.svelte";
    import img1 from '../../lib/imgs/slider/slider1.jpg';
    import img2 from '../../lib/imgs/slider/slider2.jpg';
    import img3 from '../../lib/imgs/slider/slider3.jpg';
    import img4 from '../../lib/imgs/slider/slider4.jpg';
    import user1 from '../../lib/imgs/users/user1.png';
    import user2 from '../../lib/imgs/users/user2.png';
    import user3 from '../../lib/imgs/users/user3.png';

    export const prerender = true;
</script>



<div class="container">
    <div class="bg">
        <Header/>    
        <div class="news">
            <NewsCard user_img={user1} image={img1} user="Образование" descr="В Актюбинском регионе ведется интенсивная работа по решению проблем дефицита учебных заведений и аварийных школ и снижению количества трехсменных школ."/>
            <NewsCard user_img={user2} image={img2} user="Дороги" descr= "В регионе вторые сутки бушует метель. Коммунальные службы перешли на круглосуточный режим работы. Очищают город от выпавших осадков в две смены."/>
            <NewsCard user_img={user2} image={img3} user="Дороги" descr="Водители, будьте внимательны! Остановитесь перед пешеходным переходом и пропустите пешеходов, особенно в зоне действия светофора. Пешеходы, переходите дорогу только на зеленый сигнал светофора! Соблюдайте правила дорожного движения и будьте осторожны на дорогах. Спасибо за ваше внимание!"/>
            <NewsCard user_img={user3} image={img4} user="Трансопртная система" descr="С 9 ноября в Сұлутөр начнет курсировать общественный транспорт! Схема движения маршрута №45 будет продлена. Теперь начальной и конечными остановками данного маршрута станут остановки «Жилгородок» и «жилой массив Сұлутөр»."/>
        </div>
    </div>
    <Footer/>
</div>


<style>

    * {    
        font-family: "Montserrat", sans-serif;
    }


    .news {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    }

    .container {
        background: rgb(219,226,245); 
        background: -moz-linear-gradient(90deg, rgba(219,226,245,1) 10%, rgba(255,255,255,1) 90%); 
    }

    .bg { 
        overflow: hidden;  
        width: 99.1vw;
        background-image: url('../../lib/imgs/bg-img.jpg');
        object-fit: contain; /* Сохраняем пропорции изображения, заполняя контейнер */
        background-size: cover;
    }
</style>