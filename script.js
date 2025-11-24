// Dados do cliente
let clientData = {
    name: '',
    table: ''
};

// Carrinho de compras
let cart = [];

// Array com os itens do menu
const menuItems = [
    { id: 1, nome: 'Picanha na Brasa', description: 'Suculenta picanha grelhada (500g)', preço: 89.90, image: 'img/picanha.JPG' },
    { id: 2, nome: 'Costela BBQ', description: 'Costela ao molho barbecue defumado', preço: 75.00, image: 'img/costeladegado.JPG' },
    { id: 3, nome: 'Frango Grelhado', description: 'Peito de frango temperado e grelhado', preço: 45.00, image: 'img/peitodefrango.JPG' },
    { id: 4, nome: 'Linguiça Artesanal', description: 'Linguiça calabresa na brasa (6 unidades)', preço: 38.00, image: 'img/linguica.JPG' },
    { id: 5, nome: 'Hambúrguer Artesanal', description: 'Blend especial 200g com queijo', preço: 45.00, image: 'img/hambuguer.JPG' },
    { id: 6, nome: 'Espetinho Misto', description: 'Mix de carnes grelhadas (10 unid)', preço: 25.00, image: 'img/espetinhomisto.JPG' },
    { id: 7, nome: 'Filé Mignon', description: 'Filé mignon grelhado com molho madeira (300g)', preço: 92.00, image: 'img/filemolhomadera.JPG' },
    { id: 8, nome: 'Salada Tropical', description: 'Salada com frango, abacaxi e molho especial', preço: 35.00, image: 'img/salada.JPG' },
    { id: 9, nome: 'Alcatra Grelhada', description: 'Alcatra suculenta na brasa (400g)', preço: 68.00, image: 'img/alcatra.JPG' },
    { id: 10, nome: 'Medalhão de Frango', description: 'Medalhões recheados com queijo e presunto', preço: 52.00, image: 'img/medalhaoqueijo.JPG' },
    { id: 11, nome: 'Costela de Porco', description: 'Costela de porco ao molho agridoce', preço: 58.00, image: 'img/costeladeporco.JPG' },
    { id: 12, nome: 'Salmão Grelhado', description: 'Salmão fresco grelhado com ervas (300g)', preço: 85.00, image: 'img/salmao.JPG' },
    { id: 13, nome: 'Kafta de Cordeiro', description: 'Kafta de cordeiro com especiarias (5 unid)', preço: 62.00, image: 'img/kaftadecordeiro.JPG' },
    { id: 14, nome: 'Batata Rústica', description: 'Batata rústica assada com bacon e cheddar', preço: 28.00, image: 'img/batata.JPG' },
    { id: 15, nome: 'Combo Família', description: 'Mix de carnes para 4 pessoas com acompanhamentos', preço: 180.00, image: 'img/mixdecarne.JPG' },
    { id: 16, nome: 'Risoto de Camarão', description: 'Arroz Arbório com Camarão', preço: 40.00, image: 'img/risoto.jpg' },
    { id: 17, nome: 'Macarrão ao Molho Branco', description: 'Macarrão brócolis bacon ao molho branco', preço: 35.00, image: 'img/macarrão.jpg' },
    { id: 18, nome: 'Kit Feijoada', description: 'Arroz, feijoada, couve, galeto, vinagrete', preço: 60.00, image: 'img/feijoada.jpg' },
    { id: 19, nome: 'Strogonoff', description: 'Arroz, strogonoff, batata palha', preço: 55.00, image: 'img/strogonoff.jpg' },
    { id: 20, nome: 'Lasanha', description: 'Arroz, lasanha, salada, carne de panela', preço: 48.00, image: 'img/lasanha.jpg' },
    { id: 21, nome: 'Nhoque', description: 'Nhoque molho vermelho', preço: 40.00, image: 'img/nhoque.jpg' },
    { id: 22, nome: 'Pure com Mignon', description: 'Pure de batata, filé mignon', preço: 75.00, image: 'img/purebatatas.jpg' },
    { id: 23, nome: 'Macarrão Bolonhesa', description: 'Macarrão com molho Bolonhesa', preço: 70.00, image: 'img/espaguete.jpg' },
    { id: 24, nome: 'Ceviche', description: 'Ceviche de tilápia', preço: 30.00, image: 'img/ceviche.jpg' },
    { id: 25, nome: 'Yakisoba', description: 'Macarrão, legumes, carnes', preço: 40.00, image: 'img/yakisoba.jpg' },
    { id: 26, nome: 'Pure de Abobora com Camarão', description: 'Pure de abobora com molho de camarão', preço: 35.00, image: 'img/pureabobora.jpg' },
    { id: 27, nome: 'Sopa', description: 'Sopa de legumes', preço: 28.00, image: 'img/sopa.jpg' },
    { id: 28, nome: 'Prato PF', description: 'Arroz, feijão, bife acebolado, batatinha', preço: 50.00, image: 'img/pratonor.jpg' },
    { id: 29, nome: 'Hambúrguer queijo Parmezão', description: 'hambuguer, queijo, maionese, batata frita', preço: 55.00, image: 'img/hamburbat.jpg' },
    { id: 30, nome: 'Hambúrguer Cheddar', description: 'Hambúrguer, pão australiano', preço: 50.00, image: 'img/hamburguer3.jpg' },
    { id: 31, nome: 'Hambúrguer de Frango', description: 'Hambúrguer de Frango, cebola caramelizada, batata frita', preço: 48.00, image: 'img/hamburguer4.jpg' }
];

