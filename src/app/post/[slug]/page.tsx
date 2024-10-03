import { getItemBySlug } from "../../../utils/actions/get-data";
import { PostProps } from "../../../utils/post.type";
import styles from "./styles.module.scss";

export default async function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const { objects }: PostProps = await getItemBySlug(slug);
  console.log(objects);

  return (
    <div>
      <h1>PÁGINA {slug}</h1>
    </div>
  );
}
