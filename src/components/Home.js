import React, {Component} from "react";
import axios from "axios";
import Table from 'react-bootstrap/lib/Table';
import Button from 'react-bootstrap/lib/Button';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
class Home extends Component {
  constructor(props){
    super(props);
    this.state={
      row:{},
      showResults:false,
      forEdit:null
    };
    //this.handleLogoutClick = this.handleLogoutClick.bind(this);

  }
  componentDidMount(state){
	console.log(this);

  }


  render() {

  


    return (
      <div className="fluidcontainer">
    <p>Ice Age is a 2002 American computer-animated buddy comedy-drama film directed by Chris Wedge and co-directed by Carlos Saldanha from a story by Michael J. Wilson. Produced by Blue Sky Studios as its first feature film, it was released by 20th Century Fox on March 15, 2002. </p><p>The film features the voices of Ray Romano, John Leguizamo, and Denis Leary. Set during the days of the ice age, the film centers around three main characters- Manny (Romano), a no-nonsense woolly mammoth; Sid (Leguizamo), a loudmouthed ground sloth; and Diego (Leary), a saber-tooth tiger- who come across a human baby and work together to return a human baby to its tribe. </p><p>Additionally, the film occasionally follows Scrat, a speechless "saber-toothed squirrel" voiced by Wedge who is perpetually searching for a place in the ground to bury his acorn. Ice Age was originally intended as a 2D animated movie developed by Fox Animation Studios, but eventually became the first full-length animated movie for the newly-reformed Blue Sky, which had been reshaped from a special FX house to a CG animation studio. Focus shifted from making an action-adventure drama film to a more comedy-oriented one, and several writers, such as Michael Berg and Peter Ackerman, were brought on to bring out a wittier tone. Upon release, Ice Age was met with mostly positive reviews and was nominated at the 75th Academy Awards for Best Animated Feature, losing to Spirited Away.</p><p> It was a box office success by grossing over $383 million, starting the Ice Age franchise. It was followed by four sequels, Ice Age: The Meltdown in 2006, Ice Age: Dawn of the Dinosaurs in 2009, Ice Age: Continental Drift in 2012, and Ice Age: Collision Course in 2016.</p>
    </div>
    )
  }
}
export default Home
