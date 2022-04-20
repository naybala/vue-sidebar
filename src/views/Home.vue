<template>
        <section class="home bd-grid" id="home" data-aos="fade-up">
                <div class="home__data">
                    <h1 class="home__title">Hello  <a href="https://earth.google.com/web/" target="_blink" class="home__title-color"><i class="fa-solid fa-earth-americas fa-spin" style="--fa-animation-duration: 15s;"></i></a>,
                    <br>I'am <span class="home__title-color"><typical class="typicalWrapper d-inline"
                                :steps="[``, 500, `Nay Ba La`, 5000]"
                                :loop="Infinity"></typical>
                            </span>
                            <br> 
                          Web Developer
                    </h1>

                    <p>Email : <a href="#">naybala.153808@gmail.com</a></p>
                    <p>Phone : <a href="#">+95 9 763684400</a></p>
                    <a href="#about" class="button text-decoration-none">Discover</a>
                     <div class="home__social mt-1">
                            <a
                                href="https://www.facebook.com/profile.php?id=100076412994170"
                                class="home__social-icon" target="_blink"><i class="fa-brands fa-facebook"></i></a>
                            <a href="https://www.instagram.com/naybala190510" class="home__social-icon icon" target="_blink"><i class="fa-brands fa-instagram-square"></i></a>
                            <a href="https://github.com/naybala"
                                class="home__social-icon"><i class="fa-brands fa-github" target="_blink"></i></a>
                     </div>
                </div>
                <div class="home__img">
                    <svg class="home__blob" viewBox="0 0 479 467"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink">
                            <mask id="mask0" mask-type="alpha">
                               <path d="M9.19024 145.964C34.0253 76.5814 114.865
                                54.7299 184.111 29.4823C245.804 6.98884 311.86
                                -14.9503 370.735 14.143C431.207 44.026 467.948
                                107.508 477.191 174.311C485.897 237.229 454.931
                                294.377 416.506 344.954C373.74 401.245 326.068
                                462.801 255.442 466.189C179.416 469.835 111.552
                                422.137 65.1576 361.805C17.4835 299.81 -17.1617
                                219.583 9.19024 145.964Z" />
                            </mask>
                            <g mask="url(#mask0)">
                                <path d="M9.19024 145.964C34.0253 76.5814
                                    114.865 54.7299 184.111 29.4823C245.804
                                    6.98884 311.86 -14.9503 370.735
                                    14.143C431.207 44.026 467.948 107.508
                                    477.191 174.311C485.897 237.229 454.931
                                    294.377 416.506 344.954C373.74 401.245
                                    326.068 462.801 255.442 466.189C179.416
                                    469.835 111.552 422.137 65.1576
                                    361.805C17.4835 299.81 -17.1617 219.583
                                    9.19024 145.964Z" />
                                    <image class="home__blob-img" x="-80" y="15"
                                        href="../assets/images/myProfile.png" />
                              </g>
                    </svg>
                </div>
                      
        </section>
</template>

<script>
import typical from 'vue-typical';
export default {
  data: function() {
    return {
      msg: 'vue typical'
    }
  },
  components: {
    typical
  },
}
</script>

<style scoped>
/*===== HOME =====*/
.bd-grid {
  max-width: 1024px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  
}

.home {
  row-gap: 1rem;
  margin-top: 1rem;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 0px;
}

.home__data {
  flex: 50%;
}

.home__img {
  flex: 50%;
  width: 700px;
  margin-bottom: 0;
}

.home__title {
  font-size: 2rem;
  margin-bottom: var(--mb-5);
}

.home__title-color {
  color: var(--primary);
}

.home__social {
  display: flex;
  flex-direction: row;
  margin-left: auto;
  margin-right: auto;
}

.home__social-icon {
  color: var(--primary);
  padding: 0.5rem;
  font-size: 1.5rem;
  transition: .3s;
  margin-left: .3rem;
}
.home__social-icon:hover {
   transform: translateY(-3px);
   box-shadow: 3px 3px 10px black;
   border-radius: 3rem;
   transition: .3s;
}


.home__blob {
  fill: var(--primary);
}

.home__blob-img {
  width: 600px;
}


/*BUTTONS*/
.button {
  display: inline-block;
  background-color: var(--primary);
  color: #fff;
  padding: .75rem 2.5rem;
  font-weight: var(--font-semi);
  border-radius: .5rem;
  transition: .3s;
}

.button:hover {
   transform: translateY(-3px);
   box-shadow: 3px 3px 10px black;
}

a{
  text-decoration: none;
  color: var(--primary);
}
@media (min-width: 290px) and (max-width: 349px){
    .home{
      margin-left: 4.8rem;
      display: flex;
      align-items: center;
      }
    .home__data {
      flex: 100%;
      }
    .home__img {
        flex: 100%;
        width: 50px;
      }
    .home__title {
      font-size: 1rem;
      margin-bottom: var(--mb-2);
    }
    p {
      font-size: 0.8rem;
    }
}

@media (min-width: 350px) and (max-width: 500px){
    .home{
      margin-left: 4.5rem;
      margin-top: 5rem;
      display: flex;
      align-items: center;
      }
    .home__data {
      flex: 100%;
      }
    .home__img {
        flex: 100%;
        width: 100px;
      }
    .home__title {
      font-size: 1rem;
      margin-bottom: var(--mb-2);
    }
    p {
      font-size: 0.8rem;
    }
}
@media (min-width: 500px) and (max-width: 992px) {
    .home{
     margin-top: 2rem;
     row-gap: 0rem;
     display: flex;
     align-items: center;
    }
    .home__img {
      width: 376px;
      flex: 100%;
    }
} 

</style>