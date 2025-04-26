const body = document.querySelector('body');

const root = document.createElement('div');
root.id = 'root';
body.appendChild(root);

const appContainer = document.createElement('div');
appContainer.id = 'app-container';
appContainer.textContent = 'Моё первое приложение';
root.appendChild(appContainer);

const p = document.createElement('p');
p.textContent = 'Это первый параграф.';
appContainer.appendChild(p);

const button = document.createElement('button');
button.textContent = 'Нажми меня';
appContainer.appendChild(button);