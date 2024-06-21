const { Formatter, Status } = require('@cucumber/cucumber');

class CSVFormatter extends Formatter {

    constructor(options) {
        super(options);
        options.eventBroadcaster.on('envelope', this.processEnvelope.bind(this));
        this.log('Test,Status\n')
    }

    async processEnvelope(envelope) {
        if (envelope.testCaseFinished) {
            return this.finishTestCase(envelope.testCaseFinished)
        }
    }

    i = 0;

    async finishTestCase(testCase) {
        if (testCase.willBeRetried) return;
        const test = this.eventDataCollector.getTestCaseAttempt(testCase.testCaseStartedId);
        this.log(`${test.pickle.name},${test.worstTestStepResult.status}\n`);
    }

}

module.exports = CSVFormatter;
