var app = angular.module("instantSearch",[]);

// Create an instant search filter

	app.filter("searchFor",function(){
		return function(arr, searchString){
			if(!searchString){
				return arr;
			}

			var result=[];
			searchString = searchString.toLowerCase();


			angular.forEach(arr, function(item){
				if(item.title.toLowerCase().indexOf(searchString) !== -1){
					result.push(item);
				}
			});	
		return result;
		};
	});

// The controller 

function InstantSearchController($scope){
	$scope.items=[
	{
			url: 'http://www.goal.com/en-gb/match/barcelona-vs-athletic-club/2188342?ICID=FX',
			title: 'Barca cruise through after Atheletic Scare',
			image: './Images/Barca.jpg'
		},
		{
			url: 'http://www.goal.com/en-gb/news/2920/league-cup/2016/01/27/19744252/blow-for-man-city-as-de-bruyne-suffers-suspected-medial-ligament-?ICID=HP_HN_2',
			title: 'De Bruyne in suspected ligament Blow',
			image: './Images/Kevin.jpg'
		},
		{
			url: 'http://www.goal.com/en-gb/news/3277/la-liga/2016/01/14/19331212/real-madrid-and-atletico-given-transfer-bans',
			title: 'Real and Atletico handed transfer Embargo for two transfer windows',
			image: './Images/atletico-madrid-real-madrid.jpg'
		},
		{
			url: 'http://www.goal.com/en-gb/match/manchester-city-vs-everton/2172349?ICID=HP_HN_HP_RI_0_1',
			title: 'Aguaro Fires Manchester City to Wembley',
			image: './Images/kun.jpg'
		},
		{
			url: 'http://www.goal.com/en-gb/match/atl%C3%A9tico-madrid-vs-celta-de-vigo/2188344/report',
			title: 'Celta De Vigo stuns Atletico Madrid in Copa Del Rey',
			image: './Images/Celta.jpg'
		},
		{
			url: 'http://www.goal.com/en-gb/news/3277/la-liga/2016/01/04/18971992/official-real-madrid-sack-benitez-and-appoint-zidane',
			title: 'Zinezine Zidane Appointed as Real Madrid head coach',
			image: './Images/zizou.jpg'
		},
		{
			url: 'http://www.goal.com/en-gb/news/2892/transfer-zone/2016/01/27/19747102/rumours-arsenal-told-what-they-must-pay-for-isco?ICID=HP_BN_11',
			title: "Arsenal told to pay around 42 million Pounds for securing Isco's services",
			image: './Images/Isco.jpg'
		}
	];
}	