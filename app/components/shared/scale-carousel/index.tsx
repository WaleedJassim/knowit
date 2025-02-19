import type {
	EmblaCarouselType,
	EmblaEventType,
	EmblaOptionsType,
} from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import React, { useCallback, useEffect, useRef } from 'react';
import {
	NextButton,
	PrevButton,
	usePrevNextButtons,
} from '../carousel/components/arrow-buttons';
import { DotButton, useDotButton } from '../carousel/components/dot-buttons';
import './style.css';

const TWEEN_FACTOR_BASE = 0.1;

const numberWithinRange = (number: number, min: number, max: number): number =>
	Math.min(Math.max(number, min), max);

type PropType = {
	slides: React.ReactNode[];
	options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
	const { slides, options } = props;
	const [emblaRef, emblaApi] = useEmblaCarousel(options);
	const tweenFactor = useRef(0);
	const tweenNodes = useRef<HTMLElement[]>([]);

	const { selectedIndex, scrollSnaps, onDotButtonClick } =
		useDotButton(emblaApi);

	const {
		prevBtnDisabled,
		nextBtnDisabled,
		onPrevButtonClick,
		onNextButtonClick,
	} = usePrevNextButtons(emblaApi);

	const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
		tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
			return slideNode.querySelector(
				'.embla__slide__number-scale'
			) as HTMLElement;
		});
	}, []);

	const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
		tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
	}, []);

	const tweenScale = useCallback(
		(emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
			const engine = emblaApi.internalEngine();
			const scrollProgress = emblaApi.scrollProgress();
			const slidesInView = emblaApi.slidesInView();
			const isScrollEvent = eventName === 'scroll';

			emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
				let diffToTarget = scrollSnap - scrollProgress;
				const slidesInSnap = engine.slideRegistry[snapIndex];

				slidesInSnap.forEach((slideIndex) => {
					if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

					if (engine.options.loop) {
						engine.slideLooper.loopPoints.forEach((loopItem) => {
							const target = loopItem.target();

							if (slideIndex === loopItem.index && target !== 0) {
								const sign = Math.sign(target);

								if (sign === -1) {
									diffToTarget = scrollSnap - (1 + scrollProgress);
								}
								if (sign === 1) {
									diffToTarget = scrollSnap + (1 - scrollProgress);
								}
							}
						});
					}

					const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
					const scale = numberWithinRange(tweenValue, 0, 1).toString();
					const tweenNode = tweenNodes.current[slideIndex];
					tweenNode.style.transform = `scale(${scale})`;
				});
			});
		},
		[]
	);

	useEffect(() => {
		if (!emblaApi) return;

		setTweenNodes(emblaApi);
		setTweenFactor(emblaApi);
		tweenScale(emblaApi);

		emblaApi
			.on('reInit', setTweenNodes)
			.on('reInit', setTweenFactor)
			.on('reInit', tweenScale)
			.on('scroll', tweenScale)
			.on('slideFocus', tweenScale);
	}, [emblaApi, tweenScale]);

	return (
		<div className="embla-scale">
			<div className="embla__viewport-scale" ref={emblaRef}>
				<div className="embla__container-scale">
					{slides.map((slideContent, index) => (
						<div className="embla__slide-scale" key={index}>
							<div className="embla__slide__number-scale">{slideContent}</div>
						</div>
					))}
				</div>
			</div>
			<div className="flex gap-3.5 mt-6 items-center w-full justify-center">
				<PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
				<div className="flex items-center gap-5">
					{scrollSnaps.map((_, index) => (
						<DotButton
							key={index}
							onClick={() => onDotButtonClick(index)}
							className={`bg-[#EAEAEA] w-3.5 aspect-square rounded-full touch-manipulation cursor-pointer ${index === selectedIndex ? 'bg-primary' : ''}`}
						/>
					))}
				</div>
				<NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
			</div>
		</div>
	);
};

export default EmblaCarousel;
