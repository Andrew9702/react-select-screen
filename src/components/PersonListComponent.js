import React , {Component} from 'react';

class PersonListComponent extends Component {
    render() { 
        return (  
            <div className='personList'>
                <ul>
                    <li>
                        Person 1
                    </li>
                    <li>
                        Person 2
                    </li>
                    <li>
                        Person 3
                    </li>
                    <li>
                        Person 4
                    </li>
                    <li>
                        Person 5
                    </li>
                </ul>
            </div>
        );
    }
}
 
export default PersonListComponent;