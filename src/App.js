import "bulma/css/bulma.css";
import "./App.css";
import Course from "./Course"; //arrow fonksiyon kullanılırsa {Course} şeklinde yapılır
import Angular from "./images/angular.jpg";
import Bootstrap from "./images/bootstrap5.png";
import KompleWeb from "./images/kompleweb.jpg";
import Csharp from "./images/csharp.png";

function App() {
  return (
    <div className="App">
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">Kurslarım</p>
        </div>
      </section>
      <section className="section">
        <div className="columns">
          <div className="column">
            <Course
              image={Angular}
              title="Angular"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
         Ab, cumque labore assumenda expedita deserunt deleniti, ullam dolorum 
         laborum natus totam in ratione quae suscipit tempore explicabo nulla fuga eius neque?"
            />
          </div>
          <div className="column">
            <Course
              image={Bootstrap}
              title="Bootstrap 5"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
         Ab, cumque labore assumenda expedita deserunt deleniti, ullam dolorum 
         laborum natus totam in ratione quae suscipit tempore explicabo nulla fuga eius neque?"
            />
          </div>
          <div className="column">
            <Course
              image={KompleWeb}
              title="Komple Web"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
         Ab, cumque labore assumenda expedita deserunt deleniti, ullam dolorum 
         laborum natus totam in ratione quae suscipit tempore explicabo nulla fuga eius neque?"
            />
          </div>
          <div className="column">
            <Course
              image={Csharp}
              title="Csharp"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
         Ab, cumque labore assumenda expedita deserunt deleniti, ullam dolorum 
         laborum natus totam in ratione quae suscipit tempore explicabo nulla fuga eius neque?"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
