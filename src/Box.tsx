import { FC, PropsWithChildren } from "react";

export const Box: FC<PropsWithChildren<{ big?: boolean }>> = ({
  children,
  big = false,
}) => {
  const size = big
    ? { width: 200, height: 200 * 3.5 }
    : { width: 70 * 1.75, height: 70 };
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
        fontSize: 20,
        borderRadius: 12,
        fontWeight: 800,
        margin: 20,
      }}
    >
      {children}
    </div>
  );
};
