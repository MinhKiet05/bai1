Array.prototype.map2 = function () { 
    var result = "";
    this.forEach(function (item, index) {
        result += `<h2>` + item + `</h2>`;
    })
    return result;
};

var courses = [
    "JavaScript",
    "HTML",
    "CSS"
];

console.log(courses.map2());
courses.map2();
