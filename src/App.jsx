import { useState } from 'react'
import {
  ArrowRight,
  BadgePercent,
  ChevronRight,
  Menu,
  MessageCircle,
  Truck,
} from 'lucide-react'
import lookPrimary from './assets/roupas.webp'
import lookSecondary from './assets/roupas 2.webp'
import lookThird from './assets/roupas 3.webp'
import lookFourth from './assets/roupas 4.webp'
import './index.css'

const WHATSAPP_NUMBER = '556195960356'

const promoItems = [
  'frete urbano para todo o brasil',
  'pix com condicao especial',
  'drops limitados toda semana',
]

const categories = ['Todos', 'Oversized', 'Sets', 'Outerwear', 'Essenciais']

const products = [
  {
    id: 1,
    name: 'Camiseta Asphalt Chaos',
    category: 'Oversized',
    price: 'R$ 179,90',
    installment: '3x de R$ 59,96',
    tag: 'Best seller',
    image: lookPrimary,
  },
  {
    id: 2,
    name: 'Conjunto Midnight District',
    category: 'Sets',
    price: 'R$ 329,90',
    installment: '6x de R$ 54,98',
    tag: 'Drop limitado',
    image: lookSecondary,
  },
  {
    id: 3,
    name: 'Jaqueta Smoke Signal',
    category: 'Outerwear',
    price: 'R$ 289,90',
    installment: '5x de R$ 57,98',
    tag: 'Nova colecao',
    image: lookThird,
  },
  {
    id: 4,
    name: 'Tee Concrete Vision',
    category: 'Essenciais',
    price: 'R$ 149,90',
    installment: '2x de R$ 74,95',
    tag: 'Essencial',
    image: lookFourth,
  },
]

const campaignNotes = [
  {
    title: 'Drop blackout',
    text: 'Camisetas oversized, base escura e grafismos que seguram o look sem precisar forcar.',
  },
  {
    title: 'Pecas de giro',
    text: 'Modelagens para uso diario, combinando camiseta pesada, conjunto e moletom.',
  },
  {
    title: 'Linguagem da rua',
    text: 'Uma colecao montada para noite, role, session e rotina, sem perder peso visual.',
  },
]

const drops = [
  'Drop blackout',
  'Uniforme da madrugada',
  'Classic logo series',
  'Capsula concrete noise',
]

const collageNotes = [
  'malha pesada',
  'grafismo bruto',
  'drop curto',
  'rua + noite',
]

const fitGuide = [
  { label: 'P', note: 'fit seco' },
  { label: 'M', note: 'street classico' },
  { label: 'G', note: 'amplo equilibrado' },
  { label: 'GG', note: 'oversized forte' },
]

const featuredLooks = [
  {
    eyebrow: 'Capsula 01',
    title: 'Camisetas e combos para entrar na rotacao do dia a dia',
    text: 'Pecas montadas para funcionar em sequencia: oversize, set e moletom dentro da mesma identidade.',
    image: lookPrimary,
  },
  {
    eyebrow: 'Colecao noturna',
    title: 'Preto, volume e estampa para segurar a presenca do look',
    text: 'A Podcre entra no streetwear com foco em shape forte, contraste escuro e visual que chama sem ficar caricato.',
    image: lookThird,
  },
]

function createWhatsAppLink(message) {
  const encoded = encodeURIComponent(message)
  return `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encoded}`
}

