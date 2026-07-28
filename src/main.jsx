import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './index.css'
import Layout from './components/Layout.jsx'
import App from './App.jsx'
import NotesIndexPage from './pages/NotesIndexPage.jsx'
import NoteDetailPage from './pages/NoteDetailPage.jsx'
import CaseStudiesIndexPage from './pages/CaseStudiesIndexPage.jsx'
import CaseStudyDetailPage from './pages/CaseStudyDetailPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<App />} />
          <Route path="/case-studies" element={<CaseStudiesIndexPage />} />
          <Route path="/case-studies/:slug" element={<CaseStudyDetailPage />} />
          <Route path="/notes" element={<NotesIndexPage />} />
          <Route path="/notes/:slug" element={<NoteDetailPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
