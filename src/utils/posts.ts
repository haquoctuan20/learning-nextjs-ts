import path from 'path';
import fs from 'fs';
import { Post } from '@/models';
import matter from 'gray-matter';

const BLOG_FOLDER = path.join(process.cwd(), 'src/blogMarkdown');

export async function getPostList(): Promise<Post[]> {
  /**
   * read all markdown files
   */
  const fileNameList = fs.readdirSync(BLOG_FOLDER);

  const postList: Post[] = fileNameList.map((file) => {
    const filePath = path.join(BLOG_FOLDER, file);
    const fileContent = fs.readFileSync(filePath, 'utf8');

    const dataPrayMatter = matter(fileContent, { excerpt_separator: '<!-- truncate-->' });

    return {
      id: file,
      slug: dataPrayMatter.data.slug,
      title: dataPrayMatter.data.title,
      author: {
        name: dataPrayMatter.data.author,
        title: dataPrayMatter.data.author_title,
        profileUrl: dataPrayMatter.data.author_url,
        avatarUrl: dataPrayMatter.data.author_image_url,
      },
      tagList: dataPrayMatter.data.tags,
      publishedDate: new Date().getTime().toString(),
      description: dataPrayMatter.excerpt || '',

      mdContent: dataPrayMatter.content,
    };
  });

  return postList;
}
