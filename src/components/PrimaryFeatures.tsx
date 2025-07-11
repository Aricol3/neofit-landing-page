'use client'

import {Fragment, useEffect, useId, useRef, useState} from 'react'
import {Tab, TabGroup, TabList, TabPanel, TabPanels} from '@headlessui/react'
import clsx from 'clsx'
import {
    type MotionProps,
    type Variant,
    type Variants,
    AnimatePresence,
    motion,
} from 'framer-motion'
import {useDebouncedCallback} from 'use-debounce'

import {AppScreen} from '@/components/AppScreen'
import {CircleBackground} from '@/components/CircleBackground'
import {Container} from '@/components/Container'
import {PhoneFrame} from '@/components/PhoneFrame'
import {
    DiageoLogo,
    LaravelLogo,
    MirageLogo,
    ReversableLogo,
    StatamicLogo,
    StaticKitLogo,
    TransistorLogo,
    TupleLogo,
} from '@/components/StockLogos'

import iphone from "../images/iphone-15-pro-max.png"
import iphone2 from "../images/iphone-2.png"
import nutrition from "../images/nutrition1.png"
import activity from "../images/activity.png"
import Image from "next/image";

const MotionAppScreenHeader = motion(AppScreen.Header)
const MotionAppScreenBody = motion(AppScreen.Body)

interface CustomAnimationProps {
    isForwards: boolean
    changeCount: number
}

const features = [
    {
        name: 'Log it your way — manually, with barcodes, or custom meals',
        description: 'Track calories and macros with ease, and let Neofit crunch the numbers for your daily goals.',
        icon: DeviceUserIcon,
        screen: InviteScreen,
    },
    {
        name: 'Every set, rep, and PR — all in one place.',
        description: 'Whether it’s a heavy leg day or a quick lift, Neofit keeps track of your progress and exercise history.',
        icon: DeviceNotificationIcon,
        screen: StocksScreen,
    },
    {
        name: 'Real insights, not just pretty charts',
        description: 'Neofit reviews your meals and workouts to show how your habits are adding up — and where to tweak things for better results.',
        icon: DeviceTouchIcon,
        screen: InvestScreen,
    },
]

function DeviceUserIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
            <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2}/>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16 23a3 3 0 100-6 3 3 0 000 6zm-1 2a4 4 0 00-4 4v1a2 2 0 002 2h6a2 2 0 002-2v-1a4 4 0 00-4-4h-2z"
                fill="#737373"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5 4a4 4 0 014-4h14a4 4 0 014 4v24a4.002 4.002 0 01-3.01 3.877c-.535.136-.99-.325-.99-.877s.474-.98.959-1.244A2 2 0 0025 28V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 001.041 1.756C8.525 30.02 9 30.448 9 31s-.455 1.013-.99.877A4.002 4.002 0 015 28V4z"
                fill="#A3A3A3"
            />
        </svg>
    )
}

function DeviceNotificationIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
            <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2}/>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z"
                fill="#A3A3A3"
            />
            <path
                d="M9 8a2 2 0 012-2h10a2 2 0 012 2v2a2 2 0 01-2 2H11a2 2 0 01-2-2V8z"
                fill="#737373"
            />
        </svg>
    )
}

function DeviceTouchIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
    let id = useId()

    return (
        <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
            <defs>
                <linearGradient
                    id={`${id}-gradient`}
                    x1={14}
                    y1={14.5}
                    x2={7}
                    y2={17}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#737373"/>
                    <stop offset={1} stopColor="#D4D4D4" stopOpacity={0}/>
                </linearGradient>
            </defs>
            <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2}/>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5 4a4 4 0 014-4h14a4 4 0 014 4v13h-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 002 2h4v2H9a4 4 0 01-4-4V4z"
                fill="#A3A3A3"
            />
            <path
                d="M7 22c0-4.694 3.5-8 8-8"
                stroke={`url(#${id}-gradient)`}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M21 20l.217-5.513a1.431 1.431 0 00-2.85-.226L17.5 21.5l-1.51-1.51a2.107 2.107 0 00-2.98 0 .024.024 0 00-.005.024l3.083 9.25A4 4 0 0019.883 32H25a4 4 0 004-4v-5a3 3 0 00-3-3h-5z"
                fill="#A3A3A3"
            />
        </svg>
    )
}

const headerAnimation: Variants = {
    initial: {opacity: 0, transition: {duration: 0.3}},
    animate: {opacity: 1, transition: {duration: 0.3, delay: 0.3}},
    exit: {opacity: 0, transition: {duration: 0.3}},
}

