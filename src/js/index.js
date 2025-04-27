const rootElement = document.createElement("div");
rootElement.id = "root";
document.body.appendChild(rootElement);

const element = <>
    <h1>Добро пожаловать!</h1>
    <p>Это пример фрагмента в JSX</p>
    <button children="Нажми меня" />
</>;

ReactDOM.createRoot(rootElement).render(element);