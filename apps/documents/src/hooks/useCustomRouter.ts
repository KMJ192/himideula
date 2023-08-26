import { useRouter, usePathname, useParams } from 'next/navigation';

function useCustomRouter() {
  const router = useRouter();
  const pathName = usePathname();
  const params = useParams();

  return {
    router,
    pathName,
    params,
    useRouter,
    usePathname,
    useParams,
  };
}

export default useCustomRouter;