const maxZIndex = 2147483647

const bodyVariantBackwards: Variant = {
    opacity: 0.4,
    scale: 0.8,
    zIndex: 0,
    filter: 'blur(4px)',
    transition: {duration: 0.4},
}

const bodyVariantForwards: Variant = (custom: CustomAnimationProps) => ({
    y: '100%',
    zIndex: maxZIndex - custom.changeCount,
    transition: {duration: 0.4},
})

const bodyAnimation: MotionProps = {
    initial: 'initial',
    animate: 'animate',
    exit: 'exit',
    variants: {
        initial: (custom: CustomAnimationProps, ...props) =>
            custom.isForwards
                ? bodyVariantForwards(custom, ...props)
                : bodyVariantBackwards,
        animate: (custom: CustomAnimationProps) => ({
            y: '0%',
            opacity: 1,
            scale: 1,
            zIndex: maxZIndex / 2 - custom.changeCount,
            filter: 'blur(0px)',
            transition: {duration: 0.4},
        }),
        exit: (custom: CustomAnimationProps, ...props) =>
            custom.isForwards
                ? bodyVariantBackwards
                : bodyVariantForwards(custom, ...props),
    },
}

type ScreenProps =
    | {
    animated: true
    custom: CustomAnimationProps
}
    | { animated?: false }

function InviteScreen({ animated}: ScreenProps) {
    const MotionDiv = animated ? motion.div : 'div'

    return (
        <MotionDiv
            key="invite"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full flex items-center justify-center"
        >
            <Image src={nutrition} alt="Nutrition" className="w-full h-auto rounded-3xl" priority />
        </MotionDiv>
    )
}

function StocksScreen({ animated}: ScreenProps) {
    const MotionDiv = animated ? motion.div : 'div'

    return (
        <MotionDiv
            key="invite"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full flex items-center justify-center"
        >
            <Image src={activity} alt="Nutrition" className="w-full h-auto rounded-3xl" priority />
        </MotionDiv>
    )
}

function InvestScreen({ animated}: ScreenProps) {
    const MotionDiv = animated ? motion.div : 'div'

    return (
        <MotionDiv
            key="invite"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full flex items-center justify-center"
        >
            <Image src={nutrition} alt="Nutrition" className="w-full h-auto rounded-3xl" priority />
        </MotionDiv>
    )
}

function usePrevious<T>(value: T) {
    let ref = useRef<T>()

    useEffect(() => {
        ref.current = value
    }, [value])

    return ref.current
}

function FeaturesDesktop() {
    let [changeCount, setChangeCount] = useState(0)
    let [selectedIndex, setSelectedIndex] = useState(0)
    let prevIndex = usePrevious(selectedIndex)
    let isForwards = prevIndex === undefined ? true : selectedIndex > prevIndex

    let onChange = useDebouncedCallback(
        (selectedIndex) => {
            setSelectedIndex(selectedIndex)
            setChangeCount((changeCount) => changeCount + 1)
        },
        100,
        {leading: true},
    )

    return (
        <TabGroup
            className="grid grid-cols-12 items-center gap-8 lg:gap-16 xl:gap-24"
            selectedIndex={selectedIndex}
            onChange={onChange}
            vertical
        >
            <TabList className="relative z-10 order-last col-span-6 space-y-6">
                {features.map((feature, featureIndex) => (
                    <div
                        key={feature.name}
                        className="relative rounded-2xl transition-colors hover:bg-gray-800/30"
                    >
                        {featureIndex === selectedIndex && (
                            <motion.div
                                layoutId="activeBackground"
                                className="absolute inset-0 bg-gray-800"
                                initial={{borderRadius: 16}}
                            />
                        )}
                        <div className="relative z-10 p-8">
                            <feature.icon className="h-8 w-8"/>
                            <h3 className="mt-6 text-lg font-semibold text-white">
                                <Tab className="text-left data-selected:not-data-focus:outline-hidden">
                                    <span className="absolute inset-0 rounded-2xl"/>
                                    {feature.name}
                                </Tab>
                            </h3>
                            <p className="mt-2 text-sm text-gray-400">
                                {feature.description}
                            </p>
                        </div>
                    </div>
                ))}
            </TabList>
            <div className="relative col-span-6">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <CircleBackground color="#9e86ff" className="animate-spin-slower"/>
                </div>
                <PhoneFrame className="z-10 mx-auto w-full max-w-[366px]">
                    <TabPanels as={Fragment}>
                        <AnimatePresence
                            initial={false}
                            custom={{isForwards, changeCount}}
                        >
                            {features.map((feature, featureIndex) =>
                                selectedIndex === featureIndex ? (
                                    <TabPanel
                                        static
                                        key={feature.name + changeCount}
                                        className="col-start-1 row-start-1 flex focus:outline-offset-32 data-selected:not-data-focus:outline-hidden"
                                    >
                                        <feature.screen
                                            animated
                                            custom={{isForwards, changeCount}}
                                        />
                                    </TabPanel>
                                ) : null,
                            )}
                        </AnimatePresence>
                    </TabPanels>
                </PhoneFrame>
            </div>
        </TabGroup>
    )
}

