import {Theme, ThemeType} from "./Theme.model";
import {Color} from "../../models/color.model";

export const THEMES: Record<ThemeType, Theme> = {
    light: {
        '--primary': Color.ROBINEGG,
        '--secondary': Color.BLUEDIANNE,
        '--background': Color.WHITE,
        '--white': Color.WHITE,

    },
    dark: {
        '--primary': Color.ROBINEGG,
        '--secondary': Color.WHITE,
        '--background': Color.BLACKCURRANT,
        '--white': Color.WHITE,
    }
};