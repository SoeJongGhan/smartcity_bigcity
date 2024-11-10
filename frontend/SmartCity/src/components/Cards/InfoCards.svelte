<script>
    import white_arrow from '../../lib/imgs/cards/white-arrow.png';

    export let name;
    export let card_img;
    export let descr;
</script>

<div class="card">
    <div class="card-img">
        <h2 class="img-name">{name}</h2>
        <img src={card_img} alt="" class="img">
    </div>
    <button class="card-btn"><img src={white_arrow} alt=""></button>
    <p class="card-descr">{descr}</p>
</div>

<style>
    * {
        font-family: "Montserrat", sans-serif;
    }
    
    .card {
        display: flex;
        flex-direction: column;
        box-shadow: 5px 4px 5px rgb(102, 102, 102);
        margin: 8vh 15vw 0 0;
        height: 50vh;
        width: 23vw;
        background-color: #fff;
        position: relative;
    }

    .img {
        width: 23vw;
    }

    .card-btn {
        position: absolute;
        top: 24.5vh;
        left: 18vw;
        border: none;
        background: #761596;
        width: 70px;
        height: 70px;
        border-radius: 50%;
        cursor: pointer;
    }

    .img-name {
        color: #fff;
        position: absolute;
        top: 22vh;
        left: 1vw;
    }

    .card-descr {
        margin-bottom: 0;
        font-weight: 600;
        padding: 30px;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>