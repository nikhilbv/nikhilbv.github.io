export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="section-container">
        <div className="text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Nikhil B V. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
