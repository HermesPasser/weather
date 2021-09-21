export const dateFromString = (date) => new Date(Date.parse(date))

/**
 * @returns return a UTC formated string in the format 'Day-of-month-abbreviated, day-number Month-abbreviated'
 */
export function dateFormat(date) {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Ju', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const dayOfWeek = days[date.getUTCDay()]
    const month = months[date.getUTCMonth()] 
    return `${dayOfWeek}, ${date.getUTCDay()} ${month}`
}