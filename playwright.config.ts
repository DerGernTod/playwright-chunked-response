
export const stableConfig = {
    fullyParallel: true,
    reporter: [
        ["list"],
    ],
    timeout: 60 * 1000,
    testDir: "source",
    testMatch: "**/*.spec.ts",
    quiet: false,
    preserveOutput: "failures-only",
    projects: [
        {
            name: "webkit",
            use: { browserName: "webkit" }
        }
        // works fine on these browsers
        // {
        //     name: "chromium",
        //     use: { browserName: "chromium" }
        // },
        // {
        //     name: "firefox",
        //     use: {
        //         browserName: "firefox",
        //         recordHar: "off"
        //     }
        // },
    ]
};

export default stableConfig;
