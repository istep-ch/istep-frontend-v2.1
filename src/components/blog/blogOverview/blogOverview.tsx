import { unstable_setRequestLocale } from "next-intl/server";

import BlogTeaserSmall from "@/components/blog/blogTeaserSmall/blogTeaserSmall";

interface projectProps {
  lng: string;
}

export default async function coursesOverview({ lng }: projectProps) {
  unstable_setRequestLocale(lng);
  const translation = (await import(`../../../../locales/${lng}/${lng}.json`))
    .default;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {translation.Blog.blogs.slice(1).map((blog: any, index: number) => (
        <BlogTeaserSmall
          date={blog.date}
          key={index}
          title={blog.title}
          text={blog.text}
          image={blog.images[0]}
          moreText={blog.moreText}
          idx={index + 1}
          lng={lng}
        />
      ))}
    </div>
  );
}
