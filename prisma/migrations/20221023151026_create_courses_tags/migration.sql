-- CreateTable
CREATE TABLE "CoursesTags" (
    "id" TEXT NOT NULL,
    "course_id" TEXT NOT NULL,
    "tag_id" TEXT NOT NULL,

    CONSTRAINT "CoursesTags_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CoursesTags" ADD CONSTRAINT "CoursesTags_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "courses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CoursesTags" ADD CONSTRAINT "CoursesTags_tag_id_fkey" FOREIGN KEY ("tag_id") REFERENCES "tags"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
