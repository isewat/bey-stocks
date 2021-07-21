const AuthLayout = ({ children }) => {
  return (
    <div style={{ minWidth: '100%', minHeight: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'yellow' }}>
      {children}
    </div>
  )
}
export default AuthLayout;