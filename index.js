// code your solution here

function saturdayFun(activity = 'roller-skate') {
    let message = `This Saturday, I want to ${activity}!`
    return message
};

function mondayWork(activity = 'go to the office') {
    let message = `This Monday, I will ${activity}.`
    return message;
};

function wrapAdjective(thing = 'special') {
    function inner(addon = '*') {
        const message = `You are ${thing}${addon}${thing}!`
        return message
    }
    return inner;
}