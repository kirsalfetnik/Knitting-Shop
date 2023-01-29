const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="footer">
      <span>Copyright © {currentYear} FRUD</span>
    </div>
  )
}

export default Footer;