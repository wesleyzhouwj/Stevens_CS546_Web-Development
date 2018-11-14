async function getAbout(){
    let about = {
        "name":"Weijia Zhou",
        "cwid":"10429862",
        "biography":"my name is Weijia Zhou.\nMy major is computer science!",
        "favouriteShows":["actionShows","LoveShows","TalkShows"],
        "hobbies":["Soccer","Basketball","Badmintons"]
    }
    return about;
}
async function getStory(){
    let story = {
        "storyTitle":"My First champion",
        "story":"It is my first badminton match.\nI tried my best.\nFinally, i get the first place of this match."
    }
    return story;
}
async function getEducation(){
    let education = 
        [
            {
                "schoolName":"Fudan University",
                "degree":"Bachler",
                "favouriteClass":"DataBase",
                "favouriteMemory":"The moment i get an A in this course"
            },
            {
                "schoolName":"Stevens Institute of Technology",
                "degree":"master",
                "favouriteClass":"Machine Learning",
                "favouriteMemory":"i learnd several models from this course,such as SVM,PCA,LinearRegression model"
            },
            {
                "schoolName":"The second high school attached to Beijing normal university",
                "degree":"High school",
                "favouriteClass":"math",
                "favouriteMemory":"This course let me feel the magic of math"
            }
        ]
    return education;
}

module.exports = {
    getAbout,
    getStory,
    getEducation
};


