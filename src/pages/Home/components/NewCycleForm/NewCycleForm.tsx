import { useContext } from "react";
import {
  FormContainer,
  MinutesAmountInput,
  TaskInput,
} from "./NewCycleForm.style";
import { CyclesContext } from "../../../../contexts/CycleContext";
import { useFormContext } from "react-hook-form";

export function NewCycleForm() {
  const { cycles } = useContext(CyclesContext);
  const { activeCycle } = useContext(CyclesContext);
  const { register } = useFormContext();

  function showOption(position: number) {
    let taskSugestion = "";
    cycles[position]
      ? (taskSugestion = cycles[position].task)
      : (taskSugestion = `Projeto ${position + 1}`);
    return taskSugestion;
  }

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        id="task"
        list="task-sugestions"
        placeholder="Dê um nome para seu projeto"
        disabled={!!activeCycle}
        {...register("task")}
      />

      <datalist id="task-sugestions">
        <option value={showOption(0)} />
        <option value={showOption(1)} />
        <option value={showOption(2)} />
        <option value={showOption(3)} />
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <MinutesAmountInput
        type="number"
        id="minutesAmount"
        disabled={!!activeCycle}
        step={1}
        min={1}
        max={60}
        {...register("minutesAmount", { valueAsNumber: true })}
      />
      <span>minutos.</span>
    </FormContainer>
  );
}
