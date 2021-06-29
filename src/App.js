import Header from './components/header'
import Group from './components/group'

import './App.css'

function App() {

    const groups = [
        'Not Started',
        'In Progress',
        'Completed'
    ]

    const tasks = [
        {
            name: 'Code',
            group: 'In Progress'
        },
        {
            name: 'Watch Shakira',
            group: 'Completed'
        },
        {
            name: 'Code More',
            group: 'Not Started'
        },
        {
            name: 'Sleep',
            group: 'Not Started'
        },
        {
            name: 'Scream for no reason',
            group: 'Completed'
        },
        {
            name: 'Stop!!!',
            group: 'Not Started'
        },
        {
            name: 'Jump from balcony',
            group: 'In Progress'
        },
        {
            name: 'Listen to music',
            group: 'In Progress'
        },
        {
            name: 'Code',
            group: 'In Progress'
        },
        {
            name: 'Watch Shakira',
            group: 'Completed'
        },
        {
            name: 'Code More',
            group: 'Not Started'
        },
        {
            name: 'Sleep',
            group: 'Not Started'
        },
        {
            name: 'Scream for no reason',
            group: 'Completed'
        },
        {
            name: 'Stop',
            group: 'Not Started'
        },
        {
            name: 'Jump from balcony',
            group: 'In Progress'
        },
        {
            name: 'Listen to music',
            group: 'In Progress'
        },
        {
            name: 'Code',
            group: 'In Progress'
        },
        {
            name: 'Watch Shakira',
            group: 'Completed'
        },
        {
            name: 'Code More',
            group: 'Not Started'
        },
        {
            name: 'Sleep',
            group: 'Not Started'
        },
        {
            name: 'Scream for no reason',
            group: 'Completed'
        },
        {
            name: 'Stop',
            group: 'Not Started'
        },
        {
            name: 'Jump from balcony',
            group: 'In Progress'
        },
        {
            name: 'Listen to music',
            group: 'In Progress'
        },
        {
            name: 'Code',
            group: 'In Progress'
        },
        {
            name: 'Watch Shakira',
            group: 'Completed'
        },
        {
            name: 'Code More',
            group: 'Not Started'
        },
        {
            name: 'Sleep',
            group: 'Not Started'
        },
        {
            name: 'Scream for no reason',
            group: 'Completed'
        },
        {
            name: 'Stop',
            group: 'Not Started'
        },
        {
            name: 'Jump from balcony',
            group: 'In Progress'
        },
        {
            name: 'Listen to music',
            group: 'In Progress'
        },
    ]

    return (
        <div className="App">
            <Header name="Lokesh" fanOf="shakira" />
            <div className="groups">
                {
                    // (a, b) => (a+b)
                    //map function takes each element of an array or object and returns something from it
                    groups.map((group) => (
                        <Group name={group} tasks={tasks.filter(task => task.group === group)} />
                    ))
                }
            </div>
        </div>
    );
}

export default App