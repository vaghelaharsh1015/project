// JavaScript Program to Compare The Value of Two Dates

{
    const date1 = new Date('2025-12-01');
    const date2 = new Date('2025-11-30');

    if (date1.getTime() > date2.getTime()) {
        console.log("Date1 is later than Date2");
    } else if (date1.getTime() < date2.getTime()) {
        console.log("Date1 is earlier than Date2");
    } else {
        console.log("Date1 and Date2 are the same");
    }
}