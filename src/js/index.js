const rootElement = document.createElement("div");
rootElement.id = "root";
document.body.appendChild(rootElement);

const root = ReactDOM.createRoot(rootElement);
let counter = 0;

function rerenderCounter() {
    const element = <Counter counter={counter}/>;
    counter++;
    root.render(element);
}

const Counter = ({counter}) => {
    return (
        <div>
            <span>Counter: {counter}</span>
        </div>
    );
}

rerenderCounter();
setInterval(rerenderCounter, 2000);