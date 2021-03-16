//Declaring all the message
const message1=["The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela"]
const message2=["The way to get started is to quit talking and begin doing. -Walt Disney"]
const message3=["Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. -Steve Jobs"]
const message4=["If life were predictable it would cease to be life, and be without flavor. -Eleanor Roosevelt"]
const message5=["If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. -Oprah Winfrey"]
const message6=["If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. -James Cameron"]
const message7=["Life is what happens when you're busy making other plans. -John Lennon"]
const message8=["Spread love everywhere you go. Let no one ever come to you without leaving happier. -Mother Teresa"]
const message9=["When you reach the end of your rope, tie a knot in it and hang on. -Franklin D. Roosevelt"]
const message10=["Always remember that you are absolutely unique. Just like everyone else. -Margaret Mead"]
// array contendo as mensagens
const sentences=[message1,message2,message3,message4,message5,message6,message7,message8,message9,message10]

const emmitRandomMessage=(_parameter)=>{
    return sentences[Math.floor(Math.random() * 11)]
}
console.log(emmitRandomMessage(sentences))
