function Tester(name,age,education)
{
    this.name=name;
    this.age=age;
    this.education=education;
}

var callCstr=new Tester("Nasif",25,"BSc in CSE");
console.log(callCstr.name);
