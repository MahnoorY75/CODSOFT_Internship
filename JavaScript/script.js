document.addEventListener("DOMContentLoaded", function()
{
    var text = document.querySelector(".h1");
    text.classList.add("active");
})

document.addEventListener("DOMContentLoaded", function() {
    var textElement = document.querySelector(".text");
    textElement.classList.add("active"); // Add the "active" class to trigger the transition
})

function scrollToProjects() {
    var projectsSection = document.getElementById('projects');

    if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function scrollToSkills()
{
    var skills = document.getElementById('part4');
    if(skills)
    {
        skills.scrollIntoView({behavior:'smooth'});
    }
}
function scrollToContact()
{
    var contact = document.getElementById('main');
    if(contact)
    {
        contact.scrollIntoView({behavior:'smooth'});
    }

}