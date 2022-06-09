export function checkEnvValue(key: string, value: string | undefined) {
    if (value === undefined) {
        console.error(`${key} is not defined`);
        process.exit(1);
    }
}
