const MONEY_TO_CENT = {
    PENNY: 1,
    NICKEL: 5,
    DIME: 10,
    QUARTER: 25,
    ONE: 100,
    FIVE: 500,
    TEN: 1000,
    TWENTY: 2000,
    "ONE HUNDRED": 10000,
};

function checkCashRegister(price, cash, cid) {
    const due = cash - price;
    let dueInCents = due * 100;
    const availableInCents = cid.reduce((acc, [, amount]) => {
        return acc + amount * 100;
    }, 0.0);

    if (availableInCents === dueInCents) {
        return {status: "CLOSED", change: cid};
    }

    const change = cid
        .reverse()
        .map(([name, amount]) => {
            let total = 0;
            let nameValue = MONEY_TO_CENT[name];
            let amountCents = amount * 100;
            while (nameValue <= dueInCents && amountCents > 0) {
                total += nameValue;
                dueInCents -= nameValue;
                amountCents -= nameValue;
            }
            return [name, total / 100];
        })
        .filter(([, amount]) => amount > 0);

    if (dueInCents > 0) {
        return {status: "INSUFFICIENT_FUNDS", change: []};
    }

    return {status: "OPEN", change};
}


console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

