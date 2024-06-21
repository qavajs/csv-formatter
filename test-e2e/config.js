module.exports = {
    default: {
        memory: {},
        paths: ['test-e2e/features/**/*.feature'],
        require: ['./test-e2e/step_definitions/custom_steps.js'],
        format: [['./src/formatter.js', 'test-e2e/report/report.csv']],
        formatOptions: {
            console: {
                showLogs: true,
                showProgress: true
            }
        },
        retry: 3
    }
}
