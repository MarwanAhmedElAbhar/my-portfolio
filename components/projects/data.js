const tagsList = [{
    name: "Vue",
    backgroundColor: "#41B983"
},
{
    name: "CSS",
    backgroundColor: "#264de4"
},
{
    name: "Firebase",
    backgroundColor: "#ffa72c"
},
{
    name: "SASS",
    backgroundColor: "#CF649A"
}, {
    name: "JavaScript",
    backgroundColor: "#F7E01D"
}
]

export default  [
    {
        id: 1,
        name: "Markdown Editor",
        img: "img/markdown.png",
        link: "https://markdown-live-editor.vercel.app/",
        githubRepo: "https://github.com/marwan-elabhar/markdown-editor",
        tags: tagsList.filter(tag => ["Vue", "Firebase", "SASS"].includes(tag.name))
    },
    {

        id: 2,
        name: "Mapty",
        img: "img/mapty-icon.png",
        link: "https://mapty-main.vercel.app/",
        githubRepo: "https://github.com/marwan-elabhar/mapty",
        tags: tagsList.filter(tag => ["JavaScript", "CSS"].includes(tag.name))
    },
    {

        id: 3,
        name: "Forkify",
        img: "img/forkify.png",
        link: "https://forkify-web-app.vercel.app/",
        githubRepo: "https://github.com/marwan-elabhar/forkify-app",
        tags: tagsList.filter(tag => ["JavaScript", "SASS"].includes(tag.name))
    },
    {

        id: 4,
        name: "Nexter",
        img: "img/nexter.png",
        link: "https://nexter-nu-seven.vercel.app/",
        githubRepo: "https://github.com/marwan-elabhar/nexter",
        tags: tagsList.filter(tag => ["SASS"].includes(tag.name))
    },
]
