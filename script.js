document.addEventListener('DOMContentLoaded', () => {

            // =========================================================================
            // --- YOUR STORE'S CONTENT: EDIT ONLY THIS SECTION ---
            //
            // Here is where you can change all the text and pictures for your store.
            //
            // A few rules:
            // 1. Only change the text inside the single quotes: 'your text goes here'.
            // 2. Be careful not to delete any commas (,) or single quotes (') around the text.
            // 3. To use your own pictures, replace the placeholder link inside the single quotes.
            // 4. To add more products or reviews, copy and paste an entire block of text.
            // =========================================================================

            const storeData = {
                // Your Store's Name and Copyright
                brandName: 'Urban Crown',
                copyright: '© 2024 Urban Crown. All Rights Reserved.',
                
                // The big welcome section at the top of the page
                heroTitle: 'Crown Your Style.',
                heroSlogan: 'Premium headwear for the modern aesthetic.',
                heroVideoPoster: 'https://placehold.co/1920x1080/4a5568/ffffff?text=Video+Loading', // A preview image for the video while it loads.
                heroVideoSource: 'https://videos.pexels.com/video-files/5534476/5534476-uhd_1440_2560_30fps.mp4', // IMPORTANT: Replace this link with the web address of your video. For example: 'https://your-video-host.com/your-video.mp4'
                
                // The "Our Story" section
                aboutTitle: 'Our Story',
                aboutText: 'Urban Crown was founded by Ridwan "Verizon" Aboderin with a simple mission: to create headwear that combines timeless design with modern comfort. We believe a cap is more than just an accessory; it\'s an extension of your personality. Our commitment to quality materials and craftsmanship ensures that every piece is built to last.',
                aboutImage: './images/about-us.avif', // Replace this with your own image address.

                // Your Products
                // To add a new product, copy a block of text below and paste it.
                // Be sure to change the number for 'id' to a new, unique number.
                products: [
                    { 
                        id: 1, 
                        name: 'The Midnight Rider', 
                        price: 34.99, 
                        image: 'https://images.pexels.com/photos/8445639/pexels-photo-8445639.jpeg', // Replace this link with your own image address.
                        genericName: 'Snapback Cap',
                        sizes: ['One Size'], 
                        description: 'A classic black snapback cap with a subtle embroidered logo. Perfect for a bold, understated look.'
                    },
                    { 
                        id: 2, 
                        name: 'The Vintage Rover', 
                        price: 28.00, 
                        image: 'https://lsco.scene7.com/is/image/lsco/000A90008-dynamic1-pdp?fmt=jpeg&qlt=70&resMode=sharp2&fit=crop,1&op_usm=0.6,0.6,8&wid=2000&hei=2500', // Replace this link with your own image address.
                        genericName: 'Dad Cap',
                        sizes: ['One Size'], 
                        description: 'This washed-out cotton dad cap features a low profile and an adjustable strap for a comfortable, laid-back fit.'
                    },
                    { 
                        id: 3, 
                        name: 'The City Explorer', 
                        price: 39.50, 
                        image: 'https://qualitywheelsinc.com/wp-content/uploads/2023/07/We-Are-Hiring-Mobile.jpg', // Replace this link with your own image address.
                        genericName: 'Trucker Hat',
                        sizes: ['One Size'], 
                        description: 'A modern trucker hat with a breathable mesh back and a vibrant front panel, designed for urban exploration.' 
                    },
                    { 
                        id: 4, 
                        name: 'The Apex Fitted', 
                        price: 42.99, 
                        image: 'https://ucarecdn.com/ed5ee4ff-5638-485b-b9e4-99ef49603ce3/-/format/auto/-/preview/3000x3000/-/quality/lighter/15-9L0A0648.jpg', // Replace this link with your own image address.
                        genericName: 'Fitted Hat',
                        sizes: ['7', '7 1/4', '7 1/2', '7 3/4'], 
                        description: 'Our signature fitted hat with a structured crown and flat brim. The perfect fit for a clean, sharp look.' 
                    },
                    { 
                        id: 5, 
                        name: 'The Sunset Snapback', 
                        price: 34.99, 
                        image: 'https://th.bing.com/th/id/R.004cde796241b68e9cd71f5de463b413?rik=05G5gKKQVxqOPA&riu=http%3a%2f%2fwww.dmarge.com%2fwp-content%2fuploads%2f2013%2f12%2fSmartCasualCool.jpg&ehk=yqGdG%2fkQ%2bva0s4Rop6y1gVDZkiGcm6oUnrphmjFS6Wc%3d&risl=&pid=ImgRaw&r=0', 
                        genericName: 'Snapback Cap',
                        sizes: ['One Size'], 
                        description: 'A classic snapback cap with a unique gradient design inspired by a fiery sunset.' 
                    },
                    { 
                        id: 6, 
                        name: 'The Forest Wanderer', 
                        price: 28.00, 
                        image: 'https://placehold.co/600x600/166534/ffffff?text=Forest+Wanderer', 
                        genericName: 'Dad Cap',
                        sizes: ['One Size'], 
                        description: 'A deep green dad cap with an embroidered tree icon. Ideal for nature lovers and casual outfits.' 
                    },
                    { 
                        id: 7, 
                        name: 'The Ocean Breeze', 
                        price: 39.50, 
                        image: 'https://placehold.co/600x600/60a5fa/ffffff?text=Ocean+Breeze', 
                        genericName: 'Trucker Hat',
                        sizes: ['One Size'], 
                        description: 'A light blue trucker hat that combines airy mesh and a soft front panel for maximum comfort on sunny days.' 
                    },
                    { 
                        id: 8, 
                        name: 'The Carbon Cap', 
                        price: 42.99, 
                        image: 'https://placehold.co/600x600/4b5563/ffffff?text=Carbon+Cap', 
                        genericName: 'Fitted Hat',
                        sizes: ['7', '7 1/4', '7 1/2', '7 3/4'], 
                        description: 'A sleek, charcoal-gray fitted hat made from a high-tech moisture-wicking fabric.' 
                    },
                    { 
                        id: 9, 
                        name: 'The Glacier Peak', 
                        price: 34.99, 
                        image: 'https://placehold.co/600x600/94a3b8/ffffff?text=Glacier+Peak', 
                        genericName: 'Snapback Cap',
                        sizes: ['One Size'], 
                        description: 'A snapback cap in a cool, icy blue color, with a mountain range logo. A great choice for a fresh look.' 
                    },
                    { 
                        id: 10, 
                        name: 'The Dusty Road', 
                        price: 28.00, 
                        image: 'https://placehold.co/600x600/d97706/ffffff?text=Dusty+Road', 
                        genericName: 'Dad Cap',
                        sizes: ['One Size'], 
                        description: 'A light brown dad cap with a worn-in feel, perfect for a vintage and adventurous style.' 
                    },
                    { 
                        id: 11, 
                        name: 'The Neon Signal', 
                        price: 39.50, 
                        image: 'https://placehold.co/600x600/eab308/000000?text=Neon+Signal', 
                        genericName: 'Trucker Hat',
                        sizes: ['One Size'], 
                        description: 'Stand out from the crowd with this high-visibility neon yellow trucker hat. Mesh back for breathability.' 
                    },
                    { 
                        id: 12, 
                        name: 'The Crimson Crown', 
                        price: 42.99, 
                        image: 'https://placehold.co/600x600/dc2626/ffffff?text=Crimson+Crown', 
                        genericName: 'Fitted Hat',
                        sizes: ['7', '7 1/4', '7 1/2', '7 3/4'], 
                        description: 'A deep crimson fitted hat that exudes confidence and style. Made with a premium wool blend.' 
                    },
                    { 
                        id: 13, 
                        name: 'The Urban Camo', 
                        price: 36.99, 
                        image: 'https://placehold.co/600x600/a3a3a3/ffffff?text=Urban+Camo', 
                        genericName: 'Snapback Cap',
                        sizes: ['One Size'], 
                        description: 'A stylish snapback cap with a modern gray camouflage pattern, designed for the urban jungle.' 
                    },
                    { 
                        id: 14, 
                        name: 'The Sky Blue Classic', 
                        price: 28.00, 
                        image: 'https://placehold.co/600x600/c7d3d7/000000?text=Sky+Blue', 
                        genericName: 'Dad Cap',
                        sizes: ['One Size'], 
                        description: 'A light, sky-blue dad cap made from a super-soft, breathable fabric. Your new go-to casual cap.' 
                    },
                    { 
                        id: 15, 
                        name: 'The Blackout Trucker', 
                        price: 39.50, 
                        image: 'https://placehold.co/600x600/1f2937/ffffff?text=Blackout+Trucker', 
                        genericName: 'Trucker Hat',
                        sizes: ['One Size'], 
                        description: 'An all-black trucker hat with a solid front and mesh back. Sleek, stealthy, and sophisticated.' 
                    },
                ],

                // Customer Reviews
                // To add a new review, copy a block of text below and paste it.
                reviews: [
                    {
                        author: 'Alex P.',
                        text: 'The Midnight Rider is my new favorite snapback! The quality is incredible and the fit is perfect.',
                        productId: 1,
                    },
                    {
                        author: 'Sarah J.',
                        text: 'I love my Vintage Rover. It feels so soft and has that perfectly worn-in look I was searching for. Highly recommend!',
                        productId: 2,
                    },
                    {
                        author: 'Mike D.',
                        text: 'Just got The City Explorer and it\'s amazing! Super breathable and the design is top-notch.',
                        productId: 3,
                    },
                    {
                        author: 'Emily K.',
                        text: 'My new Carbon Cap is exactly what I wanted. The material feels great and the color is awesome.',
                        productId: 8,
                    },
                    {
                        author: 'Chris L.',
                        text: 'The Sunset Snapback looks even better in person! The colors are so vibrant and it gets a lot of compliments.',
                        productId: 5,
                    },
                ],

                // The newsletter and contact section
                contactTitle: 'Join the Crown.',
                contactSlogan: 'Be the first to know about new drops and exclusive offers.'
            };

            // =========================================================================
            // --- YOUR STORE'S CONTENT: END OF SECTION ---
            // =========================================================================


            // --- Core App Functionality (DO NOT EDIT) ---
            // These functions build the page using the content you provided above.
            // Changing anything in this section can break the website.
            const productGrid = document.getElementById('product-grid');
            const searchInput = document.getElementById('search-input');
            const headerLogo = document.getElementById('header-logo');
            const heroTitle = document.getElementById('hero-title');
            const heroSlogan = document.getElementById('hero-slogan');
            const heroImage = document.getElementById('hero-image');
            const heroVideo = document.getElementById('hero-video');
            const aboutTitle = document.getElementById('about-title');
            const aboutText = document.getElementById('about-text');
            const aboutImage = document.getElementById('about-image');
            const reviewGrid = document.getElementById('review-grid');
            const contactTitle = document.getElementById('contact-title');
            const contactSlogan = document.getElementById('contact-slogan');
            const footerBrandName = document.getElementById('footer-brand-name');
            const footerBrandSummary = document.getElementById('footer-brand-summary');
            const copyright = document.getElementById('copyright');
            const seeMoreBtn = document.getElementById('see-more-btn');
            const trackOrderBtn = document.getElementById('track-order-btn');
            const orderTrackingInput = document.getElementById('order-tracking-input');

            // Populate static content from storeData
            document.title = storeData.brandName + ' - ' + storeData.heroSlogan;
            headerLogo.textContent = storeData.brandName;
            heroTitle.textContent = storeData.heroTitle;
            heroSlogan.textContent = storeData.heroSlogan;
            heroVideo.poster = storeData.heroVideoPoster;
            heroVideo.src = storeData.heroVideoSource;
            aboutTitle.textContent = storeData.aboutTitle;
            aboutText.textContent = storeData.aboutText;
            aboutImage.src = storeData.aboutImage;
            aboutImage.alt = storeData.aboutTitle;
            contactTitle.textContent = storeData.contactTitle;
            contactSlogan.textContent = storeData.contactSlogan;
            footerBrandName.textContent = storeData.brandName;
            footerBrandSummary.textContent = storeData.aboutText.split('.')[0] + '.';
            copyright.textContent = storeData.copyright;

            const navLinksContainer = document.getElementById('nav-links');
            ['Products', 'About', 'Reviews', 'Tracking', 'Contact'].forEach(section => {
                const link = document.createElement('a');
                link.href = `#${section.toLowerCase()}`;
                link.textContent = section;
                link.className = 'text-black hover:text-gray-600 transition-colors duration-300';
                navLinksContainer.appendChild(link);
            });

            // "See More" functionality variables
            const productsToShowInitially = 8;
            let productsExpanded = false;

            function renderProducts(productsToRender) {
                productGrid.innerHTML = '';
                const displayProducts = productsExpanded ? productsToRender : productsToRender.slice(0, productsToShowInitially);

                displayProducts.forEach(product => {
                    const productCard = document.createElement('div');
                    productCard.className = 'product-card bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 cursor-pointer';
                    productCard.dataset.id = product.id; 
                    productCard.innerHTML = `
                        <img src="${product.image}" alt="${product.name}" class="h-64 w-full object-cover">
                        <div class="p-6 text-center">
                            <h3 class="text-xl font-semibold">${product.name}</h3>
                            <p class="text-gray-500 mt-2">$${product.price.toFixed(2)}</p>
                            <button class="add-to-cart-btn mt-4 px-6 py-2 bg-orange-500 text-white font-bold rounded-full hover:bg-orange-600 transition-colors">Add to Cart</button>
                        </div>
                    `;
                    productGrid.appendChild(productCard);
                });

                if (productsToRender.length > productsToShowInitially) {
                    seeMoreBtn.classList.remove('hidden');
                    seeMoreBtn.textContent = productsExpanded ? 'See Less' : 'See More';
                } else {
                    seeMoreBtn.classList.add('hidden');
                }
            }

            renderProducts(storeData.products);

            seeMoreBtn.addEventListener('click', () => {
                productsExpanded = !productsExpanded;
                renderProducts(storeData.products);
            });

            trackOrderBtn.addEventListener('click', () => {
                const orderNumber = orderTrackingInput.value;
                if (orderNumber) {
                    alert(`Tracking order ${orderNumber}. This feature is a placeholder and would normally connect to a live tracking service.`);
                } else {
                    alert('Please enter a valid order number.');
                }
            });

            function renderReviews() {
                reviewGrid.innerHTML = '';
                storeData.reviews.forEach(review => {
                    const product = storeData.products.find(p => p.id === review.productId);
                    if (product) {
                        const reviewCard = document.createElement('div');
                        reviewCard.className = 'bg-white p-8 rounded-xl shadow-lg border border-gray-200';
                        reviewCard.innerHTML = `
                            <div class="w-24 h-24 rounded-full bg-gray-300 mx-auto mb-4 overflow-hidden">
                                <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover" />
                            </div>
                            <p class="italic text-gray-700">"${review.text}"</p>
                            <p class="mt-4 font-semibold">- ${review.author}</p>
                        `;
                        reviewGrid.appendChild(reviewCard);
                    }
                });
            }
            renderReviews();

            searchInput.addEventListener('input', (event) => {
                const searchTerm = event.target.value.toLowerCase();
                const filteredProducts = storeData.products.filter(product => 
                    product.name.toLowerCase().includes(searchTerm) || 
                    product.description.toLowerCase().includes(searchTerm)
                );
                renderProducts(filteredProducts);
            });

            const cartCountElement = document.getElementById('cart-count');
            const cartIcon = document.getElementById('cart-icon-svg').parentElement;
            const cartPanel = document.getElementById('cart-panel');
            const cartCloseBtn = document.getElementById('cart-close-btn');
            const cartItemsContainer = document.getElementById('cart-items');
            const emptyCartMessage = document.getElementById('empty-cart-message');
            const cartSubtotalElement = document.getElementById('cart-subtotal');
            const checkoutBtn = document.getElementById('checkout-btn');
            let cart = [];

            function updateCartCount() {
                const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
                cartCountElement.textContent = totalItems;
                if (totalItems > 0) {
                    cartCountElement.classList.remove('hidden');
                    emptyCartMessage.classList.add('hidden');
                } else {
                    cartCountElement.classList.add('hidden');
                    emptyCartMessage.classList.remove('hidden');
                }
                updateCartPanel();
            }

            function updateCartPanel() {
                cartItemsContainer.innerHTML = '';
                let subtotal = 0;
                
                if (cart.length > 0) {
                    emptyCartMessage.classList.add('hidden');
                    cart.forEach(item => {
                        const itemTotal = item.price * item.quantity;
                        subtotal += itemTotal;
                        const cartItemElement = document.createElement('div');
                        cartItemElement.className = 'flex items-center space-x-4 mb-4';
                        cartItemElement.innerHTML = `
                            <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded-lg">
                            <div class="flex-grow">
                                <p class="font-bold">${item.name}</p>
                                <p class="text-gray-500 text-sm">${item.size}</p>
                                <p class="text-black font-semibold">$${item.price.toFixed(2)} x ${item.quantity}</p>
                            </div>
                            <div class="flex items-center space-x-2">
                                <button class="remove-from-cart-btn text-gray-500 hover:text-red-500" data-id="${item.id}" data-size="${item.size}">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm6 0a1 1 0 012 0v6a1 1 0 11-2 0V8z" clip-rule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        `;
                        cartItemsContainer.appendChild(cartItemElement);
                    });
                } else {
                    emptyCartMessage.classList.remove('hidden');
                }
                cartSubtotalElement.textContent = `$${subtotal.toFixed(2)}`;
                return subtotal;
            }

            function addItemToCart(product, size, quantity) {
                const existingItem = cart.find(item => item.id === product.id && item.size === size);
                if (existingItem) {
                    existingItem.quantity += quantity;
                } else {
                    cart.push({ ...product, size, quantity });
                }
                updateCartCount();
            }

            cartIcon.addEventListener('click', () => {
                cartPanel.classList.toggle('active');
            });
            cartCloseBtn.addEventListener('click', () => {
                cartPanel.classList.remove('active');
            });
            checkoutBtn.addEventListener('click', () => {
                cartPanel.classList.remove('active');
                openCheckoutModal();
            });

            productGrid.addEventListener('click', (event) => {
                if (event.target.classList.contains('add-to-cart-btn')) {
                    event.stopPropagation();
                    const productCard = event.target.closest('.product-card');
                    const productId = parseInt(productCard.dataset.id);
                    const product = storeData.products.find(p => p.id === productId);
                    if (product) {
                        const size = product.sizes && product.sizes.length > 0 ? product.sizes[0] : 'One Size';
                        addItemToCart(product, size, 1);
                    }
                }
            });
            
            const productModal = document.getElementById('product-modal');
            const modalCloseBtn = document.getElementById('modal-close-btn');
            const modalProductName = document.getElementById('modal-product-name');
            const modalProductPrice = document.getElementById('modal-product-price');
            const modalProductImage = document.getElementById('modal-product-image');
            const modalProductDescription = document.getElementById('modal-product-description');
            const modalProductSizes = document.getElementById('modal-product-sizes');
            const modalQuantityInput = document.getElementById('modal-quantity-input');
            const modalAddToCartBtn = document.getElementById('modal-add-to-cart-btn');

            let currentProduct = null;
            let selectedSize = null;

            productGrid.addEventListener('click', (event) => {
                const productCard = event.target.closest('.product-card');
                if (productCard && !event.target.classList.contains('add-to-cart-btn')) {
                    const productId = parseInt(productCard.dataset.id);
                    currentProduct = storeData.products.find(p => p.id === productId);
                    
                    if (currentProduct) {
                        modalProductName.textContent = currentProduct.name;
                        modalProductPrice.textContent = `$${currentProduct.price.toFixed(2)}`;
                        modalProductImage.src = currentProduct.image;
                        modalProductImage.alt = currentProduct.name;
                        modalProductDescription.textContent = currentProduct.description + ' (This is a ' + currentProduct.genericName + '.)';
                        
                        modalProductSizes.innerHTML = '';
                        selectedSize = null;
                        if (currentProduct.sizes && currentProduct.sizes.length > 0) {
                            currentProduct.sizes.forEach(size => {
                                const sizeBtn = document.createElement('button');
                                sizeBtn.textContent = size;
                                sizeBtn.className = 'px-4 py-2 border rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors';
                                sizeBtn.addEventListener('click', () => {
                                    document.querySelectorAll('#modal-product-sizes button').forEach(btn => btn.classList.remove('bg-orange-500', 'text-white'));
                                    sizeBtn.classList.add('bg-orange-500', 'text-white');
                                    selectedSize = size;
                                });
                                modalProductSizes.appendChild(sizeBtn);
                            });
                            document.querySelector('#modal-product-sizes button').click();
                        }

                        productModal.classList.add('active');
                    }
                }
            });

            modalCloseBtn.addEventListener('click', () => {
                productModal.classList.remove('active');
                modalQuantityInput.value = 1;
            });
            document.getElementById('modal-bg').addEventListener('click', () => {
                productModal.classList.remove('active');
                modalQuantityInput.value = 1;
            });

            modalAddToCartBtn.addEventListener('click', () => {
                if (currentProduct && selectedSize) {
                    const quantity = parseInt(modalQuantityInput.value);
                    addItemToCart(currentProduct, selectedSize, quantity);
                    productModal.classList.remove('active');
                    modalQuantityInput.value = 1;
                } else {
                    alert('Please select a size.');
                }
            });

            cartItemsContainer.addEventListener('click', (event) => {
                if (event.target.closest('.remove-from-cart-btn')) {
                    const button = event.target.closest('.remove-from-cart-btn');
                    const id = parseInt(button.dataset.id);
                    const size = button.dataset.size;
                    cart = cart.filter(item => !(item.id === id && item.size === size));
                    updateCartCount();
                }
            });
            
            const checkoutModal = document.getElementById('checkout-modal');
            const checkoutCloseBtn = document.getElementById('checkout-close-btn');
            const checkoutForm = document.getElementById('checkout-form');
            const checkoutTotalElement = document.getElementById('checkout-total');
            const checkoutCartSummary = document.getElementById('checkout-cart-summary');
            const checkoutEmptyMessage = document.getElementById('checkout-empty-message');


            function openCheckoutModal() {
                const subtotal = updateCartPanel();
                checkoutTotalElement.textContent = `$${subtotal.toFixed(2)}`;
                
                // Populate the cart summary in the checkout modal
                checkoutCartSummary.innerHTML = '<h4 class="font-bold text-lg mb-2">Cart Summary</h4>';
                if (cart.length > 0) {
                    checkoutEmptyMessage.classList.add('hidden');
                    cart.forEach(item => {
                        const cartItemSummary = document.createElement('div');
                        cartItemSummary.className = 'flex justify-between items-center text-sm text-gray-700 pb-1 border-b border-gray-200 last:border-b-0';
                        cartItemSummary.innerHTML = `
                            <span>${item.name} (${item.size}) x ${item.quantity}</span>
                            <span class="font-semibold">$${(item.price * item.quantity).toFixed(2)}</span>
                        `;
                        checkoutCartSummary.appendChild(cartItemSummary);
                    });
                } else {
                    checkoutEmptyMessage.classList.remove('hidden');
                    checkoutCartSummary.appendChild(checkoutEmptyMessage);
                }

                checkoutModal.classList.add('active');
            }

            checkoutCloseBtn.addEventListener('click', () => {
                checkoutModal.classList.remove('active');
            });
            document.getElementById('checkout-bg').addEventListener('click', () => {
                checkoutModal.classList.remove('active');
            });
            
            checkoutForm.addEventListener('submit', (event) => {
                event.preventDefault();
                alert('Thank you for your order! (This is a placeholder message)');
                cart = [];
                updateCartCount();
                checkoutModal.classList.remove('active');
            });
        });