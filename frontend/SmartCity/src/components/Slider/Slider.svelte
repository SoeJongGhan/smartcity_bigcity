<script>
    import slider1 from "../../lib/imgs/slider/slider1.jpg";
    import slider2 from "../../lib/imgs/slider/slider2.jpg"
    import slider3 from "../../lib/imgs/slider/slider3.jpg"
    import slider4 from "../../lib/imgs/slider/slider4.jpg"
    import right from '../../lib/imgs/right.png';
    let slideId = 0;  

    const images = [
        slider1,
        slider2,
        slider3,
        slider4
    ];

    const headings = [
        "Актюбинская область занимает лидирующие позиции по строительству новых школ",
        "Актобе очищают от снега в режиме 24/7",
        "Уважаемые участники дорожного движения!",
        "Радостное сообщение для жителей жилого массива Сұлутөр (Жаңақоныс-3):"
    ]

    const descr = [
        "В Актюбинском регионе ведется интенсивная работа по решению проблем дефицита учебных заведений и аварийных школ и снижению количества трехсменных школ.",
        "В регионе вторые сутки бушует метель. Коммунальные службы перешли на круглосуточный режим работы. Очищают город от выпавших осадков в две смены.",
        "Водители, будьте внимательны! Остановитесь перед пешеходным переходом и пропустите пешеходов, особенно в зоне действия светофора. Пешеходы, переходите дорогу только на зеленый сигнал светофора! Соблюдайте правила дорожного движения и будьте осторожны на дорогах. Спасибо за ваше внимание!",
        "С 9 ноября в Сұлутөр начнет курсировать общественный транспорт! Схема движения маршрута №45 будет продлена. Теперь начальной и конечными остановками данного маршрута станут остановки «Жилгородок» и «жилой массив Сұлутөр».",

    ]  

    const slideLeft = () => {
        if(slideId > 0) {
            slideId--
        } else {
            slideId = images.length - 1
        }
    }

    const slideRight = () => {
        if(slideId < images.length - 1) {
            slideId++
        } else {
            slideId = 0
        }
    }
</script>

<div class="slider">
    <img src={right} alt="" class="left" on:click={slideLeft}>
    <img src={right} alt="" class="right" on:click={slideRight}>
    <div class="slider-item">
        <div class="slider-title">
            <h2 class="title-text">Новости города</h2>
            <div class="border"></div>
        </div>
        <div class="slider-images">
            <img src={images[slideId]} alt="" class="slider-image">
        </div>
        <div class="slider-text">
            <h2 class="slider-suptitle">{headings[slideId]}</h2>
            <p class="slider-p">{descr[slideId]}</p>
        </div>
    </div>
</div>

<style>
    * {
        font-family: "Montserrat", sans-serif;
    }

    .slider-image {
        width: 350px;
        height: 200px;
    }

    .left {
        margin-top: 200px;
        position: absolute;
    }

    img:hover {
        cursor: pointer;
    }

    .right{
        margin-left: 520px;
        margin-top: 200px;
        transform: rotate(180deg);
        position: absolute;
    }

    .slider-item {
        margin: 0 5vw;
    }

    .slider {
        top: 55%;
        padding: 35px;
        position: relative;
        width: 640px;
        height: 422px;
        background-image: url('../../lib/imgs/slider-bg.png');
        object-fit: contain; 
        background-size: cover;
    }

    .slider-title {
        font-size: 1.5vh;
    }

    .slider-p {
        width: 400px;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .border {
        margin: 0;
        background-color: #761596;
        height: 3px;
        width: 50px;
    }

    .title-text {
        margin: 0;
    }

    .slider-images {
        margin: 3vh 0 0 0;
        transition: 0.3s;
    }

    .slider-text {
        width: 400px;
    }

    .slider-suptitle {
        width: 400px;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: 600;
        font-size: 1.7vh;
    }
</style>