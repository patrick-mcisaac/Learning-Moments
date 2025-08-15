// jest.config.cjs
module.exports = {
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["<rootDir>/jest.setup.cjs"],
    moduleNameMapper: {
        "\\.(css|less|sass|scss)$": "identity-obj-proxy",
        "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/fileMock.cjs"
    },
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "babel-jest"
    }
}
