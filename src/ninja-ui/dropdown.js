import './styles/dropdown.css'

class Dropdown {
	constructor(containter) {
		this.containter = containter;
		this.trigger = containter.querySelector('.trigger');
		this.content = containter.querySelector('.content');
	}
	init() {
		this.trigger.addEventListener('click', () => {
			this.trigger.classList.toggle('active');
			this.content.classList.toggle('active');
		});
	}
}

export { Dropdown as default };
