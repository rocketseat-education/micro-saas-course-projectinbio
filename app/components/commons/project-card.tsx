"use client";

import { increaseProjectVisits } from "@/app/actions/increase-project-visits";
import { formatUrl } from "@/app/lib/utils";
import { ProjectData } from "@/app/server/get-profile-data";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function ProjectCard({
  project,
  isOwner,
  img,
  name,
  description,
}: {
  project?: ProjectData;
  isOwner?: boolean;
  img: string;
  name?: string;
  description?: string;
}) {
  const { profileId } = useParams();
  const formattedUrl = formatUrl(project?.projectUrl || "");

  async function handleClick() {
    if (!profileId || !project?.id || isOwner) return;

    await increaseProjectVisits(profileId as string, project?.id);
  }

  return (
    <Link href={formattedUrl} target="_blank" onClick={handleClick}>
      <div className="w-[340px] h-[132px] flex gap-5 bg-background-secondary p-3 rounded-[20px] border border-transparent hover:border-border-secondary">
        <div className="size-24 rounded-md overflow-hidden flex-shrink-0">
          <img src={img} alt="Projeto" className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col gap-2">
          {isOwner && (
            <span className="uppercase text-xs font-bold text-accent-green">
              {project?.totalVisits || 0} cliques
            </span>
          )}

          <div className="flex flex-col">
            <span className="text-white font-bold">
              {name || project?.projectName}
            </span>
            <span className="text-content-body text-sm">
              {description || project?.projectDescription}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
