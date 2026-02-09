export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-[4px] bg-foreground">
            <span className="text-[10px] font-bold text-white">H</span>
          </div>
          <span className="text-sm font-semibold tracking-tight text-foreground">
            hyperactive
          </span>
          <span className="annotation ml-0.5 opacity-40">studio</span>
        </div>

        {/* Nav */}
        <nav className="flex gap-6">
          {["Services", "Work", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[13px] text-muted transition-colors duration-150 hover:text-foreground"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Copyright */}
        <p className="font-mono text-[11px] text-muted-light">
          &copy; {new Date().getFullYear()} Hyperactive Studio
        </p>
      </div>
    </footer>
  );
}
