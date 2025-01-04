// Configuração do Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// Sua configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAvEcFej2F3XRls4PxIei2iCsSPI2YZcEY",
    authDomain: "clube-aguia-de-prata.firebaseapp.com",
    projectId: "clube-aguia-de-prata",
    storageBucket: "clube-aguia-de-prata.firebasestorage.app",
    messagingSenderId: "1006025110621",
    appId: "1:1006025110621:web:c97004681659ca20bdc9b4",
    measurementId: "G-2KNQ14G0K5"
  };
// Inicialize o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Lógica do Slider
var cont = 1;
document.getElementById('radio1').checked = true;

setInterval(() => {
    proximaImg();
}, 5000); // Troca de imagem a cada 5 segundos

function proximaImg() {
    cont++;
    if (cont > 3) {
        cont = 1; // Reseta o contador se passar do número de slides
    }
    document.getElementById('radio' + cont).checked = true; // Muda a imagem
}

// Referências aos elementos
const loginBtn = document.getElementById("login-btn");
const loginModal = document.getElementById("login-modal");
const closeModal = document.querySelector(".close");
const loginForm = document.getElementById("login-form");
const editableElements = document.querySelectorAll('[contenteditable="true"]');

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
    e.preventDefault(); // Impede o envio do formulário
  
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Login bem-sucedido
            alert("Login bem-sucedido!");
            
            // Armazenar a informação de login no localStorage
            localStorage.setItem("isLoggedIn", "true");  // Usuário está logado
            
            // Fechar o modal de login
            loginModal.style.display = "none";
            
            // Exibir conteúdo editável
            editableElements.forEach((el) => {
                el.style.pointerEvents = "auto"; // Habilita a edição
            });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(`Erro: ${errorMessage}`);
        });
});

// Verificar se o usuário está logado ao carregar a página
window.addEventListener("DOMContentLoaded", (event) => {
    if (localStorage.getItem("isLoggedIn") === "true") {
        // Exibir conteúdo editável
        editableElements.forEach((el) => {
            el.style.pointerEvents = "auto"; // Habilita a edição
        });

// Verificar se o usuário está logado ao carregar a página
window.addEventListener("DOMContentLoaded", (event) => {
    if (localStorage.getItem("isLoggedIn") === "true") {
      document.body.classList.add("logged-in"); // Adiciona a classe "logged-in" se o usuário estiver logado
    }
});


    } else {
        // Esconder conteúdo editável se o usuário não estiver logado
        editableElements.forEach((el) => {
            el.style.pointerEvents = "none"; // Desabilita a edição
        });
    }
});
