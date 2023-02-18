import { useEffect } from "react";
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
const host = "backend.anwesha.live";


function Leaderboard() {
  const [searchInput, setSearchInput] = useState("");
  const [data, setData ] = useState([]);
  useEffect(() => {
    const response = fetch(`https://${host}/campasambassador/leaderboarddata`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
  }).then(response => response.json()).then(data => {setData(data.leaderBoardData)});
  }, [])


  return (
    <div className={styles.anwesha_bg_img}>
      <div className="container">
        <h2 className={styles.heading} style={{ textAlign: "center" }}>
          LEADERBOARD
        </h2>
        <div className="container">
          <Head>
            <title>Leaderboard - Anwesha 2023</title>
            <meta name="description" content="Anwesha 2023" />
                <link rel="icon" href="./AnwehsaIcon.png" />
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

          <Table striped responsive>
            <thead>
              <tr className={styles.heading_color}>
                <th>Position</th>
                <th>Name</th>
                <th>Email</th>
                <th>Points</th>
              </tr>
            </thead>

            <tbody>
              {data.filter((post) => {
                if (searchInput === "") {
                  return post;
                } else if (
                  post.full_name.toLowerCase().includes(searchInput.toLowerCase()) ||
                  post.email_id.toLowerCase().includes(searchInput.toLowerCase())
                ) {
                  return post;
                }
              }).map((post, pos) => (
                <LeaderboardItem
                  key={pos + 1}
                  position={pos + 1}
                  name={post.full_name}
                  college={post.email_id}
                  points={post.score}
                />
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;
