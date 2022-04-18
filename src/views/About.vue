<template>
	<main id="about-page">
		<div class="about-Container text-center">
			<div class="card shadow">
				<img src="../assets/Images/myFullProfile.jpg" alt="..." id="galleryOne" @click="imageViewOne">
				<div class="infoContainer">
					<h5 class="mt-1">I am Nay Ba La</h5>
					<p class="text-wrap">
						I was born in
									Zalun,Ayeyarwady Division,Myanmar.
									But now i live in Ingapu Street,SanChaung
									Township,Yangon Division.
									And then i was learning Web Development.Since
									About 2019 December i 
									started learn Java
									Programming.And still learning
									html,css,java-script,vue-js,boostrap,php,mysql,laravel
									too.
				
					</p>
				</div>
				<div class="div" id="popup">
                	<img src="" alt="" id="selectedImage">
            	</div>
			</div>
			
			<div class="card shadow">
				<img src="../assets/Images/myInfo.jpg"  alt="..." id="galleryTwo" @click="imageViewTwo">
				<h5 class="mt-1">I was gratuated from</h5>
					<p><span class="text-primary">Hinthada
                                    Technological University</span> got <span
                                    class="text-primary">Bachelor Of
                                    Technology(2018)</span> and <span
                                    class="text-primary">Bachelor Of Engineering
                                    (2020)</span> with studying major of
                                <span class="text-primary">Electronic
                                    Communication</span>.I also got a chance of
                                Master Of Engineering and i could not attend
                                this cause of many reason!You can check
                                gratuated certifie in Skills
                                section.</p>
			</div>
			<div class="card shadow" id="hidden1">
				<img src="../assets/Images/certificate-3.png" alt="..." id="galleryThree" @click="imageViewThree">
				<h5 class="mt-1">I also have</h5>
					<p class="about__text"> - A website wesign
                                perspective. <br>
                                - I can work in accordance with Dealine. <br>
                                - I can work in a team and have a strong desire
                                to learn. <br>
                                - I can complete tasks within the specified
                                time. <br>
                                - I have good teamwork and communication skills.</p>
			</div>
		</div>
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
      const gallery = document.querySelector('#galleryOne');
      const selectedImage = document.querySelector('#selectedImage');
      selectedImage.src = gallery.src;
      popup.style.transform = `translateY(0%)`;
       popup.addEventListener('click', () => {
            popup.style.transform = `translateY(-100%)`;
            popup.src = '';
        })
   },
  imageViewTwo(){
      const popup = document.querySelector('#popup');
      const gallery = document.querySelector('#galleryTwo');
      const selectedImage = document.querySelector('#selectedImage');
      selectedImage.src = gallery.src;
      popup.style.transform = `translateY(0%)`;
       popup.addEventListener('click', () => {
            popup.style.transform = `translateY(-100%)`;
            popup.src = '';
        })
   },
  imageViewThree(){
      const popup = document.querySelector('#popup');
      const gallery = document.querySelector('#galleryThree');
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
	.about-Container{
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	
	}
	.about-Container > div{
		justify-content: center;
		align-items: center;
		margin-bottom: 0.5rem;
		flex: 45%;
		padding: .8rem;
	}
	.card{
		background: var(--light);
		border: none;
		margin-left: 0.5rem;
	}
	img{
		text-align: center;
		border-radius: 0.3rem;
		cursor: pointer;
		max-width: 300px;
	}
	p{
		font-size: 0.9rem;
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
		.about-Container{
			margin-top: 2rem;
		}
		.about-Container > div{
			flex: 100%;
		}
		img{
			max-width: 50px;
		}
		p{
			font-size: 0.45rem;
		}
		h5{
			font-size: 0.5rem;
		}
	
	}

	@media (min-width: 350px) and (max-width: 500px){
		.about-Container > div{
			flex: 100%;
		}
		img{
			max-width: 90px;
		}
		p{
			font-size: 0.55rem;
		}
		h5{
			font-size: 0.65rem;
		}
	
	}
	@media (min-width: 500px) and (max-width: 992px) {
			.about-Container{
				margin-top: 4.5rem;
			
			}
	} 
</style>