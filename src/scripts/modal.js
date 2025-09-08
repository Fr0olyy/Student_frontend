const dlg = document.getElementById('contactDialog');
const openBtn = document.getElementById('openDialog');
const closeBtn = document.getElementById('closeDialog');
const form = document.getElementById('contactForm');

let lastActive = null;
openBtn.addEventListener('click', () => {
    lastActive = document.activeElement;
    dlg.showModal();                              
    затемнение
    dlg.querySelector('input,select,textarea,button')?.focus();
});

closeBtn.addEventListener('click', () => dlg.close('cancel'));

form?.addEventListener('submit', (e) => {
});

dlg.addEventListener('close', () => { lastActive?.focus(); });

document.getElementById('openDialog').addEventListener('click', () => {
    const dialog = document.getElementById('contactDialog');
    dialog.showModal();
});

document.getElementById('closeDialog').addEventListener('click', () => {
    const dialog = document.getElementById('contactDialog');
    dialog.close();
});

document.getElementById('closeDialogBtn').addEventListener('click', () => {
    const dialog = document.getElementById('contactDialog');
    dialog.close();
});

document.getElementById('contactDialog').addEventListener('click', (event) => {
    if (event.target === document.getElementById('contactDialog')) {
        document.getElementById('contactDialog').close();
    }
});