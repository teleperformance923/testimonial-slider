const testimonials = [
    {
      name: "Naruto U",
      photoUrl:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
      text: "I will never give up, that's my ninja way",
    },
    {
      name: "Sakura ",
      photoUrl:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
      text: "Training extremely hard is a way out for us shinobies",
    },
    {
      name: "Constantine V",
      photoUrl:
        "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
      text: "Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. The very best.",
    },
  ];
  // this the dom manipulation

  const imgEl = document.querySelector("img");
  const textEl = document.querySelector(".text");
  const usernameEl = document.querySelector(".username");
  // this is to keep track of the current index of the testimonial being shown and it starts with 0
  let idx = 0;
  // Calls the function to display the first testimonial
  updateTestimonial();
  
  // Extracts name, photo, text from the object above based on idx
  // imgEl.src is for obtaining the data
  // textEL is to update text and the other to update name
  // the iteration is for resetting idx to 0 when it reaches the end of the testimonials array, making the display cycle
  // timeout sets a 10-second delay before calling the function to update again to display the next testimonial
  function updateTestimonial() {
    const { name, photoUrl, text } = testimonials[idx];
    imgEl.src = photoUrl;
    textEl.innerText = text;
    usernameEl.innerText = name;
    idx++;
    if (idx === testimonials.length) {
      idx = 0;
    }
    setTimeout(() => {
      updateTestimonial();
    }, 10000);
  }