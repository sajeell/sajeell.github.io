import React from "react";

interface ConditionalWrapperProps {
	condition: Boolean;
	wrapper: (c: React.ReactNode) => any;
}

export const ConditionalWrapper: React.FC<ConditionalWrapperProps> = ({
	condition,
	wrapper,
	children,
}) => {
	return condition ? wrapper(children) : children;
};
