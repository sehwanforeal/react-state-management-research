import { FC, PropsWithChildren } from "react";

export const Box: FC<PropsWithChildren<{ big?: boolean }>> = ({
  children,
  big = false,
}) => {
  const size = big
    ? { width: 200, height: 200 * 3.5 }
    : { width: 90 * 1.75, height: 90 };
  return (
    <div
      style={{
        ...size,
        border: "1px solid white",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        justifyContent: big ? undefined : "center",
        padding: big ? "20px 0" : undefined,
        alignItems: "center",
        fontSize: 16,
        borderRadius: 12,
        fontWeight: 800,
        margin: 10,
      }}
    >
      {children}
    </div>
  );
};
