/* Your Code Here */

function createEmployeeRecord(arra = []) {
    const record = {
        firstName: arra[0],
        familyName: arra[1],
        title: arra[2],
        payPerHour: arra[3],
        timeInEvents: [],
        timeOutEvents: []
    };
    console.log("Created Employee Record:", record); 
    return record;
}

function createEmployeeRecords(dataArra) {
    return dataArra.map(createEmployeeRecord);
}

function createTimeInEvent(dateAndTime) {
    const [date, hourStr] = dateAndTime.split(" ");
    const hour = Number(hourStr);

    const timeInEvent = {
        type: "TimeIn",
        hour: hour,
        date: date
    };

    this.timeInEvents.push(timeInEvent);
    console.log("Added TimeIn Event:", timeInEvent);
    return this
};

function createTimeOutEvent(dateAndTime) {
    const [date, hourStr] = dateAndTime.split(" ");
    const hour = Number(hourStr);

    const timeOutEvent = {
        type: "TimeOut",
        hour: hour,
        date: date
    };

    this.timeOutEvents.push(timeOutEvent);
    console.log("Added TimeOut Event:", timeOutEvent);
    return this;
};

function hoursWorkedOnDate(date) {
    const timeInEvent = this.timeInEvents.find(event => event.date === date);
    const timeOutEvent = this.timeOutEvents.find(event => event.date === date);

    let hoursWorked = (timeOutEvent.hour - timeInEvent.hour) / 100;

    return hoursWorked;
};

function wagesEarnedOnDate(date) {
    let hoursWorked = hoursWorkedOnDate.call(this, date);
    let wages = hoursWorked * this.payPerHour;

    return wages;
};

function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(record => record.firstName === firstName)
};

function calculatePayroll(employeeRecords) {
    let payRoll = employeeRecords.reduce((total, employee) => {
        console.log("Processing Employee:", employee);
        let employeeWages = allWagesFor.call(employee);
        console.log("Employee Wages:", employee, employeeWages);
        return total + employeeWages;
    }, 0);
    return payRoll;
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */



const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

