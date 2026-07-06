// import SignatureSvg from "@/assets/branding/signature.svg?react";
import signatureUrl from "@/assets/branding/signature.svg";

export function Signature({
  className = "",
  color,
}: {
  className?: string;
  color?: string;
}) {
  return (
    // <SignatureSvg
    //   className={className}
    //   style={{
    //     color,
    //   }}
    // />
        <img
            src={signatureUrl}
            className={className}
            style={{ color }}
            alt="By Pablo Mastrorilli & Germán Rodríguez"
        />
  );
}