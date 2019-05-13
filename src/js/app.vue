<template>
	<div class="home">
		<div>
			vue 文件
		</div>
		<p>{{msg}}</p>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				msg:'vue ..........'
			}
		},
		created(){
			console.log('created');
		}
	}
</script>
<style>
	.home{
		background: green;
		color: mediumslateblue;
	}
</style>