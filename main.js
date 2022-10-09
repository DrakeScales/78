document.getElementById("no").style.display="none";
var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg", "https://cdn4.iconfinder.com/data/icons/political-elections/50/48-512.png" ,"https://media.tenor.com/DHkmuHqDPLcAAAAd/troll-face-sus.gif",  "https://miro.medium.com/freeze/max/800/1*hqnm_B757NYEo0zjTqapqg.gif", "https://t3.ftcdn.net/jpg/01/91/08/34/360_F_191083470_VtFAYAD2WjBIyvFk80Llr7sJ0hAFhCv3.jpg", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4ba755ea-bfb8-4a72-8450-8e98ac9541a9/dew8r9u-bea0dd3c-13ee-4112-a8e2-863693c7397a.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzRiYTc1NWVhLWJmYjgtNGE3Mi04NDUwLThlOThhYzk1NDFhOVwvZGV3OHI5dS1iZWEwZGQzYy0xM2VlLTQxMTItYThlMi04NjM2OTNjNzM5N2EucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.sAXx6KauSkr2X5DznJEkTft-UIdPU_2deAcH872ZEsg", ];
var names = ["Fmaily Book", "Maki Ryo", "U think ill let u know bout my family", "Don't click next!", "IF UR CURIOS", "RICK ASTLEY"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    if(i > 4)
      {
            
          document.getElementById("no").style.display="inline-block";
      }

    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i];
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
