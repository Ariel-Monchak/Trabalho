// Verificar senha ao carregar
window.addEventListener('load', function() {
    const authenticated = sessionStorage.getItem('kitchenAuth');
    if (authenticated === 'true') {
    document.getElementById('passwordModal').classList.add('hidden');
    loadOrders();
    updateProfitDisplay();
    loadRatings();
    loadBillRequests(); // ADICIONE ESTA LINHA
    
    setInterval(loadOrders, 3000);
    setInterval(updateProfitDisplay, 3000);
    setInterval(loadRatings, 3000);
    setInterval(loadBillRequests, 3000); // ADICIONE ESTA LINHA
}
});

// Verificar senha
function checkPassword() {
    const password = document.getElementById('kitchenPassword').value;
    const correctPassword = 'cozinhanabrasa';
    
    if (password === correctPassword) {
        sessionStorage.setItem('kitchenAuth', 'true');
        document.getElementById('passwordModal').classList.add('hidden');
        loadOrders();
        updateProfitDisplay();
        loadRatings(); // Carregar avaliações imediatamente
        
        // Atualizar tudo a cada 3 segundos
        setInterval(loadOrders, 3000);
        setInterval(updateProfitDisplay, 3000);
        setInterval(loadRatings, 3000); // Atualizar avaliações também
    } else {
        alert(' Senha incorreta! Acesso negado.');
        document.getElementById('kitchenPassword').value = '';
    }
}

function loadOrders() {
    const ordersGrid = document.getElementById('ordersGrid');
    const orders = JSON.parse(localStorage.getItem('kitchenOrders')) || [];
    
    // Atualizar contador de pedidos pendentes
    document.getElementById('pendingOrders').textContent = orders.length;
    
    if (orders.length === 0) {
        ordersGrid.innerHTML = '<div class="no-orders">Aguardando pedidos...</div>';
        return;
    }
    
    // Ordenar por mais recente primeiro
    orders.sort((a, b) => b.id - a.id);
    
    ordersGrid.innerHTML = orders.map(order => `
        <div class="order-card">
            <div class="order-header">
                <div class="order-info">
                    <h3>Mesa ${order.tableNumber}</h3>
                    <p>${order.clientName}</p>
                </div>
                <div class="order-time">
                    ${order.timestamp}
                </div>
            </div>
            
            <div class="order-items">
                ${order.items.map((item, index) => `
                    <div class="order-item">
                        <div class="item-number">#${index + 1}</div>
                        <div class="item-details">
                            <h4>${item.nome}</h4>
                            <p>${item.description}</p>
                            <p style="color: #00ff00; font-weight: bold; margin-top: 8px;">
                                R$ ${item.preço.toFixed(2)}
                            </p>
                        </div>
                    </div>
                `).join('')}
            </div>
            
            <div class="order-total">
                <strong>Total do Pedido:</strong>
                <strong style="color: #00ff00; font-size: 20px;">R$ ${order.total.toFixed(2)}</strong>
            </div>
            
            <button class="finish-btn" onclick="finishOrder(${order.id})">
                ✓ Pedido Pronto
            </button>
        </div>
    `).join('');
}

function finishOrder(orderId) {
    const confirmar = window.confirm('Confirmar que o pedido está pronto?');
    
    if (confirmar) {
        let orders = JSON.parse(localStorage.getItem('kitchenOrders')) || [];
        const finishedOrder = orders.find(order => order.id === orderId);
        
        if (finishedOrder) {
            // Adicionar ao lucro da noite
            let nightProfit = JSON.parse(localStorage.getItem('nightProfit')) || { total: 0, completed: 0 };
            nightProfit.total += finishedOrder.total;
            nightProfit.completed += 1;
            localStorage.setItem('nightProfit', JSON.stringify(nightProfit));
            
            // Salvar pedido finalizado para avaliação
            let completedOrders = JSON.parse(localStorage.getItem('completedOrders')) || [];
            completedOrders.push({
                ...finishedOrder,
                completedAt: new Date().toISOString(),
                rated: false
            });
            localStorage.setItem('completedOrders', JSON.stringify(completedOrders));
        }
        
        orders = orders.filter(order => order.id !== orderId);
        localStorage.setItem('kitchenOrders', JSON.stringify(orders));
        
        loadOrders();
        updateProfitDisplay();
        
        alert(' Pedido finalizado com sucesso!');
    }
}

function updateProfitDisplay() {
    const nightProfit = JSON.parse(localStorage.getItem('nightProfit')) || { total: 0, completed: 0 };
    document.getElementById('totalProfit').textContent = `R$ ${nightProfit.total.toFixed(2)}`;
    document.getElementById('completedOrders').textContent = nightProfit.completed;
}

function resetNightProfit() {
    const confirmar = window.confirm(' Tem certeza que deseja resetar o lucro da noite?\n\n Isso irá APAGAR:\n• Lucro total\n• Pedidos finalizados\n• TODAS as avaliações\n\nDeseja continuar?');
    
    if (confirmar) {
        // Resetar lucro
        localStorage.setItem('nightProfit', JSON.stringify({ total: 0, completed: 0 }));
        
        // APAGAR TODAS AS AVALIAÇÕES
        localStorage.removeItem('ratings');
        
        // APAGAR PEDIDOS FINALIZADOS
        localStorage.removeItem('completedOrders');
        
        // Atualizar displays
        updateProfitDisplay();
        loadRatings();
        
        alert('Noite resetada com sucesso!\n\n• Lucro zerado\n• Avaliações apagadas\n• Sistema pronto para nova noite');
    }
}

