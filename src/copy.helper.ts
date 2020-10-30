import { readFileSync, writeFileSync } from 'fs';

export function copyPartial(sourcePath: string, targetPaths: string[], keys: string[]): void {
    const source = loadJson(sourcePath, true);

    targetPaths.forEach((path) => {
        const targetFile = loadJson(path);

        keys.forEach((key) => {
            targetFile[key] = source[key];
        });

        writeFileSync(path, JSON.stringify(targetFile));
    });
}

function loadJson(path: string, throwError = false) {
    try {
        return JSON.parse(readFileSync(path).toString());
    } catch (e) {
        if (throwError) {
            throw e;
        }
        return {};
    }
}
