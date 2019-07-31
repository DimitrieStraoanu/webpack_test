//...webpack imports
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
//...
import {Dog} from './scripts/dog'
let dog = new Dog('Rex');
dog.move();
dog.speak();