import { motion } from "framer-motion";

function UserCard({ user }) {
  return (
    <motion.div
      className="card"
      whileHover={{
        scale: 1.05,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2>{user.name}</h2>
      <p>📧 {user.email}</p>
      <p>📱 {user.phone}</p>
      <p>🏢 {user.company.name}</p>
    </motion.div>
  );
}

export default UserCard;