function FeaturesMobile() {
    let [activeIndex, setActiveIndex] = useState(0)
    let slideContainerRef = useRef<React.ElementRef<'div'>>(null)
    let slideRefs = useRef<Array<React.ElementRef<'div'>>>([])

    useEffect(() => {
        let observer = new window.IntersectionObserver(
            (entries) => {
                for (let entry of entries) {
                    if (entry.isIntersecting && entry.target instanceof HTMLDivElement) {
                        setActiveIndex(slideRefs.current.indexOf(entry.target))
                        break
                    }
                }
            },
            {
                root: slideContainerRef.current,
                threshold: 0.6,
            },
        )

        for (let slide of slideRefs.current) {
            if (slide) {
                observer.observe(slide)
            }
        }

        return () => {
            observer.disconnect()
        }
    }, [slideContainerRef, slideRefs])

    return (
        <>
            <div
                ref={slideContainerRef}
                className="-mb-4 flex snap-x snap-mandatory -space-x-4 overflow-x-auto overscroll-x-contain scroll-smooth pb-4 [scrollbar-width:none] sm:-space-x-6 [&::-webkit-scrollbar]:hidden"
            >
                {features.map((feature, featureIndex) => (
                    <div
                        key={featureIndex}
                        ref={(ref) => ref && (slideRefs.current[featureIndex] = ref)}
                        className="w-full flex-none snap-center px-4 sm:px-6"
                    >
                        <div className="relative transform overflow-hidden rounded-2xl bg-gray-800 px-5 py-6">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <CircleBackground
                                    color="#9e86ff"
                                    className={featureIndex % 2 === 1 ? 'rotate-180' : undefined}
                                />
                            </div>
                            <PhoneFrame className="relative mx-auto w-full max-w-[366px]">
                                <feature.screen/>
                            </PhoneFrame>
                            <div className="absolute inset-x-0 bottom-0 bg-gray-800/95 p-6 backdrop-blur-sm sm:p-10">
                                <feature.icon className="h-8 w-8"/>
                                <h3 className="mt-6 text-sm font-semibold text-white sm:text-lg">
                                    {feature.name}
                                </h3>
                                <p className="mt-2 text-sm text-gray-400">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-6 flex justify-center gap-3">
                {features.map((_, featureIndex) => (
                    <button
                        type="button"
                        key={featureIndex}
                        className={clsx(
                            'relative h-0.5 w-4 rounded-full',
                            featureIndex === activeIndex ? 'bg-gray-300' : 'bg-gray-500',
                        )}
                        aria-label={`Go to slide ${featureIndex + 1}`}
                        onClick={() => {
                            slideRefs.current[featureIndex].scrollIntoView({
                                block: 'nearest',
                                inline: 'nearest',
                            })
                        }}
                    >
                        <span className="absolute -inset-x-1.5 -inset-y-3"/>
                    </button>
                ))}
            </div>
        </>
    )
}

export function PrimaryFeatures() {
    return (
        <>
            <section
                id="features"
                aria-label="Features for investing all your money"
                className="bg-gray-900 py-20 sm:py-32"
            >
                <Container>
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl">
                        <h2 className="text-3xl font-medium tracking-tight text-white">
                            Every Rep. Every Meal. Counted.
                        </h2>
                        <p className="mt-2 text-lg text-gray-400">
                            Neofit gives you total visibility into your fitness routine with powerful tools and data
                            that work as hard as you do.
                        </p>
                    </div>
                </Container>
                <div className="mt-16 md:hidden">
                    <FeaturesMobile/>
                </div>
                <Container className="hidden md:mt-20 md:block">
                    <FeaturesDesktop/>
                </Container>
            </section>
        </>
    )
}
