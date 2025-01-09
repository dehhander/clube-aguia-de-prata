import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js"; // Importando Firestore

const firebaseConfig = {
    apiKey: "AIzaSyCJyMXkZa2zAx6lpICBQM2nPTyPtJ-8UAg",
    authDomain: "aguia-de-prata-95846.firebaseapp.com",
    projectId: "aguia-de-prata-95846",
    storageBucket: "aguia-de-prata-95846.firebasestorage.app",
    messagingSenderId: "516661578539",
    appId: "1:516661578539:web:54c0f9a0339e4d6efb936e",
    measurementId: "G-875GHY6MNE"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // Inicializando Firestore

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

// Função para salvar alterações no Firestore
async function saveChanges() {
    const savedContent = {};
    
    editableElements.forEach((el) => {
        const identifier = el.getAttribute('ID') || el.innerText; // Use um atributo data-identifier
        savedContent[identifier] = el.innerText;
    });

    const user = auth.currentUser ; // Obtendo o usuário autenticado
    if (user) {
        try {
            await setDoc(doc(db, "users", user.uid), savedContent); // Salva os dados no Firestore
            hasUnsavedChanges = false;
            saveButton.style.display = 'none';
            alert('Alterações salvas com sucesso!');
        } catch (error) {
            console.error("Erro ao salvar alterações: ", error);
            alert('Erro ao salvar alterações. Tente novamente.');
        }
    } else {
        alert('Você precisa estar logado para salvar as alterações.');
    }
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
            const identifier = el.getAttribute('data-identifier') || el.innerText;
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