export default function App() {
  const [activeCategory, setActiveCategory] = useState('Todos')
  const [menuOpen, setMenuOpen] = useState(false)

  const filteredProducts =
    activeCategory === 'Todos'
      ? products
      : products.filter((product) => product.category === activeCategory)

  const heroLink = createWhatsAppLink(
    'Oi! Vim pelo site da Podcre Streetwear e quero conhecer os drops disponiveis.'
  )

  return (
    <div className="page-shell">
      <div className="smoke-field" aria-hidden="true">
        <span className="smoke smoke-one" />
        <span className="smoke smoke-two" />
        <span className="smoke smoke-three" />
        <span className="grid-glow" />
      </div>

      <div className="promo-strip">
        <div className="promo-track">
          {[...promoItems, ...promoItems].map((item, index) => (
            <span key={`${item}-${index}`}>{item}</span>
          ))}
        </div>
      </div>

      <header className="site-header">
        <a className="brand" href="#topo" aria-label="Podcre Streetwear">
          <span className="brand-mark">Podcre</span>
          <span className="brand-sub">streetwear</span>
        </a>

        <button
          type="button"
          className="menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label="Abrir menu"
        >
          <Menu size={20} />
        </button>

        <nav className={`main-nav ${menuOpen ? 'open' : ''}`}>
          <a href="#colecao">Colecao</a>
          <a href="#drops">Drops</a>
          <a href="#fit">Fit guide</a>
          <a href="#contato">Contato</a>
        </nav>

        <a className="header-cta" href={heroLink} target="_blank" rel="noreferrer">
          Comprar no WhatsApp
        </a>
      </header>

      <main id="topo">
        <section className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow">Podcre streetwear</p>
            <h1>A loja que veste a quebrada.</h1>
            <p className="hero-text">
              Roupas streetwear, Oversized, Naquele estilo que c' tá ligado!
            </p>

            <div className="hero-actions">
              <a className="primary-button" href="#colecao">
                Ver colecao
                <ArrowRight size={18} />
              </a>
              <a className="secondary-button" href={heroLink} target="_blank" rel="noreferrer">
                <MessageCircle size={18} />
                Falar com a marca
              </a>
            </div>

            <div className="hero-manifesto">
              <span className="manifesto-kicker">Drop em destaque</span>
              <p>
                Camisetas oversized, grafismo pesado e uma selecao montada para a Podcre
                chegar com presenca no streetwear.
              </p>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-card hero-card-main">
              <img src={lookSecondary} alt="Camisetas oversized em destaque na Podcre Streetwear" />
              <div className="hero-badge">
                <span>drop 01</span>
                <strong>blackout season</strong>
              </div>
            </div>
            <div className="hero-stack">
              <article className="mini-card mini-card-note">
                <span className="mini-card-label">Mais pedido</span>
                <h2>Camiseta pesada, pra chegar estriguinado nas doninha.</h2>
                <p>
                  Peca principal da coleção
                </p>
              </article>
              <article className="mini-card mini-card-image">
                <img src={lookPrimary} alt="Selecao de camisetas streetwear da Podcre" />
                <div className="floating-tags">
                  {collageNotes.map((note) => (
                    <span key={note}>{note}</span>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="manifesto-section">
          <div className="manifesto-heading">
            <p className="eyebrow">Destaques da colecao</p>
            <h2>Pecas pensadas para giro real, visual forte e presenca de marca.</h2>
          </div>

          <div className="manifesto-grid">
            {campaignNotes.map((item, index) => (
              <article key={item.title} className={`manifesto-card manifesto-card-${index + 1}`}>
                <span>0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="editorial-section">
          {featuredLooks.map((item) => (
            <article key={item.title} className="editorial-card">
              <div className="editorial-copy">
                <span>{item.eyebrow}</span>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
                <a href="#contato">
                  Explorar campanha
                  <ChevronRight size={16} />
                </a>
              </div>
              <img src={item.image} alt={item.title} />
            </article>
          ))}
        </section>

        <section id="colecao" className="collection-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Shop</p>
              <h2>Colecao principal</h2>
            </div>
            <a href={heroLink} target="_blank" rel="noreferrer">
              Receber catalogo
            </a>
          </div>

          <div className="filter-row">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={activeCategory === category ? 'filter-chip active' : 'filter-chip'}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="product-grid">
            {filteredProducts.map((product) => (
              <article key={product.id} className="product-card">
                <div className="product-media">
                  <img src={product.image} alt={product.name} />
                  <span>{product.tag}</span>
                </div>
                <div className="product-body">
                  <p>{product.category}</p>
                  <h3>{product.name}</h3>
                  <div className="price-row">
                    <strong>{product.price}</strong>
                    <span>{product.installment}</span>
                  </div>
                  <a
                    className="product-link"
                    href={createWhatsAppLink(
                      `Oi! Tenho interesse na peca "${product.name}" da Podcre Streetwear.`
                    )}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Comprar agora
                    <ArrowRight size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="drops" className="drops-section">
          <div className="drops-copy">
            <p className="eyebrow">Drops</p>
            <h2>Linha montada para atravessar rotina, noite e role sem perder identidade.</h2>
            <p>
              A Podcre trabalha com pecas de giro e capsulas curtas: camiseta oversized,
              conjuntos, moletom e essenciais para manter a colecao sempre viva.
            </p>
          </div>

          <div className="drops-panel">
            {drops.map((drop, index) => (
              <div key={drop} className="drop-item">
                <span>0{index + 1}</span>
                <strong>{drop}</strong>
              </div>
            ))}
          </div>
        </section>

        <section id="fit" className="fit-section">
          <div className="fit-panel">
            <p className="eyebrow">Fit guide</p>
            <h2>Escolha o volume do seu visual.</h2>
            <div className="fit-grid">
              {fitGuide.map((size) => (
                <article key={size.label} className="fit-card">
                  <strong>{size.label}</strong>
                  <span>{size.note}</span>
                </article>
              ))}
            </div>
          </div>

          <div className="review-panel">
            <p className="eyebrow">Essencia Podcre</p>
            <h3>Streetwear com base escura, shape forte e estampa que segura a roupa.</h3>
            <p>
              A ideia e construir uma marca que funcione no uso diario, mas continue com
              cara de colecao e presenca de rua.
            </p>
            <span>Direcao criativa Podcre</span>
          </div>
        </section>

        <section id="contato" className="cta-section">
          <div className="cta-copy">
            <p className="eyebrow">Contato</p>
            <h2>Pronto para colocar a Podcre na rua com mais presenca?</h2>
            <p>
              Feche seu pedido, receba o catalogo completo ou ajuste os detalhes da colecao
              direto no WhatsApp.
            </p>
          </div>

          <div className="cta-actions">
            <a className="primary-button" href={heroLink} target="_blank" rel="noreferrer">
              <MessageCircle size={18} />
              Chamar no WhatsApp
            </a>
            <a className="ghost-button" href="#topo">
              Voltar ao topo
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand">
          <span className="brand-mark">Podcre</span>
          <span className="brand-sub">streetwear</span>
        </div>
        <div className="footer-meta">
          <span>
            <BadgePercent size={16} />
            pagamentos facilitados
          </span>
          <span>
            <Truck size={16} />
            envio para todo o Brasil
          </span>
        </div>
      </footer>
    </div>
  )
}
