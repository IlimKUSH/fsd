import { Stack } from "@mui/material";
import { ReactNode } from "react";

export function FiltersLayout({children}: { children: ReactNode }) {
    return <Stack spacing={2}>{children}</Stack>;
}