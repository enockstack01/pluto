import type { ITheme } from '@xterm/xterm';

const style = getComputedStyle(document.documentElement);
const cssVar = (token: string) => style.getPropertyValue(token) || undefined;

export function getTerminalTheme(overrides?: ITheme): ITheme {
  return {
    cursor: cssVar('--pluto-elements-terminal-cursorColor'),
    cursorAccent: cssVar('--pluto-elements-terminal-cursorColorAccent'),
    foreground: cssVar('--pluto-elements-terminal-textColor'),
    background: cssVar('--pluto-elements-terminal-backgroundColor'),
    selectionBackground: cssVar('--pluto-elements-terminal-selection-backgroundColor'),
    selectionForeground: cssVar('--pluto-elements-terminal-selection-textColor'),
    selectionInactiveBackground: cssVar('--pluto-elements-terminal-selection-backgroundColorInactive'),

    // ansi escape code colors
    black: cssVar('--pluto-elements-terminal-color-black'),
    red: cssVar('--pluto-elements-terminal-color-red'),
    green: cssVar('--pluto-elements-terminal-color-green'),
    yellow: cssVar('--pluto-elements-terminal-color-yellow'),
    blue: cssVar('--pluto-elements-terminal-color-blue'),
    magenta: cssVar('--pluto-elements-terminal-color-magenta'),
    cyan: cssVar('--pluto-elements-terminal-color-cyan'),
    white: cssVar('--pluto-elements-terminal-color-white'),
    brightBlack: cssVar('--pluto-elements-terminal-color-brightBlack'),
    brightRed: cssVar('--pluto-elements-terminal-color-brightRed'),
    brightGreen: cssVar('--pluto-elements-terminal-color-brightGreen'),
    brightYellow: cssVar('--pluto-elements-terminal-color-brightYellow'),
    brightBlue: cssVar('--pluto-elements-terminal-color-brightBlue'),
    brightMagenta: cssVar('--pluto-elements-terminal-color-brightMagenta'),
    brightCyan: cssVar('--pluto-elements-terminal-color-brightCyan'),
    brightWhite: cssVar('--pluto-elements-terminal-color-brightWhite'),

    ...overrides,
  };
}

