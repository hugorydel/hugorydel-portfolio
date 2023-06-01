import style from './IntroBox.module.css';

interface IntroBoxProps {}

const IntroBox: React.FC<IntroBoxProps> = ({}) => {
	return (
		<>
			<div className={style.introBoxStyling}>
				I’m glad you’re interested! What would you like to learn about me first?
			</div>
			<div className={style.optionsBoxStyling}>
				<div>Here Are Some Possibilities</div>
				<div>
					<div>1. Option</div>
					<div>2. Option</div>
					<div>3. Option</div>
					<div>4. Option</div>
					<div>5. Option</div>
					<div>6. Option</div>
				</div>
			</div>
		</>
	);
};

export default IntroBox;
