import { Illustration, Anchor, Shape, Ellipse} from "react-zdog";
import { useEffect, useState } from "react";

const Helicpoter = ({tiltSide = 'left', speed = 3}: {tiltSide?: 'left' | 'right', speed?: number}) => {
    const TAU = Math.PI * 2;
    const [rotation, setRotation] = useState({x: 0, y: 0, z: 0});

    const tiltRotate = {x: (TAU / 4) * 1.2, y: (TAU / 4) * 0.1 * (tiltSide === 'left' ? 1 : -1), z: 0}

    useEffect(() => {
        let animationId: number;

        const startTime = Date.now();
        const animate = () => {
            const time = Date.now();
            const elapsed = time - startTime;
            const spinSpeed = speed * 0.001;
            const rotate = elapsed * -spinSpeed;

            setRotation({x: 0, y: 0, z: rotate});

            animationId = requestAnimationFrame(animate);
        }

        animate();

        return () => {
            if (animationId) {
                cancelAnimationFrame(animationId);
            }
        };
    }, [speed])

    const createLeaf = () => {
        const leafPath = [
            {x: -10, y: 10}, 
            {x: -10, y: 30},
            {arc: [
                {x: -10, y: 40},
                {x: 0, y: 40},
            ]},
            {arc: [
                {x: 10, y: 40},
                {x: 10, y: 30},
            ]},
            {x: 10, y: 10},
            {arc: [
                {x: 10, y: 0},
                {x: 0, y: 0},
            ]},
            {arc: [
                {x: -10, y: 0},
                {x: -10, y: 10},
            ]},
        ];

        const leafSettings = [
            {rotate: {x: 0, y: 0, z: 0}, translate: {x: 0, y: 5, z: 0}},
            {rotate: {x: 0, y: 0, z: TAU / 4}, translate: {x: -5, y: 0, z: 0}},
            {rotate: {x: 0, y: 0, z: TAU / 2}, translate: {x: 0, y: -5, z: 0}},
            {rotate: {x: 0, y: 0, z: -TAU / 4}, translate: {x: 5, y: 0, z: 0}},
        ]

        const createCenter = () => {
            return (
                <Ellipse
                    diameter={13}
                    color={'#E07A5F'}
                    fill={true}
                    stroke={8}
                />
            )
        }

        return (
            <Anchor rotate={rotation}>
                {leafSettings.map((setting, index) => (
                    <Shape
                        key={index}
                        path={leafPath}
                        stroke={5}
                        color={'#3D405B'}
                        fill={true}
                        rotate={setting.rotate}
                        translate={setting.translate}
                    />
                ))}
                {createCenter()}
            </Anchor>
        )
    }

    return (
        <div className='landing-page-card-helicpoter'>
            <Illustration style={{width: '100%', height: '100%'}}>
                <Anchor 
                    rotate={tiltRotate}
                    translate={{x: 0, y: 20, z: 0}}
                >
                    {createLeaf()}
                </Anchor>
                <Shape
                    path={[{x: 0, y: 20}, {x: 0, y: 80}]}
                    stroke={5}
                    color={'rgb(202, 120, 97)'}
                    fill={true}
                    translate={{x: 0, y: 0, z: 3}}
                />
            </Illustration>
        </div>
    )
}

export default Helicpoter;