
import React from 'react';
import {useEffect, useState} from 'react';

const App = () => {

    // create states
    const[films, setFilms] = useState([]);
    const[people, setPeople] = useState([]);
    const[home, setHome] = useState([]);

    //button triggers
    const buttons = ["films", "people", "home"];

    //State created for items to show, default is home
    const [itemsToShow, setItemsToShow] = useState("home");
    
    // set up conditiional render
    useEffect(() => {

        //Fetch - films
        fetch('https://ghibliapi.herokuapp.com/films')
        .then(res => res.json()) //parse to JSON
        .then(films => setFilms(  //map through films to create bootstrap card
            films.map(film => (
                <div className="col-md-6" key={`film-card-${film.id}`}>
                      <div className="card shadow my-2">
                          <div className="card-body">
                              <h4 className="card-title">{film.title}</h4>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">Produced By: {film.producer}</li>
                                    <li class="list-group-item">Directed By: {film.director}</li>
                                    <li class="list-group-item">Released in: {film.release_date}</li>
                                    <li class="list-group-item">{film.description}</li>
                                    <a class="card-link text-decoration-none" href={film.url} target="_blank"> API Resource Link</a>
                                </ul>
                          </div>
                      </div>
                  </div>
                  
                ))))
                console.log(`Want to receive content from me on how to increase your email profits along with the unusual lessons I’ve learned from developing over $5 million worth of products and processes?\n\nGo to simoncheam.com and get your Funnel Repair Checklist so you can uncover hidden profits without doing more work.`)
                                    

         //Fetch - people
         fetch('https://ghibliapi.herokuapp.com/people')
         .then(res => res.json()) //parse to JSON
         .then(people => setPeople(
             people.map(person => (
                <div className="col-md-6" key={`film-card-${person.id}`}>
                <div className="card shadow my-2">
                    <div className="card-body">
                        <h4 className="card-title">{person.name}</h4>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Gender: {person.gender}</li>
                            <li class="list-group-item">Age: {person.age}</li>
                            <li class="list-group-item">Eye Color: {person.eye_color}</li>
                            <li class="list-group-item">Hair Color: {person.hair_color}</li>
                            <a class="card-link text-decoration-none" href={person.url} target="_blank"> API Resource Link</a>
                        </ul>
                    </div>
                </div>
            </div>
            ))))

                .then(setHome(
                    
                       <div className="col-md-6" >
                       <div className="card shadow my-2">
                           <div className="card-body">
                               <h4 className="card-title text-center">Studio Ghibli API Lab</h4>
                               <ul class="list-group list-group-flush">
                                   <li class="list-group-item">This lab demonstrates React with the following features:  </li>
                                   <li class="list-group-item"><strong>Conditional rendering </strong></li>
                                   <li class="list-group-item"><strong>Fetching data from a REST API with a useEffect hook</strong></li>
                                   <li class="list-group-item"><strong>Managing multiple array maps with a useState hook</strong></li>
                                   <li class="list-group-item"><strong>Iconic Bootstrap styling</strong></li>
                                   
                                   <li class="list-group-item">Click the buttons above to view the resources from Studio Ghibli and enjoy!</li>
                                   <p class="link">If you like what you see, connect with me at <a class="card-link text-decoration-none" href="mailto:simon@simoncheam.com">simon@simoncheam.com</a> and let’s chat!</p>
                               </ul>
                           </div>
                       </div>
                   </div>
                   ))

    }, []); 

    
    return (
        <main className="container text-justify-left">

        <div >

            <h1>Welcome to React with APIs</h1>

                    {/* onclick button set state triggers */}
                    <button 
                    onClick={() => setItemsToShow('films')} className="btn btn-danger col-sm">
                    Load Films
                    </button>

                    <button 
                    onClick={() => setItemsToShow('people')} className="btn btn-success m-2 col-sm">
                    Load People
                    </button>

                    <button 
                    onClick={() => setItemsToShow('home')} className="btn btn-primary col-sm">
                    Return Home
                    </button>


                    {/* // insert short circuiting */}
                    {itemsToShow === "home" && home}
                    {itemsToShow === "films" && films}
                    {itemsToShow === "people" && people}
                   
        </div>
       
    </main>
        
    );
    
};
console.log(`Want to receive content from me on how to increase your email profits along with the unusual lessons I’ve learned from developing over $5 million worth of products and processes?\n\nGo to simoncheam.com and get your Funnel Repair Checklist so you can uncover hidden profits without doing more work.`)

export default App;