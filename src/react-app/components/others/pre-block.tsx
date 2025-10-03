export const PreBlock = ({ children }: { children: React.ReactNode }) => {
  if (
    // import.meta.env.VITE_DEV_ENV === "production" &&
    import.meta.env.VITE_SHOW_DEBUG_IN_PRODUCTION !== "true"
  ) {
    return <></>;
  }

  return (
    <div
      dir="ltr"
      className="inline-block max-w-full max-h-[30vh] overflow-y-scroll"
    >
      <pre
        dir="ltr"
        className="inline-block whitespace-pre-wrap break-words bg-slate-100 p-3 rounded-lg font-mono text-sm "
      >
        {children}
      </pre>
    </div>
  );
};
