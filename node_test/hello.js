console.log('welcome');

console.log("Hello world");

console.log(20+30);

console.log("come"+"home");

console.log(20+"home");

var price = 3000;


var a = 11;
var b = 7;

console.log(2*(a+b));
console.log(a*b);

var c = 20;

console.log(6*Math.pow(c,2));
console.log(Math.pow(c, 3));

km = 90;
console.log(km * 0.6214);

console.log(a > b ? 500 : 900);

if(a>b) {
    console.log("asd");
}else{
    console.log("a");
}

// 1번학생의 점수가 83점입니다
// 다음의 조건문을 작성하시오
// 점수가 0보다 작거나 100보다 크면 , "그런 점수 없음" 출력
// 점수가 80점 이상이면 
// 

a = 83;

let cook = new Object();
cook.name = "ㅎㅎ";
cook.age = 123;

console.log(cook);

let football = {
    color : "Bule",
    size : 36,
    isAcitve : true,
    add : function(x,y){
        let ret = x+y
        return ret
    }
};

let result = football.add(3,4);
console.log(result);


let name = ["재호","호재","제이슨"];
console.log(name[1]);

let em = [  {name : "plastic", age : 31}, 
            {name :"refigerator",age : 56},
            {name : "television", age :13}];

console.log(em[2].age);


let people = [
    {name : "미키", age :24, pet :[
        {name : "똘이", type : "두더지"},
        {name : "소닉", type : "뱀"}]},
    {name : "존", age :9, pet :[
        {name : "밍키", type : "도마뱀"},
        {name : "나비", type : "사마귀"}
    ]},
    {name : "해리", age :42, pet :[]}
];

console.log(people[0].pet[1].name);

console.log(people[1].pet[0].type);

let names = ["제임스", "존", "마이클"];
names[1] = "마이크";

console.log(names);

names.push("크리스");

names.pop();
console.log(names);


let ret_names = names.join("_");
console.log(ret_names);


let ret_filter = names.filter(name => name.length > 3);
console.log(ret_filter);

//두번째 데이터부터 데이터를 끝



num_arr = [2,5,8,10];

for(let i=0;i<num_arr.length;i++) {
    console.log(num_arr[i]);
}

names.forEach(function(name) {
    console.log(name);
});