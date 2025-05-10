import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Feedback from './components/Feedback/Feedback'
import Options from './components/Options/Options'
import './App.css'

function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem('feedback')
    return savedFeedback ? JSON.parse(savedFeedback) : { good: 0, neutral: 0, bad: 0 }
  })

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback))
  }, [feedback])

  const updateFeedback = (feedbackType) => {
    if (feedbackType === 'reset') {
      setFeedback({ good: 0, neutral: 0, bad: 0 })
      return
    }
    setFeedback(prev => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1
    }))
  }

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad
  const totalRelevantFeedback = feedback.good + feedback.bad
  const positivePercentage = totalRelevantFeedback > 0
    ? Math.round((feedback.good / totalRelevantFeedback) * 100)
    : 0

  return (
    <div className="app">
      <h1>Sip Happens Café</h1>
      <p>Please leave your feedback about our service by selecting one of the options below.</p>
      
      <Options onLeaveFeedback={updateFeedback} total={totalFeedback} />
      
      <Feedback
        good={feedback.good}
        neutral={feedback.neutral}
        bad={feedback.bad}
        total={totalFeedback}
        positivePercentage={positivePercentage}
      />
    </div>
  )
}

export default App
