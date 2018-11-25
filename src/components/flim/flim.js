import React, {Component} from "react";
import axios from "axios";
import Table from 'react-bootstrap/lib/Table';
import Button from 'react-bootstrap/lib/Button';
import {Pagination} from 'react-bootstrap';
class Flim extends Component{
    constructor(props){
        super(props);
        this.state={ };
    };
    render(){
        return(
            <div className="fluidcontainer">
				<p>Ice Age (2002)</p>
					<p>Main article: Ice Age (2002 film)
					Sid, a talkative sloth, is left behind by his family and the herds of mammals journeying to the south. He meets Manny, a mammoth who travels to the north, and decides to follow him. When a humans' camp is attacked by tigers, a woman takes her baby and jumps into a river and falls over a waterfall. Before she disappears, the baby is rescued by Manny and Sid. The two animals decide to search for the father and return the baby to him. Diego, one of the tigers that attacked the humans, comes also claiming the baby, and the trio form an uneasy alliance during their journey to the humans.</p>
					<p>Ice Age: The Meltdown (2006)</p>
					<p>Main article: Ice Age: The Meltdown
					Manny, Sid, and Diego are currently living in a large valley surrounded by an enormously high ice wall on all sides. However, the trio discovers that the ice wall is actually a wall that is barely holding a massive body of water that could flood the valley to nearly a mile underwater. A vulture tells them that there is a boat at the other end of the valley that may save them all, but they only have three days to reach it or die. Manny is also having trouble fearing the fact that he may be the last mammoth left. Along the way, they meet Ellie, a mammoth who thinks she is a possum, and her possum brothers Crash and Eddie. As they begin to travel together, Manny learns, with help from Diego and Sid, that he must move on from his past. During their journey, Scrat the sabre-toothed squirrel has his own adventure.</p>
					<p>Ice Age: Dawn of the Dinosaurs (2009)</p>
					<p>Main article: Ice Age: Dawn of the Dinosaurs
					Manny and Ellie are expecting their first child, meanwhile Scrat falls in love with fellow squirrel Scratte. Meanwhile, Diego is anxious about settling down for a domestic life with Manny's new family. Sid begins to wish for a family of his own, and steals some dinosaur eggs which leads to Sid ending up in a strange underground world where his herd must rescue him. The herd also meets an insane one-eyed weasel known as Buck who aids them on their quest.</p>
					<p>Ice Age: Continental Drift (2012)</p>
					<p>Main article: Ice Age: Continental Drift
					Taking place several years after the events of the third film, with Peaches now a teenager, Scrat's pursuit of acorns has world-changing consequences, separating Manny, Sid and Diego from the rest of their group. As they try to return home, they come into conflict with a pirate gang led by Captain Gutt.</p>
					<p>Ice Age: Collision Course (2016)</p>
					<p>Main article: Ice Age: Collision Course
					Set after the events of Continental Drift, Scrat's pursuit of his elusive acorn catapults him outside of Earth aboard a UFO, where he accidentally sets off a series of cosmic events that transform and threaten the planet. To save themselves from peril, Manny, Sid, Diego, and the rest of the herd leave their home and reunite with Buck, who leads them on a journey to find a way to save the planet.</p>	
				</div>
        )
    };
}
export default Flim;