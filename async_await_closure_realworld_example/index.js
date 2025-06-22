/**
Challenge:

1. Fetch a random image from the Dog API again 
(https://dog.ceo/api/breeds/image/random)

2. Access the DOM and insert the URL you got from the
API as an image `src` property (probably easiest if 
you create the image completely here in the JS and add 
it as the innerHTML of another element on the DOM)
*/
const divElement = document.getElementById("container")

// Because of closure, you must set whatever variable 
// your going to use from within the nested inner function.
const getDogImage = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random")
    if (response.ok) {
        const data = await response.json()
        console.log("Data:", data)
        const dogImage = data.message;
        const dogElement = `<img src="${dogImage}" alt="Dog image"/>`
        divElement.innerHTML = dogElement
    }
}

getDogImage()