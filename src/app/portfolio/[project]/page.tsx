import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import ReportReader from "./ReportReader";

export function generateStaticParams() { return projects.map(project => ({ project: project.id })); }
export default async function ProjectReportPage({ params }: { params: Promise<{ project: string }> }) {
  const { project } = await params;
  const item = projects.find(item => item.id === project);
  if (!item) notFound();
  return <ReportReader projectId={item.id} />;
}
