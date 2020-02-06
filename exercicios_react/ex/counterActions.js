export function inc() {
    return { type: 'INC' }
}

export function dec() {
    return { type: 'DEC' }
}

export function zerar() {
    return { type: 'ZERAR' }
}

export function stepChanged(e) {
    return {
        type: 'STEP_CHANGED',
        payload: e.target.value
    }
}