// Array com as bebidas
const bebidas = [
    { id: 101, nome: 'Refrigerante Lata', description: 'Coca-Cola (350ml)', preço: 6.00, image: 'imgbebidas/coca.JPG' },
    { id: 102, nome: 'Refrigerante Lata', description: 'Guaraná (350ml)', preço: 6.00, image: 'imgbebidas/guaraná.JPG' },
    { id: 103, nome: 'Refrigerante Lata', description: 'Fanta Uva (350ml)', preço: 6.00, image: 'imgbebidas/fantauva.JPG' },
    { id: 104, nome: 'Refrigerante 2L', description: 'Coca-Cola', preço: 12.00, image: 'imgbebidas/litrococa.JPG' },
    { id: 105, nome: 'Refrigerante 2L', description: 'Guaraná', preço: 12.00, image: 'imgbebidas/litroguaraná.JPG' },
    { id: 106, nome: 'Refrigerante 2L', description: 'Fanta Uva', preço: 12.00, image: 'imgbebidas/litrofantauva.JPG' },
    { id: 107, nome: 'Suco Natural', description: 'Laranja (500ml)', preço: 10.00, image: 'imgbebidas/sucodelaranja.JPG' },
    { id: 108, nome: 'Suco Natural', description: 'Abacaxi (500ml)', preço: 10.00, image: 'imgbebidas/sucodeabacaxi.jpg' },
    { id: 109, nome: 'Suco Natural', description: 'Morango (500ml)', preço: 10.00, image: 'imgbebidas/sucodemorango.jpg' },
    { id: 110, nome: 'Cerveja Lata', description: 'Budweiser (350ml)', preço: 10.00, image: 'imgbebidas/budweise.JPG' },
    { id: 111, nome: 'Cerveja Lata', description: 'Heineken (350ml)', preço: 10.00, image: 'imgbebidas/heinekenlata.jpeg' },
    { id: 112, nome: 'Cerveja Lata', description: 'Brahma (350ml)', preço: 10.00, image: 'imgbebidas/brahma.JPG' },
    { id: 113, nome: 'Água Mineral', description: 'Com gás (500ml)', preço: 4.00, image: 'imgbebidas/aguas.jpeg' },
    { id: 114, nome: 'Água Mineral', description: 'Sem gás (500ml)', preço: 4.00, image: 'imgbebidas/agua.jpeg' },
    { id: 115, nome: 'Cerveja Long Neck', description: 'Heineken (330ml)', preço: 12.00, image: 'imgbebidas/heinekenvidro.jpeg' },
    { id: 116, nome: 'Cerveja Long Neck', description: 'Sol (330ml)', preço: 12.00, image: 'imgbebidas/sol.jpeg' },
    { id: 117, nome: 'Chá Gelado', description: 'Chá gelado de limão (500ml)', preço: 8.00, image: 'imgbebidas/chageladolimao.jpeg' },
    { id: 118, nome: 'Chá Gelado', description: 'Chá gelado de pêssego (500ml)', preço: 8.00, image: 'imgbebidas/chagelado.jpeg' },
    { id: 119, nome: 'Energético', description: 'Red Bull (250ml)', preço: 15.00, image: 'imgbebidas/redbull.jpeg' },
    { id: 120, nome: 'Energético', description: 'Monster (350ml)', preço: 15.00, image: 'imgbebidas/moster.jpeg' },
    { id: 121, nome: 'Caipirinha', description: 'Caipirinha de limão', preço: 18.00, image: 'imgbebidas/caipirinhadelimao.jpeg' },
    { id: 122, nome: 'Caipirinha', description: 'Caipirinha de morango', preço: 18.00, image: 'imgbebidas/caipirinhademorangoo.jpeg' },
    { id: 123, nome: 'Caipirinha', description: 'Caipirinha de maracujá', preço: 18.00, image: 'imgbebidas/caipirinhademaracuja.jpeg' },
    { id: 124, nome: 'Vinho Tinto', description: 'Taça de vinho tinto', preço: 20.00, image: 'imgbebidas/vinhotinto.jpg' },
     { id: 124, nome: 'Vinho Branco', description: 'Taça de vinho Branco', preço: 20.00, image: 'imgbebidas/vinhobranco.jpg' },
      { id: 124, nome: 'Suco de Morango com leite', description: 'Morango com Leite', preço: 14.00, image: 'imgbebidas/sucomoranleite.jpg' },
       { id: 124, nome: 'Suco de Maracujá com leite', description: 'Maracujá com leite', preço: 14.00, image: 'imgbebidas/sucomaraculeite.jpg' },
];

