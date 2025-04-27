const rootElement = document.createElement("div");
rootElement.id = "root";
document.body.appendChild(rootElement);

const element = <div className="app-container">
    <p>Это абзац внутри JSX.</p>
</div>;

ReactDOM.createRoot(rootElement).render(element);