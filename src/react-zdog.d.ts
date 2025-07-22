/* eslint-disable @typescript-eslint/no-explicit-any */
declare module 'react-zdog' {
  import { ComponentType, ReactNode, CSSProperties } from 'react';

  interface BaseShapeProps {
    stroke?: number | boolean;
    color?: string;
    fill?: boolean;
    closed?: boolean;
    visible?: boolean;
    backface?: boolean | string;
    front?: {x?: number, y?: number, z?: number};
    translate?: {x?: number, y?: number, z?: number};
    rotate?: {x?: number, y?: number, z?: number};
    scale?: number | {x?: number, y?: number, z?: number};
    children?: ReactNode;
    [key: string]: any;
  }

  interface IllustrationProps {
    zoom?: number;
    dragRotate?: boolean;
    style?: CSSProperties;
    element?: string;
    frameloop?: 'always' | 'demand';
    pointerEvents?: boolean;
    centered?: boolean;
    resize?: boolean | 'fullscreen';
    onResize?: (width: number, height: number) => void;
    onPrerender?: (context: any) => void;
    onDragStart?: () => void;
    onDragMove?: () => void;
    onDragEnd?: () => void;
    translate?: {x?: number, y?: number, z?: number};
    rotate?: {x?: number, y?: number, z?: number};
    scale?: number | {x?: number, y?: number, z?: number};
    children?: ReactNode;
    [key: string]: any;
  }

  // Shape - 自定義形狀
  interface ShapeProps extends BaseShapeProps {
    path?: Array<
      | {x?: number, y?: number, z?: number}
      | {line: {x?: number, y?: number, z?: number}}
      | {move: {x?: number, y?: number, z?: number}}
      | {arc: [{x?: number, y?: number, z?: number}, {x?: number, y?: number, z?: number}]}
      | {bezier: [{x?: number, y?: number, z?: number}, {x?: number, y?: number, z?: number}, {x?: number, y?: number, z?: number}]}
    >;
  }

  // Rect - 矩形
  interface RectProps extends BaseShapeProps {
    width?: number;
    height?: number;
  }

  // RoundedRect - 圓角矩形
  interface RoundedRectProps extends BaseShapeProps {
    width?: number;
    height?: number;
    cornerRadius?: number;
  }

  // Ellipse - 橢圓
  interface EllipseProps extends BaseShapeProps {
    diameter?: number;
    width?: number;
    height?: number;
    quarters?: number;
  }

  // Polygon - 多邊形
  interface PolygonProps extends BaseShapeProps {
    radius?: number;
    sides?: number;
  }

  // Hemisphere - 半球
  interface HemisphereProps extends BaseShapeProps {
    diameter?: number;
  }

  // Cone - 圓錐
  interface ConeProps extends BaseShapeProps {
    diameter?: number;
    length?: number;
  }

  // Cylinder - 圓柱
  interface CylinderProps extends BaseShapeProps {
    diameter?: number;
    length?: number;
    frontFace?: string | boolean;
  }

  // Box - 立方體
  interface BoxProps extends BaseShapeProps {
    width?: number;
    height?: number;
    depth?: number;
    frontFace?: string | boolean;
    rearFace?: string | boolean;
    leftFace?: string | boolean;
    rightFace?: string | boolean;
    topFace?: string | boolean;
    bottomFace?: string | boolean;
  }

  // Anchor - 錨點/群組
  interface AnchorProps {
    translate?: {x?: number, y?: number, z?: number};
    rotate?: {x?: number, y?: number, z?: number};
    scale?: number | {x?: number, y?: number, z?: number};
    children?: ReactNode;
    [key: string]: any;
  }

  // Group - 群組
  interface GroupProps extends AnchorProps {
    visible?: boolean;
    updateSort?: boolean;
  }

  // 導出所有組件
  export const Illustration: ComponentType<IllustrationProps>;
  export const Shape: ComponentType<ShapeProps>;
  export const Rect: ComponentType<RectProps>;
  export const RoundedRect: ComponentType<RoundedRectProps>;
  export const Ellipse: ComponentType<EllipseProps>;
  export const Polygon: ComponentType<PolygonProps>;
  export const Hemisphere: ComponentType<HemisphereProps>;
  export const Cone: ComponentType<ConeProps>;
  export const Cylinder: ComponentType<CylinderProps>;
  export const Box: ComponentType<BoxProps>;
  export const Anchor: ComponentType<AnchorProps>;
  export const Group: ComponentType<GroupProps>;

  // Hooks
  export function useRender(callback: () => void): void;
  export function useZdog(): any;
  export function useInvalidate(): () => void;
}