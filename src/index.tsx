import { render, h } from 'preact';
import { StoreContext } from 'storeon/preact';
import App from './App';
import { saveStorage } from './cache';
import './index.css';
import { store } from './store';

window.addEventListener('beforeunload', () => saveStorage(store))

render(
    <StoreContext.Provider value={store}>
        <App />
    </StoreContext.Provider>,
    document.getElementById('root') as any
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
    import.meta.hot.accept();
}

// Service Worker
// Used to make an offline app aka progressive web app (PWA)
if ('serviceWorker' in navigator) {
    try {
        navigator.serviceWorker.register('service-worker.js').then(worker => (window as any).registeredServiceWorker = worker)
        console.info('Service Worker Registered!')
    } catch (err) {
        console.error(err);
    }
}