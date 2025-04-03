const emotions = ['happy', 'sad', 'neutral'];



const emotionCollection = {
    happy : {
        thing : ['sun', 'rainbow', 'flowers'],
        animal: ['Girrafe', 'Golden Retriever', 'Zebra'],
        activity: ['smiling', 'talking', 'dancing']

    },
    neutral : {
        thing : ['moon', 'clouds', 'trees'],
        animal: ['Koala', 'Dog', 'Chicken'],
        activity: ['reading', 'standing', 'sitting'],
    },
    sad : {
        thing : ['rain', 'storm', 'night'],
        animal: ['Sloth', 'Cat', 'Penquin'],
        activity: ['lying', 'watching Tv', 'sleeping']
    },
}

const Template = ['Your vibe is similiar to ', 'Your spirit animal is ', 'Your favorite activity is ']
let randomIndex = Math.floor(Math.random()*3)


function makeMessage(emotion) {
    console.log(`Your mood is ${emotion}!`);
    console.log('');
        
    let moodData = emotionCollection[emotion];
    
    let i = 0;
    for (const key in moodData) { 
        let randomIndex = Math.floor(Math.random()*3)
        console.log(`${Template[i] + moodData[key][randomIndex]}`);
        i++;
    }
}
    


makeMessage(emotions[randomIndex]);
