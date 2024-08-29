"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";

const MapFilter = ({items, handleChange}) => {
    const searchParams = useSearchParams();
    const search = searchParams.get("filter");
    const pathName = usePathname();

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString());

            params.set(name, value);

            return params.toString();
        },
        [searchParams]
    )

    // const changeType = (type: any) => {
    //     setType(type);
    // }
    return (
        <div className="flex gap-x-10 mt-5 w-full overflow-x-scroll no-scrollbar">
            {
                items.map((item: any) => (
                    <Link
                        key={item.value}
                        href={pathName + "?" + createQueryString("filter", item.name)}
                        className={
                            search === item.name? "border-b-2 border-black pb-2 flex-shrink-0" : "opacity-70 flex-shrink-0"
                        }  
                        // onClick={() => handleChange(item.name)}
                        onMouseOver={() => handleChange(item.name)}
                    >
                        <div className="relative w-6 h-6">
                            <Image
                                src={item.imageUrl}
                                alt="item.name"
                                className="w-6 h-6"
                                width= {24}
                                height={24}
                            >

                            </Image>

                        </div>
                        <p className="text-xs font-medium">{item.name}</p>
                    </Link>
                ))
            }
        </div>
    )
}

export default MapFilter;