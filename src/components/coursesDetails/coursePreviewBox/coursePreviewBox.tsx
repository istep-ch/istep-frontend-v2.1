"use client";
import CourseBadge from "@/components/coursesDetails/courseBadge/courseBadge";
import Link from "next/link";

import { usePathname } from "next/navigation";
export default function coursesPreviewBox({
  course,
  idx,
  individualCourseLearnMore,
}: {
  course: any;
  idx: number;
  individualCourseLearnMore: any;
}) {
  const pathname = usePathname();
  return (
    <Link href={pathname + "/" + course.title.replace(/\s+/g, "-")}>
      <div className="bg-orange rounded-3xl p-8 aspect-square flex flex-col justify-between">
        <div className="flex justify-end">
          <CourseBadge color="orange" text={course.tag} />
        </div>
        <div className="text-darkblue">
          <h3 className="text-h-sm md:text-h-md mb-2 md:mb-4 ">
            {course.title}
          </h3>
          <span className="text-p-sm md:text-p-lg">
            <p className="pt-2">{course.courseLocation}</p>
            <div className="flex items-center pt-2 ">
              <hr className="h-0.5  border-0 bg-darkblue w-6 mr-1" />
              <p className="font-bold">{individualCourseLearnMore}</p>
            </div>
          </span>
        </div>
      </div>
    </Link>
  );
}
