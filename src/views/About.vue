<template>
	<main id="about-page">
		<div class="about-Container text-center">
			<div class="card shadow">
				<img src="../assets/Images/myFullProfile.jpg" alt="...">
				<div class="infoContainer">
					<h5>Card title</h5>
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
			</div>
			
			<div class="card shadow">
				<img src="../assets/Images/myInfo.jpg" class="img-fluid" alt="...">
				<h5>Card title</h5>
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
				<img src="../assets/Images/certificate-3.png" class="img-fluid" alt="...">
				<h5>Card title</h5>
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
		width: 190px;
		border-radius: 0.3rem;
	}
	p{
		font-size: 0.9rem;
	}

	@media (min-width: 290px) and (max-width: 349px){
		.about-Container{
			margin-top: 2rem;
		}
		.about-Container > div{
			flex: 100%;
		}
		img{
			
			width: 50px;
			height: 50px;
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
			width: 90px;
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