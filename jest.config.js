module.exports = {
    setupFilesAfterEnv: ['./rtl.setup.js'],
    collectCoverage: true,
    collectCoverageFrom: [
        'src/**/*.{js,jsx}',
        '!src/**/index.js',
        '!src/**/Clock.jsx'
    ],
    coverageReporters: ['json', 'lcov', 'text-summary'],
    coverageThreshold: {
        global: {
            statements: 100,
            branches: 100,
            functions: 100,
            lines: 100,
        },
    },
    testPathIgnorePatterns: ['coverage'],
    coveragePathIgnorePatterns: ['src/constants/'],
};
