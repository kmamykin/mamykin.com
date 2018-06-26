import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import GithubRepoCard from "./GithubRepoCard";
import fetch from "isomorphic-unfetch";

export async function fetchGithubRepos(reposShorthand) {
  const repoBody = url => fetch(url).then(res => res.json());
  const repoUrls = reposShorthand.map(
    ur => `https://api.github.com/repos/${ur}`
  );
  return await Promise.all(repoUrls.map(repoBody));
}

export default class extends React.Component {
  render() {
    const { repos } = this.props;

    return (
      <div>
        <Typography variant="display1" gutterBottom>
          Github
        </Typography>

        <Grid container spacing={16}>
          {repos.map(repo => (
            <Grid key={repo.id} item xs={12}>
              <GithubRepoCard repo={repo} />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}
