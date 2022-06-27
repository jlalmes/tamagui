import React from 'react';
import { SpaceDirection, SpaceTokens, StackProps, StaticConfig, StaticConfigParsed, StylableComponent, TamaguiComponent, TamaguiElement } from './types';
export declare const mouseUps: Set<Function>;
export declare function createComponent<ComponentPropTypes extends Object = {}, Ref = TamaguiElement, BaseProps = never>(configIn: Partial<StaticConfig> | StaticConfigParsed, ParentComponent?: StylableComponent): TamaguiComponent<ComponentPropTypes, Ref, BaseProps, {}>;
export declare const Unspaced: {
    (props: {
        children?: any;
    }): any;
    isUnspaced: boolean;
};
export declare type SpacerProps = Omit<StackProps, 'flex' | 'direction'> & {
    size?: number | SpaceTokens;
    flex?: boolean | number;
    direction?: SpaceDirection;
};
export declare const Spacer: TamaguiComponent<SpacerProps, TamaguiElement, never, {}>;
export declare type SpacedChildrenProps = {
    isZStack?: boolean;
    children?: any;
    space?: any;
    spaceFlex?: boolean | number;
    direction?: SpaceDirection;
    separator?: React.ReactNode;
};
export declare function spacedChildren({ isZStack, children, space, direction, spaceFlex, separator, }: SpacedChildrenProps): any;
export declare function AbsoluteFill(props: {
    children?: React.ReactNode;
}): JSX.Element;
export declare function assignNativePropsToWeb(elementType: string, viewProps: any, nativeProps: any): void;
//# sourceMappingURL=createComponent.d.ts.map