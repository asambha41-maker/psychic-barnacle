export default function CosmicOceanPage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #020617, #0f172a, #164e63)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        color: 'white'
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '1100px',
          background: 'rgba(255,255,255,0.08)',
          borderRadius: '30px',
          overflow: 'hidden',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 10px 40px rgba(0,0,0,0.4)',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr'
        }}
      >
        <div style={{ padding: '50px' }}>
          <div
            style={{
              display: 'inline-block',
              background: 'rgba(34,211,238,0.2)',
              padding: '8px 16px',
              borderRadius: '999px',
              marginBottom: '20px',
              color: '#a5f3fc'
            }}
          >
            Explore Nature 🌊
          </div>

          <h1
            style={{
              fontSize: '52px',
              lineHeight: '1.1',
              marginBottom: '25px'
            }}
          >
            The Mystery of the Deep Ocean
          </h1>

          <p
            style={{
              color: '#dbeafe',
              fontSize: '18px',
              lineHeight: '1.8',
              marginBottom: '20px'
            }}
          >
            The deep ocean is one of the least explored places on Earth. Hidden beneath kilometers of water are glowing creatures, underwater volcanoes, and ecosystems that survive without sunlight.
          </p>

          <p
            style={{
              color: '#cbd5e1',
              lineHeight: '1.8',
              marginBottom: '30px'
            }}
          >
            Scientists continue discovering mysterious sea life and underwater worlds that feel like another planet.
          </p>

          <div style={{ display: 'flex', gap: '15px' }}>
            <button
              style={{
                padding: '14px 28px',
                borderRadius: '16px',
                border: 'none',
                background: '#22d3ee',
                color: '#082f49',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              Learn More
            </button>

            <button
              style={{
                padding: '14px 28px',
                borderRadius: '16px',
                border: '1px solid rgba(255,255,255,0.3)',
                background: 'transparent',
                color: 'white',
                cursor: 'pointer'
              }}
            >
              Watch Video
            </button>
          </div>
        </div>

        <div
          style={{
            background: 'linear-gradient(135deg,#06b6d4,#2563eb,#4338ca)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '40px',
            textAlign: 'center'
          }}
        >
          <div style={{ fontSize: '100px', marginBottom: '20px' }}>🐋</div>

          <h2 style={{ fontSize: '36px', marginBottom: '15px' }}>
            Ocean Wonders
          </h2>

          <p style={{ lineHeight: '1.8', color: '#e0f2fe' }}>
            Dive into the hidden underwater universe and explore the beauty beneath the waves.
          </p>
        </div>
      </div>
    </div>
  )
}
