"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ArrowUp, ChevronDown, CircleDot, MessageSquare, Tags } from "lucide-react"

// --- データ定義 ---
const allIssues = [
  { id: 1, topic: 'Nvidia', title: "Why is Nvidia's stock price soaring?", status: 'Open', author: 'user123', comments: 12, createdAt: '3 days ago', labels: ['finance', 'tech'] },
  { id: 2, topic: 'Nvidia', title: "CUDA 13.0 new features", status: 'Closed', author: 'dev456', comments: 5, createdAt: '1 month ago', labels: ['software', 'release', 'feature'] },
  { id: 3, topic: 'Tesla', title: "Tesla vs Rivian: A detailed comparison", status: 'Open', author: 'carfan', comments: 34, createdAt: '5 hours ago', labels: ['EV', 'comparison'] },
  { id: 4, topic: 'Tesla', title: "Full Self-Driving (FSD) v12 feedback", status: 'Open', author: 'tester789', comments: 152, createdAt: '1 day ago', labels: ['software', 'beta', 'bug'] },
  { id: 5, topic: 'Cursor', title: "Tell me about the Cursor editor", status: 'Closed', author: 'newdev', comments: 3, createdAt: '2 weeks ago', labels: ['editor', 'AI', 'feature'] },
  { id: 6, topic: 'Error', title: "Where is the compilation error in this Rust code?", status: 'Open', author: 'rustacean', comments: 8, createdAt: '1 hour ago', labels: ['rust', 'bug'] },
];

const allLabels = ['All', ...new Set(allIssues.flatMap(issue => issue.labels))];


