<template>
	<main id="project-page">
		<carousel :settings="settings" :breakpoints="breakpoints" :wrap-around = "true">
			<slide  :key="slide">
				<div class="carousel__item">1</div>
			</slide>
			<slide  :key="slide">
				<div class="carousel__item">2</div>
			</slide>
			<slide  :key="slide">
				<div class="carousel__item">3</div>
			</slide>
			<slide  :key="slide">
				<div class="carousel__item">4</div>
			</slide>
			<slide  :key="slide">
				<div class="carousel__item">5</div>
			</slide>
			<slide  :key="slide">
				<div class="carousel__item">6</div>
			</slide>
			<template #addons>
				<navigation />
				
			</template>
		</carousel>
		<carousel :settings="settings" :breakpoints="breakpoints" :wrap-around = "true">
			<slide  :key="slide">
				<div class="carousel__item">1</div>
			</slide>
			<slide  :key="slide">
				<div class="carousel__item">2</div>
			</slide>
			<slide  :key="slide">
				<div class="carousel__item">3</div>
			</slide>
			<slide  :key="slide">
				<div class="carousel__item">4</div>
			</slide>
			<slide  :key="slide">
				<div class="carousel__item">5</div>
			</slide>
			<slide  :key="slide">
				<div class="carousel__item">6</div>
			</slide>
			<template #addons>
				<navigation />
			</template>
		</carousel>
	</main>
</template>

<script>
import { defineComponent } from 'vue';
import { Carousel, Navigation, Slide } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

export default defineComponent({
name: 'WrapAround',
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  setup() {
		return {
			// carousel settings
			settings: {
				itemsToShow: 1,
				snapAlign: "center"
			},
			// breakpoints are mobile first
			// any settings not specified will fallback to the carousel settings
			breakpoints: {
				// 700px and up
				700: {
					itemsToShow: 3.5,
					snapAlign: "center"
				},
				// 1024 and up
				1024: {
					itemsToShow: 4,
					snapAlign: "start"
				}
			}
		};
	}
});
</script>

<style>
#project-page{
	margin-top: 1rem;
}
.carousel__item {
	min-height: 300px;
	width: 100%;
	background-color: #642afb;
	color: white;
	font-size: 20px;
	border-radius: 8px;
	display: flex;
	justify-content: center;
	align-items: center;
}

.carousel__slide {
	padding: 10px;
}

.carousel__prev,
.carousel__next {
	box-sizing: content-box;
	border: 5px solid white;
}

</style>