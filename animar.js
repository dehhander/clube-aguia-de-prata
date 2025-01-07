import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAvEcFej2F3XRls4PxIei2iCsSPI2YZcEY",
    authDomain: "clube-aguia-de-prata.firebaseapp.com",
    projectId: "clube-aguia-de-prata",
    storageBucket: "clube-aguia-de-prata.firebasestorage.app",
    messagingSenderId: "1006025110621",
    appId: "1:1006025110621:web:c97004681659ca20bdc9b4",
    measurementId: "G-2KNQ14G0K5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Variáveis para o sistema de salvamento
const saveButton = document.getElementById('save-changes');
const editableElements = document.querySelectorAll('[contenteditable="true"]');
let hasUnsavedChanges = false;

// Adiciona evento para cada elemento editável
editableElements.forEach((el) => {
    el.addEventListener('input', () => {
        hasUnsavedChanges = true;
        saveButton.style.display = 'block';
    });
});

// Função para salvar alterações
function saveChanges() {
    const savedContent = {};
    
    editableElements.forEach((el) => {
        const identifier = el.getAttribute('id') || el.innerText;
        savedContent[identifier] = el.innerText;
    });
    
    localStorage.setItem('savedContent', JSON.stringify(savedContent));
    
    hasUnsavedChanges = false;
    saveButton.style.display = 'none';
    
    alert('Alterações salvas com sucesso!');
}

// Adiciona evento de clique ao botão de salvar
saveButton.addEventListener('click', saveChanges);

// Lógica do Slider
var cont = 1;
document.getElementById('radio1').checked = true;

setInterval(() => {
    proximaImg();
}, 5000);

function proximaImg() {
    cont++;
    if (cont > 3) {
        cont = 1;
    }
    document.getElementById('radio' + cont).checked = true;
}

// Referências aos elementos
const loginBtn = document.getElementById("login-btn");
const loginModal = document.getElementById("login-modal");
const closeModal = document.querySelector(".close");
const loginForm = document.getElementById("login-form");

// Abrir modal de login
loginBtn.addEventListener("click", () => {
    loginModal.style.display = "block";
});

// Fechar modal
closeModal.addEventListener("click", () => {
    loginModal.style.display = "none";
});

// Fechar modal ao clicar fora
window.addEventListener("click", (e) => {
    if (e.target === loginModal) {
        loginModal.style.display = "none";
    }
});

// Processar login
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
  
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("Login bem-sucedido!");
            localStorage.setItem("isLoggedIn", "true");
            loginModal.style.display = "none";
            
            editableElements.forEach((el) => {
                el.style.pointerEvents = "auto";
            });
            
            iniciarDeslogAutomatico();
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(`Erro: ${errorMessage}`);
        });
});

// Função para deslogar automaticamente
let timeoutID;
function iniciarDeslogAutomatico() {
    const resetTimeout = () => {
        clearTimeout(timeoutID);
        timeoutID = setTimeout(() => {
            alert("Você foi deslogado devido à inatividade.");
            localStorage.removeItem("isLoggedIn");
            window.location.reload();
        }, 1 * 60 * 1000);
    };

    document.addEventListener("mousemove", resetTimeout);
    document.addEventListener("keydown", resetTimeout);

    resetTimeout();
}

// Login com Enter
loginForm.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        loginForm.submit();
    }
});

// Verificar login ao carregar a página
window.addEventListener("DOMContentLoaded", (event) => {
    if (localStorage.getItem("isLoggedIn") === "true") {
        editableElements.forEach((el) => {
            el.style.pointerEvents = "auto";
        });
        
        const savedContent = JSON.parse(localStorage.getItem('savedContent') || '{}');
        editableElements.forEach((el) => {
            const identifier = el.getAttribute('id') || el.innerText;
            if (savedContent[identifier]) {
                el.innerText = savedContent[identifier];
            }
        });

        document.body.classList.add("logged-in");
        iniciarDeslogAutomatico();
    } else {
        editableElements.forEach((el) => {
            el.style.pointerEvents = "none";
        });
    }
});

// Aviso antes de sair com alterações não salvas
window.addEventListener('beforeunload', (e) => {
    if (hasUnsavedChanges) {
        e.preventDefault();
        e.returnValue = '';
    }
});
