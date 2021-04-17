var images=["https://friendlystock.com/wp-content/uploads/2020/04/6-middle-aged-man-wearing-face-mask-cartoon-clipart.jpg",
"https://cdn2.vectorstock.com/i/1000x1000/60/56/business-women-character-cartoon-vector-14196056.jpg",
"https://i.pinimg.com/originals/45/b6/a7/45b6a766adfe531485952efce0c5af44.jpg",
"https://clipartart.com/images/middle-school-girls-clipart-2.jpg"];

var names=["S.P Singh","Priyanka Singh","Priyanshi Singh","Sannidhi Singh(Me)"];

function nextslide()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array )
    {
        i = 0;
    }
    var updatedImage = photos[i];
    var updatedName  = Name[i];
    document.getElementById("photos").src = updatedImage;
    document.getElementById("Name").innerHTML = updatedName;
}
