/**
 * Utility functions for filtering events based on their dates.
 * 
 * We show future events up till the point where the start date is 7 days
 * from today to handle events that run for a week.
 * 
 * !!WARNING!! if you move the current date (new Date()) call to somewhere with  "use client" you may
 * get hydration errors as the dates might be different on the server and client
 * causing some events to be shown on the server and not on the client

 * @module eventUtils
 */

/**
 * Filters events to return only those that have already occurred (start date is more than 7 days in the past).
 * 
 * @param {Array} events - The array of event objects to filter
 * @param {string} events[].startDate - The start date of each event as a string that can be parsed by Date constructor
 * @returns {Array} Array of event objects with start dates older than 7 days from today
 */

export function getPastEvents(events) {
    
    const todayMinusSevenDays = new Date();
    todayMinusSevenDays.setDate(todayMinusSevenDays.getDate() - 7);

    return events.filter(event => {
        const eventStartDate = new Date(event.startDate);
        return eventStartDate <= todayMinusSevenDays;
    });
}


/**
 * Filters events to return only upcoming events (start date is within 7 days in the past or in the future).
 * 
 * @param {Array} events - The array of event objects to filter
 * @param {string} events[].startDate - The start date of each event as a string that can be parsed by Date constructor
 * @returns {Array} Array of event objects with start dates within the last 7 days or in the future
 */

export function getUpcomingEvents(events) {
    
    const todayMinusSevenDays = new Date();
    todayMinusSevenDays.setDate(todayMinusSevenDays.getDate() - 7);

    return events.filter(event => {
        const eventStartDate = new Date(event.startDate);
        return eventStartDate > todayMinusSevenDays;
    });

}