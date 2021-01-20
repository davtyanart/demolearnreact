export const validate = val => {
    console.log(val)
    if (val.length === 4) {
        return {
            errorText: 'fill in',
            isValid: true
        }
    }
    return {
        errorText: '',
        isValid: false
    }
}