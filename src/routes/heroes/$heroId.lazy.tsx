import {
  type FormEventHandler,
  Fragment,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { createLazyFileRoute } from "@tanstack/react-router";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { patchHeroState } from "../../api";
import { type HeroState } from "../../api/schema";
import { Counter, Button } from "../../components";
import { getPoints } from "../../utils";

export const Route = createLazyFileRoute("/heroes/$heroId")({
  component: HeroProfile,
  pendingComponent: () => <div>loading...</div>,
});

function HeroProfile() {
  const loaderData = Route.useLoaderData();
  const { name } = Route.useSearch();
  const { heroId } = Route.useParams();
  const maxP = useRef<number>(loaderData.data ? getPoints(loaderData.data) : 0);
  const [localStates, setLocalStates] = useState<HeroState | undefined>(
    () => loaderData.data ?? structuredClone(loaderData.data)
  );

  useEffect(() => {
    // revalidate data
    setLocalStates(structuredClone(loaderData.data));
    maxP.current = loaderData.data ? getPoints(loaderData.data) : 0;
  }, [loaderData.data]);

  const remainingP = useMemo(() => {
    return localStates ? maxP.current - getPoints(localStates) : maxP.current;
  }, [localStates]);

  // counter
  const onIncrease = useCallback(
    (key: keyof HeroState) => () => {
      setLocalStates((pre) => {
        if (!pre || remainingP == 0) return pre;
        return {
          ...pre,
          [key]: pre[key] + 1,
        } as HeroState;
      });
    },
    [remainingP]
  );
  const onDecrease = useCallback(
    (key: keyof HeroState) => () => {
      setLocalStates((pre) => {
        if (!pre || pre[key] == 0) return pre;
        return {
          ...pre,
          [key]: pre[key] - 1,
        } as HeroState;
      });
    },
    []
  );

  // patch action
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: patchHeroState,
    mutationKey: ["patchHeroState"],
    onSuccess: () => {
      // refetch after patch update success.
      queryClient.refetchQueries({ queryKey: ["heroState", heroId] });
    },
  });
  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const obj: HeroState = {
      str: 0,
      int: 0,
      agi: 0,
      luk: 0,
    };
    for (const [key, val] of formData.entries()) {
      obj[key as keyof HeroState] = Number(val);
    }
    mutate({
      id: heroId,
      data: obj,
    });
  };

  // animation
  const sectionRef = useRef<HTMLElement>(null);
  useGSAP(
    () => {
      gsap.from(sectionRef.current, {
        y: 150,
        scale: 0.7,
        duration: 0.3,
        ease: "back",
      });
    },
    {
      dependencies: [heroId],
    }
  );

  return (
    <section ref={sectionRef} className="w-full">
      {name && <h3 className="font-bold text-2xl mb-3">{name}</h3>}
      <form onSubmit={onSubmit}>
        <div className="grid grid-cols-[120px_1fr] gap-3">
          {localStates &&
            Object.keys(localStates).map((k) => {
              const val = localStates[k as keyof HeroState];
              return (
                <Fragment key={k}>
                  <label className="flex items-center uppercase">{k}</label>
                  <div className="flex items-center">
                    <Counter
                      value={val}
                      name={k}
                      onDecrease={onDecrease(k as keyof HeroState)}
                      onIncrease={onIncrease(k as keyof HeroState)}
                    />
                  </div>
                </Fragment>
              );
            })}
        </div>
        <div className="flex justify-between items-center mt-4">
          <p>{`Remaining States: ${remainingP}`}</p>
          <Button type="submit" variant="accent" disabled={remainingP > 0}>
            Save
          </Button>
        </div>
      </form>
    </section>
  );
}
