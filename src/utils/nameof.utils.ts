export const nameof = <T>(name: keyof T | null | undefined) => name as string | null | undefined;