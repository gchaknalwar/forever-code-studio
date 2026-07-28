import logo from '../assets/forever-code-logo.png'

export default function ComingSoon() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black px-6 text-center">
      <img
        src={logo}
        alt="Forever Code Studio"
        style={{ width: '120px', height: '120px', objectFit: 'contain' }}
        className="mb-8"
      />

      <h1 className="mb-4 text-4xl font-bold text-white">Coming Soon</h1>

      <p className="max-w-md text-gray-400">
        Forever Code Studio is building something new. We'll be live soon.
      </p>
    </div>
  )
}
