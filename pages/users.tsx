import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Users() {
  const { data, error } = useSWR("/api/hello", fetcher);
  if (error) return "Page Error";
  if (!data) return "Loading";

  console.log(data);

  return (
    <ul>
      {data.map((value) => {
        return (
          <li>
            {value.firstname} {value.lastname}
          </li>
        );
      })}
    </ul>
  );
}
