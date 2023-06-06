import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import {useTranslation} from "react-i18next";

export function Header() {
    const [, i18n] = useTranslation("translations");
    return (
        <>
            <Box sx={{flexGrow: 1}}>
                <AppBar position="static">
                    <Toolbar>
                        <Box sx={{'& button': {m: 1}}}>
                            <Button variant="contained" size="small" onClick={() => i18n.changeLanguage("en")}>
                                EN
                            </Button>
                            <Button variant="contained" size="small" onClick={() => i18n.changeLanguage("es")}>
                                ES
                            </Button>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}