import { type ComponentPropsWithoutRef } from "react";
import type IUserTasks from "../Interfaces/userTasks.type";

export default interface ITaskCardContentProps extends ComponentPropsWithoutRef<'div'> {
    task: IUserTasks;
}