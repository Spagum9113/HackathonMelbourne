/**
 * Converts a date string to a human readable format.
 * 
 * @param {string} dateString - The date string to convert.
 * @returns {string} A formatted date string in the format "Thu, Apr 24, 12:00 PM".
 */

export function humanReadableDate(dateString) {
    
    return new Date(dateString).toLocaleString('en-US', {
        weekday: 'short', // e.g., "Thu"
        month: 'short',   // e.g., "Apr"
        day: 'numeric',   // e.g., "24"
        hour: 'numeric',  // e.g., "12"
        minute: 'numeric', // e.g., "00"
        hour12: true,     // e.g., "PM"
    });
}