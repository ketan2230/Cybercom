var john_mass,john_height,mark_height,mark_mass;
john_mass=prompt("enter john mass value");
john_height=prompt("enter john_height value");
mark_mass=prompt("enter mark mass value");
mark_height=prompt("enter mark_height value");

var john_bmi,mark_bmi,mark_higher;
john_bmi=john_mass/(john_height*john_height);
mark_bmi=mark_mass/(mark_height*mark_height);
document.write("john_bmi"+ john_bmi+ "\n");
document.write("mark bmi "+ mark_bmi+ "\n");
mark_higher=mark_bmi>=john_bmi;
document.write("Is Mark Bmi higher than john :  "+ mark_higher);

