import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-lg flex-col justify-center px-6">
      <p className="spec">404</p>
      <h1 className="mt-3 text-2xl font-medium tracking-tight">
        No route at this path.
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Static export — that URL was never built.
      </p>
      <Link
        href="/"
        className="mt-6 text-sm text-primary underline-offset-4 hover:underline"
      >
        Back to the workbench
      </Link>
    </main>
  );
}
