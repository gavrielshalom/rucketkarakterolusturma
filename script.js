var location = "";
var profession = "";
var faction = "";
var family = "";
var school = "";
var religion = "";
var name = "";

    //şehir
if(document.getElementById("tuscan").checked){
    var location = "Tuscan"
}
else if (document.getElementById("lyard").checked){
    var location = "Lost Yard"
}
else if(document.getElementById("byard").checked){
   var location = "Bone Yard"
}
else if(document.getElementById("fside").checked){
    var location = "Fire Side"
}
else if(document.getElementById("omaja").checked){
    var location = "Omaja"
}
else if(document.getElementById("tajados").checked){
    var location = "Tajados"
}
// Meslek
if(document.getElementById("farmer").checked){
    var profession = "gariban bir çiftçiydi"
}
else if(document.getElementById("warrior").checked){
    var profession = "nam salmış bir savaşçıydı"
}
else if(document.getElementById("scavenger").checked){
    var profession = "çöllerde eşya arayan arayıcıydı"
}
else if(document.getElementById("caravan1Runner").checked){
    var profession = "karavana sahip bir kervanbaşıydı"
}
else if(document.getElementById("consultor").checked){
    var profession = "konuşmayla para kazanan bir danışmandı"
}
else if(document.getElementById("ranger").checked){
    var profession = "savaş yeteneğini gizlilikle birleştiren bir korucuydu"
}
// faction
if(document.getElementById("adk").checked){
    var faction = "Arizona Demokratik Kuvvetleri'ne"
}
else if(document.getElementById("acr").checked){
    var faction = "Arizona Cumhuriyeti'ne"
}
else if(document.getElementById("apc").checked){
    var faction = "Arizona Halk Cumhuriyeti'ne"
}
else if(document.getElementById("ata").checked){
    var faction = "Arizona Ticaret İttifakı'na"
}
else if(document.getElementById("trt").checked){
    var faction = "3.Triumvariate'e"
}
else if(document.getElementById("aran").checked){
    var faction = "Arizona Korucuları'na"
}
//eğitim
if(document.getElementById("followerEd").checked){
    var school = "Kıyamet Takipçileri denen hayırsever bilim adamlarının arasında"
}
else if(document.getElementById("republicanEd").checked){
    var school = "Cumhuriyet'in kurduğu eğitim sisteminin öğretmenleri arasında"
}
else if(document.getElementById("lifeEd").checked){
    var school = "Hayat Okulu denen yerde"
}
// aile
if(document.getElementById("drugFamily").checked){
    var family = "ayyaş kafa bulmaktan başka bir şey bilmeyen"
}
else if(document.getElementById("eliteFamily").checked){
    var family = "elit, son klas yemekleri yiyip en iyi şarapları içen"
}
else if(document.getElementById("followerFamily").checked){
    var family = "bilgiyi ve bilginin ışığını yayma amacıyla harkeet eden"
}
else if(document.getElementById("caravanRunnersFamily").checked){
    var family = "aile kervanını yöneten"
}
else if(document.getElementById("gunRunnersFamily").checked){
    var family = "Meksika'dan kaçak silah / eşyalar getiren"
}
else if(document.getElementById("soldiersFamily").checked){
    var family = "idealleri için kanının son damlasına kadar savaşan"
}

function updateTextInput(val) {
    document.getElementById('length').innerHTML=val; 
}
function updateReligion(val){var religion = val} 

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
function updateLength(val){
    var penisLength = val
    console.log(val)
}

// Start file download.
var el = document.getElementById("dBut")

    el.addEventListener("click", function(){
        // Generate download of hello.txt file with some content
        var story = `Karakterin ${location} şehrinde doğdu. Karakterinin mesleği ${profession}. Zombi salgını karakterini çok güçsüzleştirmişti. Fakat ${faction} olan sevgin, seni dinç tutmaya yetiyordu. Eğitimini ${school} almıştın. Hayatını düşünürken aklına ailenin nasıl birileri olduğu geldi. Ailen ${family} birileriydi. Kafanı sallayıp yoluna devam ettin...`
        var filename = "mychar.txt";
        var text = `Penis Boyu: ${penisLength} Hikaye: ${story} Din: ${religion}`
        download(filename, text);
        console.log(text)
    }, false);
