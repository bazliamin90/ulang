const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
  <style>
	
	.surah {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	
	select {
		border: none;
		border-left: 1px solid black;
		font-size: 11px;
		font-weight: bold;
		text-align: center;
		color: #555;
		outline: none;
		padding: 5px 10px;
		width: 70px;
		-webkit-appearance: none; /* Chrome, Safari, and Opera */
		-moz-appearance: none;    /* Firefox */
		appearance: none;         /* Standard */
		background: none;
		cursor: pointer;
	}

	select:focus {
		outline: none;
	}
	
	.container-group {
		display: flex;
		justify-content: center;
		margin: 0 auto;
		background-color: white;
	}
	
	.rb {
		border-right: 1px solid black;
	}

	.stt {
		position: fixed;
		bottom: 50px;
		right: 10px;
		z-index: 9;
		padding: 5px 5px;
		font-size: 12px;
		text-align: center;
		background-color: white;
		color: grey;
		text-decoration: none;
	}

	.stt:active {
		color: white;
		background-color: black;
	}
	
  </style>

<!---------------------------------->

  <div class="container-group">
	<div class="surah">
		<select onchange="location = this.value;">
			<option value="#">Tahun</option>
			<option value="index.html">2024</option>
		</select>
	</div>
	<div class="surah rb">
		<select onchange="location = this.value;">
			<option value="#">Surah</option>
			<option value="039.azzumar.html">039. Az-Zumar</option>
		</select>
	</div>
  </div>
  
  <a href='#' class="stt">↑</a>

<!----------------------------------->
`;

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.appendChild(headerTemplate.content);
  }
}

customElements.define('header-component', Header);