import './App.css'

function App() {
  return (
    <div className="container">
      <nav>
        <h2>MyPortfolio</h2>
        <a href="#about">Tentang Saya</a>
      </nav>

      <section className="hero">
        <p>HALO, Kaila Adinda Zahra</p>
        <h1>Selamat Datang di Website Saya!</h1>
        <p>
          Saya sedang belajar membuat website
          menggunakan React dan CSS.
        </p>
        <a href="#about" className="button">
          Kenali Aku
        </a>
      </section>

      <section id="about" className="about">
        <h2>Tentang Saya</h2>
        <p>
          Saya adalah siswa PPLG yang tertarik
          mempelajari pemrograman dan UI/UX Design.
          Saya ingin terus mengembangkan kemampuan
          untuk menjadi seorang developer.
        </p>
      </section>

      <section className="skills">
        <h2>Kemampuan yang Dipelajari</h2>

        <div className="skill-list">
          <div>HTML</div>
          <div>CSS</div>
          <div>JavaScript</div>
          <div>React</div>
        </div>
      </section>

      <footer>
        <p> 2026 MyPortfolio | Dibuat dengan React</p>
      </footer>
    </div>
  )
}

export default App