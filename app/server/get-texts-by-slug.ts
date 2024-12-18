import "server-only";

export const socialMedias = [
  "instagram",
  "linkedin",
  "x",
  "facebook",
  "youtube",
];

export async function getTextBySlug(slug: string) {
  for (const socialMedia of socialMedias) {
    const mediaSlug = `link-na-bio-para-${socialMedia}`;
    if (slug === mediaSlug) {
      const capitalizeSocialMedia =
        socialMedia.charAt(0).toUpperCase() + socialMedia.slice(1);
      return {
        title: `Link na bio para ${capitalizeSocialMedia}`,
        description: `Compartilhe todos os seus links no perfil do seu ${capitalizeSocialMedia}`,
      };
    }
  }

  return undefined;
}
