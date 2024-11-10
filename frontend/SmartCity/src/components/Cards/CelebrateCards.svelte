<script>
    import white_arrow from '../../lib/imgs/cards/white-arrow.png';
    import map from '../../lib/imgs/cards/map.png';

    export let name;
    export let card_img;
    export let descr;
    export let address;
</script>

<div class="card">
    <div class="card-img">
        <h2 class="img-name">{name}</h2>
        <img src={card_img} alt="" class="img">
    </div>
    <button class="card-btn"><img src={white_arrow} alt=""></button>
    <p class="card-descr">{descr}</p>
    <div class="address">
        <img src={map} alt="" class="addr-img">
        <p class="addr-text">{address}</p>
    </div>
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
        height: 55vh;
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
        font-weight: 600;
        padding: 30px;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .addr-img {
        height: 22px;
        width: 22px;
    }

    .addr-text {
        font-size: 1.3vh;
        font-weight: 600;
    }

    .address {
        border: 1px solid grey;
        border-radius: 20px;
        width: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 2vw;
    }
</style>