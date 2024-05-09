import { FormProvider as RHFormProvider } from "react-hook-form";

function FormProvider({ children, onSubmit, methods, style }) {
  return (
    <RHFormProvider {...methods}>
      <form onSubmit={onSubmit} style={style}>
        {children}
      </form>
    </RHFormProvider>
  );
}

export default FormProvider;
