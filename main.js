const paragraphs = [
    'javascript is a high-level , interpreted programming language that is primaly used for building intractive and dynamic web pages . its run on the client side , meaning it is executed on the users web browser.',
    'one of the key features of javascript is its abiity to minpulate and modifiy the content of web pages in the real time. This enables developers to create enging user experience by dynamically updating the page with  ',
    'javascript is often used alongside HTML and CSS to create modern  , intractive websites. HTML provides the strucure , css handels the styling , and javascript handels the behavior and funcationality .  ',
    'Dino Code Acdemy is an online learning platform that offers courses in various programming language , including javascript and Android app development . it provides a comprehensive curriculum and interactive coding  ',
    'javascript is known for flexibilty and extensive libraries anfd framework. it has a vast ecostyem of tools and  and resources that make it easier for developer to create complex application effcienty.  ',
    'Andorid Studio is the offilcal integrated development enviroment (IDE) for Android app development . it provides a rich set of tools and features , including a code editor , visual layout editor , and emulator , to ' ,
    'Diao Code Acdemy offers hands-on projects and coding challenge to reinforce learning and practical application of javascript and Android development concepts. these projects help learners build real-world  experiet',
    'Javascript frameworks like AngularJS and Vue.js are popular choices for building robust web application , they provide a strucured approch to development with features like data binding , component-based architecure ' ,
    'Android offers  a wide range of features and APIs that allow developers to access device hardware and sensors , inegrate with  another apps , and create immersive user experiences . it supports multi-hreading, push not   ',
    'Dino Code Acdemy curriculum covers a comprehensive range of topic in javascript, Andriod app devlopment, and other programming languages . it caters to beginners as well as intermediate and advanced learners .'
];
const items = document.getElementById("items");
const dataContainer = document.getElementById("data");
function shfull(array){
    let currentIndex = array.length;
    let randomIndex;
    while(currentIndex!=0){
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex],array[randomIndex]] = [array[randomIndex],array[currentIndex]];
    }
    return array;
}
function generate(){
    if(items.value == 0){
        alert("The Value Cant be Zero");
    }else if(items.value > paragraphs.length){
        const randomIndex = Math.floor(Math.random() * paragraphs.length);
        dataContainer.innerHTML = `${paragraphs[randomIndex]}`;
    }else{
        const  shuffleParagraphs = paragraphs;
        shfull(paragraphs);
        const slectParagraph = shuffleParagraphs.slice(0,items.value);
        const paragraphsHtml = slectParagraph.map(paragraphs => `<p> ${paragraphs} </p>` ).join("");
        dataContainer.innerHTML= paragraphsHtml
    }
}