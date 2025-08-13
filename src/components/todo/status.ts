import type {Status} from "./types.ts";

export const statusColor: Record<string, string> = {
    OPEN: "bg-blue-100 text-blue-800",
    IN_PROGRESS: "bg-yellow-100 text-yellow-800",
    DONE: "bg-green-100 text-green-800"
};


export const status: Record<Status, Status> = {
    OPEN: "OPEN",
    IN_PROGRESS: "IN_PROGRESS",
    DONE: "DONE"
} as const;