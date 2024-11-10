<script>
    import arrow_black from '../../lib/imgs/chevron.png'

    export let title;
    export let path;
</script>

<div class="applea">
    <h3 class="title">{title}</h3>
    <a href={path}>
        <img src={arrow_black} alt="">
    </a>
</div>

<style>
    * {
        font-family: "Montserrat", sans-serif;
    }

    img {
        width: 30px;
        height: 30px;
    }

    .applea {
        box-shadow: 5px 4px 5px rgb(102, 102, 102);
        display: flex;
        justify-content: space-between;
        width: 370px;
        height: 20px;
        padding: 20px;
        margin-top: 3vh;
        align-items: center;
    }

    .title {
        overflow: hidden;
        width: 50%;
        text-overflow: ellipsis;
    }
</style>