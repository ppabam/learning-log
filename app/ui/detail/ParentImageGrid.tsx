import { fetchFlagsByParentId } from "@/app/lib/data";
import LikeableImage from "@/app/ui/gallery/likeable-image";
import { MorphemeSection } from "./morpheme-section";

export default async function ParentImageGrid({
  parentId,
  parentName,
}: {
  parentId: number;
  parentName: string;
}) {
  // Fetch child images by parentId
  const childImages = await fetchFlagsByParentId(parentId);

    // Parent 이미지 데이터를 서버에서 가져옴
    const response = await fetch(`${process.env.BASE_URL}/api/py/getNouns/${parentName}`);
    // const response = await fetch(`/api/py/getNouns/${encodeURIComponent(parentName)}`, {
    //   cache: 'no-store', // 최신 데이터를 가져오기 위해 설정
    // });
  
    let morphemes: string[] = [];
      if (response.ok) {
          const data = await response.json();
          morphemes = data.nouns || [];
      } else {
          console.error("Failed to fetch parent images");
      }

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-4">
      {/* Section 1: 소속 이미지 */}
      {childImages.length > 0 ? (
        <section className="mb-8">
          <h2 className="text-lg font-bold mb-4">🧑🏼‍🤝‍🧑🏻👭🏻 동지 깃발 🏳️‍🌈</h2>
          <ul
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
            style={{
              justifyContent: childImages.length < 4 ? "space-evenly" : "stretch",
            }}
          >
            {childImages.map((flag) => (
              <li key={flag.id} className="text-center">
                <LikeableImage flag={flag} />
                <p className="mt-2 text-pretty">{flag.name}</p>
              </li>
            ))}
          </ul>
        </section>
      ) : (
        <p className="text-center text-gray-500 animate-pulse text-2xl mb-8">(ෆ˙ᵕ˙ෆ) (◍•ᴗ•◍)</p>
      )}

      {/* Section 2: 형태소분석 */}
      <MorphemeSection parentId={parentId} morphemes={morphemes} />
    </div>
  );
}