export default function SearchInterface() {
  const [inputValue, setInputValue] = useState("")
  const [view, setView] = useState('suggestions');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [labelFilter, setLabelFilter] = useState('All');
  const [currentQuery, setCurrentQuery] = useState('');

  // アバターアニメーション (変更なし)
  const [isBlinking, setIsBlinking] = useState(false)
  const avatarRef = useRef(null)
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true)
      setTimeout(() => setIsBlinking(false), 150)
    }, 2000 + Math.random() * 3000)
    return () => clearInterval(blinkInterval)
  }, [])
  const calculateEyePosition = (eyeCenterX, eyeCenterY, avatarRect) => {
    if (!avatarRect) return { x: eyeCenterX, y: eyeCenterY }
    const avatarCenterX = avatarRect.left + avatarRect.width / 2
    const avatarCenterY = avatarRect.top + avatarRect.height / 2
    const deltaX = mouseX - avatarCenterX // mouseX is not defined, assuming it was mousePosition.x
    const deltaY = mouseY - avatarCenterY // mouseY is not defined, assuming it was mousePosition.y
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)
    const maxDistance = 8
    const normalizedX = distance > 0 ? (deltaX / distance) * Math.min(distance / 20, maxDistance) : 0
    const normalizedY = distance > 0 ? (deltaY / distance) * Math.min(distance / 20, maxDistance) : 0
    return { x: eyeCenterX + normalizedX, y: eyeCenterY + normalizedY }
  }


  const suggestionTopics = [
    { text: "Why is Nvidia growing rapidly?", topic: "Nvidia" },
    { text: "Tesla vs Rivian", topic: "Tesla" },
    { text: "Tell me about Cursor", topic: "Cursor" },
    { text: "Where is the error?", topic: "bug" },
  ]
  

  // 検索とフィルタリングのロジック (変更なし)
  useEffect(() => {
    if (view === 'results') {
      setIsLoading(true);
      setTimeout(() => {
        let filteredResults = allIssues.filter(issue => {
          const queryMatch = !currentQuery || 
                             issue.title.toLowerCase().includes(currentQuery.toLowerCase()) || 
                             issue.topic.toLowerCase().includes(currentQuery.toLowerCase());
          const labelMatch = labelFilter === 'All' || issue.labels.includes(labelFilter);
          return queryMatch && labelMatch;
        });
        if (filteredResults.length === 0) {
          const shuffled = [...allIssues].sort(() => 0.5 - Math.random());
          filteredResults = shuffled.slice(0, 3);
        }
        setResults(filteredResults);
        setIsLoading(false);
      }, 500);
    }
  }, [currentQuery, labelFilter, view]);


  const handleFormSubmit = (e) => {
    e.preventDefault();
    setCurrentQuery(inputValue);
    setView('results');
  };

  const handleSuggestionClick = (suggestion) => {
      setInputValue(suggestion.text);
      setCurrentQuery(suggestion.topic);
      setView('results');
  }


  return (
    // ★★★ このコンテナに px-4 を追加 ★★★
    <div className="min-h-screen bg-background pb-20 px-4">
      <div className="flex flex-col items-center justify-center w-full h-full mx-auto">
        {/* ... (Speech Bubble と Avatar のコードは変更なし) ... */}
        <div className="flex flex-col items-center justify-center p-3 mb-0 md:mb-3 space-y-6">
          <div className="relative max-w-md mx-auto mt-8">
            <div className="bg-background rounded-2xl px-4 py-2 border border-muted shadow-sm relative">
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-background rotate-45 border-b border-r border-muted shadow-sm"></div>
              <label className="text-sm md:text-base text-muted-foreground text-center block">
                Ready to get started?
              </label>
            </div>
          </div>
        </div>
        <div className="mb-8">
          <svg ref={avatarRef} fill="currentColor" viewBox="0 0 256 256" role="img" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
            <circle cx="128" cy="128" r="128" fill="#222" />
            <ellipse cx={127.1} cy={122.9} rx={isBlinking ? "18" : "18"} ry={isBlinking ? "2" : "18"} fill="white" className="transition-all duration-150 ease-out" />
            <ellipse cx={80.3} cy={122.9} rx={isBlinking ? "18" : "18"} ry={isBlinking ? "2" : "18"} fill="white" className="transition-all duration-150 ease-out" />
          </svg>
        </div>

        {/* --- Main Form --- */}
        <form onSubmit={handleFormSubmit} className="max-w-3xl w-full mx-auto relative bg-muted rounded-3xl p-2 border border-muted focus-within:ring-0">
          <div className="relative flex items-center w-full">
            <Textarea name="input" placeholder="Ask a question or search topics..." spellCheck={false} className="resize-none w-full min-h-16 bg-transparent border-0 px-4 py-3 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus:outline-none focus:ring-0" rows={1} value={inputValue} onChange={(e) => setInputValue(e.target.value)} style={{ height: "44px !important" }} />
          </div>
          <div className="p-1 flex items-center justify-between">
            <div className="flex items-center space-x-1">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="rounded-full h-10 gap-1 px-3">
                    <Tags className="size-4" /><span className="text-xs hidden md:block capitalize">{labelFilter}</span><ChevronDown className="w-3.h-3.5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {allLabels.map(label => (<DropdownMenuItem key={label} onSelect={() => setLabelFilter(label)} className="capitalize">{label}</DropdownMenuItem>))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="flex items-center justify-end">
              <Button type="submit" size="icon" className="rounded-full" disabled={!inputValue.trim()} aria-label="Send message"><ArrowUp className="w-4 h-4" /></Button>
            </div>
          </div>
        </form>

        {/* --- Results / Suggestions --- */}
        <div className="w-full mt-6 max-w-3xl mx-auto">
          {isLoading ? (<div className="text-center text-muted-foreground">Searching...</div>
          ) : view === 'results' ? (
            <div className="space-y-2">
              {results.map((issue) => (
                <div key={issue.id} className="border border-muted rounded-lg p-4 flex items-start space-x-4 hover:bg-muted/50 transition-colors">
                  <CircleDot className={`mt-1 flex-shrink-0 ${issue.status === 'Open' ? 'text-green-500' : 'text-purple-500'}`} size={18} />
                  <div className="flex-grow">
                    <a href="#" className="font-medium hover:text-blue-500">{issue.title}</a>
                    <div className="flex flex-wrap items-center gap-2 mt-1 text-xs text-muted-foreground">
                      {issue.labels.map(label => <span key={label} className="px-2 py-0.5 bg-muted rounded-full border border-muted-foreground/20 capitalize">{label}</span>)}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      #{issue.id} opened {issue.createdAt} by {issue.author}
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 text-muted-foreground flex-shrink-0">
                    <MessageSquare size={14} /><span className="text-xs">{issue.comments}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {suggestionTopics.map((suggestion, index) => (
                <div key={index} className="bg-background border border-muted rounded-xl p-4 hover:shadow-md cursor-pointer" onClick={() => handleSuggestionClick(suggestion)}>
                  <p className="text-sm font-medium text-foreground">{suggestion.text}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
