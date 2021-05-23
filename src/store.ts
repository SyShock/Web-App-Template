import { createStoreon, StoreonModule } from 'storeon'
import { storeonDevtools } from 'storeon/devtools';
import { openStorage } from './cache';

// Event registry (optional), used for code refs in order to navigate between files easier
export const EVENTS = {
    INC: 'inc',
    DEC: 'dec'
} as const

export const STATE = {
    COUNT: 'count'
} as const
// =======================================================================================

export type Events = {
    [EVENTS.INC]: number
    [EVENTS.DEC]: number
}

export type State = {
    [STATE.COUNT]: number
}


const defaultState = {
    count: 0
} as State

// Initial state, reducers and business logic are packed in independent modules
let count: StoreonModule<State, Events> = store => {
    // Initial state
    store.on('@init', () => (openStorage() || defaultState))

    // Reducers returns only changed part of the state
    store.on(EVENTS.INC, ({ count }) => ({ 
        count: count + 1
    }))

    store.on(EVENTS.DEC, ({ count }) => ({ 
        count: count - 1
    }))
}

export const store = createStoreon<State, Events>([
    count,
    storeonDevtools
])