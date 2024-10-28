function makeFunc() {
    const name = "Mozilla";
    function displayName() {
        console.log(name);
    }
    return displayName;
}

const myFunc = makeFunc();
myFunc();

// jab hum makeFunc sy displayName ko return kr rhy hain tb aisa lgyga k hun sirf displayNme k fun ko ly rhy hain r ismy error ajyga q ky usmy name ka asscess lia hua hain lkin name ka scope tou displayName sy bahir hain        lkin aisa ni hoga bechause of lexical scope const name b hmary pass return mein jyga