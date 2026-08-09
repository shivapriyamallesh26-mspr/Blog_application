// Login
function loginUser() {
    alert("Login successful!");
    window.location.href = "dashboard.html";
    return false;
}


// Register
function registerUser() {
    alert("Registration successful!");
    window.location.href = "login.html";
    return false;
}


// Create Blog
// Create Blog
document.addEventListener("DOMContentLoaded", function () {

    const blogForm = document.getElementById("blogForm");

    if (blogForm) {

        blogForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const title = document.getElementById("blogTitle").value;
            const category = document.getElementById("category").value;
            const content = document.getElementById("content").value;

            const blog = {
                title: title,
                category: category,
                content: content
            };

            let blogs = JSON.parse(localStorage.getItem("blogs")) || [];

            blogs.push(blog);

            localStorage.setItem("blogs", JSON.stringify(blogs));

            alert("Blog published successfully!");

            blogForm.reset();

            window.location.href = "dashboard.html";
        });
    }

});
// Display blogs on Dashboard

const blogList = document.getElementById("blogList");

if (blogList) {

    const blogs = JSON.parse(localStorage.getItem("blogs")) || [];

    blogs.forEach(function (blog, index) {

        const blogCard = document.createElement("div");

        blogCard.className = "blog-card";

        blogCard.innerHTML = `
            <h3>${blog.title}</h3>
            <p><strong>Category:</strong> ${blog.category}</p>
            <p>${blog.content}</p>

            <button onclick="editBlog(${index})">Edit</button>
            <button onclick="deleteBlog(${index})">Delete</button>
        `;

        blogList.appendChild(blogCard);
    });
}


// Delete Blog
function deleteBlog(index) {

    let blogs = JSON.parse(localStorage.getItem("blogs")) || [];

    blogs.splice(index, 1);

    localStorage.setItem("blogs", JSON.stringify(blogs));

    alert("Blog deleted successfully!");

    location.reload();
}


// Edit Blog
function editBlog(index) {

    let blogs = JSON.parse(localStorage.getItem("blogs")) || [];

    const newTitle = prompt("Enter new title:", blogs[index].title);

    if (newTitle === null) {
        return;
    }

    const newCategory = prompt("Enter new category:", blogs[index].category);

    if (newCategory === null) {
        return;
    }

    const newContent = prompt("Enter new content:", blogs[index].content);

    if (newContent === null) {
        return;
    }

    blogs[index].title = newTitle;
    blogs[index].category = newCategory;
    blogs[index].content = newContent;

    localStorage.setItem("blogs", JSON.stringify(blogs));

    alert("Blog updated successfully!");

    location.reload();
}