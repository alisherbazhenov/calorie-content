/* eslint-disable */
import restaurants from '../data/restaurants.json'

function MainPage() {
	const mainItem = restaurants.map((item) => (
		<li key={item.id} className="restaurant__item">
			<div className="restaurant__block">
				<div className="restaurant__text">
					<h2 className="restaurant__subtitle">{item.name}</h2>
					<span className="restaurant__span">{item.description}</span>
				</div>
				<a href="#" className="restaurant__link">
					<svg
						className="item__array"
						xmlns="http://www.w3.org/2000/svg"
						id="Layer_1"
						data-name="Layer 1"
						viewBox="0 0 24 24"
						width="512"
						height="512"
					>
						<path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm5.768,12.552l-4.418,4.361c-.498,.492-1.35,.143-1.35-.552v-3.361H7c-.552,0-1-.448-1-1s.448-1,1-1h5v-3.361c0-.695,.852-1.044,1.35-.552l4.418,4.361c.309,.305,.309,.799,0,1.104Z" />
					</svg>
				</a>
			</div>
			<img className="item__img" src={item.img} alt="" />
		</li>
	))

	return (
		<div className="wrapper">
			<div className="main__top">
				<img
					className="main__img"
					src="./img/ginza-project.png"
					alt="Логотип"
				/>
			</div>
			<div className="container">
				<div className="main">
					<h1 className="main__title">Выберите ресторан</h1>
					<ul className="main__list">{mainItem}</ul>
				</div>
			</div>
		</div>
	)
}

export default MainPage
