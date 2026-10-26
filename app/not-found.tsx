import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-lg flex-col justify-center px-6">
      <p className="text-sm font-medium text-primary">404</p>
      <h1 className="mt-3 text-2xl font-semibold tracking-tight">
        This page doesn’t exist.
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        The link might be old, or there might be a typo in it.
      </p>
      <Link
        href="/"
        className="mt-6 text-sm text-primary underline-offset-4 hover:underline"
      >
        Go to the homepage
      </Link>
    </main>
  );
}
