import Head from "next/head";
import Link from "next/link";
import styles from "../styles/leaderboard.module.css";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import LeaderboardItem from "../components/Leaderboard/LeaderboardItem";
import Items from "../components/Leaderboard/Items";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Leaderboard() {
  const [searchInput, setSearchInput] = useState("");
  return (
    <div className="container">
      <h2 className="my-5" style={{ textAlign: "center" }}>
        LEADERBOARD
      </h2>
      <div className="container">
        <Head>
          <title>Leaderboard - Anwesha 2023</title>
          <meta name="description" content="Anwesha 2023" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>
      <div className="container">
        <div>
          <InputGroup className="my-3">
            <Form.Control
              type="search"
              onChange={(event) => setSearchInput(event.target.value)}
              value={searchInput}
              placeholder="Search for Participants"
            />
          </InputGroup>
        </div>

        <Table hover responsive>
          <thead>
            <tr>
              <th>Position</th>
              <th>Name</th>
              <th>College</th>
              <th>Points</th>
            </tr>
          </thead>

          <tbody>
            {Items.filter((post) => {
              if (searchInput === "") {
                return post;
              } else if (
                post.name.toLowerCase().includes(searchInput.toLowerCase()) ||
                post.college.toLowerCase().includes(searchInput.toLowerCase())
              ) {
                return post;
              }
            }).map((post) => (
              <LeaderboardItem
                key={post.position}
                position={post.position}
                name={post.name}
                college={post.college}
                points={post.points}
              />
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Leaderboard;
