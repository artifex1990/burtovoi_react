const element = React.createElement(
    'div', {
        className: 'app-container'
    }, 
    'Моё первое приложение',
    React.createElement('p', {key: '1'}, 'Это первый параграф')
);

ReactDOM.createRoot(document.getElementById('root')).render(element);