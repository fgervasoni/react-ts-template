function App() {
  const envTitle = import.meta.env.VITE_APP_TITLE
  return (
    <h1 className="p-3 text-3xl text-blue-500 text-center">Hello {envTitle}</h1>
  )
}

export default App
