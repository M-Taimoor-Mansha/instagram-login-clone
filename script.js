/**
 * Instagram Login Page Clone - Interactive Scripts
 */

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const loginForm = document.getElementById('loginForm');
  const signupForm = document.getElementById('signupForm');
  const loginCard = document.getElementById('loginCard');
  const signupCard = document.getElementById('signupCard');
  const switchBox = document.getElementById('switchBox');
  const toSignupBtn = document.getElementById('toSignupBtn');

  const loginUsernameInput = document.getElementById('loginUsername');
  const loginPasswordInput = document.getElementById('loginPassword');
  const loginSubmitBtn = document.getElementById('loginSubmitBtn');
  const toggleLoginPasswordBtn = document.getElementById('toggleLoginPassword');

  const signupFullNameInput = document.getElementById('signupFullName');
  const signupUsernameInput = document.getElementById('signupUsername');
  const signupEmailInput = document.getElementById('signupEmail');
  const signupPasswordInput = document.getElementById('signupPassword');
  const signupSubmitBtn = document.getElementById('signupSubmitBtn');
  const toggleSignupPasswordBtn = document.getElementById('toggleSignupPassword');
  const passwordStrengthBar = document.getElementById('passwordStrengthBar');
  const passwordStrengthText = document.getElementById('passwordStrengthText');

  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeIcon = document.getElementById('themeIcon');

  const forgotPasswordLink = document.getElementById('forgotPasswordLink');
  const forgotModal = document.getElementById('forgotModal');
  const closeForgotModalBtn = document.getElementById('closeForgotModal');
  const forgotForm = document.getElementById('forgotForm');
  const forgotEmailInput = document.getElementById('forgotEmail');

  const facebookLoginBtn = document.getElementById('facebookLoginBtn');
  const fbSignupBtn = document.getElementById('fbSignupBtn');
  const languageSelect = document.getElementById('languageSelect');
  const toastContainer = document.getElementById('toastContainer');

  /* ==========================================================
     1. FLOATING LABEL & INPUT SYNC
     ========================================================== */
  const allInputs = document.querySelectorAll('.floating-input input');

  function checkInputValue(input) {
    if (!input) return;
    if (input.value.trim().length > 0) {
      input.parentElement.classList.add('has-value');
    } else {
      input.parentElement.classList.remove('has-value');
    }

    // Synchronize password toggle button visibility
    const isPass = input.type === 'password' || input.dataset.wasPassword === 'true';
    if (isPass) {
      const toggleBtn = input.parentElement.querySelector('.toggle-password');
      if (toggleBtn) {
        toggleBtn.style.display = input.value.length > 0 ? 'block' : 'none';
      }
    }
  }

  allInputs.forEach((input) => {
    checkInputValue(input);

    input.addEventListener('input', () => {
      checkInputValue(input);
      handleFormValidation();
    });

    input.addEventListener('focus', () => {
      input.parentElement.classList.add('focused');
    });

    input.addEventListener('blur', () => {
      input.parentElement.classList.remove('focused');
      checkInputValue(input);
    });
  });

  /* ==========================================================
     2. PASSWORD SHOW / HIDE TOGGLE
     ========================================================== */
  function setupPasswordToggle(inputEl, btnEl) {
    if (!inputEl || !btnEl) return;

    btnEl.addEventListener('click', (e) => {
      e.preventDefault();
      const isPassword = inputEl.getAttribute('type') === 'password';
      if (isPassword) {
        inputEl.setAttribute('type', 'text');
        btnEl.textContent = 'Hide';
        btnEl.setAttribute('aria-label', 'Hide password');
      } else {
        inputEl.setAttribute('type', 'password');
        btnEl.textContent = 'Show';
        btnEl.setAttribute('aria-label', 'Show password');
      }
      inputEl.focus();
    });
  }

  setupPasswordToggle(loginPasswordInput, toggleLoginPasswordBtn);
  setupPasswordToggle(signupPasswordInput, toggleSignupPasswordBtn);

  /* ==========================================================
     3. FORM VALIDATION & BUTTON STATES
     ========================================================== */
  function handleFormValidation() {
    // Login form validation
    if (loginUsernameInput && loginPasswordInput && loginSubmitBtn) {
      const isUserValid = loginUsernameInput.value.trim().length >= 1;
      const isPassValid = loginPasswordInput.value.trim().length >= 1;

      if (isUserValid && isPassValid) {
        loginSubmitBtn.removeAttribute('disabled');
        loginSubmitBtn.classList.add('active');
      } else {
        loginSubmitBtn.setAttribute('disabled', 'true');
        loginSubmitBtn.classList.remove('active');
      }
    }

    // Sign up form validation & strength bar
    if (signupForm && signupSubmitBtn && signupEmailInput && signupFullNameInput && signupUsernameInput && signupPasswordInput) {
      const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(signupEmailInput.value.trim()) || signupEmailInput.value.trim().length >= 5;
      const isNameValid = signupFullNameInput.value.trim().length >= 2;
      const isUsernameValid = signupUsernameInput.value.trim().length >= 3;
      const isPassValid = signupPasswordInput.value.length >= 6;

      updatePasswordStrength(signupPasswordInput.value);

      if (isEmailValid && isNameValid && isUsernameValid && isPassValid) {
        signupSubmitBtn.removeAttribute('disabled');
        signupSubmitBtn.classList.add('active');
      } else {
        signupSubmitBtn.setAttribute('disabled', 'true');
        signupSubmitBtn.classList.remove('active');
      }
    }
  }

  function updatePasswordStrength(password) {
    if (!passwordStrengthBar || !passwordStrengthText) return;
    if (!password) {
      passwordStrengthBar.style.width = '0%';
      passwordStrengthBar.className = 'strength-bar';
      passwordStrengthText.textContent = '';
      return;
    }

    let score = 0;
    if (password.length >= 6) score += 25;
    if (password.length >= 10) score += 25;
    if (/[A-Z]/.test(password) && /[a-z]/.test(password)) score += 25;
    if (/[0-9]/.test(password) || /[^A-Za-z0-9]/.test(password)) score += 25;

    passwordStrengthBar.style.width = `${score}%`;

    if (score <= 25) {
      passwordStrengthBar.className = 'strength-bar weak';
      passwordStrengthText.textContent = 'Weak password';
      passwordStrengthText.style.color = '#ed4956';
    } else if (score <= 75) {
      passwordStrengthBar.className = 'strength-bar medium';
      passwordStrengthText.textContent = 'Medium strength';
      passwordStrengthText.style.color = '#ff9800';
    } else {
      passwordStrengthBar.className = 'strength-bar strong';
      passwordStrengthText.textContent = 'Strong password';
      passwordStrengthText.style.color = '#4caf50';
    }
  }

  /* ==========================================================
     4. TAB SWITCHING (LOGIN <-> SIGNUP)
     ========================================================== */
  function showSignupView(e) {
    if (e) e.preventDefault();
    loginCard.classList.add('hide');
    signupCard.classList.remove('hide');
    signupCard.classList.add('fade-in');

    const promptSpan = switchBox.querySelector('.prompt-text');
    const actionBtn = switchBox.querySelector('.switch-action-btn');
    if (promptSpan) promptSpan.textContent = 'Have an account?';
    if (actionBtn) {
      actionBtn.textContent = 'Log in';
      actionBtn.onclick = showLoginView;
    }
  }

  function showLoginView(e) {
    if (e) e.preventDefault();
    signupCard.classList.add('hide');
    loginCard.classList.remove('hide');
    loginCard.classList.add('fade-in');

    const promptSpan = switchBox.querySelector('.prompt-text');
    const actionBtn = switchBox.querySelector('.switch-action-btn');
    if (promptSpan) promptSpan.textContent = "Don't have an account?";
    if (actionBtn) {
      actionBtn.textContent = 'Sign up';
      actionBtn.onclick = showSignupView;
    }
  }

  if (toSignupBtn) toSignupBtn.onclick = showSignupView;

  /* ==========================================================
     5. FORM SUBMISSIONS
     ========================================================== */
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (loginSubmitBtn.disabled) return;

      const username = loginUsernameInput.value.trim();
      const password = loginPasswordInput.value.trim();

      setButtonLoading(loginSubmitBtn, true, 'Log in');

      setTimeout(() => {
        setButtonLoading(loginSubmitBtn, false, 'Log in');

        if (password.length < 6) {
          showToast('Password must be at least 6 characters.', 'error');
          shakeElement(loginCard);
        } else {
          showToast(`🎉 Welcome back, @${username}! Login successful.`, 'success');
        }
      }, 1200);
    });
  }

  if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (signupSubmitBtn.disabled) return;

      const username = signupUsernameInput.value.trim();
      setButtonLoading(signupSubmitBtn, true, 'Sign up');

      setTimeout(() => {
        setButtonLoading(signupSubmitBtn, false, 'Sign up');
        showToast(`Account created for @${username}! Welcome to Instagram.`, 'success');
        signupForm.reset();
        allInputs.forEach(checkInputValue);
        setTimeout(showLoginView, 1500);
      }, 1400);
    });
  }

  function setButtonLoading(button, isLoading, defaultText) {
    if (isLoading) {
      button.disabled = true;
      button.dataset.originalText = defaultText;
      button.innerHTML = `<span class="spinner"></span> Loading...`;
    } else {
      button.disabled = false;
      button.innerHTML = button.dataset.originalText || defaultText;
      handleFormValidation();
    }
  }

  function shakeElement(element) {
    if (!element) return;
    element.classList.add('shake');
    setTimeout(() => {
      element.classList.remove('shake');
    }, 500);
  }

  /* ==========================================================
     6. DARK / LIGHT MODE TOGGLE
     ========================================================== */
  const savedTheme = localStorage.getItem('ig_theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    enableDarkMode();
  } else {
    enableLightMode();
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      if (document.body.classList.contains('dark-mode')) {
        enableLightMode();
      } else {
        enableDarkMode();
      }
    });
  }

  function enableDarkMode() {
    document.body.classList.add('dark-mode');
    localStorage.setItem('ig_theme', 'dark');
    if (themeIcon) {
      themeIcon.innerHTML = `
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
          <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58a.996.996 0 00-1.41 0 .996.996 0 000 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37a.996.996 0 00-1.41 0 .996.996 0 000 1.41l1.06 1.06c.39.39 1.03.39 1.41 0a.996.996 0 000-1.41l-1.06-1.06zm1.06-10.96a.996.996 0 00-1.41-1.41l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36a.996.996 0 00-1.41-1.41l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"/>
        </svg>
      `;
    }
    themeToggleBtn.setAttribute('title', 'Switch to Light Mode');
  }

  function enableLightMode() {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('ig_theme', 'light');
    if (themeIcon) {
      themeIcon.innerHTML = `
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
          <path d="M12.3 2a10 10 0 0 0-.19 20 10.04 10.04 0 0 0 9.79-7.79.5.5 0 0 0-.63-.61A8 8 0 1 1 11.4 3.72a.5.5 0 0 0 .9-.72z"/>
        </svg>
      `;
    }
    themeToggleBtn.setAttribute('title', 'Switch to Dark Mode');
  }

  /* ==========================================================
     7. FORGOT PASSWORD MODAL
     ========================================================== */
  if (forgotPasswordLink) {
    forgotPasswordLink.addEventListener('click', (e) => {
      e.preventDefault();
      forgotModal.classList.add('show');
      forgotModal.setAttribute('aria-hidden', 'false');
      if (forgotEmailInput) forgotEmailInput.focus();
    });
  }

  function closeModal() {
    if (forgotModal) {
      forgotModal.classList.remove('show');
      forgotModal.setAttribute('aria-hidden', 'true');
    }
  }

  if (closeForgotModalBtn) closeForgotModalBtn.addEventListener('click', closeModal);

  if (forgotModal) {
    forgotModal.addEventListener('click', (e) => {
      if (e.target === forgotModal) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && forgotModal && forgotModal.classList.contains('show')) {
      closeModal();
    }
  });

  if (forgotForm) {
    forgotForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailVal = forgotEmailInput ? forgotEmailInput.value.trim() : '';
      if (!emailVal) return;

      const resetSubmitBtn = forgotForm.querySelector('button[type="submit"]');
      setButtonLoading(resetSubmitBtn, true, 'Send Login Link');

      setTimeout(() => {
        setButtonLoading(resetSubmitBtn, false, 'Send Login Link');
        closeModal();
        if (forgotEmailInput) forgotEmailInput.value = '';
        showToast(`We sent an email to ${emailVal} with a link to get back into your account.`, 'info');
      }, 1200);
    });
  }

  /* ==========================================================
     8. FACEBOOK LOGIN SIMULATION
     ========================================================== */
  function simulateFacebookLogin(e) {
    e.preventDefault();
    showToast('Connecting to Facebook secure gateway...', 'info');
    setTimeout(() => {
      showToast('Logged in via Facebook as Alex Carter!', 'success');
      if (loginUsernameInput) loginUsernameInput.value = 'alex.carter_fb';
      if (loginPasswordInput) loginPasswordInput.value = 'Instagram2026!';
      allInputs.forEach(checkInputValue);
      handleFormValidation();
    }, 1500);
  }

  if (facebookLoginBtn) facebookLoginBtn.addEventListener('click', simulateFacebookLogin);
  if (fbSignupBtn) fbSignupBtn.addEventListener('click', simulateFacebookLogin);

  /* ==========================================================
     9. TOAST NOTIFICATION SYSTEM
     ========================================================== */
  function showToast(message, type = 'info') {
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = `toast-message ${type}`;

    let iconSvg = '';
    if (type === 'success') {
      iconSvg = `<svg viewBox="0 0 24 24" width="18" height="18" fill="#4caf50"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>`;
    } else if (type === 'error') {
      iconSvg = `<svg viewBox="0 0 24 24" width="18" height="18" fill="#ed4956"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>`;
    } else {
      iconSvg = `<svg viewBox="0 0 24 24" width="18" height="18" fill="#0095f6"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>`;
    }

    toast.innerHTML = `
      <div class="toast-icon">${iconSvg}</div>
      <div class="toast-text">${message}</div>
      <button class="toast-close" aria-label="Close notification">&times;</button>
    `;

    toastContainer.appendChild(toast);

    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    const closeBtn = toast.querySelector('.toast-close');
    if (closeBtn) closeBtn.addEventListener('click', () => removeToast(toast));

    setTimeout(() => {
      removeToast(toast);
    }, 4500);
  }

  function removeToast(toast) {
    if (!toast) return;
    toast.classList.remove('show');
    setTimeout(() => {
      if (toast.parentElement) toast.parentElement.removeChild(toast);
    }, 300);
  }

  /* ==========================================================
     10. MULTI-LANGUAGE SELECTOR
     ========================================================== */
  const translations = {
    en: {
      loginPlaceholder: 'Phone number, username, or email',
      passwordPlaceholder: 'Password',
      loginBtn: 'Log in',
      orText: 'OR',
      fbLogin: 'Log in with Facebook',
      forgotPass: 'Forgot password?',
      noAccount: "Don't have an account?",
      signup: 'Sign up',
      haveAccount: 'Have an account?',
      appDownload: 'Get the app.'
    },
    es: {
      loginPlaceholder: 'Teléfono, usuario o correo electrónico',
      passwordPlaceholder: 'Contraseña',
      loginBtn: 'Iniciar sesión',
      orText: 'O',
      fbLogin: 'Iniciar sesión con Facebook',
      forgotPass: '¿Olvidaste tu contraseña?',
      noAccount: '¿No tienes una cuenta?',
      signup: 'Regístrate',
      haveAccount: '¿Tienes una cuenta?',
      appDownload: 'Descarga la app.'
    },
    fr: {
      loginPlaceholder: 'Numéro de tél., nom d’utilisateur ou e-mail',
      passwordPlaceholder: 'Mot de passe',
      loginBtn: 'Se connecter',
      orText: 'OU',
      fbLogin: 'Se connecter avec Facebook',
      forgotPass: 'Mot de passe oublié ?',
      noAccount: 'Vous n’avez pas de compte ?',
      signup: 'Inscrivez-vous',
      haveAccount: 'Vous avez un compte ?',
      appDownload: 'Téléchargez l’application.'
    },
    de: {
      loginPlaceholder: 'Telefonnummer, Benutzername oder E-Mail',
      passwordPlaceholder: 'Passwort',
      loginBtn: 'Anmelden',
      orText: 'ODER',
      fbLogin: 'Mit Facebook anmelden',
      forgotPass: 'Passwort vergessen?',
      noAccount: 'Du hast kein Konto?',
      signup: 'Registrieren',
      haveAccount: 'Du hast ein Konto?',
      appDownload: 'Hol dir die App.'
    }
  };

  if (languageSelect) {
    languageSelect.addEventListener('change', (e) => {
      const lang = e.target.value;
      const dict = translations[lang] || translations.en;

      const userPlaceholder = document.getElementById('loginUsernamePlaceholder');
      const passPlaceholder = document.getElementById('loginPasswordPlaceholder');
      if (userPlaceholder) userPlaceholder.textContent = dict.loginPlaceholder;
      if (passPlaceholder) passPlaceholder.textContent = dict.passwordPlaceholder;
      if (loginSubmitBtn && !loginSubmitBtn.disabled) loginSubmitBtn.textContent = dict.loginBtn;
      if (forgotPasswordLink) forgotPasswordLink.textContent = dict.forgotPass;

      const fbSpans = document.querySelectorAll('.facebook-login span');
      fbSpans.forEach(span => span.textContent = dict.fbLogin);

      const sepTexts = document.querySelectorAll('.separator .text');
      sepTexts.forEach(txt => txt.textContent = dict.orText);

      const appDownloadText = document.getElementById('appDownloadText');
      if (appDownloadText) appDownloadText.textContent = dict.appDownload;

      showToast(`Language switched to ${e.target.options[e.target.selectedIndex].text}`, 'info');
    });
  }
});
