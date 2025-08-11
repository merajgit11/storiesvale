import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import CategoryBanner from "@/app/components/categoryblocks/Categorybanner";
import StoryList from "@/app/components/categoryblocks/StoryList";

export default function CategoryPage(props: any) {
  const slug = props?.params?.slug || "";

  const filterRaw = props?.searchParams?.filter;
  const filter =
    typeof filterRaw === "string"
      ? filterRaw
      : Array.isArray(filterRaw)
      ? filterRaw[0]
      : "all";

  return (
    <div>
      <Header />
      <main>
        <CategoryBanner category={slug} />
        <div className="w-full">
          <div className="flex-1">
            <StoryList category={slug} filter={filter} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
