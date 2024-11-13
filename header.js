const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
  <style>
	.surah {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
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
		bottom: 40px;
		right: 10px;
		z-index: 9;
		padding: 5px 5px;
		font-size: 12px;
		text-align: center;
		background-color: white;
		border: 1px solid black;
		color: grey;
		text-decoration: none;
	}

	.stt:active {
		color: white;
		background-color: black;
	}

	/* Custom dropdown styles */
	.custom-dropdown {
		position: relative;
		display: inline-block;
		width: 100px;
	}

	.dropdown-button {
		background-color: white;
		color: black;
		padding: 5px 10px;
		font-size: 11px;
		font-weight: bold;
		border: none;
		border-left: 1px solid black;
		text-align: center;
		width: 100%;
		cursor: pointer;
	}

	.dropdown-content {
		display: none;
		position: absolute;
		background-color: #f1f1f1;
		min-width: 100%;
		box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
		z-index: 1;
		font-size: 11px;
	}

	.dropdown-option {
		color: black;
		padding: 10px;
		text-decoration: none;
		display: block;
		cursor: pointer;
	}

	.dropdown-option:hover {
		background-color: #ddd;
	}
	
	.show {
		display: block;
	}
  </style>

  <!----------------------------------->

  <div class="container-group">
	<div class="surah">
		<div class="custom-dropdown">
			<button class="dropdown-button">Tahun</button>
			
			<div class="dropdown-content">
				<div class="dropdown-option" data-value="index.html">2024</div>
			</div>
			
		</div>
	</div>
	<div class="surah rb">
		<div class="custom-dropdown">
			<button class="dropdown-button">Surah</button>
			
			<div class="dropdown-content">
				<div class="dropdown-option" data-value="039.azzumar.html">039. Az-Zumar</div>
			</div>
			
		</div>
	</div>
  </div>
  
  <a href='#' class="stt">↑</a>
`;

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });
    shadowRoot.appendChild(headerTemplate.content.cloneNode(true));

    // JavaScript functionality within shadow DOM
    const dropdownButtons = shadowRoot.querySelectorAll('.dropdown-button');
    const dropdownOptions = shadowRoot.querySelectorAll('.dropdown-option');

    // Open or close the dropdown menu on button click
    dropdownButtons.forEach(button => {
      button.addEventListener('click', function (event) {
        event.stopPropagation();
        closeAllDropdowns();
        button.nextElementSibling.classList.toggle('show');
      });
    });

    // Handle option selection and redirect
    dropdownOptions.forEach(option => {
      option.addEventListener('click', function () {
        const url = option.getAttribute('data-value');
        window.location.href = url;
      });
    });

    // Close all dropdowns if clicked outside
    window.addEventListener('click', closeAllDropdowns);

    function closeAllDropdowns() {
      shadowRoot.querySelectorAll('.dropdown-content').forEach(content => {
        content.classList.remove('show');
      });
    }
  }
}

customElements.define('header-component', Header);
