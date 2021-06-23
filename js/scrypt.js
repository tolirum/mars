let moviesCount,
	a,b,c,d,
	personalMoviesDb = {
		count: 0,
		movies: [
			'ЛОГАН',
			'ЛИГА СПРАВЕДЛИВОСТИ',
			'ЛА-ЛА-ЛЕНД',
			'ОДЕРЖИМОСТЬ',
			'СКОТ ПИЛИГРИМ ПРОТИВ...',
			'НАРУТО',
		],
		actors: "",
		genres: [],
		privat: true,
	}


	let movList = function movList() {
		let movies = document.querySelector(".movies");
		movies.innerHTML=''
		personalMoviesDb.movies.forEach((item, key)=> {
		movies.innerHTML += '<li class="list__item" id="'+key+'"><span class="movies">'+item+'</span><img class="trush" src="img/5.jpg" alt=""></li>'
	})
	}
	movList()
	
	let btnClick = function btnClick(){
	let del = document.querySelectorAll(".trush")
	del.forEach(trush =>{
		trush.addEventListener('click',(e)=>{
			console.log(trush.parentNode.id)
			personalMoviesDb.movies.splice(trush.parentNode.id, 1)
			e.target.parentElement.remove()
			console.log(personalMoviesDb.movies)
			movList()
			btnClick()
		})
	
	})}
	btnClick()
	
	let check = document.querySelector(".checkbox")
	check.addEventListener('click', () => {
		console.log(check.checked)
		if(check.checked){
			alert('Фильм помечен как "Любимый"')
		} else {
			alert('Отметка "Любимый" снята')
		}
	})
	
	
	let btn = document.querySelector("#btn"),
	input = document.querySelector(".form__input")
	btn.addEventListener('click', (e) =>{
		e.preventDefault();
		if(input.value==''){
			alert("Введите название фильма")
		} else {
			//добавляем значение с инпута в базу
			personalMoviesDb.movies.push(input.value.toUpperCase())
			
			if(check.checked){
				alert('Добавляем любимый фильм');
				console.log('Добавляем любимый фильм');
			}
	
			//проверям длину (4 символа) последнего добавленного фильма
			let i=personalMoviesDb.movies.length-1,
				//i-индекс последнего (добавленного) фильма
			  j=personalMoviesDb.movies[i].length;
			  //j-длина последнего фильма
			if(personalMoviesDb.movies[i].length>21) {
				console.log(personalMoviesDb.movies[i]);
				personalMoviesDb.movies[i]=personalMoviesDb.movies[i].slice(0,21)+'...';
				};
			//можно сначала проверять длину с инпута затем добавлять в базу
			//но так интереснее
			
			personalMoviesDb.movies.sort();
			input.value='';//очистить инпут
			movList();//Обновить список фильмов на странице согласно базе
			btnClick();//удалить фильм
			}
	})