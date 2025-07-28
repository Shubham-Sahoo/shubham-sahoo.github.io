export default function Contact() {
  return (
    <main className="page-content bg-[var(--color-background)]">
      <section className="section">
        <div className="container max-w-[var(--container-lg)]">
          <h1 className="text-[var(--font-size-4xl)] font-[var(--font-family-serif)] font-[var(--font-weight-bold)] text-[var(--color-text)] mb-16 text-center">
            Contact Me
          </h1>
          <div className="bg-[var(--color-surface)] rounded-[var(--radius-lg)] p-[var(--space-24)] text-[var(--color-text)] text-center">
            <p className="text-[var(--font-size-lg)] mb-16">
              Feel free to reach out to discuss projects, collaborations, or any opportunities.
            </p>
            <div className="space-y-8">
              <p className="text-[var(--font-size-xl)]">You can reach me at:</p>
              <div className="bg-[var(--color-secondary)] rounded-[var(--radius-base)] p-[var(--space-16)] inline-block">
                <a
                  href="mailto:shubhamsomnath@gmail.com"
                  className="text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] text-[var(--font-size-lg)] font-[var(--font-weight-semibold)] transition-colors"
                >
                  shubhamsomnath@gmail.com
                </a>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </main>
  );
}