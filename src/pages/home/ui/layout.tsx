import {Container, Grid} from "@mui/material";
import {ReactNode} from "react";

export function Layout({
    actions,
    mainPageInfo,
    mainContent,
    sidebar
}: {
    actions: ReactNode,
    mainPageInfo: ReactNode,
    sidebar: ReactNode,
    mainContent: ReactNode
}) {

    return (
        <Container>
            <Grid container>
                <Grid item xs={12} md={3}>{actions}</Grid>
                <Grid item>{mainPageInfo}</Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12} md={3}>{sidebar}</Grid>
                <Grid item xs={12} md={9}>{mainContent}</Grid>
            </Grid>
        </Container>
    )
}