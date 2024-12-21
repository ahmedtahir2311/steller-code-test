import React, { FC } from "react";
import classNames from "classnames";

import "./DetailsSection.css";

type DetailsSectionProps = Readonly<{
    children?: React.ReactNode;
    className?: string;
    name: string;
}>

const DetailsSection: FC<DetailsSectionProps> =
    ({ className, name }) => (
        <section className={classNames("DetailsSection", className)}>
            <div className="DetailsSection__name">
                {name}
            </div>
            <div className="DetailsSection__content"/>
        </section>
    );

export default DetailsSection;
