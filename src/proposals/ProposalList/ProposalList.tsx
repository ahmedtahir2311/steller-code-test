import React, { FC } from "react";
import { Link } from "react-router-dom";

import { ConferenceTalkProposal } from "../../api";

import ProposalRow from "../ProposalRow";

import "./ProposalList.css";

type ProposalListProps = Readonly<{
    proposals: ConferenceTalkProposal[];
    onProposalStatusUpdate: () => void;
}>

const ProposalList: FC<ProposalListProps> =
    () => (
        <ul data-testid="proposal-list" className="ProposalList">
            {[].map((proposal: ConferenceTalkProposal) => (
                <li
                    key={proposal.id}
                    className="ProposalList__item"
                >
                    <Link
                        key={proposal.id}
                        className="ProposalList__item__link"
                        to={`/proposals`}
                    >
                        <ProposalRow
                            proposal={proposal}
                            onStatusUpdate={() => {}}
                        />
                    </Link>
                </li>
            ))}
        </ul>
    );

export default ProposalList;
