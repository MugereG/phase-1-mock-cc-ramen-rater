// write your code here
document.addEventListener("DOMContentLoaded", () => {
  const ramenMenu = document.getElementById("ramen-menu")

  // I am going to fetch this ramen from the server
  fetch("http://localhost:3000/ramens")
    .then((response) => response.json())
    .then((ramens) => {
      
        // I wil loop through the ramens and display the images
      ramens.forEach((ramen) => {
        const img = document.createElement("img")
        img.src = ramen.image;
        img.alt = ramen.name;
        img.addEventListener("click", () => displayRamenDetail(ramen))
        ramenMenu.appendChild(img)
      });

      if (ramens.length > 0) {
        displayRamenDetail(ramens[0])
        newRamenForm.reset()
      }
    })
    .catch((error) => console.error("Error fetching ramen data:", error))
});

//The function of this second code is to go ahead and display the details of the ramen to the page.
function displayRamenDetail(ramen) {
    const ramenDetail = document.getElementById("ramen-detail")
    const nameElement = ramenDetail.querySelector(".name")
    const restaurantElement = ramenDetail.querySelector(".restaurant")
    const imageElement = ramenDetail.querySelector(".detail-image")
    const ratingDisplay = document.getElementById("rating-display")
    const commentDisplay = document.getElementById("comment-display")
  
    nameElement.textContent = ramen.name;
    restaurantElement.textContent = ramen.restaurant
    imageElement.src = ramen.image;
    imageElement.alt = ramen.name;
    ratingDisplay.textContent = ramen.rating;
    commentDisplay.textContent = ramen.comment;
  }
  const newRamenForm = document.getElementById("new-ramen")
  newRamenForm.addEventListener("submit", (event) => {
    event.preventDefault();
  
    // The function of this is to get hold of the form values
    const name = document.getElementById("new-name").value;
    const restaurant = document.getElementById("new-restaurant").value;
    const image = document.getElementById("new-image").value;
    const rating = parseInt(document.getElementById("new-rating").value);
    const comment = document.getElementById("new-comment").value;
  
    // After that I will be  creating a new Ramen
    const newRamen = {
      name,
      restaurant,
      image,
      rating,
      comment,
    };
  
    // Display the new ramen on the menu
    displayNewRamen(newRamen);
  });
  
  function displayNewRamen(ramen) {
    const ramenMenu = document.getElementById("ramen-menu")
    const img = document.createElement("img")
    img.src = ramen.image;
    img.alt = ramen.name;
    img.addEventListener("click", () => displayRamenDetail(ramen))
    ramenMenu.appendChild(img);
  }
    
