// ***********************************************
// Custom Commands for Demo-Webshop Testing
// ***********************************************

// ============================================
// Authentication Commands
// ============================================

/**
 * Login with credentials from environment variables or custom values
 * @param {string} email - Optional email (defaults to env variable)
 * @param {string} password - Optional password (defaults to env variable)
 */
Cypress.Commands.add('login', (email, password) => {
  const loginEmail = email || Cypress.env('TEST_EMAIL');
  const loginPassword = password || Cypress.env('TEST_PASSWORD');

  cy.visit('/login');
  cy.get('#Email').should('be.visible').type(loginEmail);
  cy.get('#Password').should('be.visible').type(loginPassword);
  cy.get('.button-1.login-button').click();
  cy.get('.account').should('contain', loginEmail);
});

/**
 * Logout from the application
 */
Cypress.Commands.add('logout', () => {
  cy.get('.ico-logout').should('be.visible').click();
  cy.get('.ico-login').should('be.visible');
});

/**
 * Register a new user account
 * @param {object} userData - User registration data
 */
Cypress.Commands.add('register', (userData = {}) => {
  const data = {
    gender: userData.gender || 'M',
    firstName: userData.firstName || Cypress.env('TEST_FIRST_NAME'),
    lastName: userData.lastName || Cypress.env('TEST_LAST_NAME'),
    email: userData.email || Cypress.env('TEST_EMAIL'),
    password: userData.password || Cypress.env('TEST_PASSWORD'),
    confirmPassword: userData.confirmPassword || Cypress.env('TEST_PASSWORD')
  };

  cy.visit('/register');
  cy.get(`#gender-${data.gender === 'M' ? 'male' : 'female'}`).check();
  cy.get('#FirstName').type(data.firstName);
  cy.get('#LastName').type(data.lastName);
  cy.get('#Email').type(data.email);
  cy.get('#Password').type(data.password);
  cy.get('#ConfirmPassword').type(data.confirmPassword);
  cy.get('#register-button').click();
});

// ============================================
// Navigation Commands
// ============================================

/**
 * Navigate to a specific category
 * @param {string} category - Category name (Books, Computers, Electronics, etc.)
 */
Cypress.Commands.add('navigateToCategory', (category) => {
  cy.visit('/');
  cy.contains(category).should('be.visible').click();
  cy.url().should('include', category.toLowerCase());
});

/**
 * Navigate to shopping cart
 */
Cypress.Commands.add('goToCart', () => {
  cy.get('.ico-cart').should('be.visible').click();
  cy.url().should('include', '/cart');
});

/**
 * Navigate to wishlist
 */
Cypress.Commands.add('goToWishlist', () => {
  cy.get('.ico-wishlist').should('be.visible').click();
  cy.url().should('include', '/wishlist');
});

/**
 * Navigate to checkout
 */
Cypress.Commands.add('goToCheckout', () => {
  cy.goToCart();
  cy.get('#termsofservice').check();
  cy.get('#checkout').click();
});

// ============================================
// Product Commands
// ============================================

/**
 * Add a product to cart by product name
 * @param {string} productName - Name of the product
 */
Cypress.Commands.add('addToCart', (productName) => {
  cy.contains('.product-title', productName).should('be.visible').click();
  cy.get('.add-to-cart-button').click();
  cy.get('.bar-notification.success').should('be.visible');
});

/**
 * Add a product to wishlist
 * @param {string} productName - Name of the product
 */
Cypress.Commands.add('addToWishlist', (productName) => {
  cy.contains('.product-title', productName).should('be.visible').click();
  cy.get('.add-to-wishlist-button').click();
  cy.get('.bar-notification.success').should('be.visible');
});

/**
 * Remove item from cart by index
 * @param {number} index - Index of the item to remove (0-based)
 */
Cypress.Commands.add('removeFromCart', (index = 0) => {
  cy.goToCart();
  cy.get('.remove-from-cart').eq(index).check();
  cy.get('[name="updatecart"]').click();
});

/**
 * Search for products
 * @param {string} searchTerm - Search term
 */
Cypress.Commands.add('searchProduct', (searchTerm) => {
  cy.get('#small-searchterms').should('be.visible').type(searchTerm);
  cy.get('.search-box-button').click();
});

