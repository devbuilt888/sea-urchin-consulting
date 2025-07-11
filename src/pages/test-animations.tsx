export default function TestAnimations() {
  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <h1 className="text-4xl font-bold text-white mb-8 text-center">Animation Test Page</h1>
      
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Test each animation */}
        <div className="bg-white p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Float Animation</h2>
          <div className="flex space-x-4">
            <div className="w-16 h-16 bg-blue-500 rounded-full animate-float flex items-center justify-center text-white font-bold">1</div>
            <div className="w-16 h-16 bg-green-500 rounded-full animate-float-slow flex items-center justify-center text-white font-bold">2</div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Blob Animations</h2>
          <div className="flex space-x-4">
            <div className="w-20 h-20 bg-pink-300 rounded-full animate-blob1"></div>
            <div className="w-20 h-20 bg-blue-300 rounded-full animate-blob2"></div>
            <div className="w-20 h-20 bg-yellow-300 rounded-full animate-blob3"></div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Sparkle Animation</h2>
          <div className="flex space-x-4">
            <div className="text-4xl animate-sparkle">✨</div>
            <div className="text-4xl animate-sparkle-delay">⭐</div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Wiggle Animation</h2>
          <div className="text-4xl animate-wiggle">🎉</div>
        </div>

        <div className="bg-white p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Slide In Animation</h2>
          <div className="w-full h-16 bg-purple-500 rounded animate-slide-in flex items-center justify-center text-white font-bold">
            Slide In Test
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Bokeh Animation</h2>
          <div className="relative h-32 bg-gray-200 rounded overflow-hidden">
            <div className="absolute w-4 h-4 bg-red-400 rounded-full animate-bokeh" style={{ left: '10%' }}></div>
            <div className="absolute w-6 h-6 bg-blue-400 rounded-full animate-bokeh" style={{ left: '30%', animationDelay: '2s' }}></div>
            <div className="absolute w-3 h-3 bg-green-400 rounded-full animate-bokeh" style={{ left: '60%', animationDelay: '4s' }}></div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Grid Lines Animation</h2>
          <div className="relative h-32 bg-gray-200 rounded overflow-hidden">
            <div className="absolute w-full h-px bg-blue-500 animate-grid-lines" style={{ top: '25%' }}></div>
            <div className="absolute w-full h-px bg-green-500 animate-grid-lines" style={{ top: '50%', animationDelay: '1s' }}></div>
            <div className="absolute w-full h-px bg-red-500 animate-grid-lines" style={{ top: '75%', animationDelay: '2s' }}></div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Gradient Shift Animation</h2>
          <div className="w-full h-16 rounded animate-gradient-shift" style={{ 
            background: 'linear-gradient(90deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4)',
            backgroundSize: '400% 400%'
          }}></div>
        </div>
      </div>
    </div>
  );
} 