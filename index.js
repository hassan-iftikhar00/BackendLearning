require("dotenv").config();

const express = require("express");
const app = express();
const port = 9999;

const githubData = {
  login: "hassan-iftikhar00",
  id: 144235442,
  node_id: "U_kgDOCJjbsg",
  avatar_url: "https://avatars.githubusercontent.com/u/144235442?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/hassan-iftikhar00",
  html_url: "https://github.com/hassan-iftikhar00",
  followers_url: "https://api.github.com/users/hassan-iftikhar00/followers",
  following_url:
    "https://api.github.com/users/hassan-iftikhar00/following{/other_user}",
  gists_url: "https://api.github.com/users/hassan-iftikhar00/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/hassan-iftikhar00/starred{/owner}{/repo}",
  subscriptions_url:
    "https://api.github.com/users/hassan-iftikhar00/subscriptions",
  organizations_url: "https://api.github.com/users/hassan-iftikhar00/orgs",
  repos_url: "https://api.github.com/users/hassan-iftikhar00/repos",
  events_url: "https://api.github.com/users/hassan-iftikhar00/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/hassan-iftikhar00/received_events",
  type: "User",
  site_admin: false,
  name: "Hassan Iftikhar",
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: true,
  bio: "Web Developer | MEVN",
  twitter_username: null,
  public_repos: 10,
  public_gists: 0,
  followers: 0,
  following: 0,
  created_at: "2023-09-06T11:40:17Z",
  updated_at: "2024-07-07T13:33:07Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/github", (req, res) => {
  res.json(githubData);
});

app.listen(process.env.PORT, () => {
  console.log(`App Listening on port: ${port}`);
});
