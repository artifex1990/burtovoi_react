const rootElement = document.createElement("div");
rootElement.id = "root";
document.body.appendChild(rootElement);

const MathResult = ({a, b}) => {
    return (
        <div>
            <span>{a + b !== 0 ? `Сумма равна ${a + b}` : 'Сумма ничему не равна'}</span>
        </div>
    );
}

const element = (
    <>
        <MathResult a={1} b={2}/>
        <MathResult a={0} b={0}/>
    </>
);

ReactDOM.createRoot(rootElement).render(element);