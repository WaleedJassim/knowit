import type { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import React from 'react';
import {
	NextButton,
	PrevButton,
	usePrevNextButtons,
} from './components/arrow-buttons';
import { DotButton, useDotButton } from './components/dot-buttons';
import './style.css';

type PropType = {
	slides: React.ReactNode[];
	options?: EmblaOptionsType;
};

const AlignCarousel: React.FC<PropType> = (props) => {
	const { slides, options } = props;
	const [emblaRef, emblaApi] = useEmblaCarousel(options);

	const { selectedIndex, scrollSnaps, onDotButtonClick } =
		useDotButton(emblaApi);

	const {
		prevBtnDisabled,
		nextBtnDisabled,
		onPrevButtonClick,
		onNextButtonClick,
	} = usePrevNextButtons(emblaApi);

	return (
		<section className="embla-align">
			<div className="embla__viewport-align" ref={emblaRef}>
				<div className="embla__container-align">
					{slides.map((slideContent, index) => (
						<div className="embla__slide-align" key={index}>
							{slideContent}
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
		</section>
	);
};

export default AlignCarousel;
