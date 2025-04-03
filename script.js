const emotions = ['happy', 'sad', 'neutral'];

let randomIndex = Math.floor(Math.random()*3)
console.log(randomIndex);
console.log(emotions[randomIndex]);


const emotionCollection = {
    happy: ['sun', 'flower', 'rose'],
    neutral: ['moon', 'tree', 'tulip'],
    sad: ['rain', 'cactus', 'pine']
}

const Template = ['Your vibe is similiar to ', 'You look like a ', 'Your favorite thing is ']


function makeMessage(emotion) {
    for (let i = 0; i < Template.length - 1; i ++) {
        switch (randomIndex){
            case 0:
                console.log(`${Template[i] + emotionCollection[0][i]}` );
                break;
            case 1:
                console.log(`${Template[i] + emotionCollection[1][i]}` );

            case 2:
                console.log(`${Template[i] + emotionCollection[2][i]}` );

        }    
    }
    
}