// Carregar mesas ocupadas e popular o select
window.addEventListener('load', function() {
    const tableSelect = document.getElementById('tableNumber');
    const occupiedTables = JSON.parse(localStorage.getItem('occupiedTables')) || [];
    
    // Adicionar opções de mesa (1 a 20)
    for (let i = 1; i <= 20; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = `Mesa ${i}`;
        
        // Desabilitar se já estiver ocupada
        if (occupiedTables.includes(i)) {
            option.disabled = true;
            option.textContent = `Mesa ${i} (Ocupada)`;
        }
        
        tableSelect.appendChild(option);
    }
    
    renderMenu();
    renderBebidas();
    createCartButton();
});

// Função para iniciar pedido
function startOrder() {
    const name = document.getElementById('clientName').value.trim();
    const table = document.getElementById('tableNumber').value;
    
    if (!name) {
        alert('Por favor, informe seu nome!');
        return;
    }
    
    if (!table) {
        alert('Por favor, selecione uma mesa!');
        return;
    }
    
    clientData.name = name;
    clientData.table = table;
    
    // Marcar mesa como ocupada
    let occupiedTables = JSON.parse(localStorage.getItem('occupiedTables')) || [];
    if (!occupiedTables.includes(parseInt(table))) {
        occupiedTables.push(parseInt(table));
        localStorage.setItem('occupiedTables', JSON.stringify(occupiedTables));
    }
    
    // Salvar dados do cliente
    localStorage.setItem('currentClient', JSON.stringify(clientData));
    
    // Mostrar informações do usuário
    document.getElementById('displayName').textContent = name;
    document.getElementById('displayTable').textContent = `Mesa ${table}`;
    document.getElementById('userInfo').style.display = 'flex';
    
    // Mostrar botão de pedir conta
    document.getElementById('requestBillBtn').style.display = 'block';
    
    // Fechar modal
    document.getElementById('welcomeModal').classList.add('hidden');
}

