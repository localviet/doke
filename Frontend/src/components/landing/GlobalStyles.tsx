export function GlobalStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');
      @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(-2deg); }
        50% { transform: translateY(-8px) rotate(1deg); }
      }
      @keyframes float2 {
        0%, 100% { transform: translateY(0px) rotate(2deg); }
        50% { transform: translateY(-6px) rotate(-1deg); }
      }
      @keyframes spin-slow {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      @keyframes wiggle {
        0%, 100% { transform: rotate(-3deg); }
        50% { transform: rotate(3deg); }
      }
      @keyframes pop-in {
        0% { opacity:0; transform: scale(0.5) rotate(-10deg); }
        70% { transform: scale(1.08) rotate(2deg); }
        100% { opacity:1; transform: scale(1) rotate(0deg); }
      }
      .pop-in { animation: pop-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) both; }
      .float-1 { animation: float 4s ease-in-out infinite; }
      .float-2 { animation: float2 5s ease-in-out infinite 0.5s; }
      .float-3 { animation: float 3.5s ease-in-out infinite 1s; }
      html, body, #root {
        background: #FFFDEB;
      }
      body {
        overscroll-behavior-y: none;
      }
      ::-webkit-scrollbar { width: 6px; }
      ::-webkit-scrollbar-track { background: #FFFDEB; }
      ::-webkit-scrollbar-thumb { background: #7DAACB; border-radius: 3px; }
    `}</style>
  );
}
