// import React, { useEffect } from 'react';
// import react from '../../image/react.png'
// import props from '../../image/props.png'
// import useeffect from '../../image/useEffect.png'
import './Blog.css'

const Blog = () => {
    return (
        <div className="blog_container">
            <div className="container">
                <div className="box-container">
                    <div className="blog">
                        <h1 className="blog_title">1. What is the purpose of react router</h1>
                        <div className="blog_image">
                            {/* <img src={react} alt="" /> */}
                        </div>
                        <p className="blog_text mt-4">ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route. React Router is a standard library system built on top of the React and used to create routing in the React application using React Router Package. It provides the synchronous URL on the browser with data that will be displayed on the web page. It maintains the standard structure and behavior of the application and mainly used for developing single page web applications.</p>
                    </div>
                    <div className="blog">
                        <h1 className="blog_title">2. How does context API works</h1>
                        <div className="blog_image">
                            {/* <img src={props} alt="" /> */}
                        </div>
                        <p className="blog_text mt-4">The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux. React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state. More information can be found on React's documentation page</p>
                    </div>
                    <div className="blog">
                        <h1 className="blog_title">3. what does useeffect do rather than loading data with api</h1>
                        <div className="blog_image">
                            {/* <img src={useeffect} alt="" /> */}
                        </div>
                        <p className="blog_text mt-4">Essentially, useRef is like a “box” that can hold a mutable value in its .current property. You might be familiar with refs primarily as a way to access the DOM. If you pass a ref object to React with, React will set its .current property to the corresponding DOM node whenever that node changes. This works because useRef() creates a plain JavaScript object. The only difference between useRef() and creating a object yourself is that useRef will give you the same ref object on every render.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;