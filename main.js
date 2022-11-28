var Images = ["https://upload.wikimedia.org/wikipedia/en/0/03/Wonder_Cover_Art.png", "https://www.paper-tree.co.nz/assets/azkaban_79956_3.jpg", "https://cdn2.penguin.com.au/covers/original/9780143796053.jpg", "https://kbimages1-a.akamaihd.net/8e118fdc-7eb2-41b9-94a1-3dea9973d722/1200/1200/False/the-cloud-searchers-a-graphic-novel-amulet-3.jpg"];
var Books = ["Wonder", "Harry Potter and the Prisoner of Azkaban", "Diary of a Wimpy Kid: Wrecking Ball", "Amulet: The Cloud Searchers"];
var i = 0;
function Update()
{
    i++;
    var array = 3
    if(i > array)
      {
          i = 0;
      }
    
    var updatedImage = [Images[i]];
    var updatedBooks = [Books[i]];
 
    document.getElementById("bookcover").src = updatedImage;
    document.getElementById("bookname").innerHTML = updatedBooks;
}
