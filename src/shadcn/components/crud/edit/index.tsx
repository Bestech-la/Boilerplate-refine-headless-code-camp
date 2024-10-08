import {
    useRefineContext,
    useResource,
    useTranslate,
    useUserFriendlyName,
} from "@refinedev/core";
import React, { ReactNode } from "react";
import { ListProps } from "../types";
import { DeleteProvider } from "@/shadcn/providers";
import { PageHeader } from "../../pageHeader";
import { Breadcrumb } from "../../breadcrumb";
import { DeleteButton, ShowButton } from "../../buttons";

export const Edit: React.FC<ListProps & { showButtonShow?: boolean}> = ({
    title,
    resource,
    breadcrumb: breadcrumbFromProps,
    children,
    showButtonShow = true
}) => {
    const translate = useTranslate();
    const { options: { breadcrumb: globalBreadcrumb } = {} } =
        useRefineContext();

    const getUserFriendlyName = useUserFriendlyName();

    const { resource: _resource, action, identifier } = useResource(resource);

    const breadcrumb =
        typeof breadcrumbFromProps === "undefined"
            ? globalBreadcrumb
            : breadcrumbFromProps;

    return (
        <DeleteProvider>
            <PageHeader
                title={
                    title ??
                    translate(
                        `${identifier}.titles.List`,
                        `Edit ${getUserFriendlyName(
                            _resource?.meta?.label ??
                                _resource?.options?.label ??
                                _resource?.label ??
                                identifier,
                            "plural",
                        )}`,
                    )
                }
                isBack
                breadcrumb={
                    typeof breadcrumb !== "undefined" ? (
                        <>{breadcrumb}</> ?? undefined
                    ) : (
                        <Breadcrumb />
                    )
                }
                extra={
                    <div className="inline-flex flex-row items-center gap-x-2">
                        {showButtonShow && <ShowButton />}
                        <DeleteButton />
                    </div>
                }
            />
            <div className="relative pt-4">{children as ReactNode}</div>
        </DeleteProvider>
    );
};
