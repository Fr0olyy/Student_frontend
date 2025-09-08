

form?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    [...form.elements].forEach(el => {
        el.setCustomValidity?.('');
        if (el.willValidate) {
            el.removeAttribute('aria-invalid');
        }
    });

    if (!form.checkValidity()) {
        [...form.elements].forEach(el => {
            if (!el.willValidate) return;
            
            if (el.validity.valueMissing) {
                el.setCustomValidity('Это поле обязательно для заполнения');
            } else if (el.type === 'email' && el.validity.typeMismatch) {
                el.setCustomValidity('Введите корректный e-mail, например name@example.com');
            }
            
            if (!el.checkValidity()) {
                el.setAttribute('aria-invalid', 'true');
            }
        });
        
        form.reportValidity();
        return;
    }

    document.getElementById('contactDialog')?.close('success');
    form.reset();
});