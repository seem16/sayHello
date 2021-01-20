import React from "react";

 const FormControl = ({ input, meta: { touched, error, warning }, ...props }) => {
   let hasError = touched && error;

   return <div className={`${ hasError && 'textarea-error'}`}>
     { props.children }
     {/*<textarea  { ...input } { ...props } />*/}
     <span>{ hasError && <span>{ error }</span> }</span>
   </div>
 }

export const TextArea = (props) => {
  const { input, meta: { touched, error, warning }, ...restProps } = props
  return <FormControl { ...props }><textarea { ...input } { ...restProps } /></FormControl>
}

export const Input = (props) => {
  const { input, meta: { touched, error, warning }, ...restProps } = props
  return <FormControl { ...props }><input { ...input } { ...restProps } /></FormControl>
}
