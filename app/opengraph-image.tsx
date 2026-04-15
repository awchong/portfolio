import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import path from "path";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  const [avatarData, serifRegular, serifItalic] = await Promise.all([
    readFile(path.join(process.cwd(), "public/images/avatar.jpg")),
    readFile(
      path.join(process.cwd(), "public/fonts/instrument-serif-regular.ttf")
    ),
    readFile(
      path.join(process.cwd(), "public/fonts/instrument-serif-italic.ttf")
    ),
  ]);

  // avatar.jpg is actually PNG bytes — use the correct MIME type
  const avatarBase64 = `data:image/png;base64,${avatarData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          background: "#ffffff",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 96px",
        }}
      >
        <img
          src={avatarBase64}
          width={96}
          height={96}
          style={{ borderRadius: "50%", objectFit: "cover", marginBottom: "40px" }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontFamily: "Instrument Serif",
            fontSize: 112,
            fontWeight: 400,
            lineHeight: 1,
            color: "#111110",
          }}
        >
          <span>Instructive</span>
          <span>{"& impactful,"}</span>
          <span style={{ color: "#b87350", fontStyle: "italic" }}>by design</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Instrument Serif",
          data: serifRegular.buffer.slice(
            serifRegular.byteOffset,
            serifRegular.byteOffset + serifRegular.byteLength
          ),
          style: "normal",
          weight: 400,
        },
        {
          name: "Instrument Serif",
          data: serifItalic.buffer.slice(
            serifItalic.byteOffset,
            serifItalic.byteOffset + serifItalic.byteLength
          ),
          style: "italic",
          weight: 400,
        },
      ],
    }
  );
}