// ============================================
// Checkout Commands
// ============================================

/**
 * Complete checkout with billing address
 * @param {object} address - Billing address data
 */
Cypress.Commands.add('fillBillingAddress', (address = {}) => {
  const addr = {
    firstName: address.firstName || Cypress.env('TEST_FIRST_NAME'),
    lastName: address.lastName || Cypress.env('TEST_LAST_NAME'),
    email: address.email || Cypress.env('TEST_EMAIL'),
    company: address.company || Cypress.env('TEST_COMPANY'),
    country: address.country || 'Germany',
    city: address.city || Cypress.env('TEST_CITY'),
    address1: address.address1 || Cypress.env('TEST_ADDRESS'),
    zip: address.zip || Cypress.env('TEST_ZIP'),
    phone: address.phone || Cypress.env('TEST_PHONE')
  };

  cy.get('#BillingNewAddress_FirstName').clear().type(addr.firstName);
  cy.get('#BillingNewAddress_LastName').clear().type(addr.lastName);
  cy.get('#BillingNewAddress_Email').clear().type(addr.email);
  if (addr.company) {
    cy.get('#BillingNewAddress_Company').clear().type(addr.company);
  }
  cy.get('#BillingNewAddress_CountryId').select(addr.country);
  cy.get('#BillingNewAddress_City').clear().type(addr.city);
  cy.get('#BillingNewAddress_Address1').clear().type(addr.address1);
  cy.get('#BillingNewAddress_ZipPostalCode').clear().type(addr.zip);
  cy.get('#BillingNewAddress_PhoneNumber').clear().type(addr.phone);
});

/**
 * Select shipping method
 * @param {string} method - Shipping method (Ground, Next Day Air, 2nd Day Air)
 */
Cypress.Commands.add('selectShippingMethod', (method = 'Ground') => {
  cy.contains('.shipping-method', method).find('input').check();
  cy.get('.button-1.shipping-method-next-step-button').click();
});

/**
 * Select payment method
 * @param {string} method - Payment method (CreditCard, COD, PurchaseOrder, etc.)
 */
Cypress.Commands.add('selectPaymentMethod', (method = 'CreditCard') => {
  cy.get(`#paymentmethod_${method === 'CreditCard' ? '2' : '0'}`).check();
  cy.get('.button-1.payment-method-next-step-button').click();
});

/**
 * Fill credit card information
 * @param {object} cardData - Credit card data
 */
Cypress.Commands.add('fillCreditCard', (cardData = {}) => {
  const card = {
    type: cardData.type || 'Visa',
    holder: cardData.holder || Cypress.env('TEST_CC_HOLDER'),
    number: cardData.number || Cypress.env('TEST_CC_NUMBER'),
    expireMonth: cardData.expireMonth || '12',
    expireYear: cardData.expireYear || '2025',
    code: cardData.code || Cypress.env('TEST_CC_CVV')
  };

  cy.get('#CreditCardType').select(card.type);
  cy.get('#CardholderName').type(card.holder);
  cy.get('#CardNumber').type(card.number);
  cy.get('#ExpireMonth').select(card.expireMonth);
  cy.get('#ExpireYear').select(card.expireYear);
  cy.get('#CardCode').type(card.code);
});

// ============================================
// Assertion Commands
// ============================================

/**
 * Check if user is logged in
 */
Cypress.Commands.add('shouldBeLoggedIn', () => {
  cy.get('.account').should('be.visible');
  cy.get('.ico-logout').should('be.visible');
});

/**
 * Check if user is logged out
 */
Cypress.Commands.add('shouldBeLoggedOut', () => {
  cy.get('.ico-login').should('be.visible');
  cy.get('.ico-register').should('be.visible');
});

/**
 * Verify cart item count
 * @param {number} count - Expected item count
 */
Cypress.Commands.add('cartShouldHaveItems', (count) => {
  cy.get('.cart-qty').should('contain', `(${count})`);
});

/**
 * Verify page title
 * @param {string} title - Expected page title
 */
Cypress.Commands.add('shouldHavePageTitle', (title) => {
  cy.get('.page-title h1').should('contain', title);
});