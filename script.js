const dots = document.querySelectorAll('.slider-dot');
  const wrapper = document.getElementById('sliderWrapper');
  const projectInfo = document.getElementById('projectInfo');
  const title = document.getElementById('projectTitle');
  const desc = document.getElementById('projectDesc');
  const view = document.getElementById('viewButton');

  var button = document.createElement("button");
  button.innerHTML = "view";
  
  document.getElementById("viewButton").appendChild(button);

  button.style.padding = "7px 20px";
  button.style.borderRadius = "4px";
  button.style.backgroundColor = "transparent"
  button.style.border = "0.3rem solid #fff"
  button.style.color = "#fff"
  button.style.cursor = "pointer";
  button.style.borderColor = "#b7474b"
  button.style.letterSpacing = "0.2rem"

  const projectData = [
    {
      title: 'Online Groceries Shop',
      description: 'Built an online grocery shop frontend using HTML, CSS, and JavaScript.Implemented functions such as add-to-cart and remove-from-cart feature using JavaScript',
      button:'view',
      link:'https://pragatheezz.github.io/Groceries/'
    },
    {
      title: 'Zoom Download Clone',
      description: 'Developed a clone of the Zoom download webpage using HTML, CSS, and JavaScript. Implemented for desktop view.',
      button:'view',
      link:'https://pragatheezz.github.io/zoomdownclone/'
    },
    {
      title: 'Simple Calculator',
      description: 'Built a functional calculator using HTML, CSS, and JavaScript with basic arithmetic operations (Addition, Subtraction, Multiplication, Division).',
      button:'view',
      link:'https://pragatheezz.github.io/calculator/'
    }
  ];

  const buttonFunction = ()=>{
    view.addEventListener('click',()=>{
      window.location.href = "#"
    })
  }

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const index = parseInt(dot.getAttribute('data-slide'));
      
      // Move Slider
      wrapper.style.transform = `translateX(-${index * 100}%)`;

      // Update dots
      dots.forEach(d => d.classList.remove('active'));
      dot.classList.add('active');

      // Animate Info Update
      projectInfo.classList.add('fade-out');
      setTimeout(() => {
        title.textContent = projectData[index].title;
        desc.textContent = projectData[index].description;
        button.textContent = projectData[index].button;

          // Remove existing event listeners by cloning the button
  const newButton = button.cloneNode(true);
  newButton.addEventListener("click", function() {
    window.open(projectData[index].link, "_blank"); // Opens in new tab
  });

  // Replace the old button with the new one
  view.replaceChild(newButton, button);
  button = newButton;

        projectInfo.classList.remove('fade-out');
      }, 300);
    });
  });

   const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Remove if you want it to animate only once
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('.word').forEach(el => {
    observer.observe(el);
  });

     const observer2 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Remove if you want it to animate only once
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('.heading').forEach(el => {
    observer2.observe(el);
  });
 
  document.getElementById('abt').addEventListener('click',()=>{
    document.getElementById('about').scrollIntoView({behavior:'smooth'});
  });

  document.getElementById('ski').addEventListener('click',()=>{
    document.querySelector('.heading').scrollIntoView({behavior:'smooth'});
  });

  document.getElementById('proj').addEventListener('click',()=>{
    document.getElementById('head').scrollIntoView({behavior:'smooth'});
  });

  document.getElementById('edu').addEventListener('click',()=>{
    document.getElementById('educ').scrollIntoView({behavior:'smooth'});
  });
document.getElementById('cont').addEventListener('click',()=>{
    document.getElementById('contac').scrollIntoView({behavior:'smooth'});
  });
  document.getElementById("abt").addEventListener("click", function(event) {
    event.preventDefault();  // Stop auto-refresh
    console.log("Button clicked without refresh!");
});
document.getElementById("ski").addEventListener("click", function(event) {
    event.preventDefault();  // Stop auto-refresh
    console.log("Button clicked without refresh!");
});
document.getElementById("proj").addEventListener("click", function(event) {
    event.preventDefault();  // Stop auto-refresh
    console.log("Button clicked without refresh!");
});
document.getElementById("edu").addEventListener("click", function(event) {
    event.preventDefault();  // Stop auto-refresh
    console.log("Button clicked without refresh!");
});
document.getElementById("cont").addEventListener("click", function(event) {
    event.preventDefault();  // Stop auto-refresh
    console.log("Button clicked without refresh!");
});
