# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



               {/* <div className="card">
                   <img className="avatar" src="https://thefirstyearblog.com/wp-content/uploads/2018/01/3-ingredient-coffee-whipped-cream-5.jpg" alt="coffee"></img>
                   <div className="container">
                       <h4><b>Capuccino</b></h4>
                       <p>this is description</p>
                       <button className="btn1" id="btn1">Add to Cart</button>
                   </div>
               </div> */}



               import React, { useEffect, useState } from 'react'



// function Review () {
//   const [review, setReview] = useState([])

//   useEffect(() => {
//     const fetchData = async () => {
//       const result = await fetch('/reviews')
//       const jsonResult = await result.json()

//       setReview(jsonResult)
//     }

//     fetchData()
//   }, [])

  
//   const submitAuthor = async () => {
//     const result = await fetch('/reviews', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//     })

//     const resultInJson = await result.json()
//     setReview(prev => [...prev, resultInJson])
//   }

//   return (
//     <div className='review__container'>
//       <button onClick={submitAuthor}>Submit review</button>
//       <h2>review:</h2>
//       {review.map(review =>
//         <div key={review.review} className='review__item'>
         
//           <p>{review.review}</p>
//           {/* <p>{review.user_id}</p>
//           <p>{review.coffee_id}</p> */}
//         </div>)}
//     </div>
//   )
// }

// export default Review




<!-- import { useState }  from "react";

const Review = () => {
    const [review, setReview] = useState('');
    const [userId, setUserId] = useState('');
    const [coffeeId, setCoffeeId] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const reviews = {review, userId, coffeeId};

        fetch('/reviews',{
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(reviews)
        }).then(() => {
            console.log("data added")
        })
    }
    return (
        <div className="create">
          <h2>Add a Review</h2>
          <form onSubmit={handleSubmit}>
            <label>user review:</label>
            <input 
              type="text" 
              required 
              value={review}
              onChange={(e) => setReview(e.target.value)}
            />
            <label>user id:</label>
            <textarea
              required
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            ></textarea>
            <label>coffee id:</label>
            <textarea
              required
              value={coffeeId}
              onChange={(e) => setCoffeeId(e.target.value)}
            ></textarea>
            <button>Add review</button>
          </form>
        </div>
      );
    }
     
    export default Review; -->
