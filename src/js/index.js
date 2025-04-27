const rootElement = document.createElement("div");
rootElement.id = "root";
document.body.appendChild(rootElement);

const props = {
    className: "default-class",
    children: "Заглушка",
    id: "test-id"
};

const actualText = "Привет, JSX!";
const className  = "my-container";

const element = <div {...props} className={className} children={actualText} />;

ReactDOM.createRoot(rootElement).render(element);