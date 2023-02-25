const tagsList = [{
    name: "Vue",
    backgroundColor: "#41B983"
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
        link: "",
        githubRepo: "",
        tags: tagsList.filter(tag => ["JavaScript", "SASS"].includes(tag.name))
    },
]
