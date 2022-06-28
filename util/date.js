export function getFormattedDate(date){
    //getMonth() returns the index and to fix it we have to add 1 to the format
    return date.toISOString().slice(0, 10);
}

export function getDateMinusDays(date, days) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}