import { useCallback, useEffect, useState } from "react";
import * as api from "../api/taskApi";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "react-query";

export function useTodoList() {
  const client = useQueryClient();
  const { status, data, error } = useQuery('list', () => api.getTasks());

  const addTaskMutation = useMutation((newTask) => api.addTask(newTask), {
    onSuccess() {
      client.invalidateQueries('list');
    }
  });

  const updateTaskMutation = useMutation((task) => api.updateTask(task), {
    onSuccess() {
      client.invalidateQueries('list');
    }
  });

  return {
    list: data,
    isLoading: status === 'loading',
    addTask: (newTask) => addTaskMutation.mutate(newTask),
    updateTask: (task) => updateTaskMutation.mutate(task)
  };
}