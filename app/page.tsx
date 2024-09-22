import NewTodoForm from "@/components/NewTodoForm";

const getData = async () => {
  await new Promise((res) => setTimeout(() => res, 2000));
  return { data: [1, 2, 3] }
}

export default function Home() {
  const data = getData();
  console.log('data', data);
  return (
    <NewTodoForm />
  );
}
