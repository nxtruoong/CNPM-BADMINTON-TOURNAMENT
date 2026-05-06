import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import axiosInstance from './utils/axios'
import './App.css'

interface BlogPost {
  title: string;
  content: string;
}

function App() {
  const [count, setCount] = useState(0)
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchBlogPosts = async () => {
    setLoading(true)
    setError(null)
    try {
      // Gọi API đến máy chủ backend tại `http://localhost:8080/`
      const response = await axiosInstance.get('/')
      setBlogPosts(response.data.blogPosts || [])
    } catch (err: any) {
      setError(err.message || 'Đã có lỗi xảy ra khi gọi API')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        
        {/* === PHẦN DEMO AXIOS KẾT NỐI BACKEND === */}
        <div style={{ margin: '2rem 0', padding: '1.5rem', border: '1px solid #ccc', borderRadius: '8px' }}>
          <h2>Demo Kết Nối Back-End 🚀</h2>
          <button
            className="counter"
            onClick={fetchBlogPosts}
            style={{ marginBottom: '1rem', background: '#646cff' }}
          >
            {loading ? 'Đang tải...' : 'Gọi API lấy bài viết'}
          </button>

          {error && <p style={{ color: 'red' }}>Lỗi: {error}</p>}

          <div style={{ textAlign: 'left' }}>
            {blogPosts.length > 0 ? (
              <ul>
                {blogPosts.map((post, index) => (
                  <li key={index} style={{ marginBottom: '1rem' }}>
                    <strong>{post.title}</strong>
                    <p>{post.content}</p>
                  </li>
                ))}
              </ul>
            ) : (
              !loading && <p>Chưa có dữ liệu. Hãy bấm nút phía trên!</p>
            )}
          </div>
        </div>
        {/* ======================================= */}

        <button
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
