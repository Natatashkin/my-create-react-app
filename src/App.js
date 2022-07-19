import { useForm, Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import './App.css';

function App() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      firstName: '',
    },
  });
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="firstName"
        control={control}
        render={({ field }) => <TextField {...field} />}
      />

      <input type="submit" />
    </form>
  );
}

export default App;
