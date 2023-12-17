class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Student extends User {
    constructor(name, age) {
        super(name, age);
        this.Course = [];
    }
    
    setCourse(courseName, grade) {
        this.Course.push({
            Title: courseName,
            Grade: grade
        })
        return this;
    }
}

class Admin extends User {
    constructor(name, age) {
        super(name, age);
        this.Course = [];
    }
    
    setCourse(title, score, lector) {
        this.Course.push({
            Title: title,
            AdminScore: score,
            Lector: lector
        })
        return this;
    }
}

class Lector extends User {
    constructor(name, age) {
        super(name, age);
        this.Course = [];
    }
    
    setCourse(title, score, average) {
        this.Course.push({
            Title: title,
            LectorScore: score,
            AverageStudentsScore: average
        })
        return this;
    }
}


let student1 = new Student('Jack Smith', 23).setCourse('Full-stack JS', 'satisfactory');
let student2 = new Student('Amal Smith', 20);
let student3 = new Student('Noah Smith', 43).setCourse('Full-stack JS', 'good').setCourse('Front-end pro', 'satisfactory').setCourse('Back-end pro', 'very-good');
let student4 = new Student('Charlie Smith', 18).setCourse('Full-stack JS', 'very-good');

let admin1 = new Admin('Emily Smith', 30).setCourse('Full-stack JS', 'very-good', 'Serge');

let lector1 = new Lector('Leo Smith', 31).setCourse('Full-stack JS', 'excellent', 'very-good');

let forms = [student1, student2, student3, student4, admin1, lector1];

let usersImg = ['Jack Smith', 'Amal Smith', 'Noah Smith', 'Charlie Smith', 'Emily Smith', 'Leo Smith'];

let wrapper = document.createElement('div');
wrapper.classList.add('wrapper')

let form = [];

console.log(student1);
console.log(student2);
console.log(student3);
console.log(admin1);
console.log(lector1);

let gradeLenght = [];
forms.forEach(item => gradeLenght.push(item.Course.length))
console.log(forms);
console.log(gradeLenght);

document.body.appendChild(wrapper);

for (let i = 0; i < usersImg.length; i++) {
    let img = `<img src="usersRender/images/users/${usersImg[i].replace(' ','')}.png" alt="${usersImg[i]}">`;
    let questionnaire = document.createElement('div');
    questionnaire.classList.add('questionnaire');
    wrapper.appendChild(questionnaire);
    
    let info = document.createElement('div');
    info.classList.add('info');
    questionnaire.appendChild(info);
    info.innerHTML = img;
    let info__description = document.createElement('div');
    info__description.classList.add('info__description');
    info.appendChild(info__description);
    info__description.innerHTML = `<span>Name: <span>${usersImg[i]}</span></span><span>Age: <span>${forms[i].age}</span></span>`
    
    let status = document.createElement('div');
    status.classList.add('status');
    questionnaire.appendChild(status);
    let statusWrap = document.createElement('div');
    statusWrap.classList.add('status-wrap');
    status.appendChild(statusWrap);
    statusWrap.innerHTML = `<img src="usersRender/images/roles/${forms[i].constructor.name.toLowerCase()}.png" alt="">
    <span>${forms[i].constructor.name}</span>`
    
    let grade = document.createElement('div');
    grade.classList.add('grade');
    questionnaire.appendChild(grade);

    for (let j = 0; j < gradeLenght[i]; j++) {
        let gradeStudent = `<span>${forms[i].Course[j].Title}<span>${forms[i].Course[j].Grade}</span></span>`;
        let gradeAdmin = `<span>Title: <span>${forms[i].Course[j].Title}</span></span>
        <span>Admin's score: <span>${forms[i].Course[j].AdminScore}</span></span>
        <span>Lector: <span>${forms[i].Course[j].Lector}</span></span>`;
        let gradeLector = `<span>Title: <span>${forms[i].Course[j].Title}</span></span>
        <span>Lector's score: <span>${forms[i].Course[j].LectorScore}</span></span>
        <span>Averange stident's score: <span>${forms[i].Course[j].AverageStudentsScore}</span></span>`;
        
        gradeFilter = (forms[i].constructor.name === 'Student') ? gradeStudent : (forms[i].constructor.name === 'Admin') ? gradeAdmin : gradeLector

        let grade__description = document.createElement('div');
        grade__description.classList.add('grade__description');
        grade.appendChild(grade__description);
        grade__description.innerHTML = gradeFilter;

    }

    if (forms[i].constructor.name === 'Student') {
        questionnaire.classList.add('student');
    } else if (forms[i].constructor.name === 'Admin') {
        questionnaire.classList.add('admin');
    } else if (forms[i].constructor.name === 'Lector') {
        questionnaire.classList.add('lector');
    }
}

let span = document.querySelectorAll('span');
console.log(span);
span.forEach(item => {
    if (item.textContent == 'satisfactory') {
        item.classList.add('satisfactory');
    } else if (item.textContent == 'good') {
        item.classList.add('good');
    } else if (item.textContent == 'very-good') {
        item.classList.add('very-good');
    } else if (item.textContent == 'excellent') {
        item.classList.add('excellent');
    }
});