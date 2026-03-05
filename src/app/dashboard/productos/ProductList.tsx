'use client'

import { useState } from 'react'

type Product = {
    id: string
    name: string
    price: number
    stock: number
    sku: string | null
}

export default function ProductList({ initialProducts }: { initialProducts: Product[] }) {
    const [products, setProducts] = useState<Product[]>(initialProducts)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [loading, setLoading] = useState(false)

    // Form State
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [stock, setStock] = useState('0')
    const [sku, setSku] = useState('')

    const handleAddProduct = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        try {
            const res = await fetch('/api/products', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, price: Number(price), stock: Number(stock), sku }),
            })
            const data = await res.json()

            if (data.success) {
                setProducts([data.product, ...products])
                setIsModalOpen(false)
                setName(''); setPrice(''); setStock('0'); setSku('')
            } else {
                alert(data.error || 'Ocurrió un error al crear')
            }
        } catch (err) {
            console.error(err)
            alert("Error de red.")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1rem' }}>
                <button className="btn btn--primary" onClick={() => setIsModalOpen(true)}>
                    + Añadir Producto
                </button>
            </div>

            {products.length === 0 ? (
                <div style={{ backgroundColor: 'var(--color-surface)', padding: '3rem', borderRadius: '12px', textAlign: 'center', border: '1px dashed var(--color-border)' }}>
                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📦</div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-text-primary)' }}>Tu inventario está vacío</h3>
                    <p style={{ color: 'var(--color-text-secondary)', marginTop: '0.5rem', marginBottom: '1.5rem' }}>Agrega tu primer producto para empezar a usar WebÚnica.</p>
                    <button className="btn btn--primary" onClick={() => setIsModalOpen(true)}>Crear mi primer producto</button>
                </div>
            ) : (
                <div style={{ overflowX: 'auto', backgroundColor: 'var(--color-surface)', borderRadius: '12px', border: '1px solid var(--color-border)' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                        <thead style={{ backgroundColor: 'var(--color-bg)', borderBottom: '1px solid var(--color-border)' }}>
                            <tr>
                                <th style={{ padding: '1rem', color: 'var(--color-text-muted)', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase' }}>Nombre</th>
                                <th style={{ padding: '1rem', color: 'var(--color-text-muted)', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase' }}>SKU</th>
                                <th style={{ padding: '1rem', color: 'var(--color-text-muted)', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase' }}>Precio</th>
                                <th style={{ padding: '1rem', color: 'var(--color-text-muted)', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase' }}>Stock</th>
                                <th style={{ padding: '1rem', color: 'var(--color-text-muted)', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase' }}>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((p) => (
                                <tr key={p.id} style={{ borderBottom: '1px solid var(--color-border)' }}>
                                    <td style={{ padding: '1rem', fontWeight: 500, color: 'var(--color-text-primary)' }}>{p.name}</td>
                                    <td style={{ padding: '1rem', color: 'var(--color-text-secondary)' }}>{p.sku || '-'}</td>
                                    <td style={{ padding: '1rem', color: 'var(--color-text-primary)' }}>
                                        ${p.price.toLocaleString('es-CL')}
                                    </td>
                                    <td style={{ padding: '1rem' }}>
                                        <span style={{
                                            padding: '4px 8px', borderRadius: '4px', fontSize: '0.875rem', fontWeight: 600,
                                            backgroundColor: p.stock > 0 ? 'var(--color-success-100)' : 'var(--color-danger-100)',
                                            color: p.stock > 0 ? 'var(--color-success)' : 'var(--color-danger)'
                                        }}>
                                            {p.stock}
                                        </span>
                                    </td>
                                    <td style={{ padding: '1rem' }}>
                                        <button style={{ background: 'none', border: 'none', color: 'var(--color-primary)', cursor: 'pointer', fontWeight: 500 }}>Editar</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {/* Modal Básico de Creación */}
            {isModalOpen && (
                <div style={{
                    position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
                    backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000
                }}>
                    <div style={{
                        backgroundColor: 'var(--color-surface)', padding: '2rem', borderRadius: '12px', width: '90%', maxWidth: '500px'
                    }}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>Nuevo Producto</h2>

                        <form onSubmit={handleAddProduct} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>Nombre *</label>
                                <input required type="text" value={name} onChange={(e) => setName(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid var(--color-border)' }} />
                            </div>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <div style={{ flex: 1 }}>
                                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>Precio (CLP) *</label>
                                    <input required type="number" min="0" value={price} onChange={(e) => setPrice(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid var(--color-border)' }} />
                                </div>
                                <div style={{ flex: 1 }}>
                                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>Stock Inicial</label>
                                    <input type="number" value={stock} onChange={(e) => setStock(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid var(--color-border)' }} />
                                </div>
                            </div>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>SKU / Código (Opcional)</label>
                                <input type="text" value={sku} onChange={(e) => setSku(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid var(--color-border)' }} />
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '1rem' }}>
                                <button type="button" onClick={() => setIsModalOpen(false)} className="btn btn--outline" disabled={loading}>
                                    Cancelar
                                </button>
                                <button type="submit" className="btn btn--primary" disabled={loading}>
                                    {loading ? 'Guardando...' : 'Guardar Producto'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}
