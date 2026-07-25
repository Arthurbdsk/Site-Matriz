import { useParams } from "wouter";
import ConditionPage from "@/components/ConditionPage";
import NotFound from "@/pages/NotFound";
import { getConditionBySlug } from "@/data/conditions";

export default function Condicao() {
  const { slug } = useParams<{ slug: string }>();
  const data = slug ? getConditionBySlug(slug) : undefined;

  if (!data) return <NotFound />;

  return <ConditionPage {...data} />;
}
