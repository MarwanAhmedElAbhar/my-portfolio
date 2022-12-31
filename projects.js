const tagsList = [{
    name: "Vue",
    backgroundColor: "#41B983"
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
        img: "",
        link: "",
        githubRepo: "",
        tags: tagsList.filter(tag => ["Vue", "SASS"].includes(tag.name))
    },
    {

        id: 2,
        name: "Mapty",
        img: "",
        link: "",
        githubRepo: "",
        tags: tagsList.filter(tag => ["JavaScript", "SASS"].includes(tag.name))
    },
    {

        id: 3,
        name: "Jira Clone",
        img: "",
        link: "",
        githubRepo: "",
        tags: tagsList.filter(tag => ["Vue", "SASS", "JavaScript"].includes(tag.name))
    }
]
