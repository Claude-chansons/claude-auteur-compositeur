const catalog = {
pop: [
{title:"Les garçons",desc:"Une déclaration malicieuse aux garçons de tous les genres, des rêveurs aux aventuriers, des tendres aux beaux parleurs.",audio:"audio/les-garcons.mp3"},
{title:"La poupée entre ses bras",desc:"Un parent regarde son enfant grandir et lui transmet un message essentiel : continuer à rêver malgré les épreuves.",audio:"audio/la-poupee-entre-ses-bras.mp3"},
{title:"Abracadabra",desc:"Un hommage aux parents et au temps qui passe, entre souvenirs, amour et désir de retenir les instants précieux.",audio:"audio/abracadabra.mp3"},
{title:"Le Tchini-Waniwa",desc:"Une femme invente un remède improbable à ses soucis et transforme ses ennuis en une joyeuse fête collective.",audio:"audio/le-tchini-waniwa.mp3"}],
reggae: [
{title:"Le cœur voyou",desc:"Après son départ, une femme traverse seule la nuit, hantée par les souvenirs d’un amour qui lui reste encore dans la peau.",audio:"audio/le-coeur-voyou.mp3"},
{title:"Elle s’en fout",desc:"Malgré les galères, les dettes et les déceptions, elle choisit de rire, danser et profiter de la vie.",audio:"audio/elle-sen-fout.mp3"},
{title:"Délit de suite",desc:"Un séducteur maladroit accumule les déconvenues et découvre que ses propres comportements finissent toujours par le rattraper.",audio:"audio/delit-de-suite.mp3"},
{title:"C’est pas grave",desc:"Une journée où tout va de travers, mais où chaque nouvelle catastrophe devient une raison de garder le sourire.",audio:"audio/cest-pas-grave.mp3"}],
medieval: [
{title:"Troubadour pour un verre",desc:"Dans une taverne, un étrange prophète prétend voir l’avenir, mais son talent semble surtout consister à obtenir un verre.",audio:"audio/troubadour-pour-un-verre.mp3"},
{title:"Tout ce qui brille",desc:"Une jeune femme observe les prétendants de son entourage et constate que le rang et les apparences comptent souvent beaucoup.",audio:"audio/tout-ce-qui-brille.mp3"},
{title:"La capriole",desc:"Une joute amoureuse en costume médiéval où une jeune femme fait patienter un prétendant un peu trop entreprenant.",audio:"audio/la-capriole.mp3"},
{title:"Étrangers",desc:"Une chanson satirique sur le rejet de ceux qui viennent d’ailleurs, construite autour d’un retournement final.",audio:"audio/etrangers.mp3"}]
};
function renderGenre(id,tracks){document.getElementById(id).innerHTML=tracks.map(t=>`<div class="track"><h3>${t.title}</h3><p class="desc">${t.desc}</p><audio controls preload="none" src="${t.audio}">Votre navigateur ne prend pas en charge la lecture audio.</audio></div>`).join("")}
renderGenre("pop",catalog.pop);renderGenre("reggae",catalog.reggae);renderGenre("medieval",catalog.medieval);