// Renderizar menu de comidas
function renderMenu() {
    const menuGrid = document.getElementById('menuGrid');
    menuGrid.innerHTML = menuItems.map(item => `
        <div class="menu-item">
            <div class="menu-item-img">
                <img src="${item.image}" alt="${item.nome}" onerror="this.parentElement.innerHTML='<span></span>'">
            </div>
            <div class="menu-item-content">
                <h3>${item.nome}</h3>
                <p>${item.description}</p>
                <div class="menu-item-footer">
                    <span class="price">R$ ${item.preço.toFixed(2)}</span>
                    <button class="order-btn" onclick="addToCart(${item.id}, 'menu')">Pedir</button>
                </div>
            </div>
        </div>
    `).join('');
}

// Renderizar menu de bebidas
function renderBebidas() {
    const bebidasGrid = document.getElementById('bebidasGrid');
    bebidasGrid.innerHTML = bebidas.map(item => `
        <div class="menu-item">
            <div class="bebida-item-img">
                <img src="${item.image}" alt="${item.nome}" onerror="this.parentElement.innerHTML='<span></span>'">
            </div>
            <div class="menu-item-content">
                <h3>${item.nome}</h3>
                <p>${item.description}</p>
                <div class="menu-item-footer">
                    <span class="price">R$ ${item.preço.toFixed(2)}</span>
                    <button class="order-btn" onclick="addToCart(${item.id}, 'bebida')">Pedir</button>
                </div>
            </div>
        </div>
    `).join('');
}

// Adicionar item ao carrinho
function addToCart(itemId, type) {
    const item = type === 'menu' ? menuItems.find(i => i.id === itemId) : bebidas.find(i => i.id === itemId);
    
    if (item) {
        cart.push(item);
        updateCartCount();
        showNotification('Item adicionado ao carrinho!');
    }
}

// Criar botão flutuante do carrinho
function createCartButton() {
    const cartBtn = document.createElement('div');
    cartBtn.id = 'cartFloatBtn';
    cartBtn.innerHTML = 'Carrinho <span id="cartCount">0</span>';
    cartBtn.onclick = openCart;
    document.body.appendChild(cartBtn);
}

// Atualizar contador do carrinho
function updateCartCount() {
    const countEl = document.getElementById('cartCount');
    if (cart.length > 0) {
        countEl.textContent = cart.length;
        countEl.style.display = 'flex';
    } else {
        countEl.style.display = 'none';
    }
}

