<script>
    import like from '../../lib/imgs/icons/default.png'
    import view from '../../lib/imgs/icons/eye.png'
    export let user_img;
    export let image;
    export let user;
    export let descr;

</script>


<div class="news-card">
    <div class="user">
        <img src={user_img} alt="" class="user-logo">
        <p class="user-name">{user}</p>
        <p class="hours">1h</p>
    </div>
    <div class="card-descr">
        <p class="descr">{descr}</p>
        <img src={image} alt="" class="descr-img">
    </div>
    <div class="like">
        <div class="likes">
            <img src={like} alt="" class="like-img">
            <p class="like-count">25</p>
        </div>
        <div class="views">
            <img src={view} alt="" class='views-img'>
            <p class="views-count">25</p>
        </div>
    </div>   
</div>

<style>

    * {    
        font-family: "Montserrat", sans-serif;
    }

    .news-card {
        margin: 20px;
        box-shadow: 5px 4px 5px rgb(102, 102, 102);
        position: relative;
        background: #fff;
        height: 20vh;
        width: 45%;
        padding: 20px;
        border-radius: 30px;
    }

    .user-logo {
        width: 30px;
        height: 30px;
        border-radius: 50%;
    }

    .user {
        display: flex;
        align-items: center;
    }

    .user-name {
        font-weight: 600;
        margin: 10px;
    }
    
    .hours {
        color: grey;
    }

    .card-descr {
        height: 8vh;
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    .descr {
        height: 10vh;
        width: 50%;
        font-weight: bold;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .descr-img{
        height: 14vh;
        width: 10vw;
    }

    .like {
        display: flex;
        align-items: center;
    }

    .likes {
        display: flex;
        align-items: center;
        margin: 30px;
    } 
    
    .like-img {
        width: 25px;
        height: 25px;
        margin: 10px;
    }
    
    .like-count {
        color: grey;
    }

    .views{
        display: flex;
        align-items: center;
    }

    .views-img {
        height: 25px;
        width: 25px;
        margin: 10px;
    }

    .views-count {
        color: grey;
    }
</style>