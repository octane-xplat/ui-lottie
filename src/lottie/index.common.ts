/**********************************************************************************
 * (c) 2017, Nathan Walker.
 * Licensed under the MIT license.
 *
 * Version 1.0.0                                           walkerrunpdx@gmail.com
 **********************************************************************************/

import { CoreTypes, Property, View, booleanConverter } from '@nativescript/core';
import { KeyPathColors } from '.';

export class LottieViewBase extends View {
    public static compositionLoadedEvent = 'compositionLoaded';
    public static loadFailedEvent = 'loadFailed';
    // `declare`, not plain fields — under useDefineForClassFields (esbuild/
    // rolldown, es2022+ targets) plain declarations emit own-instance fields
    // that shadow the Property accessors register() installs, silently
    // breaking every property set. tsc emit never surfaced this.
    public declare stretch: CoreTypes.ImageStretchType;
    public declare async: boolean;
    public declare src: string;
    public declare loop: boolean;
    public declare autoPlay: boolean;
    public declare progress: number;
    public declare keyPathColors: KeyPathColors;
    public declare completionBlock: (animationFinished: boolean) => void;
}

export const srcProperty = new Property<LottieViewBase, string>({
    name: 'src'
});
srcProperty.register(LottieViewBase);

export const asyncProperty = new Property<LottieViewBase, boolean>({
    name: 'async',
    defaultValue: false,
    valueConverter: booleanConverter
});
asyncProperty.register(LottieViewBase);
export const loopProperty = new Property<LottieViewBase, boolean>({
    name: 'loop',
    defaultValue: false,
    valueConverter: booleanConverter
});
loopProperty.register(LottieViewBase);

export const autoPlayProperty = new Property<LottieViewBase, boolean>({
    name: 'autoPlay',
    defaultValue: false,
    valueConverter: booleanConverter
});
autoPlayProperty.register(LottieViewBase);

export const renderModeProperty = new Property<LottieViewBase, number>({
    name: 'renderMode'
});
renderModeProperty.register(LottieViewBase);

export const progressProperty = new Property<LottieViewBase, number>({
    name: 'progress'
});
progressProperty.register(LottieViewBase);

export const stretchProperty = new Property<LottieViewBase, CoreTypes.ImageStretchType>({
    name: 'stretch',
    defaultValue: 'aspectFit',
    affectsLayout: global.isIOS
});
stretchProperty.register(LottieViewBase);

export const keyPathColorsProperty = new Property<LottieViewBase, KeyPathColors>({
    name: 'keyPathColors'
});
keyPathColorsProperty.register(LottieViewBase);
