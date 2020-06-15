import { ExtensionDB } from "./source";

/**
 * all mimes are backed up with at least 1 empty string to avoid IF ELSE cross the code
 */
export const getExtension = (mime: string) => {
    return ExtensionDB[mime].extensions[0];
};
