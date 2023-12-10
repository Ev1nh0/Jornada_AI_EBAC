export default {
    jump: new KeyboardEvent('keydown', {key: 'apace', keyCode: 32}),
    dispatch(event) {
        document.dispatchEvent(this[event]);
    }
}