import { motion } from "motion/react";
import { memo } from "react";
import Planet from "./planets/Planet";
import PairPlanets from "./planets/PairPlanets";
import SpaceShip from "./spaceShip/SpaceShip";
import GrabbableBlock from "./reusableComponent/GrabbableBlock";

const SpaceContainer = ({ containerInView, mediaType }: { containerInView: boolean, mediaType: 'pc' | 'tablet' | 'mobile' }) => {

    const getSpaceShipPosition = () => {
        switch(mediaType) {
            case 'pc':
                return {x: '-190%', y: '-130%'};
            case 'tablet':
                return {x: '-190%', y: '-130%'};
            case 'mobile':
                return {x: '-100%', y: '-135%'};
        }
    }

    const getPlanetPosition = () => {
        switch(mediaType) {
            case 'pc':
                return {x: '200%', y: '-150%'};
            case 'tablet':
                return {x: '200%', y: '-150%'};
            case 'mobile':
                return {x: '50%', y: '70%'};
        }
    }


    return (
        <section className="start-exploring-canvas-container">
            {/* {mediaType !== 'mobile' && (     */}
                <motion.div 
                    className="planet-container"
                    initial={{
                        opacity: 0,
                        scale: 0.5,
                        x: '-50%',
                        y: '-50%',
                    }}
                    animate={{
                        opacity: containerInView ? 1 : 0,
                        scale: containerInView ? 1 : 0.5,
                        x: containerInView ? getPlanetPosition().x : '-50%',
                        y: containerInView ? getPlanetPosition().y : '-50%',
                    }}
                    transition={{
                        type: 'spring',
                        bounce: 0,
                    }}
                >
                    <GrabbableBlock>
                        <Planet zoom={mediaType === 'mobile' ? 0.7 : 1} />
                    </GrabbableBlock>
                </motion.div>
            {/* )} */}
            {mediaType !== 'mobile' && (
                <motion.div 
                    className="planet-container"
                    initial={{
                        opacity: 0,
                        scale: 0.5,
                        x: '-50%',
                        y: '-50%',
                    }}
                    animate={{
                        opacity: containerInView ? 1 : 0,
                        scale: containerInView ? 1 : 0.5,
                        x: containerInView ? '-320%' : '-50%',
                        y: containerInView ? '50%' : '-50%',
                    }}
                    transition={{
                        type: 'spring',
                        bounce: 0,
                        delay: containerInView ? 0.1 : 0,
                    }}
                >
                    <GrabbableBlock>
                        <Planet tiltSide="right" sphereSize={55} ringSize={75} ringStroke={8} tiltSpeed={1.5} sphereColor="rgb(247, 182, 130)" ringColor="#3D405B" />
                    </GrabbableBlock>
                </motion.div>
            )}
            {mediaType !== 'mobile' && (
                <motion.div 
                    className="pair-planets-container"
                    initial={{
                        opacity: 0,
                        scale: 0.5,
                        x: '-50%',
                        y: '-50%',
                    }}
                    animate={{
                        opacity: containerInView ? 1 : 0,
                        scale: containerInView ? 1 : 0.5,
                        x: containerInView ? '125%' : '-50%',
                        y: containerInView ? '40%' : '-50%',
                    }}
                    transition={{
                        type: 'spring',
                        bounce: 0,
                        delay: containerInView ? 0.2 : 0,
                    }}
                >
                    <GrabbableBlock>
                        <PairPlanets />
                    </GrabbableBlock>
                </motion.div>
            )}
            <motion.div 
                className="space-ship-container"
                initial={{
                    opacity: 0,
                    scale: 0.5,
                    x: '-50%',
                    y: '-50%',
                }}
                animate={{
                    opacity: containerInView ? 1 : 0,
                    scale: containerInView ? 1 : 0.5,
                    x: containerInView ? getSpaceShipPosition().x : '-50%',
                    y: containerInView ? getSpaceShipPosition().y : '-50%',
                }}
                transition={{
                    type: 'spring',
                    bounce: 0,
                    delay: containerInView ? 0.2 : 0,
                }}
            >
                <GrabbableBlock>
                    <SpaceShip zoom={mediaType === 'mobile' ? 0.7 : 1} />
                </GrabbableBlock>
            </motion.div>
        </section>
    )
}

export default memo(SpaceContainer);