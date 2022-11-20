import styles from "../../styles/Nextjs.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: {
      users: data,
    },
  };
};

const Next = ({ users }) => {
  return (
    <div>
      <h1>All Next</h1>
      {users.map((user) => (
        <div key={user.id}>
          <Link className={styles.single} href={"/nextjs/" + user.id}>
            <h3>{user.name}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Next;
