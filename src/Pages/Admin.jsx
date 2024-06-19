import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { getUsers, getPariwisata, getArticles } from '../Utils/Api'
import { User } from "./admin/User";
import Pariwisata from "./admin/Pariwisata";
import { Articles } from "./admin/Article";
import Sidebar from "./admin/Sidebar";

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [pariwisata, setPariwisata] = useState([]);
  const [articles, setArticles] = useState([]);
  const [selected, setSelected] = useState('users'); 

  const fetchData = async () => {
    try {
      const usersData = await getUsers();
      setUsers(usersData);
      const pariwisataData = await getPariwisata();
      setPariwisata(pariwisataData);
      const articlesData = await getArticles();
      setArticles(articlesData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderContent = () => {
    switch (selected) {
      case 'users':
        return <User users={users} fetchData={fetchData} />;
      case 'pariwisata':
        return <Pariwisata pariwisata={pariwisata} />;
      case 'articles':
        return <Articles articles={articles} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex pr-7">
        <Sidebar onSelect={setSelected} />
        <div className="flex-1 p-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4">Dashboard Overview</h1>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-blue-100 p-4 rounded shadow-md">
                <h2 className="text-xl font-bold">Users</h2>
                <p className="text-3xl">{users.length}</p>
              </div>
              <div className="bg-green-100 p-4 rounded shadow-md">
                <h2 className="text-xl font-bold">Pariwisata</h2>
                <p className="text-3xl">{pariwisata.length}</p>
              </div>
              <div className="bg-yellow-100 p-4 rounded shadow-md">
                <h2 className="text-xl font-bold">Articles</h2>
                <p className="text-3xl">{articles.length}</p>
              </div>
            </div>
          </div>
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Admin;
