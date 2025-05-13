const FormField = ({
  id,
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  as = "input",
  options = [],
}: FormFieldProps) => {
    const InputToRender = ({type}: {type: string}) => {
        if(type === 'textarea') {
            return <textarea />
        } else if(type === 'select'){
            return <select />
        } else {
            return <input />
        }
    }
  return <div className="form-filed">
    <label htmlFor={id}>{label}</label>
    <InputToRender type={as} />
  </div>;
};
export default FormField;
