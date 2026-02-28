let testResults = ["pass", "pass", "fail", "pass", "skip", "pass", "fail", "pass"];
let pass = 0;
let fail = 0;
let skip = 0;

for(let i = 0; i <= testResults.length; i++){

if( testResults[i] == 'pass'){
	pass = pass + 1;
	}
	else if (testResults[i] == 'fail'){
	fail = fail+1;
	}
	else {
	skip = skip +1;
	}
}
console.log("Total Tests = " + testResults.length);
console.log("Passed = " + pass);
console.log("Failed = " + fail);
console.log("Skipped = " + skip);
console.log("Pass Percentage =" + (pass/testResults.length*100) + "%");

    if (pass == testResults.length){
        verdict = "All tests passed";
    }
    else if (fail <= 2){
        verdict = "Review before release";
    }
console.log("Verdict: " + verdict);