// Abrir carrinho
function openCart() {
    if (cart.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }
    
    const modal = document.createElement('div');
    modal.className = 'cart-modal';
    modal.innerHTML = `
        <div class="cart-content">
            <div class="cart-header">
                <h2>Seu Carrinho</h2>
                <button class="close-cart" onclick="this.parentElement.parentElement.parentElement.remove()">×</button>
            </div>
            
            <div class="cart-items">
                ${cart.map((item, index) => `
                    <div class="cart-item">
                        <div class="cart-item-info">
                            <h4>${item.nome}</h4>
                            <p>${item.description}</p>
                            <span class="cart-item-price">R$ ${item.preço.toFixed(2)}</span>
                        </div>
                        <button class="remove-btn" onclick="removeFromCart(${index})">🗑</button>
                    </div>
                `).join('')}
            </div>
            
            <div class="cart-footer">
                <div class="cart-total">
                    <span>Total:</span>
                    <span class="total-price">R$ ${calculateTotal().toFixed(2)}</span>
                </div>
                <button class="confirm-order-btn" onclick="confirmOrder()">Fazer Pedido</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

// Remover item do carrinho
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartCount();
    
    // Reabrir carrinho com itens atualizados
    document.querySelector('.cart-modal').remove();
    if (cart.length > 0) {
        openCart();
    }
}

// Calcular total
function calculateTotal() {
    return cart.reduce((sum, item) => sum + item.preço, 0);
}

// Confirmar pedido
function confirmOrder() {
    const order = {
        id: Date.now(),
        clientName: clientData.name,
        tableNumber: clientData.table,
        items: cart,
        total: calculateTotal(),
        timestamp: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
    };
    
    // Salvar pedido na cozinha
    let kitchenOrders = JSON.parse(localStorage.getItem('kitchenOrders')) || [];
    kitchenOrders.push(order);
    localStorage.setItem('kitchenOrders', JSON.stringify(kitchenOrders));
    
    // Salvar pedido da mesa
    let tableOrders = JSON.parse(localStorage.getItem(`table_${clientData.table}_orders`)) || [];
    tableOrders.push(order);
    localStorage.setItem(`table_${clientData.table}_orders`, JSON.stringify(tableOrders));
    
    // Limpar carrinho
    cart = [];
    updateCartCount();
    
    // Fechar modal
    document.querySelector('.cart-modal').remove();
    
    alert('Pedido enviado para a cozinha com sucesso!');
}

// Mostrar notificação
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 30px;
        background: #00ff00;
        color: #000;
        padding: 15px 25px;
        border-radius: 8px;
        font-weight: bold;
        z-index: 9999;
        animation: slideIn 0.3s ease-out;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => notification.remove(), 2000);
}

// Abrir modal de conta
function openBillModal() {
    const tableOrders = JSON.parse(localStorage.getItem(`table_${clientData.table}_orders`)) || [];
    
    if (tableOrders.length === 0) {
        alert('Você ainda não fez nenhum pedido!');
        return;
    }
    
    const allItems = [];
    let total = 0;
    
    tableOrders.forEach(order => {
        allItems.push(...order.items);
        total += order.total;
    });
    
    const modal = document.createElement('div');
    modal.className = 'cart-modal';
    modal.innerHTML = `
        <div class="cart-content">
            <div class="cart-header">
                <h2>Sua Conta - Mesa ${clientData.table}</h2>
                <button class="close-cart" onclick="this.parentElement.parentElement.parentElement.remove()">×</button>
            </div>
            
            <div class="cart-items">
                ${allItems.map((item, index) => `
                    <div class="cart-item">
                        <div class="cart-item-info">
                            <h4>${item.nome}</h4>
                            <p>${item.description}</p>
                            <span class="cart-item-price">R$ ${item.preço.toFixed(2)}</span>
                        </div>
                    </div>
                `).join('')}
            </div>
            
            <div class="cart-footer">
                <div class="cart-total">
                    <span>Total:</span>
                    <span class="total-price">R$ ${total.toFixed(2)}</span>
                </div>
                
                <div style="margin-top: 20px;">
                    <h3 style="color: #fff; margin-bottom: 15px; text-align: center;">Forma de Pagamento:</h3>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                        <button class="order-btn" onclick="processPayment('Cartão de Débito', ${total})">Débito</button>
                        <button class="order-btn" onclick="processPayment('Cartão de Crédito', ${total})">Crédito</button>
                        <button class="order-btn" onclick="processPayment('PIX', ${total})">PIX</button>
                        <button class="order-btn" onclick="processPayment('Dinheiro', ${total})">Dinheiro</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

// Processar pagamento
// Processar pagamento - ATUALIZADO
function processPayment(method, total) {
    // NOVO: Criar notificação de conta para a cozinha
    const billRequest = {
        id: Date.now(),
        type: 'PEDIDO_CONTA',
        clientName: clientData.name,
        tableNumber: clientData.table,
        total: total,
        paymentMethod: method,
        timestamp: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
        date: new Date().toLocaleDateString('pt-BR')
    };
    
    // Salvar pedido de conta
    let billRequests = JSON.parse(localStorage.getItem('billRequests')) || [];
    billRequests.push(billRequest);
    localStorage.setItem('billRequests', JSON.stringify(billRequests));
    
    // Liberar mesa
    let occupiedTables = JSON.parse(localStorage.getItem('occupiedTables')) || [];
    occupiedTables = occupiedTables.filter(t => t !== parseInt(clientData.table));
    localStorage.setItem('occupiedTables', JSON.stringify(occupiedTables));
    
    // Limpar pedidos da mesa
    localStorage.removeItem(`table_${clientData.table}_orders`);
    
    // Fechar modal
    document.querySelector('.cart-modal').remove();
    
    alert(`Solicitação de conta enviada!\n\n Valor: R$ ${total.toFixed(2)}\n Método: ${method}\n\nEm instantes o garçom passará em sua mesa para finalizar o atendimento.\n\nObrigado pela preferência!`);
    
    // Recarregar página para novo atendimento
    setTimeout(() => {
        localStorage.removeItem('currentClient');
        location.reload();
    }, 3000);
}

// Abrir modal de avaliação
function openRatingModal() {
    const currentClient = JSON.parse(localStorage.getItem('currentClient'));
    
    if (!currentClient) {
        alert('Você precisa fazer login primeiro!');
        return;
    }
    
    const completedOrders = JSON.parse(localStorage.getItem('completedOrders')) || [];
    const userOrders = completedOrders.filter(order => 
        order.clientName === currentClient.name && 
        order.tableNumber === currentClient.table &&
        !order.rated
    );
    
    if (userOrders.length === 0) {
        alert('Você não tem pedidos finalizados para avaliar ainda!');
        return;
    }
    
    const modal = document.createElement('div');
    modal.className = 'rating-modal';
    modal.innerHTML = `
        <div class="rating-content">
            <div class="rating-header">
                <h2>Avalie seu Pedido</h2>
                <button class="close-rating" onclick="this.parentElement.parentElement.parentElement.remove()">×</button>
            </div>
            
            <div class="rating-orders">
                ${userOrders.map(order => `
                    <div class="rating-order-card">
                        <div class="rating-order-info">
                            <h3>Pedido da Mesa ${order.tableNumber}</h3>
                            <p>Realizado às ${order.timestamp}</p>
                            <p class="rating-order-total">Total: R$ ${order.total.toFixed(2)}</p>
                        </div>
                        
                        <div class="rating-stars-container">
                            <p>Como foi sua experiência?</p>
                            <div class="rating-stars" id="stars-${order.id}">
                                ${[1,2,3,4,5].map(star => `
                                    <span class="star" data-value="${star}" onclick="selectRating(${order.id}, ${star})">☆</span>
                                `).join('')}
                            </div>
                        </div>
                        
                        <div class="rating-comment">
                            <label for="comment-${order.id}">Comentário (opcional):</label>
                            <textarea id="comment-${order.id}" rows="4" placeholder="Conte-nos sobre sua experiência..."></textarea>
                        </div>
                        
                        <button class="submit-rating-btn" id="submit-${order.id}" onclick="submitRating(${order.id})" disabled>
                            Enviar Avaliação
                        </button>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

// Selecionar avaliação com estrelas
function selectRating(orderId, rating) {
    const starsContainer = document.getElementById(`stars-${orderId}`);
    const stars = starsContainer.querySelectorAll('.star');
    
    stars.forEach((star, index) => {
        if (index < rating) {
            star.classList.add('selected');
            star.textContent = '★';
        } else {
            star.classList.remove('selected');
            star.textContent = '☆';
        }
    });
    
    starsContainer.dataset.rating = rating;
    document.getElementById(`submit-${orderId}`).disabled = false;
}

// Enviar avaliação
function submitRating(orderId) {
    const starsContainer = document.getElementById(`stars-${orderId}`);
    const rating = parseInt(starsContainer.dataset.rating);
    const comment = document.getElementById(`comment-${orderId}`).value.trim();
    
    if (!rating) {
        alert('Por favor, selecione uma avaliação!');
        return;
    }
    
    const currentClient = JSON.parse(localStorage.getItem('currentClient'));
    const completedOrders = JSON.parse(localStorage.getItem('completedOrders')) || [];
    const orderIndex = completedOrders.findIndex(o => o.id === orderId);
    
    if (orderIndex !== -1) {
        completedOrders[orderIndex].rated = true;
        localStorage.setItem('completedOrders', JSON.stringify(completedOrders));
    }
    
    const ratingData = {
        orderId: orderId,
        clientName: currentClient.name,
        tableNumber: currentClient.table,
        rating: rating,
        comment: comment,
        timestamp: new Date().toLocaleString('pt-BR')
    };
    
    let ratings = JSON.parse(localStorage.getItem('ratings')) || [];
    ratings.push(ratingData);
    localStorage.setItem('ratings', JSON.stringify(ratings));
    
    document.querySelector('.rating-modal').remove();
    alert('Obrigado pela sua avaliação!');
}
