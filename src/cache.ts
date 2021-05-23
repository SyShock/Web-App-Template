const KEY = 'STATE'

export function openStorage() {
    return JSON.parse(localStorage.getItem(KEY) as string)
}

export function saveStorage(store: any) {
    const state = store.get()

    if (Object.keys(state).length === 0){
        return
    }

    localStorage.setItem(KEY, JSON.stringify(state))
}
