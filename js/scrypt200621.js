let moviesCount,
	a,b,c,d,
	personalMoviesDb = {
		count: 0,
		movies: [
			'Логан',
			'аЛига справедливости',
			'Ла-ла-ленд',
			'Одержимость',
			'Скот пилигрим против...',
			'Наруто',
			'1',
			'2',
			'3'
		],
		actors: "",
		genres: [],
		privat: true,
	}


// const ad = document.querySelectorAll(".ad");
// ad.forEach (item=>{
// 	item.style.display="none";
// });

 const movies = document.querySelectorAll(".list");

//console.log(document.querySelector("#btn").parentElement)


// console.log(document.form)
// for (let node of document.body.childNodes){
// 	if (node.nodeName=='#text'){
// 		continue
// 	}
// 	console.log(node);
// }
// const form= document.querySelector('.form')
// console.log(form.childNodes)

let btn=document.querySelector("#btn"),
input=document.querySelector(".form__input");

btn.addEventListener('click', (e)=>{
	e.preventDefault();
	let movie=input.value;
	personalMoviesDb.movies.push(input.value);
	if(movie.length>4) {
		personalMoviesDb.movies.push(movie.slice(0,4)+"...")}
	console.log(input);
	console.log(personalMoviesDb.movies);
	})

//let del=querySelector
let form=document.querySelector('.form')
form.addEventListener('click',(e)=>{
	e.preventDefault();
})

let btn2=document.querySelector("#btn2")
btn2.addEventListener('dblclick', ()=>{
	//e.preventDefault();
	document.querySelector(".quadblue").style.display="inline";
})



//console.log(document.querySelector(".form").previousSibling)




// for(i=0;i<movies.length;i++){
// 	personalMoviesDb.movies[i]=movies[i].innerHTML;
// }
// console.log(personalMoviesDb);


// console.log(movies);
// function movieList (item, kk){
// 	item.forEach((film,parent)=>{
// 		kk.textContent = '';
// 		item.forEach ((i,f)=>{
// 			kk.innerHTML+=`<li class="list__item">
// 			<span class="movies">Логан</span> <img class="del" src="img/5.jpg" alt="">
// 		</li>`;
// 		});
// 	});
// }

// movieList(personalMoviesDb.movies, movies);


personalMoviesDb.movies.sort();

for(i=0;i<personalMoviesDb.movies.length;i++){
 	
	//   if(movies[i]==undefined) {
		let li=document.createElement('li');
		li.innerHTML='<span class="movies" id="'+i+'">'+personalMoviesDb.movies[i] +'</span> <img id="del" src="img/5.jpg" width="16px" alt="">';
		ol=document.querySelector(".list");
		ol.append(li);
	//   } else {
	//   movies[i].innerHTML=personalMoviesDb.movies[i];}
 }

//   document.querySelector(".list").style.cssText='list-style-type:decimal;';

//  for(i=0;i<personalMoviesDb.movies.length;i++){
// 	movies[i].innerHTML=(i+1)+'. '+personalMoviesDb.movies[i];
// }

// const btn=document.querySelector("#btn"),
// form=document.querySelector(".form");
// btn.onclick=()=>{
// 	alert('Привет!');
// }
// const deleteEl=(e)=>{
// 	console.log(e.currentTarget);
// 	console.log(e.type);
	
// }
// btn.addEventListener('click', deleteEl);
// form.addEventListener('mouseenter', (e)=> {
// 	e.preventDefault();
// 	console.log(e.currentTarget);
// 	e.target.remove();
// });


// btn.forEach(bt=>{
// 	bt.addEventListener('mouseenter',deleteEl);
// })



// const genre = document.querySelector(".genre");
// personalMoviesDb.genres=genre.innerHTML;
// console.log(personalMoviesDb.genres);
// genre.innerHTML="драма";
// const wall=document.querySelector(".poster");
// wall.src="img/1.jpg";

let del=document.querySelectorAll("#del");
del.forEach(dl=>{
	dl.addEventListener('click', (e)=>{
		console.log(dl.parentNode.id)
		dl.parentNode.remove();

	})
})






