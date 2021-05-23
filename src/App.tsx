import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import logo from './logo.svg';
import './App.css';
import { EVENTS, STATE, State, store } from './store';
import { connectStoreon } from 'storeon/preact';

const Style = () => (
    <style jsx>{`
        .App-header {
            position: relative;
            background-color: var(--background-color); 
            color: var(--text-color);
        }
    `}</style>
)

function App(props: State) {
    const { count } = props

    // Create the count state.
    const [timerCount, setCount] = useState(0);

    // Create the counter (+1 every second).
    useEffect(() => {
        const timer = setTimeout(() => setCount(timerCount + 1), 1000);
        return () => clearTimeout(timer);
    }, [timerCount, setCount]);

    // Return the App component.
    return (
        <div className="App">
            <Style></Style>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>This boilerplate works using snowpack plugins</p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                </a>
                <p>Page has been open for <code>{timerCount}</code> seconds.</p>
                <Counter />
                <label>Counting {count}</label>
            </header>
        </div>
    );
}

export default connectStoreon(STATE.COUNT, App);


function _Counter(props: State) {
    const { count } = props

    const increment = () => {
        store.dispatch(EVENTS.INC, count)
    }

    return <div>
        <button onClick={increment}>{count}</button>
    </div>
}
const Counter = connectStoreon(STATE.COUNT, _Counter)

