function Constructor_Advance(name,id,address,location){
    this.name=name;
    this.id=id;
    this.address=address;
    this.location=location;

    this.display=function()
    {
        // console.log(name);    it also works properly
        // console.log(id);
        // console.log(address);
        // console.log(location);

        console.log(this.name);
        console.log(this.id);
        console.log(this.address);
        console.log(this.location);
    }

}

var advance_calling=new Constructor_Advance("Nasif","20-42119-1","Mirpur","Dhaka");
advance_calling.display();
var advance_calling2=new Constructor_Advance("Alu",12345,"Anywhere","Khulna");
advance_calling2.display();