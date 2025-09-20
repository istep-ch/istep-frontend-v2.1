import BlogTeaserSmall from "@/components/blog/blogTeaserSmall/blogTeaserSmall";

interface projectProps {
  blogs: any[];
  lng: string;
  moreText: string;
}

export default async function coursesOverview({
  blogs,
  lng,
  moreText,
}: projectProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {blogs.slice(1).map((blog: any, index: number) => (
        <BlogTeaserSmall
          date={blog.date}
          key={index}
          title={blog.title}
          subtitle={blog.subtitle}
          image={blog.image.asset.url}
          moreText={moreText}
          id={blog._id}
          idx={index}
          lng={lng}
        />
      ))}
    </div>
  );
}
