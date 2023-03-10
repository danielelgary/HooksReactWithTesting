module.exports = { 
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js'],
    collectCoverage: true,
    coverageReporters: ["lcov"],
    coverageDirectory: "test-coverage",
    coverageThreshold: 
    {
        "global": 
        {     
            "branches": 0,
            "functions": 0,
            "lines": 0,
            "statements": 0
        }      
    }
}
