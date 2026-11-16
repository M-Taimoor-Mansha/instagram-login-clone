# Instagram Login Page Clone

A responsive, front-end recreation of an Instagram-inspired login and sign-up interface, built with **HTML5, CSS3, and Vanilla JavaScript**.

The project demonstrates form-focused UI design, floating input labels, client-side validation states, password visibility controls, a password-strength indicator, modal dialogs, theme switching, language selection, and toast notifications.

> **Educational demo only:** This repository is not an official Instagram product and does not connect to Instagram, Meta, Facebook authentication, or any real account service. Login, sign-up, password-reset, and Facebook actions are simulated in the browser. Never enter a real Instagram password or other sensitive credentials into this demonstration.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Responsive](https://img.shields.io/badge/Design-Responsive-brightgreen?style=flat)
![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Page Layout](#page-layout)
- [Interactive Functionality](#interactive-functionality)
- [Technology Stack](#technology-stack)
- [Project Architecture](#project-architecture)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [How to Use](#how-to-use)
- [Design System](#design-system)
- [Responsive Design](#responsive-design)
- [External Resources](#external-resources)
- [Privacy and Security Notes](#privacy-and-security-notes)
- [Customization](#customization)
- [Deployment](#deployment)
- [Current Scope and Limitations](#current-scope-and-limitations)
- [Potential Improvements](#potential-improvements)
- [Troubleshooting](#troubleshooting)
- [Disclaimer and Trademarks](#disclaimer-and-trademarks)
- [License](#license)
- [Author](#author)

---

## Overview

The Instagram Login Page Clone recreates the visual structure of a familiar social-media sign-in experience. It includes a login card, a sign-up view, a password-recovery dialog, app download badges, and a footer with language selection and informational links.

The page is intended as a front-end learning and portfolio project. It provides a practical example of building an interactive form interface with native browser technologies, without a framework or backend.

### Project goals

- Recreate a recognizable login-page layout for UI practice.
- Build responsive layouts using CSS Flexbox and media queries.
- Implement accessible labels and common form controls.
- Practice DOM selection, event handling, and class manipulation.
- Demonstrate local theme preference persistence.
- Create reusable visual patterns for modals, loading states, and notifications.

## Features

### Login interface

- Instagram-inspired wordmark rendered as inline SVG.
- Username, email, or phone input.
- Password input with floating label.
- Show and hide password control.
- Client-side required-field checks.
- Login button enabled state based on entered values.
- Simulated loading state.
- Demo success and validation notifications.

### Sign-up interface

- Switch between login and sign-up cards.
- Mobile number or email field.
- Full name field.
- Username field.
- Password field.
- Show and hide password control.
- Client-side input checks.
- Password-strength meter with weak, medium, and strong states.
- Simulated sign-up confirmation.

### Password recovery

- Forgot-password modal dialog.
- Email, phone, or username input.
- Close button.
- Close when clicking the overlay.
- Close with the Escape key.
- Simulated loading and confirmation notification.

### Additional interface features

- Light and dark themes.
- Theme preference saved in LocalStorage.
- Initial theme selection based on the saved preference or operating-system preference.
- Facebook-style login button with a local demonstration response.
- Toast notification system for success, error, and information messages.
- Language selector with English, Spanish, French, and German text updates for selected login labels.
- App download badges linking to external store pages.
- Responsive phone-preview image on wider screens.
- Footer links to public Meta and Instagram information pages.

---

## Page Layout

The main page is contained in `index.html` and is organized into the following areas.

### 1. Theme Toggle

A floating button in the upper-right corner switches between light and dark appearance.

The icon and tooltip update to indicate the alternative theme.

### 2. Main Content Area

The main container centers the login experience in the viewport.

On wider screens, a phone screenshot preview appears beside the form. On smaller screens, the preview is hidden to keep the login interface focused and usable.

### 3. Login Card

The default card includes:

- Inline SVG wordmark.
- Username, phone, or email input.
- Password input.
- Password visibility control.
- Log in button.
- OR separator.
- Facebook-style login button.
- Forgot password link.

The login button starts disabled and becomes enabled when both fields contain non-empty values.

### 4. Sign-up Card

The sign-up card is initially hidden. Visitors can switch to it using the Sign up control.

It includes four fields, a password-strength meter, and a sign-up button. A switch control allows visitors to return to the login view.

### 5. App Download Section

The page displays Google Play and Microsoft Store badges. These are external links and are not part of an app distribution system implemented in this repository.

### 6. Password Recovery Dialog

The modal presents a recovery-style form. Its submission is simulated locally and does not send a password-reset email or contact an account service.

### 7. Toast Notifications

A notification container displays temporary messages generated by the JavaScript interactions. Notifications can be dismissed manually and are also removed automatically.

### 8. Footer

The footer contains public informational links, a language selector, and a copyright-style display.

The footer's Instagram and Meta references are part of the recreated interface and do not indicate that this project is operated by those companies.

---

## Interactive Functionality

All interactive behavior is implemented in `script.js`. The script initializes after the browser fires the `DOMContentLoaded` event.

### Floating labels and input state

The script monitors the login and sign-up inputs.

- When a field contains text, its parent receives the `has-value` class.
- When a field receives focus, its parent receives the `focused` class.
- On blur, the focus class is removed and the field state is checked again.
- The CSS uses these classes to animate the floating labels.

### Password visibility

The Show/Hide button changes the password input type between `password` and `text`.

The button label and accessible name are updated to match the current state. The control is displayed when the associated password field contains a value.

### Login form validation

The login button is enabled when:

- The username, email, or phone field is not empty.
- The password field is not empty.

When the form is submitted, JavaScript prevents the browser's normal form submission and runs a local demonstration:

1. The button displays a loading state.
2. A short timeout simulates processing.
3. Passwords shorter than six characters produce a validation error.
4. Longer values produce a demo success notification.

**This is not authentication.** No account lookup, password verification, server request, or Instagram session is created.

### Sign-up form validation

The sign-up button is enabled when the current JavaScript checks pass:

- The email/mobile field has a value matching the script's basic condition.
- The full name contains at least two characters.
- The username contains at least three characters.
- The password contains at least six characters.

On submission, a timeout displays a simulated account-created message, resets the form, and returns to the login view.

No account is actually created or stored.

### Password-strength indicator

The sign-up password receives a simple score based on four checks:

| Check | Score |
|---|---:|
| At least 6 characters | 25 |
| At least 10 characters | 25 |
| Contains both uppercase and lowercase letters | 25 |
| Contains a number or special character | 25 |

The score controls the strength bar and its label:

- 0 to 25: Weak password.
- 50 to 75: Medium strength.
- 100: Strong password.

This is a basic educational indicator, not a comprehensive password-security assessment.

### Login and sign-up view switching

The login and sign-up cards are shown or hidden by adding and removing the `hide` class.

The switch prompt and action label are updated to match the currently visible form. A fade-in class adds a short transition when changing views.

### Light and dark themes

The theme is applied by adding or removing the `dark-mode` class on the `body` element.

The selected preference is saved under the LocalStorage key `ig_theme`.

On page load:

1. The script checks for a saved theme.
2. If no preference exists, it checks `prefers-color-scheme: dark`.
3. It applies the selected theme and updates the theme icon.

The preference is stored locally in the current browser, not in an online account.

### Forgot-password modal

The recovery link opens the modal and focuses the input.

The dialog can be closed by:

- Clicking its close button.
- Clicking the overlay outside the dialog.
- Pressing Escape.

Submitting the form displays a simulated message. It does not send an email, SMS, or recovery link.

### Facebook-style login simulation

The Facebook-style button displays informational and success notifications and fills the login form with hard-coded demonstration values.

It does not open Facebook OAuth, connect to Facebook, authenticate a user, or communicate with Meta.

### Toast notifications

The notification system supports three visual types:

- Success.
- Error.
- Information.

Each toast includes an icon, message, close button, entrance transition, and automatic removal after approximately 4.5 seconds.

### Language selector

The selector includes four languages:

| Language | Code |
|---|---|
| English | `en` |
| Spanish | `es` |
| French | `fr` |
| German | `de` |

The current translation dictionary updates selected login-page labels, including input placeholders, login text, separator text, Facebook button text, and the forgot-password label.

This is a partial interface translation, not a complete localization system. Some sign-up, modal, footer, and notification text remains in English.

---

## Technology Stack

| Technology | Purpose |
|---|---|
| HTML5 | Page structure, forms, buttons, modal, and footer |
| CSS3 | Layout, responsive behavior, themes, transitions, and animations |
| Vanilla JavaScript (ES6+) | Form interactions, validation states, theme switching, modal behavior, and notifications |
| CSS Flexbox | Main layout alignment and component positioning |
| CSS custom properties | Reusable colors, borders, shadows, and theme values |
| SVG | Inline brand-style wordmark and interface icons |
| LocalStorage | Saving the selected theme |
| Google Fonts | Inter typography |
| Browser DOM APIs | Element selection, event listeners, and dynamic updates |

No React, Vue, Angular, Bootstrap, backend framework, package manager, or database is required.

---

## Project Architecture

The project follows a static front-end architecture:

```text
                   Visitor's Browser
                           |
                           v
                       index.html
                           |
                 +---------+---------+
                 |                   |
                 v                   v
              styles.css          script.js
                 |                   |
                 v                   v
          Visual presentation   UI interactions
                 |                   |
       +---------+---------+   +-----+----------------+
       |         |         |   |     |       |        |
       v         v         v   v     v       v        v
      Layout   Themes   Modal Forms Theme  Language  Toasts
                              logic storage selector
                 |                   |
                 +---------+---------+
                           |
                           v
                  Rendered login demo
```

The browser loads the HTML, CSS, JavaScript, and external visual resources. JavaScript updates the interface locally in response to user actions.

There is no application server, authentication API, account database, or connection to Instagram.

---

## Project Structure

The main application files are located at the repository root:

```text
instagram-login-clone/
│
├── index.html       # Login, sign-up, modal, and footer markup
├── styles.css       # Main styling, themes, layout, and responsive rules
├── script.js        # Form interactions and client-side demonstrations
├── README.md        # Project documentation
└── LICENSE          # MIT License
```

### File responsibilities

| File | Description |
|---|---|
| `index.html` | Defines the login and sign-up interfaces, recovery modal, toast container, language selector, and footer |
| `styles.css` | Defines design tokens, light and dark themes, layout, form controls, animations, modal, notifications, and responsive styling |
| `script.js` | Implements input behavior, form validation states, simulated submissions, theme persistence, modal controls, notifications, and language updates |
| `README.md` | Project overview, setup instructions, technical details, and limitations |
| `LICENSE` | MIT License |

The phone preview and store badge images are loaded from external URLs rather than bundled as local assets in the main page markup.

---

## Getting Started

### Requirements

- A modern web browser.
- An internet connection for Google Fonts and externally hosted images.
- Git (optional).
- Visual Studio Code or another code editor (optional).

No Node.js installation, npm packages, build command, or database setup is required.

### 1. Clone the repository

```bash
git clone https://github.com/M-Taimoor-Mansha/instagram-login-clone.git
```

### 2. Open the project folder

```bash
cd instagram-login-clone
```

### 3. Run the website

**Option A: Open directly**

Open `index.html` in a modern browser.

**Option B: Visual Studio Code Live Server**

1. Open the project folder in Visual Studio Code.
2. Install the Live Server extension if needed.
3. Open `index.html`.
4. Right-click inside the editor.
5. Select **Open with Live Server**.

**Option C: Python local server**

If Python is installed, run:

```bash
python -m http.server 5500
```

Then visit:

```text
http://localhost:5500
```

Python is only used to serve the static files locally. The project itself is not a Python application.

---

## How to Use

1. Open the page in your browser.
2. Try the login form using dummy values only.
3. Enter text in the password field and test the Show/Hide control.
4. Submit the form to see the local validation and simulated response.
5. Select Sign up to switch to the registration-style card.
6. Enter sample values to observe the password-strength meter and button state.
7. Open the Forgot password dialog and test its close controls.
8. Switch between light and dark themes.
9. Refresh the page to see the saved theme preference.
10. Change the language selector to preview the available partial translations.
11. Resize the browser to inspect the responsive layout.

**Do not use real account credentials.** All form submissions are local simulations and cannot sign in to Instagram.

---

## Design System

The visual design is inspired by Instagram's familiar login experience, with additional interface refinements for the demonstration.

### Light theme

| Token | Value | Purpose |
|---|---|---|
| Primary background | `#FAFAFA` | Page background |
| Card background | `#FFFFFF` | Login and sign-up surfaces |
| Border | `#DBDBDB` | Card and input borders |
| Primary text | `#262626` | Main labels and text |
| Secondary text | `#737373` | Supporting text |
| Muted text | `#8E8E8E` | Placeholder and secondary details |
| Brand blue | `#0095F6` | Primary action |
| Facebook blue | `#385185` | Facebook-style button text |
| Error | `#ED4956` | Validation and error state |
| Success | `#4CAF50` | Success notification |

### Dark theme

The dark theme is activated through `body.dark-mode` and overrides the CSS custom properties.

| Token | Value |
|---|---|
| Primary background | `#000000` |
| Card background | `#121212` |
| Border | `#262626` |
| Primary text | `#F5F5F5` |
| Secondary text | `#A8A8A8` |
| Muted text | `#737373` |
| Input background | `#1E1E1E` |
| Input border | `#363636` |

### Typography

The interface uses **Inter**, loaded from Google Fonts, with system sans-serif fallbacks.

### Layout

The main content uses Flexbox to center the form and optional phone preview. Cards use a restrained border, rounded corners, and subtle shadows. Floating labels, modal transitions, toast animations, and button states provide interaction feedback.

---

## Responsive Design

The stylesheet includes a media query at 850px that displays the phone preview on wider screens. Below that width, the preview is hidden and the form remains centered.

The layout also uses flexible widths, a maximum form width, and viewport-aware spacing to fit smaller screens.

| Component | Responsive behavior |
|---|---|
| Main content | Centers the form within the available viewport |
| Phone preview | Hidden below 850px, displayed at wider widths |
| Form container | Uses a fluid width with a maximum width of 350px |
| Login and sign-up cards | Maintain a compact single-column layout |
| Theme toggle | Fixed in the upper-right corner |
| Recovery modal | Uses a fluid width with a maximum width |
| Footer links | Wrap across lines when needed |
| Toast notifications | Fixed near the bottom-right, with a constrained width |

---

## External Resources

The current page depends on a small number of external resources:

| Resource | Purpose |
|---|---|
| Google Fonts | Loads the Inter font family |
| GitHub raw content | Hosts the phone screenshot preview |
| Wikimedia Commons | Hosts Google Play and Microsoft Store badge images |
| Google Play | External app listing link |
| Microsoft Store | External store link |

The Instagram-style wordmark and several interface icons are embedded directly as SVG markup.

External images and fonts may not load if the visitor is offline or the hosting source changes. For a more self-contained deployment, use properly licensed local image assets.

---

## Privacy and Security Notes

This section is important because the project visually resembles a real sign-in page.

- The repository does not include a backend or authentication provider.
- The login form does not send the entered username or password to Instagram or another server.
- The sign-up form does not create an account.
- The password-recovery form does not send an email or SMS.
- The Facebook-style button does not use Facebook OAuth.
- The Facebook-style interaction inserts hard-coded demo values into the page. These are demonstration values, not a real account.
- The selected theme is stored in browser LocalStorage under `ig_theme`.
- The application does not need or request real Instagram credentials.

**Safe-use guidance:** Use only fictional test data when exploring this project. Do not collect, transmit, store, or request other people's passwords. Do not present this page as an official Instagram login page or deploy it to impersonate Instagram.

If you want to build a legitimate authentication demo, use your own product branding and a properly configured authentication provider with secure server-side handling.

---

## Customization

### Change the page title

Edit the `<title>` element in the `index.html` head section.

### Change the wordmark

The wordmark is embedded as inline SVG in `index.html`. For a distinct product, replace it with your own original brand name and artwork.

### Change colors

Edit the CSS custom properties near the beginning of `styles.css`. Light-theme variables are defined in `:root`, while dark-theme overrides are defined in `body.dark-mode`.

### Change the responsive breakpoint

Find the `@media (min-width: 850px)` rule in `styles.css` to adjust when the phone preview becomes visible.

### Change the phone preview image

Find the `.phone-screenshot` image element in `index.html` and replace its `src` with an image you own or are licensed to use.

### Change the theme storage key

In `script.js`, find the LocalStorage key `ig_theme`. Change it consistently in both the read and write operations if you need a different key.

### Add another language

Extend the `translations` object in `script.js` with a new language code and translated values. Add a corresponding option to the language selector in `index.html`.

The current translation implementation updates only selected login-page labels. A complete localization update would also need to cover sign-up fields, modal text, footer content, and every notification message.

---

## Deployment

This is a static website and can be hosted on any platform that serves HTML, CSS, and JavaScript.

### GitHub Pages

1. Open the repository on GitHub.
2. Go to **Settings**.
3. Select **Pages**.
4. Choose the `main` branch.
5. Select the repository root directory.
6. Save the configuration.
7. Wait for GitHub Pages to publish the site.

### Vercel

1. Sign in to Vercel.
2. Import the GitHub repository.
3. Set the project root to the repository root.
4. No build command is required.
5. Deploy the site.

### Netlify

1. Import the GitHub repository.
2. Set the publish directory to the repository root.
3. Leave the build command empty.
4. Deploy the site.

### Deployment checklist

- Confirm that `index.html`, `styles.css`, and `script.js` are present.
- Verify all local file references.
- Test login and sign-up demonstrations using dummy values only.
- Confirm the password visibility controls work.
- Test the recovery modal and Escape-key behavior.
- Test theme switching and LocalStorage persistence.
- Test language selection.
- Verify the layout on mobile, tablet, and desktop.
- Confirm external fonts and images load.
- Make the educational and non-affiliation disclaimer visible if publishing a live demo.

---

## Current Scope and Limitations

This repository is a static front-end demonstration, not a working account system.

| Feature | Current status |
|---|---|
| Login-page interface | Implemented |
| Sign-up interface | Implemented |
| Login/sign-up view switching | Implemented |
| Floating input labels | Implemented |
| Required-field button state | Implemented |
| Password show/hide | Implemented |
| Basic password-strength indicator | Implemented |
| Simulated login response | Implemented, client-side only |
| Simulated sign-up response | Implemented, client-side only |
| Forgot-password modal | Implemented |
| Password-reset delivery | Not implemented |
| Facebook-style login simulation | Implemented, no OAuth |
| Real Instagram authentication | Not implemented |
| Real Facebook authentication | Not implemented |
| Backend or database | Not included |
| User account creation | Not implemented |
| Session management | Not implemented |
| Toast notifications | Implemented |
| Light and dark themes | Implemented |
| Theme persistence | Implemented with LocalStorage |
| Language selector | Partial translations implemented |
| Complete localization | Not implemented |
| Responsive layout | Implemented |
| Phone preview | External image |
| App download badges | External links |

### Known behavior to understand

The demo login accepts any username with a password of at least six characters and displays a success message. It does not verify that the credentials are valid.

The sign-up flow displays a confirmation after the local checks pass. It does not register an account.

The password-recovery flow displays a simulated confirmation. It does not send a recovery message.

These behaviors are intentional front-end demonstrations, not production authentication features.

---

## Potential Improvements

The following are possible enhancements for the educational interface. They are not currently implemented.

### Interface and accessibility

- Add stronger keyboard navigation and visible focus states.
- Improve modal focus trapping and focus restoration.
- Add more comprehensive screen-reader announcements.
- Respect reduced-motion preferences across all animations.
- Improve form error messages and inline validation feedback.
- Add more complete translations.
- Add local, licensed preview and badge assets.

### Code quality

- Separate translation data into a dedicated file.
- Refactor repeated DOM operations into reusable helpers.
- Add automated tests for form-state transitions.
- Add linting and formatting.
- Add a consistent error-handling strategy.
- Review HTML semantics and accessibility.

### If building a real authentication product

Use original branding and a legitimate authentication flow. A production implementation would require secure server-side authentication, password hashing, session management, rate limiting, CSRF protections where applicable, secure recovery tokens, and privacy disclosures. Do not attempt to connect this clone to Instagram credentials or impersonate Instagram's authentication service.

---

## Troubleshooting

### The page appears without styling

Check that `styles.css` is in the project root and that `index.html` references the correct filename:

```html
<link rel="stylesheet" href="styles.css">
```

### JavaScript interactions do not work

Confirm that `script.js` is in the repository root and that the script tag appears before the closing body tag:

```html
<script src="script.js"></script>
```

Open the browser developer console to check for JavaScript errors.

### The phone preview is missing

The preview image is loaded from an external GitHub-hosted URL. Check the network connection and verify that the external image remains available. The preview is intentionally hidden below the 850px breakpoint.

### The theme does not persist

The selected theme is stored in LocalStorage using the key `ig_theme`. Browser privacy settings or cleared site data may prevent persistence.

### The password Show/Hide button is not visible

The control is shown when the related password input contains text. Enter a dummy value to reveal it.

### The language selector changes only some text

The current language implementation is intentionally partial. Some sign-up, modal, footer, and notification content remains in English.

### The store badges do not load

The badge images are hosted externally. Check the connection or replace them with local assets that you are authorized to use.

---

## Disclaimer and Trademarks

This is an independent educational project created for front-end development practice. It is not affiliated with, endorsed by, sponsored by, or officially connected to Instagram, Meta Platforms, Inc., or Facebook.

Instagram, Meta, Facebook, their logos, and related brand assets are trademarks or property of their respective owners. Any brand references or visual similarities are for identification and educational demonstration only.

Do not use this project to impersonate an official service, collect credentials, or mislead visitors.

---

## License

This project is distributed under the **MIT License**.

Copyright (c) 2026 CodewithTaimoor.

See the [LICENSE](LICENSE) file for the complete license text.

---

## Author

**Muhammad Taimoor Mansha**

- GitHub: [@M-Taimoor-Mansha](https://github.com/M-Taimoor-Mansha)
- LinkedIn: [Muhammad Taimoor Mansha](https://linkedin.com/in/muhammad-taimoor-mansha-a09455228)
- Portfolio: [Personal Portfolio](https://m-taimoor-mansha.github.io/Portfolio/)

---

<p align="center">
  Built with HTML5, CSS3, and Vanilla JavaScript.
  <br><br>
  <strong>Instagram Login Page Clone</strong>
  <br>
  An educational front-end interface demonstration.
</p>
