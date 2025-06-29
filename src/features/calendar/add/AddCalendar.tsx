'use client';

import { useState } from 'react';
import TextArea from '@/components/atoms/textArea/TextArea';
import TextInput from '@/components/atoms/textInput/TextInput';
import { Button } from '@/components/atoms/button';
import { ManagerSelect } from '@/components/molecules/managerSelect';
import { FoldableSelector } from '@/components/molecules/foldableSelector';
import { TopBar } from '@/components/molecules/topBar';
import { TaskCategory } from '@/constants/task/task.enum';

interface CalendarForm {
  dueDate: string | null;
  category: string | null;
  title: string;
  manager: string;
  description: string;
}

export const AddCalendar = () => {
  const [form, setForm] = useState<CalendarForm>({
    dueDate: null,
    category: null,
    title: '',
    manager: '',
    description: '',
  });

  const [isValid, setIsValid] = useState<boolean>(false);

  const handleFormChange = (key: keyof CalendarForm, value: string | null) => {
    const newForm = { ...form, [key]: value };
    setForm(newForm);

    const isFormValid = Boolean(
      newForm.dueDate &&
        newForm.category &&
        newForm.title &&
        newForm.manager &&
        newForm.description,
    );
    setIsValid(isFormValid);
  };

  const handleSubmit = () => {
    if (!isValid) return;
    console.log('Form submitted:', form);
  };

  return (
    <div className='flex h-full w-full flex-col items-center bg-gray-50'>
      <TopBar title='리스트 추가' className='w-full' />

      <section className='relative mt-4 flex h-full w-full flex-col items-center gap-5 overflow-y-scroll px-5 scrollbar-hide'>
        <FoldableSelector
          selectedValue={form.dueDate}
          setSelectedValue={(value) => handleFormChange('dueDate', value)}
        />

        <FoldableSelector
          categoryArray={Object.values(TaskCategory)}
          selectedValue={form.category}
          setSelectedValue={(value) => handleFormChange('category', value)}
        />

        <TextInput
          value={form.title}
          onChange={(value) => handleFormChange('title', value)}
          placeholder='어떤 할 일인가요?'
          maxLength={18}
        />

        <ManagerSelect
          selectedValue={form.manager}
          setSelectedValue={(value) => handleFormChange('manager', value)}
        />

        <div className='my-2 w-full border-b bg-gray-200' />

        <TextArea
          value={form.description}
          onChange={(value) => handleFormChange('description', value)}
          placeholder='상세 설명'
          maxLength={50}
        />

        <Button
          onClick={handleSubmit}
          size='lg'
          variant={isValid ? 'primary_fill' : 'gray_fill'}
          width='register'
          className={`${!isValid && 'pointer-events-none'} mb-[34px] mt-auto`}
        >
          완료
        </Button>
      </section>
    </div>
  );
};
