import Footer from "@/components/Footer";
import Image from "next/image";
import Posts from "@/components/Posts";
import Link from "next/link";
import allArticles from "@/constants/all";
import CreationDate from "@/components/Date";
import Breadcrumb from '@/components/Breadcrumb';

const formatTitle = (title: string) => title.replace(/[^A-Za-z0-9]+/g, "-");

export function generateStaticParams(): { articleTitle: string }[] {
  return allArticles.map(({ title }) => ({
    articleTitle: formatTitle(title),
  }));
}

const PostPage = async ({
  params,
}: {
  params: Promise<{ articleTitle: string }>;
}) => {
  const { articleTitle } = await params;
  const article = allArticles.find(
    ({ title }) => formatTitle(title) === articleTitle
  );

  if (!article) return <h1>Post not found</h1>;

  return (
    <div className="bg-white">
      <div className="mt-20 flex flex-col lg:flex-row gap-10 px-6 md:px-10 lg:px-16 xl:px-24">
        {/* Main Article Section */}
        <div className="flex-1">
          <div className="max-w-7xl text-black mb-4">
            <Breadcrumb />
          </div>

          <h1 className="text-3xl text-black sm:text-4xl lg:text-5xl font-bold mb-6">
            {article.title}
          </h1>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 mb-6">
            <div className="text-gray-800 w-full flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3">
              {/* Author Info */}
              <div className="flex items-center gap-2">
                <Image
                  src={`/authors/${article.authorName}.jpg`}
                  alt={article.authorName}
                  width={50}
                  height={50}
                  className="rounded-full object-cover object-center size-12"
                />
                <p className="text-lg lg:text-md">
                  {article.authorName}
                </p>
              </div>

              {/* Date + Read Time */}
              <div className="w-full flex justify-between items-center lg:pr-1 lg:w-auto lg:justify-start gap-4 text-sm lg:text-base text-gray-500">
                <p>
                  <CreationDate articleNumber={article.articleNumber} />
                </p>
                <p>
                  Read Time: {article.readTime}
                </p>
              </div>
            </div>
          </div>

          <Image
            src={`/articles/${article.imgUrl}`}
            width={1000}
            height={1000}
            alt={article.title}
            className="w-full max-w-5xl mx-auto rounded-lg"
          />

          <div className="text-black/85 tracking-normal mt-6 text-lg leading-relaxed space-y-4 max-w-3xl">
            {article.contents.map((content, index) =>
              /\.(jpg)$/i.test(content) ? (
                <Image
                  key={index}
                  width={600}
                  height={400}
                  src={`/articles/${content}`}
                  alt="Image"
                  className="mt-4 w-full rounded-lg"
                />
              ) : (
                <p key={index}>
                  {content.includes("***") ? (
                    <strong className="block text-2xl sm:text-3xl mt-8">
                      {content.replace(/\*\*\*/g, "")}
                    </strong>
                  ) : (
                    content
                  )}
                </p>
              )
            )}
          </div>
        </div>

        {/* Sidebar: Related Posts (large screens only) */}
        <aside className=" mt-16 w-full max-w-xs">
          <h2 className="text-black hover:text-blue-700 hover:cursor-pointer font-bold  text-2xl lg:text-3xl mb-6">
            Trending Now
          </h2>
          <div className="grid grid-cols-1 gap-6">
            {allArticles
              .filter(
                (post) =>
                  post.section === article.section &&
                  post.title !== article.title
              )
              .slice(0, 5)
              .map((post, index) => (
                <Link
                  key={index}
                  href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`}
                  passHref
                >
                  <div className="bg-grey-200">
                    <Posts
                      pimg={`/articles/${post.imgUrl}`}
                      pheading={post.title}
                      pcontent={post.contents}
                      articleNumber={post.articleNumber}
                    />
                  </div>
                </Link>
              ))}
          </div>
        </aside>
      </div>

      <div className=" mt-20">
          <h2 className="text-black ml-6 lg:ml-28 hover:text-blue-700 hover:cursor-pointer 
          text-left font-bold tracking-wide text-3xl sm:text-4xl lg:text-5xl mb-8">
            You Might Also Like
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 justify-items-center max-w-7xl mx-auto ">
            {allArticles
              .filter(
                (post) =>
                  post.section === article.section &&
                  post.title !== article.title
              )
              .slice(15, 19)
              .map((post, index) => (
                <Link
                  key={index}
                  href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`}
                  passHref
                >
                  <div className="bg-grey-200  w-[330px]">
                    <Posts
                      pimg={`/articles/${post.imgUrl}`}
                      pheading={post.title}
                      pcontent={post.contents}
                      articleNumber={post.articleNumber}
                    />
                  </div>
                </Link>
              ))}
          </div>
        </div>

      {/* Related Posts: for small screens (below article) */}
      {/* <div className="block lg:hidden mt-20 px-6 md:px-10">
        <h2 className="text-black text-center font-bold tracking-wide text-3xl sm:text-4xl mb-8">
          Related Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
          {allArticles
            .filter(
              (post) =>
                post.section === article.section &&
                post.title !== article.title
            )
            .slice(0, 4)
            .map((post, index) => (
              <Link
                key={index}
                href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`}
                passHref
              >
                <div className="bg-grey-200 w-[330px]">
                  <Posts
                    pimg={`/articles/${post.imgUrl}`}
                    pheading={post.title}
                    pcontent={post.contents}
                    articleNumber={post.articleNumber}
                  />
                </div>
              </Link>
            ))}
        </div>
      </div> */}

      <div className="h-20 bg-white"></div>
      <Footer />
    </div>
  );
};

export default PostPage;
