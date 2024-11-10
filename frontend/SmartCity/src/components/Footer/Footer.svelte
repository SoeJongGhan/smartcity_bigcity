<script>
    import faceebook from '../../lib/imgs/icons/FacebookLogo.png';
    import insta from '../../lib/imgs/icons/InstagramLogo.png';
    import twitter from '../../lib/imgs/icons/TwitterLogo.png';
    import youtube from '../../lib/imgs/icons/YoutubeLogo.png';
    import logo from '../../lib/imgs/logo.png';
    import map from '../../lib/imgs/cards/map.png';
    import phone from '../../lib/imgs/icons/phone.png';
    import envelope from '../../lib/imgs/icons/envelope.png';
</script>

<div class="footer">
    <div class="footer-logo">
        <img src={logo} alt="" class="footer-logo-img">
        <p class="place">Город: Актобе</p>
        <p class="akim">Аким: БЕКЕТ АЗАМАТ БАУЫРЖАНУЛЫ</p>
        <div class="link-icons">
            <a href="/">
                <img src={faceebook} alt="">
            </a>
            <a href="/">
                <img src={insta} alt="">
            </a>
            <a href="/">
                <img src={twitter} alt="">
            </a>
            <a href="/">
                <img src={youtube} alt="">
            </a>
        </div>
    </div>
    <div class="footer-links">
        <h2 class="links-title">Городской Акимат</h2>
        <div class="address">
            <img src={map} alt="" class="icons">
            <a href='https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%9A%D0%BE%D0%B7%D0%B5%D0%BD%D0%BA%D0%BE%D0%B2%D0%B0,+%D0%90%D0%BA%D1%82%D0%BE%D0%B1%D0%B5/@50.307242,57.1442447,17z/data=!3m1!4b1!4m6!3m5!1s0x41822220683a7a27:0xdf6f2a116df6d84f!8m2!3d50.3072386!4d57.1468196!16s%2Fg%2F11fmz1zz44?entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D' class="street">Улица Козенкова 34/2, <br/> Актобе</a>
        </div>
        <div class="phone">
            <img src={phone} alt="" class="icons">
            <a href="+77776416088" class="phone-number">8 (777) 641 6088</a>
        </div>
        <div class="mail">
            <img src={envelope} alt="" class="icons">
            <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" class="email">qwaq.dev@gmail.com</a>
        </div>
    </div>
    <div class="footer-user">
        <h2 class="user-title">Откройте сайт с телефона</h2>
    </div>
</div>

<style>
    * {
        font-family: "Montserrat", sans-serif;
    }
     .icons {
        margin-right: 20px;
    }

    a {
        text-decoration: none;
        color: #fff;
    }
    .address {
        margin: 30px 10px;
        display: flex;
        align-items: center;
    }

    .phone {
        margin: 30px 10px;
        display: flex;
        align-items: center;
    }

    .mail {
        margin: 30px 10px;
        display: flex;
        align-items: center;
    }

    .link-icons {
        margin-top: 5vh;
        display: flex;
        justify-content: space-around;
    }

    .footer-logo-img {
        margin-top: 10vh;
        width: 250px;
        height: 250px;
    }

    .footer-links {
        margin-top: 10vh;
    }

    .footer-user {
        margin-top: 10vh;
    }
    .place {
        font-weight: 600;
    }

    .akim {
        font-weight: 600;
    }

    .footer {
        display: flex;
        justify-content: space-around;
        color: #fff;
        margin-top: 10vh;
        height: 60vh;
        width: 100%;
        background-image: url('../../lib//imgs/footer-bg.png');     
        object-fit: contain;
        background-size: cover;
    }
</style>