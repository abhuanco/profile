import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import {useTranslation} from "react-i18next";
import {ButtonGroup} from "@mui/material";
import "./Header.scss"
import {useState} from "react";

const Header = (props: any) => {
    const [, i18n] = useTranslation("translations");
    const [active, setActive] = useState(String);
    const onClickLanguage = async (lang: string) => {
        await i18n.changeLanguage(lang);
        setActive(lang)
    }

    return (
        <>
            <Box>
                <AppBar position="static" color="transparent" className="mss-header">
                    <Toolbar className="mss-header-toolbar">
                        <Box>
                            <ButtonGroup size="small">
                                <Button variant="contained"
                                    className={active === 'en' ? 'mss-button-lang mss-active' : 'mss-button-lang'}
                                    size="small" onClick={() => onClickLanguage("en")}>
                                    EN
                                </Button>
                                <Button variant="contained"
                                    className={active === 'es' ? 'mss-button-lang mss-active' : 'mss-button-lang'}
                                    size="small" onClick={() => onClickLanguage("es")}>
                                    ES
                                </Button>
                            </ButtonGroup>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
};

export default Header;