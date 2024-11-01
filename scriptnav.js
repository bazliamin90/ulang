const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
  <style>
	
	.nav {
		margin-bottom: 30px;
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: white;
	}
	
	#navitem {
		padding: 0 10px;
		display: flex;
		_gap: 15px;
		color: #555;
	}
	
	#navitem a {
		color: #555;
		text-decoration: none;
		padding: 5px 10px;
		font-size: 10px;
	}
	
	#navitem a:active {
		color: black;
		background-color: white;
	}
	
	#border-rl {
		border-right: 1px solid red;
		border-left: 1px solid red;
	}
	
	#border-r {
		border-right: 1px solid red;
	}
	
	.stt {
		position: fixed;
		bottom: 50px;
		right: 10px;
		z-index: 9;
		padding: 5px 5px;
		font-size: 12px;
		text-align: center;
		background-color: #ffd9d9;
		color: grey;
		text-decoration: none;
	}

	.stt:active {
		color: white;
		background-color: black;
	}
  </style>

<!------------------------------------------------------------------>

<div class="nav">
	<div id="navitem">
		<a href="index.html" id=border-rl>2024</a>
	</div>
</div>

<a href='#' class="stt">↑</a>

<!------------------------------------------------------------------>
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