// Toggle de exibição das avaliações
function toggleRatings() {
    const container = document.getElementById('ratingsContainer');
    const icon = document.getElementById('toggleIcon');
    const text = document.getElementById('toggleText');
    
    if (container.style.display === 'none') {
        container.style.display = 'block';
        
        text.textContent = 'Ocultar';
        loadRatings();
    } else {
        container.style.display = 'none';
        
        text.textContent = 'Mostrar';
    }
}

// Carregar avaliações
function loadRatings() {
    const ratingsList = document.getElementById('ratingsList');
    const ratings = JSON.parse(localStorage.getItem('ratings')) || [];
    
    if (ratings.length === 0) {
        ratingsList.innerHTML = '<div class="no-ratings"> Nenhuma avaliação ainda... Aguardando feedback dos clientes! </div>';
        document.getElementById('averageRating').textContent = '0.0';
        document.getElementById('totalRatings').textContent = '0';
        return;
    }
    
    // Calcular média
    const average = ratings.reduce((sum, r) => sum + r.rating, 0) / ratings.length;
    document.getElementById('averageRating').textContent = average.toFixed(1);
    document.getElementById('totalRatings').textContent = ratings.length;
    
    // Ordenar por mais recente
    ratings.sort((a, b) => {
        const dateA = new Date(a.timestamp.split('/').reverse().join('-'));
        const dateB = new Date(b.timestamp.split('/').reverse().join('-'));
        return dateB - dateA;
    });
    
    ratingsList.innerHTML = ratings.map(rating => `
        <div class="rating-card">
            <div class="rating-card-header">
                <div class="rating-customer-info">
                    <h4>${rating.clientName}</h4>
                    <p>Mesa ${rating.tableNumber}</p>
                </div>
                <div class="rating-stars-display">
                    ${generateStars(rating.rating)}
                </div>
            </div>
            
            <div class="rating-card-body">
                <div class="rating-order-info">
                    <span>Pedido #${rating.orderId}</span>
                    <span>${rating.timestamp}</span>
                </div>
                
                ${rating.comment ? `
                    <div class="rating-comment-display">
                        <p>${rating.comment}</p>
                    </div>
                ` : '<div style="text-align: center; color: #666; font-style: italic; padding: 10px;">Cliente não deixou comentário</div>'}
            </div>
        </div>
    `).join('');
}

// Gerar estrelas visuais
function generateStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars += '<span class="star-filled">★</span>';
        } else {
            stars += '<span class="star-empty">☆</span>';
        }
    }
    return stars;
}
// Toggle de exibição dos pedidos de conta
function toggleBillRequests() {
    const container = document.getElementById('billRequestsContainer');
    const icon = document.getElementById('toggleBillIcon');
    const text = document.getElementById('toggleBillText');
    
    if (container.style.display === 'none') {
        container.style.display = 'block';
        icon.textContent = '👁️';
        text.textContent = 'Ocultar';
        loadBillRequests();
    } else {
        container.style.display = 'none';
        icon.textContent = '👁️';
        text.textContent = 'Mostrar';
    }
}

// Carregar pedidos de conta
function loadBillRequests() {
    const billsList = document.getElementById('billRequestsList');
    const billRequests = JSON.parse(localStorage.getItem('billRequests')) || [];
    
    if (billRequests.length === 0) {
        billsList.innerHTML = '<div class="no-bills"> Nenhum pedido de conta pendente...</div>';
        return;
    }
    
    // Ordenar por mais recente
    billRequests.sort((a, b) => b.id - a.id);
    
    billsList.innerHTML = billRequests.map(bill => `
        <div class="bill-card">
            <div class="bill-card-header">
                <div class="bill-customer-info">
                    <h4> ${bill.clientName}</h4>
                    <p>Mesa ${bill.tableNumber}</p>
                </div>
                <div class="bill-badge">CONTA</div>
            </div>
            
            <div class="bill-details">
                <div class="bill-info-row">
                    <span> Horário:</span>
                    <span>${bill.timestamp}</span>
                </div>
                <div class="bill-info-row">
                    <span> Data:</span>
                    <span>${bill.date}</span>
                </div>
                <div class="bill-info-row">
                    <span> Pagamento:</span>
                    <span>${bill.paymentMethod}</span>
                </div>
            </div>
            
            <div class="bill-total-display">
                <p>Total: R$ ${bill.total.toFixed(2)}</p>
            </div>
            
            <button class="finish-bill-btn" onclick="finishBill(${bill.id})">
                Finalizar Atendimento
            </button>
        </div>
    `).join('');
}

// Finalizar atendimento da conta
function finishBill(billId) {
    const confirmar = window.confirm(' Confirmar que o pagamento foi recebido e o atendimento foi finalizado?');
    
    if (confirmar) {
        let billRequests = JSON.parse(localStorage.getItem('billRequests')) || [];
        billRequests = billRequests.filter(bill => bill.id !== billId);
        localStorage.setItem('billRequests', JSON.stringify(billRequests));
        
        loadBillRequests();
        alert(' Atendimento finalizado com sucesso!');
    }
}
