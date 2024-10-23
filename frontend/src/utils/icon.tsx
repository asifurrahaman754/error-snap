import IconWrapper, { IconWrapperProps } from "components/IconWrapper";

export const createIcon = (icon: React.ElementType | string) => {
  return (props: Omit<IconWrapperProps, "icon">) => (
    <IconWrapper {...props} icon={icon} />
  );
};
