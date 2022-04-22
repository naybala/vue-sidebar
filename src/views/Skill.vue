<template>
	<main id="skill-page">
     <section class="skills section" id="skills">
		 <h2 class="skills__subtitle text-center">{{title}}</h2>
                <div class="skills__container bd-grid">
                       <div class="skills__info">
                                <p class="skills__text"></p>
                                <div class="skills__data">
                                    <div class="skills__names">
                                        <i class="fa-brands fa-html5  skills__icon"></i>
                                        <span class="skills__name">{{html}}</span>
                                    </div>
                                    <div class="skills__bar skills__html">
                                    </div>
                                </div>
                                <div class="skills__data">
                                    <div class="skills__names">
                                        <i class="fa-brands fa-css3  skills__icon"></i>
                                        <span class="skills__name">{{css}}</span>
                                    </div>
                                    <div class="skills__bar skills__css">
                                    </div>
                                </div>
                                <div class="skills__data">
                                    <div class="skills__names">
                                        <i class=" fab fa-bootstrap skills__icon"></i>
                                    <span class="skills__name">{{bootstrap}}</span>
                                </div>
                                <div class="skills__bar skills__ux">
                                </div>
                                </div>
                                <div class="skills__data">
                                    <div class="skills__names">
                                      <i class="fa-brands fa-js-square skills__icon"></i>
                                        <span class="skills__name">{{js}}</span>
                                    </div>
                                    <div class="skills__bar skills__js">
                                    </div>
                                </div>
                                <div class="skills__data">
                                    <div class="skills__names">
                                        <i class="fa-brands fa-vuejs skills__icon"></i>
                                        <span class="skills__name">{{vue}}</span>
                                    </div>
                                    <div class="skills__bar skills__js">
                                    </div>
                                </div>
                                <div class="skills__data">
                                    <div class="skills__names">
                                        <i class=" fab fa-php skills__icon"></i>
                                    <span class="skills__name">{{php}}</span>
                                </div>
                                <div class="skills__bar skills__ux">
                                </div>
                                </div>
                                <div class="skills__data">
                                    <div class="skills__names">
                                        <i class='fab fa-laravel
                                            skills__icon'></i>
                                        <span class="skills__name">{{laravel}}</span>
                                    </div>
                                    <div class="skills__bar skills__ux">
                                    </div>
                                </div>
                                <div class="skills__data">
                                    <div class="skills__names">
                                        <i class=' fas fa-database
                                            skills__icon'></i>
                                        <span class="skills__name">{{mysql}}</span>
                                    </div>
                                    <div class="skills__bar skills__ux">
                                    </div>
                                </div>      
                        </div>

                    <div class="skills__info__image">
                        <img src="../assets/images/myView.jpg" alt=""
                            class="skills__img img-fluid" id="galleryFour" @click="imageViewOne">
                            <div class="div" id="popup">
                                <img src="" alt="" id="selectedImage">
                            </div>
                    </div>
                </div>
        </section>
		</main>
</template>

<script>
export default {
    data(){
    return{
      title : "Professional Skills",
      html : "HTML",
      css : "CSS",
      js: "JavaScript",
      bootstrap:"Bootstrap",
      vue : "Vue Js",
      php : "Php",
      laravel:"Laravel",
      mysql:"MySQL"
    }
  },
   methods:{
  imageViewOne(){
      const popup = document.querySelector('#popup');
      const gallery = document.querySelector('#galleryFour');
      const selectedImage = document.querySelector('#selectedImage');
      selectedImage.src = gallery.src;
      popup.style.transform = `translateY(0%)`;
       popup.addEventListener('click', () => {
            popup.style.transform = `translateY(-100%)`;
            popup.src = '';
        })
   },
  
  }
}
</script>

<style scoped>
/* ===== SKILLS =====*/
.bd-grid {
  max-width: 1024px;
  display: grid;
  margin-left: auto;
  margin-right: auto;
}

.section {
  padding-bottom: 2rem;
}
  .skills__container {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1rem;
    align-items: center;
    text-align: initial;
  }

.skills__subtitle {
  margin-bottom: var(--mb-2);
}

.skills__text {
  margin-bottom: var(--mb-4);
}

.skills__data {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  font-weight: var(--font-semi);
  padding: .5rem 1rem;
  margin-bottom: var(--mb-4);
  border-radius: .5rem;
  box-shadow: 0px 4px 25px rgba(14, 36, 49, 0.15);
  cursor: pointer;
  transition: .3s;
  transform: translateY(0px);
}

.skills__data:hover {
  transition: .3s;
  transform: translateY(-3px);
  box-shadow: 3px 3px 10px black;
}

.skills__icon {
  font-size: 2rem;
  margin-right: var(--mb-2);
  color: var(--primary);
}


.skills__names {
  display: flex;
  align-items: center;
}

.skills__bar {
  position: absolute;
  left: 0;
  bottom: 0;
  background-color: var(--primary);
  height: .25rem;
  border-radius: .5rem;
  z-index: var(--z-back);
}

.skills__html {
  width: 100%;
}

.skills__css {
  width: 100%;
}

.skills__js {
  width: 100%;
}

.skills__ux {
  width: 100%;
}

.skills__img {
  border-radius: .5rem;
  cursor: pointer;
   transition: .3s;
  transform: translateY(0px);
}

.skills__img:hover {
  transition: .3s;
  transform: translateY(-3px);
  box-shadow: 3px 3px 10px black;
}
#popup{
  position: fixed;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background-color: rgba(23, 22, 22, 0.95);
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-100%);
  transition: 250ms transform;
  padding: 50px;
  z-index: 2000;
  overflow-x:hidden;
}
#selectedImage{
  max-height: 100%;
  border-radius: 1rem;
  max-width: 100%;
}

@media (min-width: 290px) and (max-width: 349px){
  .skills__container {
    grid-template-columns: repeat(1, 1fr);
  }
	.skills__subtitle {
		font-size: 1rem;
  		margin-bottom: 0.5rem
	}
	.skills__icon {
		font-size: 0.5rem;
		margin-right: var(--mb-2);
		color: var(--primary);
	}
	.skills__data {
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: relative;
		font-weight: var(--font-semi);
		padding: .5rem 1rem;
		margin-bottom: 0.3rem;

    }
	.skills__names{
		font-size: 0.5rem;
	}
}

@media (min-width: 350px) and (max-width: 500px){
  .skills__subtitle[data-v-6bb5fff2] {
    margin-bottom:0;
  }
   .skills__container {
    grid-template-columns: repeat(1, 1fr);
  }
	#skill-page {
		margin-top: 2rem;
	}
	.skills__icon {
		font-size: 0.5rem;
		margin-right: var(--mb-2);
		color: var(--primary);
	}
	.skills__data {
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: relative;
		font-weight: var(--font-semi);
		padding: .5rem 1rem;
		margin-bottom: 0.5rem

    }
	.skills__names{
		font-size: 0.5rem;
	}
}
@media (min-width: 500px) and (max-width: 992px) {
	#skill-page {
		margin-top: 3rem;
	}
} 

</style>