# FORR3JS05DU-Verkefni-2

### Afhverju er getElementById() fljótleglegasta aðferðin?
> Það nær í fyrsta element með ID og stoppar þar, það heldur ekki áfram að leita vegna þess að yfirleitt notar maður bara sérstakt ID einu sinni.

### Hver er munurinn á static og live NodeList?
Til að fá live NodeList þá getur maður notað t.d. document.getElementsByName(), til að fá static NodeList notar maður document.querySelectorAll(). Munurinn er að live NodeList uppfærir sig þegar upplýsingar breytast eða bætast við.

### Hver er munurinn á true og false í AddEventListener?

### this vísar í Event listener á html element en ekki á object. Þú getur notað bind() til að breyta því. Leystu eftirfarandi kóðadæmi með notkun á bind() til að birta í console “My name is Sam“ en ekki undefined.
let Person = {
	name: 'Sam',  
	sayName: function() {    
	console.log('My name is '+ this.name); 
	}
};
document.getElementById('butt').addEventListener('click',	Person.sayName.bind(Person));
