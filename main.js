var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://postimg.cc/fSbr4vGF", "" , "https://postimg.cc/1fjLQL5K
", "https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg"];
var names = ["Fmaily Book"shkanrappa bankar", "geetha s bankar", "sandeep kanoji", "Vijayalakshmi", "diganth sk"chase"
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    
    var updatedImage = [images];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = [names] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
