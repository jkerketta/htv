import { useState } from 'react';
import { Send } from 'lucide-react'
import CustomSelect from './components/CustomSelect';

function App() {
  const [colorBlindMode, setColorBlindMode] = useState('none');
  const [fontStyle, setFontStyle] = useState('default');
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 flex items-center justify-center p-4">
      <div className="w-[380px] h-[550px] bg-white/15 backdrop-blur-2xl border border-white/30 shadow-2xl rounded-2xl p-4 flex flex-col relative overflow-hidden">
        {/* Internal gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-transparent pointer-events-none rounded-2xl"></div>
        <div className="relative z-10 flex flex-col h-full">
          {/* Header */}
          <div className="text-center mb-3">
            <h1 className="text-xl font-semibold text-white/90 mb-1 drop-shadow-sm">AccessEase</h1>
            <p className="text-xs text-white/80">Inclusive Web Assistant</p>
          </div>

          {/* Top Controls - Compact */}
          <div className="space-y-2 mb-3">
            {/* Color Blind Mode */}
            <div className="flex items-center justify-between">
              <label className="text-sm text-white/90">Color Blind Mode</label>
              <CustomSelect
                options={[
                  { value: 'none', label: 'None' },
                  { value: 'deuteranopia', label: 'Deuteranopia' },
                  { value: 'protanopia', label: 'Protanopia' },
                  { value: 'tritanopia', label: 'Tritanopia' },
                ]}
                value={colorBlindMode}
                onChange={setColorBlindMode}
                label="Color Blind Mode"
              />
            </div>

            {/* Font Style */}
            <div className="flex items-center justify-between">
              <label className="text-sm text-white/90">Font Style</label>
              <CustomSelect
                options={[
                  { value: 'default', label: 'Default' },
                  { value: 'opendyslexic', label: 'OpenDyslexic' },
                  { value: 'sans-serif', label: 'Sans-serif' },
                ]}
                value={fontStyle}
                onChange={setFontStyle}
                label="Font Style"
              />
            </div>

            {/* Focus/Spotlight */}
            <div className="flex items-center justify-between">
              <label className="text-sm text-white/90">Focus / Spotlight</label>
              <div className="relative">
                <input
                  type="checkbox"
                  className="sr-only"
                  id="focus-toggle"
                />
                <label
                  htmlFor="focus-toggle"
                  className="flex items-center cursor-pointer group"
                >
                  <div className="relative">
                    <div className="w-8 h-4 bg-white/20 rounded-full shadow-inner transition-colors duration-200 group-hover:bg-white/25 backdrop-blur-md"></div>
                    <div className="absolute top-0.5 left-0.5 w-3 h-3 bg-white rounded-full shadow transition-transform duration-200 group-hover:scale-110"></div>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/20 my-2" />

          {/* AI Chat Assistant - Main Focus */}
          <div className="flex-1 flex flex-col min-h-0">
            {/* Chat Messages Area */}
            <div className="bg-white/10 rounded-2xl p-3 h-64 overflow-y-auto custom-scrollbar mb-3 backdrop-blur-md flex flex-col gap-2">
              <div className="bg-white/20 text-white/90 rounded-xl px-3 py-1.5 self-start max-w-[75%] text-sm">
                <span className="font-medium">User:</span> Can you help me understand what this page is about?
              </div>
              <div className="bg-white/30 text-white/90 rounded-xl px-3 py-1.5 self-end max-w-[75%] text-sm">
                <span className="font-medium">Assistant:</span> I'd be happy to help! This appears to be a web page with various content sections. Let me analyze the structure for you.
              </div>
              <div className="bg-white/20 text-white/90 rounded-xl px-3 py-1.5 self-start max-w-[75%] text-sm">
                <span className="font-medium">User:</span> What accessibility features are available?
              </div>
              <div className="bg-white/30 text-white/90 rounded-xl px-3 py-1.5 self-end max-w-[75%] text-sm">
                <span className="font-medium">Assistant:</span> Based on the current page, I can help with color adjustments, font modifications, and focus assistance.
              </div>
              <div className="bg-white/20 text-white/90 rounded-xl px-3 py-1.5 self-start max-w-[75%] text-sm">
                <span className="font-medium">User:</span> Can you summarize the main content?
              </div>
              <div className="bg-white/30 text-white/90 rounded-xl px-3 py-1.5 self-end max-w-[75%] text-sm">
                <span className="font-medium">Assistant:</span> I can help you summarize the content. Would you like me to focus on specific sections or provide a general overview?
              </div>
            </div>

            {/* Input Area */}
            <div className="flex items-center space-x-2 mb-3">
              <textarea
                placeholder="Ask about this page…"
                className="bg-white/20 text-white/90 px-3 py-1.5 rounded-xl flex-1 backdrop-blur-sm text-sm placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-200 resize-none min-h-[42px] max-h-[150px] overflow-y-auto custom-scrollbar"
                rows="1"
                onInput={(e) => {
                  e.target.style.height = 'auto';
                  e.target.style.height = e.target.scrollHeight + 'px';
                }}
              ></textarea>
              <button className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-all duration-200 flex items-center justify-center">
                <Send size={16} className="text-white/90" />
              </button>
      </div>

            {/* Action Buttons */}
            <div className="flex justify-center gap-2">
              <button className="bg-white/20 hover:bg-white/30 text-white/90 text-xs font-medium px-2.5 py-1.5 rounded-full backdrop-blur-md transition-all duration-200">
                Summarize
              </button>
              <button className="bg-white/20 hover:bg-white/30 text-white/90 text-xs font-medium px-2.5 py-1.5 rounded-full backdrop-blur-md transition-all duration-200">
                Explain
              </button>
              <button className="bg-white/20 hover:bg-white/30 text-white/90 text-xs font-medium px-2.5 py-1.5 rounded-full backdrop-blur-md transition-all duration-200">
                Translate
        </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
