const dateObj = { lastDayOfHeisei: new Date(2019, 3, 30, 9) }

const stringifiedDateObj = JSON.stringify(dateObj)

JSON.parse(stringifiedDateObj)

typeof _.lastDayOfHeisei

const circular = { bar: 1 }

circular.foo = circular

JSON.stringify(circular)



const circularWithDate = { lastDayOfHeisei: new Date(2019, 3, 30, 9) }

circularWithDate.foo = circularWithDate

const serializedCircularWithDate = v8.serialize(circularWithDate)

v8.deserialize(serializedCircularWithDate)

_.lastDayOfHeisei instanceof Date