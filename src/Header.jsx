export default function Header({ targetRef }) {
  const handleButtonClick = () => {
    if (!targetRef.current) return;

    console.log("スクロールします");
    targetRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="header-nav">
      <button onClick={handleButtonClick}>スクロールボタン</button>
    </nav>
  );
}
