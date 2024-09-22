import { ComponentPropsWithoutRef, ReactNode } from "react";

interface buttonProps extends ComponentPropsWithoutRef<"button">{
  children:ReactNode
}

export default function Button({children, className, ...props}:buttonProps){
  return(
    <button className={"bg-white border-4 border-black py-5 px-13 "+className} {...props}>
      {children}
    </button>
  )
}