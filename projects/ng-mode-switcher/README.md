# Angular Mode Switcher

**ng-mode-switcher** is a versatile Angular library that allows developers to effortlessly integrate dark mode, light mode, and auto (system default) mode switching into their applications. With a simple configuration, you can provide users with a seamless experience, adapting to their preferred display settings.

This library offers full customization:

- **Configurable Display**: Choose to show or hide the mode-switching legend.
- **Customizable Mode Names**: Tailor the mode names to fit your application's branding or user experience.

Make your Angular applications more user-friendly and responsive to individual preferences with `ng-mode-switcher`.

## Installation

Install the npm package.

```bash
npm i ng-mode-switcher
```

Import in `NgModule`:

```ts
import { NgModeSwitcherModule } from 'ng-mode-switcher';

@NgModule({
    imports: [ NgModeSwitcherModule ]
})
```

## Usage

```html
<ng-mode-switcher></ng-mode-switcher>
```

You may pass `config` as an object:

```html
<ng-mode-switcher [config]="customConfig"></ng-mode-switcher>
```

### Custom Config

#### Hide the legend

```ts
customConfig: IConfig = {
    legend: {
        visible: false
    }
}
```

#### Add custom legends

```ts
customConfig: IConfig = {
    legend: {
        visible: true,
        LIGHT: 'day',
        DARK: 'night',
        SYSTEM: 'auto'
    }
}
```

## For any questions, suggestions, or feature requests

[Please file an issue!](https://github.com/jaganbishoyi/ng-mode-switcher/issues)

## License

License under the MIT License (MIT)

Copyright (c) 2024 [Jagan Mohan Bishoyi](http://jaganbishoyi.github.io/)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
