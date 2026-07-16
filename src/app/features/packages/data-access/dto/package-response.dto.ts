import { z } from 'zod';

export const PackageResponseSchema = z.object({
  id: z.string(),
  weeklyDownloads: z.number().int(),
  dependencyCount: z.number().int(),
});

export type PackageResponse = z.infer<typeof PackageResponseSchema>;

export const PackageListResponseSchema = z.array(PackageResponseSchema);
export type PackageListResponse = z.infer<typeof PackageListResponseSchema>;

export const PackageDependenciesResponseSchema = z.array(z.string());
export type PackageDependenciesResponse = z.infer<
  typeof PackageDependenciesResponseSchema
>;
