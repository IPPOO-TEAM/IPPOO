import { useEffect } from 'react'
import logo1 from '@/imports/Plan_de_travail63-1.png'
import logo2 from '@/imports/Plan_de_travail072-1.png'

export default function SplashScreen({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDone, 2800)
    return () => clearTimeout(t)
  }, [onDone])

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#0A0A0A] overflow-hidden">
      {/* Background swoosh decoration */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 60%, #E84500 0%, transparent 70%)',
        }}
      />

      {/* Logo */}
      <div
        className="relative z-10 flex flex-col items-center gap-6"
        style={{ animation: 'splashIn 0.8s cubic-bezier(0.16,1,0.3,1) both' }}
      >
        <img
          src={logo2}
          alt="IPPOO"
          className="w-72 object-contain"
          style={{ filter: 'none' }}
        />
        <p className="text-white/60 text-sm font-medium tracking-[0.2em] uppercase">
          Pour les travailleurs informels
        </p>
      </div>

      {/* Loading bar */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-48 h-0.5 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-[#E84500] rounded-full"
          style={{ animation: 'loadBar 2.4s ease-out both' }}
        />
      </div>

      <style>{`
        @keyframes splashIn {
          from { opacity: 0; transform: scale(0.88) translateY(20px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes loadBar {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </div>
  )
}
