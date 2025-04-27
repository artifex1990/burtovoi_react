const rootElement = document.createElement("div");
rootElement.id = "root";
document.body.appendChild(rootElement);

const Message = (props) => <div className="message">{props.children}</div>;
const app = (
    <>
        <Message>Привет, мир!</Message>
        <Message>Пока, мир!</Message>
    </>
);

ReactDOM.createRoot(rootElement).render(app);