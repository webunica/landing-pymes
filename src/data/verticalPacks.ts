export const rubrosData = {
    restaurantes: {
        slug: 'restaurantes',
        name: 'Restaurantes',
        meta: {
            title: 'Software para Restaurantes en Chile | WebÚnica',
            description: 'Pedidos, mesas y caja en un solo lugar — sin hojas de cálculo ni comandas perdidas. Funciona con Webpay y boleta electrónica SII.',
        },
        hero: {
            badge: '🍽️ Pack Restaurantes',
            h1: 'Software para restaurantes en Chile: gestiona mesas, pedidos y caja sin complicaciones',
            highlight: 'sin complicaciones',
            subtext: 'Si llevas la cuenta en una libreta y cierras el día sin saber exactamente cuánto entró, este sistema es para ti. WebÚnica centraliza todo desde que entra el cliente hasta que paga.',
            metrics: [
                { value: '-80%', label: 'Errores de comanda' },
                { value: '8 min', label: 'Cierre de caja promedio' },
                { value: '-35%', label: 'Merma de inventario' },
            ],
        },
        pains: {
            title: '¿Qué pasa en tu restaurante cuando no tienes un sistema?',
            items: [
                {
                    title: 'Comandas que se pierden o se duplican',
                    desc: 'Cuando el mesero anota en papel, los errores cuestan: platos que vuelven, clientes que esperan, propinas que bajan. WebÚnica digitaliza la comanda directo a cocina.'
                },
                {
                    title: 'Quedarte sin stock en pleno servicio',
                    desc: 'Descubrir que te quedaste sin un ingrediente esencial a la hora de almuerzo es terrible. Con nuestro sistema, recibes alertas antes de que pase.'
                },
                {
                    title: 'El cierre de caja toma horas',
                    desc: 'Al final del turno, sumar calculadora en mano toma más de 30 minutos y siempre faltan pesos. WebÚnica hace el cierre automático en segundos.'
                }
            ]
        },
        features: [
            {
                icon: '📱',
                title: 'Comandas Digitales',
                description: 'Toma el pedido desde un tablet o celular en la mesa. Llega de inmediato a la pantalla o ticketera de la cocina.',
                badge: 'POS',
            },
            {
                icon: '🪑',
                title: 'Gestión de Mesas',
                description: 'Mapa visual de tu salón en tiempo real. Ve qué mesas están libres, ocupadas, o esperando hace mucho rato.',
            },
            {
                icon: '🥩',
                title: 'Recetas e Inventario',
                description: 'Ingresa tus insumos y recetas. Cada vez que vendes un plato, se descuentan automáticamente los ingredientes.',
            },
            {
                icon: '💳',
                title: 'Caja y Pagos Chile',
                description: 'Cobra la mesa con Webpay, efectivo o transferencia. Puedes dividir la cuenta entre comensales fácilmente.',
                badge: 'Chile ✓',
            },
            {
                icon: '📊',
                title: 'Reportes de Ventas',
                description: 'Identifica cuáles son tus platos más rentables, a qué hora vendes más y cuánto vendió cada garzón.',
            },
            {
                icon: '🛵',
                title: 'Módulo Delivery',
                description: 'Gestiona pedidos "para llevar" o de apps externas en la misma pantalla sin enredar a la cocina.',
            },
        ],
        faqs: [
            {
                question: '¿WebÚnica funciona para restaurantes pequeños?',
                answer: 'Está diseñado especialmente para restaurantes de 1 a 3 mesones o locales pequeños. No necesitas servidor propio: funciona desde cualquier tablet.'
            },
            {
                question: '¿Puedo cobrar con Webpay directamente?',
                answer: 'Sí. Se integra con Webpay y Flow. El cobro queda registrado en el historial de la mesa al instante.'
            },
            {
                question: '¿Puedo gestionar delivery y mesas a la vez?',
                answer: 'Absolutamente. Creas "Salas" distintas: Salón, Terraza y Delivery, cada una con su propio flujo pero compartiendo la misma cocina.'
            },
            {
                question: '¿Cuánto tiempo toma capacitar a mis garzones?',
                answer: 'La interfaz es parecida a las apps que ya usan en sus celulares. En nuestros clientes, el promedio de adaptación es de solo 20 minutos.'
            },
            {
                question: '¿Tiene módulo de propinas (Ley 10%)?',
                answer: 'Sí, el sistema calcula automáticamente la propina legal sugerida del 10% y permite que el cliente decida agregar un monto distinto.'
            }
        ],
        objections: [
            { question: '"Ya tengo caja registradora..."', answer: 'La caja solo guarda el pago, no controla la merma en cocina ni los tiempos de espera del cliente.' },
            { question: '"Es muy caro..."', answer: 'Nuestros planes parten en el equivalente a 1 plato diario. Si evitas una fuga de $30.000 al mes, se paga solo.' },
            { question: '"Mis meseros no saben usar tecnología..."', answer: 'Si usan WhatsApp, saben usar WebÚnica. Está diseñado para botones grandes y un uso con un solo dedo.' },
        ]
    }
}
