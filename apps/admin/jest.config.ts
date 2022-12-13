/* eslint-disable */
export default {
    displayName: 'admin',//<!--"firas halouani"-->
    preset: '../../jest.preset.js',
    setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
    globals: {
        'ts-jest': {
            tsconfig: '<rootDir>/tsconfig.spec.json',
            stringifyContentPathRegex: '\\.(html|svg)$',//<!--"firas halouani"-->
        },
    },
    coverageDirectory: '../../coverage/apps/admin',
    transform: {//<!--"firas halouani"-->
        '^.+\\.(ts|mjs|js|html)$': 'jest-preset-angular',
    },
    transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
    snapshotSerializers: [
        'jest-preset-angular/build/serializers/no-ng-attributes',
        'jest-preset-angular/build/serializers/ng-snapshot',
        'jest-preset-angular/build/serializers/html-comment',//<!--"firas halouani"-->
    ],
}
