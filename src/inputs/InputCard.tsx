import React from 'react'

export interface InputCardProps {
  title: string
  required: boolean
  hasValue: boolean
}

export default function InputCard(
  props: React.PropsWithChildren<InputCardProps>
) {
  return (
    <>
    <div class="form-control w-full max-w-xs">
      <span className={"label " + (!props.required && "self-center")}>
        <span className="label-text">{props.title}</span>
        {props.required && (
        <span className={"label-text-alt -mb-1 transition " + (!props.hasValue?"text-error font-bold ":"") }><i>Required</i></span>
        )}
      </span>
      {props.children}
    </div>
    {/* <div className="mx-1 rounded bg-white leading-tight shadow-sm dark:bg-gray-500">
      <div className="flex flex-row justify-between rounded-t bg-gray-300">
        <p className="pl-2 text-left text-xs font-bold uppercase dark:text-black">
          {props.title}
        </p>
        {props.required && !props.hasValue && (
          <p className="mr-1 h-4 w-4 font-rhr text-red-rhr">!!</p>
        )}
      </div>
      <div>{props.children}</div>
    </div> */}
    </>
  )
}
