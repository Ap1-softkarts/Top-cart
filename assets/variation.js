class VariantRadios extends VariantSelects {
    constructor() {
        super();
        this.addEventListenerToRadios();
    }

    addEventListenerToRadios() {
        document.querySelectorAll('variant-radios').forEach((variantRadios) => {
            variantRadios.addEventListener('change', (event) => {
              if (event.target.type === 'radio') {
                const closestProductForm = event.target.closest('.card__content');
                const idInput = closestProductForm.querySelector('input[type="hidden"][name="id"]');
                idInput.value = event.target.value;
              }
            });
        });
    }
}

customElements.define('variant-radios', VariantRadios);